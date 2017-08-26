import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService } from "../../providers/firebase.service";
import { CitiesPage } from "../cities/cities";
import { AngularFireAuth } from "angularfire2/auth";
import { AuthPage } from "../auth/auth";

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
    private afAuth: AngularFireAuth, public loadingCtrl: LoadingController) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;
        this.navCtrl.push(AuthPage);
      }
      this.displayName = user.displayName;
      this.user = user;
      console.log(user);

    });
  }

  // ionViewCanEnter() {
  //   this.afAuth.authState.subscribe(user => {
  //     if (!user) {
  //       this.displayName = null;        
  //     }
  //     this.user = user;
  //     this.displayName = user.displayName;      
  //   });
  // }

  ionViewDidLoad() {
    this.countries = this.firebaseService.getCountries();
    let loader = this.loadingCtrl.create({
      content: "loading countires",
    });
    
    loader.present().then(() => {
      this.countries = this.firebaseService.getCountries();
      loader.dismiss();
    });
  }
  
  stopLoading() {
    let loader = this.loadingCtrl.create({
      content: "loading countires",
    });
    loader.dismiss();
  }

  signOut() {
    this.afAuth.auth.signOut();
  }
  countrySelected(country) {
    this.navCtrl.push(CitiesPage,{
      country
    })
  }
}
