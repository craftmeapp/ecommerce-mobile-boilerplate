/* @flow */

export default ({storage, serverAPI}) => {
  const infoStorage = storage.substorage('Info')

  const update = async () => {
    const info = await serverAPI.getSettingsInfo()
    await infoStorage.setFromObject(info)
  }

  const getUpdatedAt = async () => {
    return await infoStorage.get('updatedAt')
  }

  return {
    update,
    
    getUpdatedAt,
  }
}