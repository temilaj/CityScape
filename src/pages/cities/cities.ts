import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService } from "../../providers/firebase.service";
/**
 * Generated class for the CitiesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cities',
  templateUrl: 'cities.html',
  providers: [FirebaseService]
})
export class CitiesPage {
  country: any;
  cities: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseService:FirebaseService) {
    this.country = this.navParams.get('country');
  }

  ionViewDidLoad() {
    this.cities = this.firebaseService.getCities(this.country.name);
    // this.cities.map
    console.log(this.cities);
  }

}
