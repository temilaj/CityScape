import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService } from "../../providers/firebase.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [FirebaseService]
})
export class HomePage {

  countries: FirebaseListObservable<any[]>;
  
  constructor(public navCtrl: NavController, private _firebaseService:FirebaseService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CitiesPage');
    this.countries = this._firebaseService.getCountries();
  }
  countrySelected(country) {
    console.log(country);
  }
}
