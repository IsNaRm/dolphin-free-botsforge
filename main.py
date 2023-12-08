import os
import shutil
import math
import io

from pathlib import Path

from flask import Flask
from flask import request
from flask import send_file

from modules.files import Files
from utils import *
from config import *

lines = open('files/app.ee735a2e.js', encoding='utf-8')

FIRST_TIME_RUNNING = False

app = Flask(__name__)

@app.route('/frontend/index.html', methods=['GET'])
def get_index():
    path = os.getcwd() + '\\files\\app.ee735a2e.js'

    index = open('files/index.html', encoding='utf-8').read()
    index = index.replace('ENTER_SCRIPT_PATH', path)
           
    return index

@app.route('/frontend/<folder>/<file>', methods=['GET'])
def get_front(folder,file):
    url='http://anty-frontend.dolphin.ru.com/'
    resp = send_request(
        method='GET',
        url=url + request.full_path,
        headers=request.headers
    )
           
    print(file)

    if (file == 'app.ee735a2e.js'):
        return lines

    return resp.text

@app.route('/7d11bbb4production/<folder>/<file>', methods=['GET'])
def get_other(folder,file):

    frontendUrl = 'http://anty-frontend.dolphin.ru.com/7d11bbb4production/index.html?localApiPort=3001&branchName=master&branchHash=574b8984944c193dbf7305d5c7a90f49&baseUrl=http://127.0.0.1:5000&syncBaseUrl=http://127.0.0.1:5000&machineId=eyJtYWNoaW5lSWQiOiJmZWI5OGJkN2YzYjc5ZWY1ZTg5NTA3NTM2MGZlMTdjYTk1OThhODExNjRmNDM4YmIzOTc5ZjBjMDQ3YWVmN2ZjIiwibWFjaGluZU5hbWUiOiJIT01FLUNPTVBVVEVSIiwicGxhdGZvcm0iOiJ3aW4zMiJ9&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiZjhmNTJmZjIwMDhmODRmNDc1OGVmODFhOWMyNmUwZDM2YzI1MmQwMjRlYzQ2ODFmNTI5NDEyMDM4ODdhMzlkMTc3OWU1MGRmOTk2ZDg1N2MiLCJpYXQiOjE3MDE5Njc0NjQuNzc4MDgsIm5iZiI6MTcwMTk2NzQ2NC43NzgwODMsImV4cCI6MTcwMTk3MTA2NC43NTcyMTgsInN1YiI6IjI2NzcwMDkiLCJzY29wZXMiOltdfQ.NITGKxDAvDf2YZkA6uG2JHJcu5UuEU3tH9mfbd-tqBE9c_MM5dh4JToymiFo12_X8G9VzDNeWxFUh9z3zOTiTz_jiN97sVV4f07nWvRp7Jppz93Qq9YBGbmQWtYDZFfexn1A8jsuX9WPSVfyuOmtvJ3o6NjwCdPzUaJ0EwJHksaSZJHUZWFJeXXZJjiMZ4vKJXxfXn1uRdOVXY674tixPX3o9MZAW0UffraZewmNnbJPpss9KIKGCqVtVaiyBEessgwprmgcf3LW50ZcM3Z9f7XS6I25FxYpPSoriQAMLt0UzvTCWNm7IqkhdMAgrIg0_blzpvZ0iRucxd9PEVfSHmyxS6fWo0G-xUdw7cAGX0rfaU3OLQbe5WbfPMpX3qXxfA4xA25Pbvd_FXRMbV5tNveS223qFHmvVIoiEcRFLa7Ydlsi59zWdyasF4mWYfAGb_8fILFIMgFEZpvsobzGMNjbQeHc-uoi71AKkmoNxnV750EnnywXbAb-Bq4xjUlSTrZX3Dix8JbCBqcs5B1481h2qFGiT0qgRrd-0H3yyacDHDY5MVD7gWEUIrU2IMYuFYh_35qDaiSw8z8kpRU3VUtbqwk3lVsOINcZtaO3P5cqkhZ4k_WymL8p0eRK14D_6OYoJKG8_CWIjmzv5bOLsx-XX1LJ99AY999prZ9I8fI-----def502007e91416a6c596908a89ed2a149fd89cad6976d4ac4a055144335ed2af7df2be249ef9f8765e36b590f064088d979747ffea6b4fb82b4d672d120c7f1cbdad66111e432b884835db6b7c4f3fb156afdabbf1263066716be90bdef7fe8925bcd64576e9a44efb6663d57569ae88e9d709d7a02025821dce3d76bc8b469cb8ca0cf6187d4f08fd86799453df902065af318dfa6e839a2ea8a994aeedcfb96d0d0d7242cd584273c36de6a693260835389102017e85a6c1cd09e16a9fa9640d6580305091e89adc0be9ccfeda866b38f5dd477d828b0657aeba619b06e975d38d6ed8495afc32285163b0585c166ba51a674f832d00d6df1fd1a9f293a9f9f8811cf939e292e7b6db4b17eb6f532a724cc6e36fbea0ec24236060fa428ceae2bf1227b7a2d495275c9e79f0ee63e97442aa51d1cfc160305849bf6341a5b9a38812b780d2e99e33c5b550335cb507a1bac9f93148b2e9dcc7ec80eb887104daa9a5a62dcc3'
    
    url='http://anty-frontend.dolphin.ru.com/'
    resp = send_request(
        method='GET',
        url=url + request.full_path,
        headers=request.headers
    )
           
    print(file)

    return resp.text
   


