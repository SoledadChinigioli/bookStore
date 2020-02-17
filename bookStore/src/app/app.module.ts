import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBooksComponent } from './component/admin/list-books/list-books.component';
import { DetailsBookComponent } from './component/details-book/details-book.component';
import { HeroComponent } from './component/hero/hero.component';
import { HomeComponent } from './component/home/home.component';
import { ModalComponent } from './component/modal/modal.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { OffersComponent } from './component/offers/offers.component';
import { LoginComponent } from './component/users/login/login.component';
import { ProfileComponent } from './component/users/profile/profile.component';
import { RegisterComponent } from './component/users/register/register.component';
import { Page404Component } from './component/page404/page404.component';

import {FormsModule } from '@angular/forms';
import {environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    ListBooksComponent,
    DetailsBookComponent,
    HeroComponent,
    HomeComponent,
    ModalComponent,
    NavbarComponent,
    OffersComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
