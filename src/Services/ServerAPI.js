/* @flow */

import { create as createAPI } from 'apisauce'


export default class ServerAPI {
  constructor(projectID) {
    this._api = createAPI({
      baseURL: 'http://menu.quicktouch.ru/android/',
      timeout: 10000,
    })
    this._api.addRequestTransform(request => {
      request.params['login'] = projectID
    })
  }

  getSettingsInfo() {
    return this._api.get('get_settings.php')
    .then(res => {
      const data = res.data[0]
      return {
        version: data['version'],
        updatedAt: data['last_sign_in_at'],
        smartAssistantEnabled: data['smart_assistant']
      }
    })
  }

  static create(projectID) {
    return new ServerAPI(projectID)
  }
}
