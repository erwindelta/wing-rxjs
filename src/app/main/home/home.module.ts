import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component'
import { MatButtonModule, MatIconModule } from '@angular/material'
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule
    
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }