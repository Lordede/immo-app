import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  SellRent = 1; //default Wert
  properties!: IProperty[];

  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2; // Meint, dasss wir auf rent-property URL sind sonst auf Base-URL
    }

    this.housingService.getAllProperties(this.SellRent).subscribe( //get gibt Oberservable zurück, welches immer per subscribe genutzt werden muss!
      data => {
        this.properties = data;
        console.log(data)
      }, error => {
        console.log("httperror: ");
        console.log(error);
      }
    );
  }

}
