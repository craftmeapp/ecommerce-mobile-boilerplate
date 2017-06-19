/* @flow */

import { create as createAPI } from 'apisauce'


export default (projectID) => {
  const api = createAPI({
    baseURL: 'http://menu.quicktouch.ru/android/',
    timeout: 10000,
  })
  api.addRequestTransform(request => {
    request.params['login'] = projectID
  })

  const getSettingsInfo = () => api.get('get_settings.php')
  .then(res => {
    const data = res.data[0]
    return {
      version: data['version'],
      updatedAt: data['last_sign_in_at'],
      smartAssistantEnabled: data['smart_assistant']
    }
  })

  return {
    getSettingsInfo,
  }
}
