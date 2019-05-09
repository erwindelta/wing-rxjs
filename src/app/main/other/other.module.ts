import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherComponent } from './other.component'
import { MatButtonModule } from '@angular/material'
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ],
  declarations: [OtherComponent]
})
export class OtherModule { }