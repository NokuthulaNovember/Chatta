
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor() {
   
  }

  signIn(email:string,password:string):Promise<any>{
    return firebase.auth().createUserWithEmailAndPassword(email,password)

  }
signOut():Promise<any>{
  const UserId:string = firebase.auth().currentUser.uid;
  firebase.database().ref('/userProfile/'+UserId).off();
  return firebase.auth().signOut();
}

resetPassword(email:string):Promise<any>{

return firebase.auth().sendPasswordResetEmail(email);
}

sunUpUser(email:string,password:string):Promise<any>{
  return firebase.auth().createUserWithEmailAndPassword(email,password)
  .then(newUserCredentials=>{
    firebase.database().ref(`/userProfile/${newUserCredentials.user.uid}/email`)
.set(email);

  }).catch(error=>{
    throw new Error(error);

  })
}

}
