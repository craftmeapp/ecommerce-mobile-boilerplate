/* @flow */

import { create as createAPI } from 'apisauce';
import { escapeChar } from '../Utilities/misc';


export default class ServerAPI {
  constructor(projectID) {
    this._api = createAPI({
      baseURL: 'http://menu.quicktouch.ru/android/',
      timeout: 10000,
    });

    this._api.addRequestTransform(request => {
      request.params.login = projectID;
    });

    this._api.addResponseTransform(responce => {
      responce.data = JSON.parse(escapeChar(responce.data));
    });
  }

  getAppSettings() {
    return this._api.get('get_settings.php')
    .then(res => {
      const data = res.data[0];

      return {
        version: data.version,
        updatedAt: data.last_sign_in_at,
        smartAssistantEnabled: data.smart_assistant,
      };
    });
  }

  static create(projectID) {
    return new ServerAPI(projectID);
  }
}
