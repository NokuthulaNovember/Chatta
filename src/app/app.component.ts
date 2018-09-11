import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';


import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/log-in/log-in';
import { RoomsPage } from '../pages/rooms/rooms';


const config = {
  apiKey: "AIzaSyARYouClNPFw0bBY-ObsjD3YcgRwJQNjV4",
  authDomain: "fir-project-8b9a5.firebaseapp.com",
  databaseURL: "https://fir-project-8b9a5.firebaseio.com",
  projectId: "fir-project-8b9a5",
  storageBucket: "fir-project-8b9a5.appspot.com",
  messagingSenderId: "172351302083"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any=LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
    const unsubscribe=firebase.auth().onAuthStateChanged(user=>{
      if(!user){
      
        this.rootPage='LoginPage';
unsubscribe();
      } else{
        this.rootPage='RoomsPage'
        unsubscribe();
      }
    })
  }
}

