/* @flow */

const UPDATED_AT_KEY = 'updatedAt'


export default class CatalogService {
  constructor(storage, serverAPI, settingsService) {
    // console.error(1, storage)
    this._storage = storage
    // console.error(1, this._storage)
    this._serverAPI = serverAPI
    this._settingsService = settingsService
  }

  async update() {
    console.error(2, this._storage)
    const catalogUpdatedAt = await this._storage.get(UPDATED_AT_KEY)
    const settignsUpdatedAt = await this._settingsService.getUpdatedAt()

    if (catalogUpdatedAt !== settignsUpdatedAt) {
      console.log('Update catalog!!')

      await this._storage.set(UPDATED_AT_KEY, settignsUpdatedAt)
    }
  }
}