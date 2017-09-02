import { Component } from '@angular/core';

import { ViewController, NavController, NavParams, ToastController } from 'ionic-angular';


@Component({
  templateUrl: 'country-info.html',
})
export class CountryInfoPage {
  country;

  constructor(public viewCtrl: ViewController, 
    public navCtrl: NavController,  public navParams: NavParams) {
      this.country = this.navParams.get('country');
      console.log(this.country);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}