import logging
import math
import os

from pathlib import Path

from flask import Flask
from flask import send_file

from utils import *
from config import *

lines = open('files/app.ee735a2e.js', encoding='utf-8')

app = Flask(__name__)

@app.after_request
def after_request(response):
    logger.info('>>> {} {}: {}'.format(request.method,
                                       request.full_path,
                                       request.data[0:100]))
    try:
        logger.info('<<< {}: {}'.format(response.status, response.data[0:100]))
    except:
        logger.info('<<< {}: data'.format(response.status))
    return response


@app.errorhandler(404)
def page_not_found(e):
    if 'app.ee735a2e.js' in request.path:
        path = os.getcwd() + '/files/app.ee735a2e.js'
        with open(path, "r") as f:
            return f.read()
    logging.info("Not found route: {}".format(request.path))
    return e


@app.route('/auth/login', methods=['POST'])
def auth():
    resp = send_request(
        method='POST',
        url=REMOTE_API_BASE_URL + request.full_path,
        headers=request.headers,
        payload=request.json
    )
    return resp.text

@app.route('/get_auth_token')
def get_token():
    return config.token
    
@app.route('/frontend/index.html', methods=['GET'])
def get_index():
    path = os.path.join(os.getcwd(), 'files', 'app.ee735a2e.js')

    index = open('files/index.html', encoding='utf-8').read()
    index = index.replace('ENTER_SCRIPT_PATH', path)

    return index


@app.route('/frontend/<folder>/<file>', methods=['GET'])
def get_front(folder, file):
    url = 'http://anty-frontend.dolphin.ru.com/'
    resp = send_request(
        method='GET',
        url=url + request.full_path,
        headers=request.headers
    )

    print(file)

    local_files = os.listdir('files')
    if file == 'app.ee735a2e.js':
        return lines

    return resp.text


@app.route('/7d11bbb4production/<folder>/<file>', methods=['GET'])
def get_other(folder, file):
    url = 'http://anty-frontend.dolphin.ru.com/'
    resp = send_request(
        method='GET',
        url=url + request.full_path,
        headers=request.headers
    )
    print(file)

    return resp.text


@app.route('/browser_profiles/<int:browser_profile_id>', methods=['GET', 'PATCH'])
def get_profile(browser_profile_id):
    if request.method == 'GET':
        if not os.path.exists(os.path.join(os.getcwd(), 'browsers', str(browser_profile_id), 'info.json')):
            resp = send_request(
                method='GET',
                url=REMOTE_API_BASE_URL + request.full_path,
                headers=request.headers
            )
            Files.save_to_file(f'browsers/{browser_profile_id}/info.json', resp.json())

        browser_profile_info = Files.read_from_file(f'browsers/{browser_profile_id}/info.json')

        return browser_profile_info
    else:
        browser_profile_info = change_browser_config(request.json, browser_profile_id, request)

        return browser_profile_info


@app.route('/browser_profiles/<method>')
def browser_profiles_additional_methods(method):
    if method == 'available':
        profiles = get_path_files(os.path.join(os.getcwd(), 'browsers'))
        available = Files.read_from_file('jsons/available.json')
        available['data']['ids'] = [int(i) for i in profiles]

        return available
    elif method == 'statuses':
        profile_statuses = Files.read_from_file('jsons/profile_statuses.json')

        return profile_statuses
    elif method == 'tags':
        profile_tags = Files.read_from_file('jsons/profile_tags.json')

        return profile_tags


@app.route('/')
def sync_methods():
    action = request.args.get('actionType')

    if action == 'getDatadirHash':
        dirhash = Files.read_from_file('jsons/dirhash.json')

        return dirhash
    elif action == 'getDatadir':
        browser_profile_id = request.args.get('browserProfileId')
        if (os.path.exists(os.path.join(os.getcwd(), 'browsers', str(browser_profile_id),
                                        f'{browser_profile_id}.datadir.zip')) == False):
            browser_profile_not_found = Files.read_from_file('jsons/browser_profile_not_found.json')

            return browser_profile_not_found

        download = Files.read_from_file('jsons/download_link.json')
        download['data']['link'] = f'{LOCAL_API_BASE_URL}/download_datadir/{browser_profile_id}'
        download['data']['links']['aws'] = f'{LOCAL_API_BASE_URL}/download_datadir/{browser_profile_id}'
        download['browserProfileId'] = browser_profile_id

        return download


@app.route('/download_datadir/<browser_profile_id>')
def upload_archive(browser_profile_id):
    try:
        file_path = f'browsers/{browser_profile_id}/{browser_profile_id}.datadir.zip'
    except Exception as ex:
        logger.error(f'Профиль {browser_profile_id} Сломан')
        return send_file('jsons/browser_profile_not_found.json', as_attachment=True)
    return send_file(file_path, as_attachment=True)


