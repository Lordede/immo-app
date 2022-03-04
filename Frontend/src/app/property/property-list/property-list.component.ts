import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  propertys: Array<any> =[
    {
    "Id": 1,
    "Name": "Birla House",
    "Type": "House",
    "Price": 12000
    },
    {
    "Id": 2,
    "Name": "Bumbsvilla",
    "Type": "Villa",
    "Price": 13000
    },
    {
    "Id": 3,
    "Name": "Drecksloch",
    "Type": "Flat",
    "Price": 14500
    },
    {
    "Id": 4,
    "Name": "Spielwiese",
    "Type": "House",
    "Price": 16000
    },
    {
    "Id": 5,
    "Name": "Shithole",
    "Type": "Flat",
    "Price": 18000
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
