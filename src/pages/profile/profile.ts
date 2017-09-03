import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { AuthPage } from "../auth/auth";

@Component({////////////////////////
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  user;  

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.navCtrl.push(AuthPage)
      }
      this.user = user;
    });
  }

  signOut() {
    this.afAuth.auth.signOut();
    this.navCtrl.push(AuthPage)
  }

}
