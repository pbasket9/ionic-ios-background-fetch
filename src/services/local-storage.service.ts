import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';

const dataId = 'stored_data';

export enum NativeStorageError {
  NATIVE_WRITE_FAILED = 1,
  ITEM_NOT_FOUND = 2,
  NULL_REFERENCE = 3,
  UNDEFINED_TYPE = 4,
  JSON_ERROR = 5,
  WRONG_PARAMETER = 6
}

@Injectable()
export class LocalStorageService {

  private _data = [];

  constructor(private nativeStorage: NativeStorage) {}

  init() {
    this.nativeStorage.getItem(dataId)
      .then(data => {
        this._data = data;
      },
            error => {
              if (error.code == NativeStorageError.ITEM_NOT_FOUND) {
                this._data = [];
              }
            }
      );
  }

  addItem(item: string) {
    this.nativeStorage.getItem(dataId)
      .then(data => {
              data.push(item);
              this.saveData(data);
            },
            error => {
              if (error.code == NativeStorageError.ITEM_NOT_FOUND) {
                let data = [item];
                this.saveData(data);
              }
            }
      );
  }

  private saveData(data) {
    this.nativeStorage.setItem(dataId, data)
      .then(() => {
              this._data = data;
              console.log("Item successfully added")
      },
            error => console.log("Error while adding item")
      );
  }

  get data() {
    return this._data;
  }

  clear() {
    this.nativeStorage.clear();
    this._data = [];
  }
}
