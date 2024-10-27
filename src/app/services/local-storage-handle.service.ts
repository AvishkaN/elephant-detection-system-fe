import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageHandleService {
  constructor() {}

  /**
   * get any item from local storage using property name
   * @param name : String
   */
  getItem(name: string) {
    return window.localStorage[name];
  }

  /**
   * save any item in local storage
   * @param item : Object (name,value)
   */
  saveItem(item: any) {
    window.localStorage[item.name] = item.value;
  }

  /**
   * save array of items in local storage
   * @param items : Array <Object(name,value)>
   */
  saveMultipleItems(items: Array<any>) {
    for (const item of items) {
      window.localStorage[item.name] = item.value;
    }
  }

  /**
   * remove item from local storage by parsing the property name
   * @param name : String
   */
  destroyItem(name: string) {
    window.localStorage.removeItem(name);
  }

  /**
   * remove all data from loacal storage
   */
  destroyAll() {
    window.localStorage.clear();
  }
}
