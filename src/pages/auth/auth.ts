import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { HomePage } from "../home/home";
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
  displayName;  
  
  constructor(public navCtrl: NavController,
    private afAuth: AngularFireAuth) { 
      afAuth.authState.subscribe(user => {
        if (!user) {
          this.displayName = null;        
          return;
        }
        this.displayName = user.displayName;      
      });
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthPage');
  }

  signInWithFacebook() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        console.log(res);
        this.navCtrl.push(HomePage);
      });

  }

  signOut() {
    this.afAuth.auth.signOut();
  }


}
