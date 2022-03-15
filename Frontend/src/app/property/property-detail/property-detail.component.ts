import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId!: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.propertyId = this.route.snapshot.params["id"]; //string in eckigen Klammern muss mit dem Parameter des Pfades in app.module.ts übereinstimmen
    //snapshot gut für initialisierung der Komponente

    this.route.params.subscribe( //bei Änderung der Immobilie durch Button wird Variable abgeändert
      (params) => {
        this.propertyId = params["id"];
      }
    )
  }

  onSelectNext(){
    this.propertyId++;
    this.router.navigate(["property-detail", this.propertyId]); // Als dritten Parameter für relative Pfade: {relativeTo: this.route}
  }

}
