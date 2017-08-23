import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService } from "../../providers/firebase.service";
import { CitiesPage } from "../cities/cities";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [FirebaseService]
})
export class HomePage {

  countries: FirebaseListObservable<any[]>;
  
  constructor(public navCtrl: NavController, private firebaseService:FirebaseService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CitiesPage');
    this.countries = this.firebaseService.getCountries();
  }
  countrySelected(country) {
    console.log(country);
    this.navCtrl.push(CitiesPage,{
      country
    })
  }
}
