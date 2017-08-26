import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform, ModalController } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService } from "../../providers/firebase.service";
import { AddSpotPage } from "../modals/addSpot";

@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
  providers: [FirebaseService]
})
export class PlacesPage {
  city: any;
  places: FirebaseListObservable<any[]>;
  selectedPlace;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private firebaseService:FirebaseService, public platform: Platform,
    public actionSheetCtrl: ActionSheetController, public modalCtrl: ModalController) {
    this.city = this.navParams.get('city');
  }

  ionViewDidLoad() {
    this.places = this.firebaseService.getPlaces(this.city.name);
    // this.cities.map
    console.log(this.places);
  }
  
  addSpotModal($event, repo) {
    let modal = this.modalCtrl.create
    (AddSpotPage);
    modal.present();
  }

  openMenu(place) {
    this.selectedPlace = place;
    let actionSheet = this.actionSheetCtrl.create({
      title: place.name,
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Edit',
          icon: !this.platform.is('ios') ? 'create' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          // handler: () => {
          //   console.log('Cancel clicked');
          // }
        }
      ]
    });
    actionSheet.present();
  }

}
