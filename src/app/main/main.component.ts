import { Component, OnInit } from '@angular/core';

import { NavbarComponent } from '../shared/navbar/navbar.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
