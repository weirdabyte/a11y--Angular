import { Component, OnInit } from '@angular/core';
import { Text } from '../models/Text';

@Component({
  selector: 'app-about',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.css']
})
export class AboutComponent implements OnInit {
  texts: Text[] = [];
  constructor() { }

  ngOnInit(): void {
    this.texts= [
      { 
        id: 1,
        title: 'Rubrik 1',
        image: './assets/images/computer.png'
     }
    ]
  }

}
