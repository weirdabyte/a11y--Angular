import { Component, OnInit } from '@angular/core';
import { Text } from '../models/Text';

@Component({
  selector: 'Home-image',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  texts: Text[] = [];
  
  constructor() { }

  ngOnInit() {
    this.texts= [
       { 
         id: 1,
         title: 'Rubrik 1',
         image: './assets/images/computer.png'
      },
      { 
        id: 2,
        title: 'Rubrik 2',
        image: './assets/images/eagle.png'
     },
     { 
      id: 3,
      title: 'Rubrik 3',
      image: './assets/images/tree.png'
   },
    ]
  };

}
