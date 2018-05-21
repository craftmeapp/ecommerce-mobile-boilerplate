/* @flow */

import {AsyncStorage} from 'react-native';


export default class Storage {
  constructor(prefix = null) {
    this._prefix = prefix;
  }

  _key(key) {
    return `${this._prefix}${key}`;
  }

  async get(key) {
    try {
      return await AsyncStorage.getItem(this._key(key));
    }
    catch (err) {
      return null;
    }
  }

  async set(key, value) {
    return AsyncStorage.setItem(this._key(key), value.toString());
  }

  async setFromObject(obj) {
    return Promise.all(Object.entries(obj).map(([key, value]) => this.set(key, value)));
  }

  substorage(prefix) {
    return new Storage(this._prefix ? `${this._prefix}${prefix}` : prefix);
  }

  static create() {
    return new Storage();
  }
}
