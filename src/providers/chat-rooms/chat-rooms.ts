import firebase from 'firebase/app';
import { Injectable } from '@angular/core';

/*
 Generated class for the ChatRoomsProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
*/
@Injectable()
export class ChatRoomsProvider {
private chatRoomListRef:firebase.database.Reference
 constructor() {
   firebase.auth().onAuthStateChanged(user=>{
     if(user){
       this.chatRoomListRef = firebase.database().ref(`/userProfile${user.uid}/chatRooms`)
     }
   })
 }
 createRoom(name:string):firebase.database.ThenableReference{

   return this.chatRoomListRef.push({
     chatRoomName: name
   })

 }
 getChatRoomsList():firebase.database.Reference{
   return this.chatRoomListRef;
 }
}