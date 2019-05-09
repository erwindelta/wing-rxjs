import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './main/home/home.component'
import { AppRoutingModule } from './app.routing'
import { MainModule } from './main/main.module'


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    LayoutModule,
    AppRoutingModule,
    MainModule
  ],
  declarations: [ 
    AppComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
