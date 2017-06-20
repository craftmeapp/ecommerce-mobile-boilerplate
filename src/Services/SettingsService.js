/* @flow */

export default class SettingsService {
  constructor({storage, serverAPI}) {
    this._storage = storage
    this._infoStorage = this._storage.substorage('Info')

    this._serverAPI = serverAPI
  }

  async update() {
    const info = await this._serverAPI.getSettingsInfo()
    await this._infoStorage.setFromObject(info)
  }

  async getUpdatedAt() {
    return await this._infoStorage.get('updatedAt')
  }

  static create({storage, serverAPI}) {
    return new SettingsService({storage, serverAPI})
  }
}