@app.route('/browser_profiles/<browser_profile_id>/<method>', methods=['GET', 'POST'])
def browser_profile_launch_methods(browser_profile_id, method):
    if method == 'canUpdate':
        result = Files.read_from_file('jsons/result.json')

        return result
    elif method == 'events':
        if request.json['type'] == 'stop':
            do_backup(browser_profile_id)
            result = Files.read_from_file('jsons/event_stop.json')
        else:
            result = Files.read_from_file('jsons/event_start.json')
        result['data']['browserProfileId'] = int(browser_profile_id)

        return result


@app.route('/index.php', methods=['POST'])
def download_archive():
    action = request.args.get('actionType')

    if (action == 'importDatadir'):
        browser_profile_id = request.args.get('browserProfileId')
        run_id = request.args.get('runId')
        archive = request.files['file']
        archive.save(f'browsers/{browser_profile_id}/{browser_profile_id}.datadir.zip')

        successfull_upload = Files.read_from_file('jsons/successfull_upload.json')
        successfull_upload['browserProfileId'] = browser_profile_id


        return successfull_upload


@app.route('/browser_profiles', methods=['GET', 'POST', 'DELETE'])
@check_token_expire
def browser_profiles():
    if request.method == 'GET':
        settings = {
            'page': 1,
            'limit': 50,
        }

        settings.update(dict(request.args))
        settings['page'] = int(settings['page'])
        settings['limit'] = int(settings['limit'])

        profiles = get_path_files(os.path.join(os.getcwd(), 'browsers'))

        all_profiles = Files.read_from_file('jsons/all_profiles.json')

        first_profile = (settings['page'] - 1) * settings['limit']
        last_profile = len(profiles) if (settings['page'] * settings['limit'] > len(profiles)) else settings['page'] * \
                                                                                                    settings['limit']

        for i in profiles[first_profile:last_profile]:
            try:
                profile_info = Files.read_from_file(f'browsers/{i}/info_for_start.json')
                all_profiles['data'].append(profile_info)
            except Exception as ex:
                logger.error(f'Профиль ID {i} сломан')

        if ('sortBy' in settings):
            sort_profiles(settings, all_profiles)
        if ('query' in settings):
            search_profiles(settings, all_profiles)

        all_profiles['current_page'] = settings['page']
        all_profiles['per_page'] = settings['limit']
        all_profiles['from'] = first_profile + 1

        if (settings['page'] * settings['limit'] > len(profiles)):
            all_profiles['next_page_url'] = None
        else:
            all_profiles['next_page_url'] = f'http://127.0.0.1:5000/browser_profiles?page={settings["page"] + 1}'
        if (settings['page'] == 1):
            all_profiles['prev_page_url'] = None
        else:
            all_profiles['prev_page_url'] = f'http://127.0.0.1:5000/browser_profiles?page={settings["page"] - 1}'

        all_profiles['to'] = last_profile
        all_profiles['last_page'] = math.ceil(len(profiles) / settings['limit'])
        all_profiles['total'] = len(profiles)

        return all_profiles
    elif request.method == 'POST':
        resp = send_request(
            method='POST',
            url=REMOTE_API_BASE_URL + request.full_path,
            headers=request.headers,
            payload=request.json,
        )
        return_value = resp.text
        browser_profile_id = resp.json()['browserProfileId']
        Path(os.path.join(os.getcwd(), 'browsers', str(browser_profile_id))).mkdir(parents=True, exist_ok=True)

        resp = send_request(
            method='GET',
            url=REMOTE_API_BASE_URL + '/browser_profiles',
            headers={'Authorization': request.headers['Authorization']},
        )

        for i in resp.json()['data']:
            if i['id'] == browser_profile_id:
                Files.save_to_file(f'browsers/{browser_profile_id}/info_for_start.json', i)
                break

        resp = send_request(
            method='GET',
            url=f'http://localhost:3001/v1.0/browser_profiles/{browser_profile_id}/start',
        )

        logger.success(f'Успешно создался профиль #{browser_profile_id} | Запускаю!')

        return return_value
    elif request.method == 'DELETE':
        for i in request.json['ids']:
            shutil.rmtree(os.path.join(os.getcwd(), 'browsers', str(i)))
            try:
                shutil.move(os.path.join(os.getcwd(), 'browsers_backup', str(i)),
                            os.path.join(os.getcwd(), 'browsers_backup', str(i) + ' (deleted)'))
            except:
                pass
        return {}


