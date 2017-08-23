import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService } from "../../providers/firebase.service";
import { CitiesPage } from "../cities/cities";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [FirebaseService]
})
export class HomePage {

  countries: FirebaseListObservable<any[]>;
  user;  
  displayName;  

  constructor(public navCtrl: NavController, private firebaseService:FirebaseService, private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;        
        return;
      }
      this.displayName = user.displayName;
      this.user = user;
      console.log(user);

    });
  }

  signOut() {
    this.afAuth.auth.signOut();
  }
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
