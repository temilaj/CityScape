import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';

import { Platform, IonicPage } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { TabsPage } from "../tabs/tabs";

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {
  error: Error;
  displayName;  
  
  constructor(public navCtrl: NavController,
    private afAuth: AngularFireAuth, public toastCtrl: ToastController,
    private fb: Facebook, private platform: Platform) { 
  }

  showToast() {
    let toast = this.toastCtrl.create({
      message: 'Successfully logged in',
      duration: 2000,
      position: 'top',
    });

    toast.present(toast);
  }


  ionViewCanEnter() {
    this.afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;        
        return;
      }
      this.displayName = user.displayName;      
      this.navCtrl.push(TabsPage);
    });
  }

  signInWithFacebook() {
    if (this.platform.is('cordova')) {
      return this.fb.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential);
      })
    }
    else {
      this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => {
          this.showToast();
        }).catch(err => {
          this.error = err;
        });
    }

  }

  signOut() {
    this.afAuth.auth.signOut();
  }


}