@app.route('/profile')
@check_token_expire
def profile():
    profile_info = Files.read_from_file('jsons/profile.json')

    profiles = get_path_files(os.path.join(os.getcwd(), 'browsers'))
    profile_info['data']['subscription']['browserProfiles']['count'] = len(profiles)

    return profile_info


@app.route('/subscription')
@check_token_expire
def subscription():
    subscription_info = Files.read_from_file('jsons/subscription.json')

    profiles = get_path_files(os.path.join(os.getcwd(), 'browsers'))
    subscription_info['data']['browserProfiles']['count'] = len(profiles)

    return subscription_info


@app.route('/team/users')
@check_token_expire
def team():
    team = Files.read_from_file('jsons/team.json')

    return team


@app.route('/settings', methods=['GET', 'POST', 'DELETE', 'PATCH'])
@check_token_expire
def settings():
    settings = Files.read_from_file('jsons/settings.json')

    return settings


@app.route('/onbr')
@check_token_expire
def onbr():
    onbr = Files.read_from_file('jsons/onbr.json')

    return onbr


@app.route('/restriction')
@check_token_expire
def restriction():
    restriction = Files.read_from_file('jsons/restriction.json')

    return restriction


@app.route('/dolphin-anty/anty-connect/releases/download/<local_api_id>/<file>', methods=['GET', 'POST', 'HEAD'])
def download_local_api(local_api_id, file):
    file_path = f'files/{file}'

    return send_file(file_path, as_attachment=True)


@app.route('/auth/refreshToken', methods=['GET', 'POST', 'DELETE', 'PATCH'])
def refresh_token(info=None):
    resp = send_request(
        method=request.method,
        url=REMOTE_API_BASE_URL + request.full_path,
        headers=request.headers,
        payload={} if request.method == 'GET' else request.json,
    )

    return resp.text


@app.route('/force_delete/<p_id>', methods=['DELETE'])
def force_delete(p_id):
    r = send_request(
        method='DELETE',
        url=REMOTE_API_BASE_URL + '/browser_profiles?forceDelete=1',
        headers=request.headers,
        payload={"ids": [p_id]},
    )
    return r.text

@app.route('/branches')
def check_local_api():
    local_api_info = Files.read_from_file('jsons/local_api_info.json')
    return local_api_info

@app.route('/fingerprints/<info>', methods=['GET', 'POST', 'DELETE', 'PATCH'])
def fingerprint(info=None):
    resp = send_request(
        method='GET',
        url=REMOTE_API_BASE_URL + '/browser_profiles?page=1&limit=100',
        headers=request.headers
    )

    profiles_original = resp.json()['data']

    resp = send_request(
        method='GET',
        url='http://127.0.0.1:5000/browser_profiles?page=1&limit=100',
        headers=request.headers
    )
    profiles_script = resp.json()['data']
    for i in range(1, (resp.json()['total']+100)//100):
        resp = send_request(
            method='GET',
            url=f'http://127.0.0.1:5000/browser_profiles?page={i+1}&limit=100',
            headers=request.headers
        )
        for profile in resp.json()['data']:
            profiles_script.append(profile)

    for profile_original in profiles_original:
        for profile_script in profiles_script:
            if profile_original['id'] == profile_script['id']:
                r = send_request(
                    method='DELETE',
                    url=REMOTE_API_BASE_URL + '/browser_profiles?forceDelete=1',
                    headers=request.headers,
                    payload={"ids": [profile_original['id']]},
                )
    resp = send_request(
        method=request.method,
        url=REMOTE_API_BASE_URL + request.full_path,
        headers=request.headers,
        payload={} if request.method == 'GET' else request.json,
    )

    return resp.text
@app.route('/proxy', methods=['GET', 'POST', 'DELETE', 'PATCH'])
@app.route('/proxy/<info>/last_check', methods=['GET', 'POST', 'DELETE', 'PATCH'])
@app.route('/extensions', methods=['GET', 'POST', 'DELETE', 'PATCH'])
@app.route('/bookmarks', methods=['GET', 'POST', 'DELETE', 'PATCH'])
@app.route('/bookmarks/<info>', methods=['GET', 'POST', 'DELETE', 'PATCH'])
@app.route('/browser_profiles/check-old-useragents', methods=['GET', 'POST', 'DELETE', 'PATCH'])
@app.route('/browser_profiles/upgrade-old-useragents', methods=['GET', 'POST', 'DELETE', 'PATCH'])
@check_token_expire
def scripts(info=None):
    resp = send_request(
        method=request.method,
        url=REMOTE_API_BASE_URL + request.full_path,
        headers=request.headers,
        payload={} if request.method == 'GET' else request.json,
    )

    return resp.text


if __name__ == '__main__':
    path = os.path
    app.run()
