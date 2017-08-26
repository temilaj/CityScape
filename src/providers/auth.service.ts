// import { Injectable } from '@angular/core';
// import { AngularFireAuth } from "angularfire2/auth";

// import { HomePage } from "../pages/home/home";
// import { NavController, ToastController } from "ionic-angular";
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/map';
// import * as firebase from 'firebase/app';

// @Injectable()
// export class AuthService {
//   private activeUser;

//   constructor(public navCtrl: NavController,
//     private afAuth: AngularFireAuth, 
//     private authService: AuthService,
//     public toastCtrl: ToastController) {}

//   showToast() {
//     let toast = this.toastCtrl.create({
//       message: 'Successfully logged in',
//       duration: 2000,
//       position: 'top',
//     });

//     toast.present(toast);
//   }

//   signInWithFacebook() {
//     this.afAuth.auth
//       .signInWithPopup(new firebase.auth.FacebookAuthProvider())map();
//       // .then(res => {
//       //   console.log(res);
//       //   this.showToast();
//       //   this.navCtrl.push(HomePage);
//       // }).catch(err => {
//       //   console.log(err);
//       // });
//   }

//   signOut() {
//     this.afAuth.auth.signOut();
//   }
  
//   isAuthenticated() {
//     this.afAuth.authState.subscribe(user => {
//       if (!user) {
//         return false;
//       }
//       return true;
//     });
//   }
// }
