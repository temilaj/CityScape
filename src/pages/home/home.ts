import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService } from "../../providers/firebase.service";
import { CitiesPage } from "../cities/cities";
import { AngularFireAuth } from "angularfire2/auth";
import { AuthPage } from "../auth/auth";
import { CountryInfoPage } from "../modals/country-info";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [FirebaseService]
})
export class HomePage {

  countries: FirebaseListObservable<any[]>;
  user;  
  displayName;  

  constructor(public navCtrl: NavController, private firebaseService:FirebaseService, 
    private afAuth: AngularFireAuth, public loadingCtrl: LoadingController,
    public modalCtrl: ModalController ) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;
        this.navCtrl.push(AuthPage);
      }
      this.displayName = user.displayName;
      this.user = user;
    });
  }

  ionViewDidLoad() {
    const loader = this.loadingCtrl.create({
      content: "loading countires",
    });
    
    loader.present().then(() => {
      this.countries = this.firebaseService.getCountries();
      loader.dismiss();
    });
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

  viewCities(country) {
    this.navCtrl.push(CitiesPage,{
      country
    })
  }

  popupCountryInfo(country) {
    let modal = this.modalCtrl.create
    (CountryInfoPage, {
      country
    });
    modal.present();
  }
}
