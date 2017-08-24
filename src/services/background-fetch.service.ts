import { Injectable } from '@angular/core';
import { BackgroundFetch, BackgroundFetchConfig } from '@ionic-native/background-fetch';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class BackgroundFetchService {

  constructor(private backgroundFetch: BackgroundFetch, private localStorageService: LocalStorageService) {}

  configure() {
    const config: BackgroundFetchConfig = {
      stopOnTerminate: false
    };

    this.backgroundFetch.configure(config)
      .then(() => {
        this.fetch();
        this.backgroundFetch.finish();
      })
      .catch(e => console.log('Error configuring background fetch', e));
  }

  private fetch() {
    let date = new Date();
    let dateString = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear() + ' - ' +
                     date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    this.localStorageService.addItem(dateString);
  }
}
