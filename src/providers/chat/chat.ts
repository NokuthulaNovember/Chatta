import firebase from 'firebase/app';
import 'firebase/database'
​
import { Injectable } from '@angular/core';

​
/*
 Generated class for the ChatProvider provider.
​
 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
*/
@Injectable()
export class ChatProvider {
chatRef:firebase.database.Reference;
​
 constructor() {
  firebase.auth().onAuthStateChanged(userProfile => {
   if(userProfile) {
this.chatRef= firebase.database().ref (`userProfile/chatRooms` ).push()
  
}
  })
 }
​
startChat(data){
 this.chatRef.set(data)
}
getChats(){
 
}
}