// import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import firebaseConfig from './../../firebase.config';

// @Injectable()
// export class FirebaseService {
//   public database: firebase.database.Database;
//   constructor() { }

//   init(config) {
//     firebase.initializeApp(config);
//     this.database = firebase.database();
//   }

// }

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default database;