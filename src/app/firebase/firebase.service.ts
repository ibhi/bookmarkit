// import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

// @Injectable()
// export class FirebaseService {
//   public database: firebase.database.Database;
//   constructor() { }

//   init(config) {
//     firebase.initializeApp(config);
//     this.database = firebase.database();
//   }

// }

const config = {
  apiKey: 'AIzaSyBEeYBlJS6mTkgEJjJ7OR0ln-vUqA67DjQ',
  authDomain: 'bookmarkit-54404.firebaseapp.com',
  databaseURL: 'https://bookmarkit-54404.firebaseio.com'
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;