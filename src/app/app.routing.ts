import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import {HomeModule} from './main/home/home.module'

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "**", redirectTo: "error/404" }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }