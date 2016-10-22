import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyModuleComponent } from './lazy-module.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { AngularFire, FirebaseListObservable, AuthProviders, AngularFireModule, AuthMethods } from 'angularfire2';
import * as firebase from 'firebase';

import { MyButtonServiceService } from './my-button.service';
const routes: Routes = [
    { path: '', component: LazyModuleComponent }
];
const firebaseConfig = {
 apiKey: "AIzaSyBuhNGCwz29zR5KzVMuCzV1U0xxKSjfO9E",
 authDomain: "test-b4797.firebaseapp.com",
 databaseURL: "https://test-b4797.firebaseio.com/",
 storageBucket: "test-b4797.appspot.com"
}

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  declarations: [LazyModuleComponent],
  providers:[MyButtonServiceService]
})
export class LazyModuleModule { }
