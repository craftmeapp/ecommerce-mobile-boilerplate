/* @flow */

export default ({serverAPI, settingsStorage}) => {
  const infoStorage = settingsStorage.substorage('Info')

  const refresh = async () => {
    const info = await serverAPI.getSettingsInfo()

    const currentDate = info.updatedAt
    const storedDate = await infoStorage.get('updatedAt')
    const isUpdated = currentDate === storedDate

    await settingsStorage.set('isUpdated', isUpdated)
    await infoStorage.setFromObject(info)
  }

  const needsToBeUpdated = async () => 'true' !== await settingsStorage.get('isUpdated')
  const markAsUpdated = () => settingsStorage.set('isUpdated', true)

  return {
    refresh,
    
    needsToBeUpdated,
    markAsUpdated,
  }
}
