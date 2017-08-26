import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {
  countries: FirebaseListObservable<any[]>;
  cities: FirebaseListObservable<any[]>;

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
    this.cities = this.firebaseDb.list('/places', {
        query:{
            orderByChild: 'city',
            equalTo: cityName
        }
    });
  } 
  // else {
  //     this.cities = this._af.database.list('/cities') as
  //         FirebaseListObservable<Business[]>;
  // }
  return this.cities;
}

}
