import { Component } from '@angular/core';

import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
  templateUrl: 'addspot.html'
})
export class AddSpotPage {
  constructor(public viewCtrl: ViewController) {
   }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}