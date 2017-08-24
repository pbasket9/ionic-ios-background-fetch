import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { BackgroundFetchService } from '../../services/background-fetch.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  data = [];

  constructor(public platform: Platform, public navCtrl: NavController, private backgroundFetchService: BackgroundFetchService, private localStorageService: LocalStorageService) {
    this.platform.ready().then(() => {
      this.updateUI();
      this.backgroundFetchService.configure();
    });

    this.platform.resume.subscribe(() => this.updateUI());
  }

  updateUI() {
    this.data = this.localStorageService.data;
  }

  clearLocalStorage() {
    this.localStorageService.clear();
    this.updateUI();
  }
}
