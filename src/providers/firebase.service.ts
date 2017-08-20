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

  getCities(): FirebaseListObservable<any[]> {
    return this.cities = this.firebaseDb.list('/cities');
 }

}
