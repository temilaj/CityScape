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
    console.log(this.cities);
    
    return this.cities;
 }

}
