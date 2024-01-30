import time

import requests

t = "<>"

r = {'name': '123456', 'tags': [], 'platform': 'windows', 'browserType': 'anty', 'mainWebsite': '',
     'useragent': {'mode': 'manual',
                   'value': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'},
     'deviceName': {'mode': 'off', 'value': None}, 'macAddress': {'mode': 'off', 'value': None},
     'webrtc': {'mode': 'altered', 'ipAddress': None}, 'canvas': {'mode': 'real'}, 'webgl': {'mode': 'real'},
     'webglInfo': {'mode': 'manual', 'vendor': 'Google Inc. (NVIDIA)',
                   'renderer': 'ANGLE (NVIDIA, NVIDIA GeForce GTX 1650 Direct3D11 vs_5_0 ps_5_0, D3D11)',
                   'webgl2Maximum': '{"UNIFORM_BUFFER_OFFSET_ALIGNMENT":256,"MAX_TEXTURE_SIZE":16384,"MAX_VIEWPORT_DIMS":[32767,32767],"MAX_VERTEX_ATTRIBS":16,"MAX_VERTEX_UNIFORM_VECTORS":4095,"MAX_VARYING_VECTORS":30,"MAX_COMBINED_TEXTURE_IMAGE_UNITS":32,"MAX_VERTEX_TEXTURE_IMAGE_UNITS":16,"MAX_TEXTURE_IMAGE_UNITS":16,"MAX_FRAGMENT_UNIFORM_VECTORS":1024,"MAX_CUBE_MAP_TEXTURE_SIZE":16384,"MAX_RENDERBUFFER_SIZE":16384,"MAX_3D_TEXTURE_SIZE":2048,"MAX_ELEMENTS_VERTICES":2147483647,"MAX_ELEMENTS_INDICES":2147483647,"MAX_TEXTURE_LOD_BIAS":2,"MAX_DRAW_BUFFERS":8,"MAX_FRAGMENT_UNIFORM_COMPONENTS":4096,"MAX_VERTEX_UNIFORM_COMPONENTS":16380,"MAX_ARRAY_TEXTURE_LAYERS":2048,"MIN_PROGRAM_TEXEL_OFFSET":-8,"MAX_PROGRAM_TEXEL_OFFSET":7,"MAX_VARYING_COMPONENTS":120,"MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS":4,"MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS":120,"MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS":4,"MAX_COLOR_ATTACHMENTS":8,"MAX_SAMPLES":8,"MAX_VERTEX_UNIFORM_BLOCKS":12,"MAX_FRAGMENT_UNIFORM_BLOCKS":12,"MAX_COMBINED_UNIFORM_BLOCKS":24,"MAX_UNIFORM_BUFFER_BINDINGS":24,"MAX_UNIFORM_BLOCK_SIZE":65536,"MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS":212988,"MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS":200704,"MAX_VERTEX_OUTPUT_COMPONENTS":120,"MAX_FRAGMENT_INPUT_COMPONENTS":120,"MAX_ELEMENT_INDEX":4294967294}'},
     'webgpu': {'mode': 'manual'}, 'clientRect': {'mode': 'real'},
     'notes': {'content': None, 'color': 'blue', 'style': 'text', 'icon': 'info'},
     'timezone': {'mode': 'auto', 'value': None}, 'locale': {'mode': 'auto', 'value': None}, 'proxy': None,
     'statusId': 0, 'geolocation': {'mode': 'auto', 'latitude': None, 'longitude': None, 'accuracy': None},
     'cpu': {'mode': 'manual', 'value': 4}, 'memory': {'mode': 'manual', 'value': 8},
     'screen': {'mode': 'real', 'resolution': None}, 'audio': {'mode': 'real'},
     'mediaDevices': {'mode': 'real', 'audioInputs': None, 'videoInputs': None, 'audioOutputs': None},
     'ports': {'mode': 'protect', 'blacklist': '3389,5900,5800,7070,6568,5938'}, 'doNotTrack': False, 'args': [],
     'platformVersion': '10.0.0', 'uaFullVersion': '120.0.6099.60', 'login': '', 'password': '',
     'appCodeName': 'Mozilla', 'platformName': 'Win32', 'connectionDownlink': 7.2, 'connectionEffectiveType': '4g',
     'connectionRtt': 50, 'connectionSaveData': 0, 'cpuArchitecture': 'amd64', 'osVersion': '10', 'vendorSub': '',
     'productSub': '20030107', 'vendor': 'Google Inc.', 'product': 'Gecko'}


def create_profile():
    print("create")
    profile = requests.post(
        "http://localhost:5000/browser_profiles", json=r, headers={'Authorization': 'Bearer ' + t})
    print(profile)
    print(profile.text)
    return profile.json()


def start_profile(p_id):
    print("start")
    profile = requests.get(
        "http://localhost:3001/v1.0/browser_profiles/{}/start?automation=1".format(p_id),
        headers={'Authorization': 'Bearer ' + t}
    )
    print(profile)
    print(profile.text)


def stop_profile(p_id):
    print("stop")
    profile = requests.get(
        "http://localhost:3001/v1.0/browser_profiles/{}/stop?automation=1".format(p_id),
        headers={'Authorization': 'Bearer ' + t}
    )
    print(profile)
    print(profile.text)


def delete_profile(p_id):
    print("delete")
    profile = requests.delete(
        "http://localhost:5000/force_delete/" + str(p_id),
        headers={'Authorization': 'Bearer ' + t}
    )
    print(profile)
    print(profile.text)


if __name__ == "__main__":
    data = create_profile()

    time.sleep(5)
    start_profile(data['data']['id'])
    time.sleep(5)
    stop_profile(data['data']['id'])
    time.sleep(5)
    delete_profile(data['data']['id'])

    time.sleep(5)
    start_profile(data['data']['id'])
    time.sleep(5)
    stop_profile(data['data']['id'])
