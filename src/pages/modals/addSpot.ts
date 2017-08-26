import { Component } from '@angular/core';

import { ViewController, NavController, NavParams, ToastController } from 'ionic-angular';
import { FirebaseService } from "../../providers/firebase.service";
import { Spot } from "../models/Spot";


@Component({
  templateUrl: 'addspot.html',
  providers: [FirebaseService]
})
export class AddSpotPage {
  city;
  model = new Spot('', '', '');

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, 
    private firebaseService:FirebaseService, public navParams: NavParams,
    public toastCtrl: ToastController) {
      this.city = this.navParams.get('city');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  addHotspot() {
    this.model.city = this.city.name;
    this.firebaseService.addSpot(this.model);
    this.model = new Spot('', '', this.city.name);
    this.dismiss();
    this.showToast();
  }

  showToast() {
    let toast = this.toastCtrl.create({
      message: 'Spot added successfully',
      duration: 2000,
      position: 'top',
    });

    toast.present(toast);
  }
}