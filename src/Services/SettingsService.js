/* @flow */

export default (serverAPI) => {
  const checkForUpdate = async () => {
    return await serverAPI.getSettings()
  }

  return {
    checkForUpdate,
  }
}