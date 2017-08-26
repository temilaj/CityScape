import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {
  countries: FirebaseListObservable<any[]>;
  cities: FirebaseListObservable<any[]>;
  places: FirebaseListObservable<any[]>;

  constructor(private firebaseDb: AngularFireDatabase) {
    console.log('Hello FirebaseServiceProvider Provider');
  }

  getCountries() {
    return this.countries = this.firebaseDb.list('/countries');
  }

  getCities(countryName:string = null): FirebaseListObservable<any[]> {
    if (countryName != null) {
      console.log(countryName);
      this.cities = this.firebaseDb.list('/cities', {
          query:{
              orderByChild: 'country',
              equalTo: countryName
          }
      });
    } 
    // else {
    //     this.cities = this._af.database.list('/cities') as
    //         FirebaseListObservable<Business[]>;
    // }
    return this.cities;
 }

  getPlaces(cityName:string = null): FirebaseListObservable<any[]> {
    if (cityName != null) {
      console.log(cityName);
      this.places = this.firebaseDb.list('/places', {
          query:{
              orderByChild: 'city',
              equalTo: cityName
          }
      });
    } 
    return this.places;
  }
  
  addSpot(spot) {
    console.log(spot);
    this.firebaseDb.list('/places').push(spot);
  }

  deleteSpot(id) {
    console.log('removing spot '+id)
    this.firebaseDb.list('/places').remove(id);
  }

  updateSpot(id, spot) {
    console.log('updating spot '+id)
    this.firebaseDb.list('/places').update(id, spot);
  }

}
