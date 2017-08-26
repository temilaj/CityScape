import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService } from "../../providers/firebase.service";
import { PlacesPage } from "../places/places";
/**
 * Generated class for the CitiesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cities',
  templateUrl: 'cities.html',
  providers: [FirebaseService]
})
export class CitiesPage {
  country: any;
  cities: FirebaseListObservable<any[]>;
  // selectedCity;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private firebaseService:FirebaseService, public platform: Platform,
    public actionSheetCtrl: ActionSheetController) {
    this.country = this.navParams.get('country');
  }

  ionViewDidLoad() {
    this.cities = this.firebaseService.getCities(this.country.name);
  }

  citySelected(city) {
    this.navCtrl.push(PlacesPage,{
      city
    })
  }

  // openMenu(city) {
  //   this.selectedCity = city;
  //   let actionSheet = this.actionSheetCtrl.create({
  //     title: city.name,
  //     cssClass: 'action-sheets-basic-page',
  //     buttons: [
  //       {
  //         text: 'Delete',
  //         role: 'destructive',
  //         icon: !this.platform.is('ios') ? 'trash' : null,
  //         handler: () => {
  //           console.log('Delete clicked');
  //         }
  //       },
  //       {
  //         text: 'Edit',
  //         icon: !this.platform.is('ios') ? 'create' : null,
  //         handler: () => {
  //           console.log('Play clicked');
  //         }
  //       },
  //       {
  //         text: 'Share',
  //         icon: !this.platform.is('ios') ? 'share' : null,
  //         handler: () => {
  //           console.log('Share clicked');
  //         }
  //       },
  //       {
  //         text: 'Favorite',
  //         icon: !this.platform.is('ios') ? 'heart-outline' : null,
  //         handler: () => {
  //           console.log('Favorite clicked');
  //         }
  //       },
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         icon: !this.platform.is('ios') ? 'close' : null,
  //         // handler: () => {
  //         //   console.log('Cancel clicked');
  //         // }
  //       }
  //     ]
  //   });
  //   actionSheet.present();
  // }

}
