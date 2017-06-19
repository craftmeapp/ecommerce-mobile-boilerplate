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

  const getSettings = () => api.get('get_settings.php')

  return {
    getSettings,
  }
}
