import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  user;  

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        return;
      }
      this.user = user;
    });
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

}