@app.route('/browser_profiles/<int:browser_profile_id>', methods=['GET', 'PATCH'])
def get_profile(browser_profile_id):
    if (request.method == 'GET'):
        if (os.path.exists(os.path.join(os.getcwd(), 'browsers', str(browser_profile_id), 'info.json')) == False):
            resp = send_request(
                method='GET',
                url=REMOTE_API_BASE_URL + request.full_path,
                headers=request.headers,
            )

            Files.save_to_file(f'browsers/{browser_profile_id}/info.json', resp.json())

        browser_profile_info = Files.read_from_file(f'browsers/{browser_profile_id}/info.json')

        return browser_profile_info
    else:
        browser_profile_info = change_browser_config(request.json, browser_profile_id, request)

        return browser_profile_info


@app.route('/browser_profiles/<method>')
def browser_profiles_additional_methods(method):
    if (method == 'available'):
        profiles = get_path_files(os.path.join(os.getcwd(), 'browsers'))
        available = Files.read_from_file('jsons/available.json')
        available['data']['ids'] = [int(i) for i in profiles]

        return available
    elif (method == 'statuses'):
        profile_statuses = Files.read_from_file('jsons/profile_statuses.json')

        return profile_statuses
    elif (method == 'tags'):
        profile_tags = Files.read_from_file('jsons/profile_tags.json')

        return profile_tags


@app.route('/')
def sync_methods():
    action = request.args.get('actionType')

    if (action == 'getDatadirHash'):
        dirhash = Files.read_from_file('jsons/dirhash.json')

        return dirhash
    elif (action == 'getDatadir'):
        browser_profile_id = request.args.get('browserProfileId')
        if (os.path.exists(os.path.join(os.getcwd(), 'browsers', str(browser_profile_id), f'{browser_profile_id}.datadir.zip')) == False):
            browser_profile_not_found = Files.read_from_file('jsons/browser_profile_not_found.json')

            return browser_profile_not_found

        download = Files.read_from_file('jsons/download_link.json')
        download['data']['link'] = f'{LOCAL_API_BASE_URL}/download_datadir/{browser_profile_id}'
        download['data']['links']['aws'] = f'{LOCAL_API_BASE_URL}/download_datadir/{browser_profile_id}'
        download['browserProfileId'] = browser_profile_id

        return download
    

