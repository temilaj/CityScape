import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from "../pages/profile/profile";
import { TabsPage } from '../pages/tabs/tabs';
import { CitiesPage } from "../pages/cities/cities";
import { AuthPage } from "../pages/auth/auth";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from "../environments/environment";
import { FirebaseService } from "../providers/firebase.service";
import { Facebook } from '@ionic-native/facebook';
import { PlacesPage } from "../pages/places/places";
import { AddSpotPage } from "../pages/modals/addSpot";
import { CountryInfoPage } from "../pages/modals/country-info";

const { apiKey, authDomain, databaseURL, storageBucket, messagingSenderId } = environment;

export const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  storageBucket,
  messagingSenderId,
  Facebook
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ProfilePage,
    HomePage,
    TabsPage,
    CitiesPage,
    AuthPage,
    PlacesPage,
    AddSpotPage,
    CountryInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ProfilePage,
    HomePage,
    TabsPage,
    CitiesPage,
    AuthPage,
    PlacesPage,
    AddSpotPage,
    CountryInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseService,
    Facebook
  ]
})
export class AppModule {}
