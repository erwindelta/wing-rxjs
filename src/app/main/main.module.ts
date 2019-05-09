import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module'
import { OtherModule } from './other/other.module'
import { MainRoutingModule } from './main.routing';
import { OtherComponent } from './other/other.component'

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    HomeModule,
    OtherModule
  ],
  declarations: []
})
export class MainModule { }