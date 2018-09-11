import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { ChatRoomsProvider } from '../providers/chat-rooms/chat-rooms';
import { ProfileProvider } from '../providers/profile/profile';
// import { LoginPage } from '../pages/log-in/log-in';
import { ProfilePage } from '../pages/profile/profile';
// import { RoomsPage } from '../pages/rooms/rooms';
// import { SignUpPage } from '../pages/sign-up/sign-up';
import { ChatProvider } from '../providers/chat/chat';
import { ResetPage } from '../pages/reset/reset';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // LoginPage,
    // SignUpPage,
    ProfilePage,
    // RoomsPage,
    ResetPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    // LoginPage,
    ProfilePage,
    // RoomsPage,
    ResetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ChatRoomsProvider,
    ProfileProvider,
    ChatProvider
  ]
})
export class AppModule {}
