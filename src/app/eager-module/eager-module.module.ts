import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagerModuleComponent } from './eager-module.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{ path: 'Home', component: EagerModuleComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EagerModuleComponent]
})
export class EagerModuleModule { }
