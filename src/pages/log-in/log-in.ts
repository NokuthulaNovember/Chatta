import { HomePage } from './../home/home';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import {Alert,AlertController,Loading,LoadingController,
  IonicPage, NavController, NavParams } from 'ionic-angular';




@IonicPage()
@Component({
 selector: 'page-login',
 templateUrl: 'log-in.html',
})
export class LoginPage {
private load:Loading;
email:string;
password:string;
 constructor(public navCtrl: NavController, private loadingCtrl:LoadingController, private alertCtrl:AlertController, private authProvider:AuthProvider ) {
 }

 goToSignUp():void {
   this.navCtrl.push('SignUpPage');
 }
signIn(){
 if(!this.email && !this.password){
 console.log('Enter email and address')
 }else{
   this.authProvider.signIn(this.email, this.password)
   .then(authData=>{
     this.load.dismiss().then(()=>{
   this.navCtrl.setRoot(HomePage);
     })
   },error=>{
     this.load.dismiss().then(()=>{
       const alert :Alert = this.alertCtrl.create({
         message:error.message,
         buttons:[{text:'ok',role: 'cancel'}]
       })
       alert.present();
     })
   })
   this.load=this.loadingCtrl.create();
   this.load.present()
   }
 }

}
