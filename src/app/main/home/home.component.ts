import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    //private matDialog: MatDialogModule
  ) { }

  ngOnInit() {
  }

  onClick() {
    //let dialog = this.matDialog
  }

}