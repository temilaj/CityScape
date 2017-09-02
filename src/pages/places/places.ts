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
  }
  
  addSpotModal($event) {
    let modal = this.modalCtrl.create
    (AddSpotPage, {
      city: this.city
    });
    modal.present();
  }

  openMenu(place) {
    this.selectedPlace = place;
    console.log(this.selectedPlace);
    let actionSheet = this.actionSheetCtrl.create({
      title: place.name,
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            this.firebaseService.deleteSpot(this.selectedPlace.$key);
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
        }
      ]
    });
    actionSheet.present();
  }

}
