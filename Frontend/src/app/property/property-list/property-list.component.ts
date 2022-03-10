import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties!: any;

  constructor(private housingService: HousingService) { }

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe( //get gibt Oberservable zurück, welches immer per subscribe genutzt werden muss!
      data => {
        this.properties = data;
        console.log(data)
      }, error => {
        console.log(error);
      }
    );
  }

}
