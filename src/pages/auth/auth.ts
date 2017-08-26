import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { HomePage } from "../home/home";

import { Platform, IonicPage } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

/**
 * Generated class for the AuthPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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
      this.navCtrl.push(HomePage);
      this.displayName = user.displayName;      
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
          console.log(res);
          this.showToast();
          this.navCtrl.push(HomePage);
        }).catch(err => {
          this.error =err;
        });
    }

  }

  signOut() {
    this.afAuth.auth.signOut();
  }


}
