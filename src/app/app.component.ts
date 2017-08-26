import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { TabsPage } from '../pages/tabs/tabs';
import { AuthPage } from "../pages/auth/auth";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = TabsPage;
  // rootPage:any;
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private auth: AngularFireAuth) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          this.rootPage = AuthPage;
          unsubscribe();
        } else { 
          this.rootPage = TabsPage;
          unsubscribe();
        }
        // this.rootPage = TabsPage;
        
      });
      // this.rootPage = AuthPage;
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
