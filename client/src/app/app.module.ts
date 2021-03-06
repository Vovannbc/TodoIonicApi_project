import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ReceiptsList } from '../pages/receiptsList/receiptsList';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ComponentsModule } from '../components/components.module'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from "@angular/common/http";

import {MatButtonModule, MatCheckboxModule, MatFormFieldModule} from '@angular/material';
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {ReceiptService} from "../pages/receiptsList/receipt.service";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabase, AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBzHFDsWBWQ8NyT7s0hG4_J7BdzAZJfPj4",
  authDomain: "ionicreceiptproject.firebaseapp.com",
  databaseURL: "https://ionicreceiptproject.firebaseio.com",
  storageBucket: "your-domain-name.appspot.com",
  messagingSenderId: '418376275899'
};

@NgModule({
  declarations: [
    MyApp,
    ReceiptsList,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    CommonModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    MatFormFieldModule,
    MatButtonModule, MatCheckboxModule,
    ComponentsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReceiptsList,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    ReceiptService,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
    exports: [
    MatButtonModule, MatCheckboxModule,
    ComponentsModule
    ]
})
export class AppModule {
    constructor(){}
}
