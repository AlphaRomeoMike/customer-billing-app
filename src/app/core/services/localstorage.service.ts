import { Injectable } from '@angular/core';
import { IUser } from '../iuser';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  /**
   * ---
   * GET Data
   * ---
   * @param key
   * @returns {any}
   * @description This method is used to get data from localStorage.
   */
  get(key: string) {
    return localStorage.getItem(key);
  }

  /**
   * ---
   * SET Data
   * ---
   * @param key
   * @param value
   * @description This method is used to set data to localStorage.
   * @returns {boolean}
   */
  set(key: string, value: any) {

    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }

    localStorage.setItem(key, value);
    return true;
  }

  /**
   * ---
   * REMOVE Data
   * ---
   * @param key
   * @description This method is used to remove data from localStorage.
   * @returns {boolean}
   */
  remove(key: string) {
    localStorage.removeItem(key);
    return true;
  }

  /**
   * ---
   * CLEAR ALL Data
   * ---
   * @description This method is used to clear all data from localStorage.
   * @returns {boolean}
   */
  clear() {
    localStorage.clear();
    return true;
  }

  /**
   * ---
   * SET Many Data
   * ---
   * @param data
   * @description This method is used to set many data to localStorage.
   * @returns {boolean}
   */
  setMany(data: any) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        this.set(key, data[key]);
      }
    }
    return true;
  }

  /**
   * ---
   * CHECK Data
   * ---
   * @param key
   * @description This method is used to check data from localStorage.
   * @returns {boolean}
   */
  check(key: string) {
    if (this.get(key)) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * # Parse JSON data
   * 
   * @param {string} key
   * @returns {IUser} - Parsed JSON data
   */
  parseUser(key: any) {
    let data = this?.get(key);

    if (data) {
      data = JSON.parse(JSON.stringify(data));
      console.log(data);
      
      return data;
    }
    return {};
  }
}