@app.route('/download_datadir/<browser_profile_id>')
def upload_archive(browser_profile_id):
    file_path = f'browsers/{browser_profile_id}/{browser_profile_id}.datadir.zip'

    return send_file(file_path, as_attachment=True)


@app.route('/browser_profiles/<browser_profile_id>/<method>', methods=['GET', 'POST'])
def browser_profile_launch_methods(browser_profile_id, method):
    global FIRST_TIME_RUNNING

    if (method == 'canUpdate'):
        result = Files.read_from_file('jsons/result.json')

        return result
    elif (method == 'events'):
        if (request.json['type'] == 'stop'):
            if (FIRST_TIME_RUNNING == True):
                resp = send_request(
                    method='DELETE',
                    url=REMOTE_API_BASE_URL + '/browser_profiles?forceDelete=1',
                    headers=request.headers,
                    payload={"ids": [browser_profile_id]},
                )

                logger.success(f'Успешно удалил профиль #{browser_profile_id} с серверов')
                FIRST_TIME_RUNNING = False

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
    global FIRST_TIME_RUNNING

    if (request.method == 'GET'):
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
        last_profile = len(profiles) if (settings['page'] * settings['limit'] > len(profiles)) else settings['page'] * settings['limit']

        for i in profiles[first_profile:last_profile]:
            profile_info = Files.read_from_file(f'browsers/{i}/info_for_start.json')
            all_profiles['data'].append(profile_info)

        if ('sortBy' in settings):
            sort_profiles(settings, all_profiles)
        if ('query' in settings):
            search_profiles(settings, all_profiles)

        all_profiles['current_page'] = settings['page']
        all_profiles['per_page'] = settings['limit']
        all_profiles['from'] = first_profile + 1

        if (settings['page'] * settings['limit'] > len(profiles)):
            all_profiles['next_page_url'] =  None
        else:
            all_profiles['next_page_url'] = f'http:\/\/127.0.0.1:5000\/browser_profiles?page={settings["page"] + 1}'
        if (settings['page'] == 1):
            all_profiles['prev_page_url'] =  None
        else:
            all_profiles['prev_page_url'] = f'http:\/\/127.0.0.1:5000\/browser_profiles?page={settings["page"] - 1}'

        all_profiles['to'] = last_profile
        all_profiles['last_page'] = math.ceil(len(profiles) / settings['limit'])
        all_profiles['total'] = len(profiles)

        return all_profiles
    elif (request.method == 'POST'):
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
            if (i['id'] == browser_profile_id):
                Files.save_to_file(f'browsers/{browser_profile_id}/info_for_start.json', i)
                break

        resp = send_request(
            method='GET',
            url=f'http://localhost:3001/v1.0/browser_profiles/{browser_profile_id}/start',
        )
        
        logger.success(f'Успешно создался профиль #{browser_profile_id} | Запускаю!')

        FIRST_TIME_RUNNING = True

        return return_value
    elif (request.method == 'DELETE'):
        for i in request.json['ids']:
            shutil.rmtree(os.path.join(os.getcwd(), 'browsers', str(i)))
            try:
                shutil.move(os.path.join(os.getcwd(), 'browsers_backup', str(i)), os.path.join(os.getcwd(), 'browsers_backup', str(i) + ' (deleted)'))
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


@app.route('/branches')
def check_local_api():
    local_api_info = Files.read_from_file('jsons/local_api_info.json')

    return local_api_info


@app.route('/proxy', methods=['GET', 'POST', 'DELETE', 'PATCH'])
@app.route('/proxy/<info>/last_check', methods=['GET', 'POST', 'DELETE', 'PATCH'])
@app.route('/extensions', methods=['GET', 'POST', 'DELETE', 'PATCH'])
@app.route('/fingerprints/<info>', methods=['GET', 'POST', 'DELETE', 'PATCH'])
@app.route('/bookmarks', methods=['GET', 'POST', 'DELETE', 'PATCH'])
@app.route('/bookmarks/<info>', methods=['GET', 'POST', 'DELETE', 'PATCH'])
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
