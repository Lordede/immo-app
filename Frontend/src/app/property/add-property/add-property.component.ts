import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/ipropertybase';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild("Form") addPropertyForm!: NgForm;
  @ViewChild("formTabs") formTabs!: TabsetComponent;

  //Will come from masters
  propertyTypes: Array<string> = ["House", "Apartment", "Duplex"];
  furnishTypes: Array<string> = ["Fully", "Semi", "Unfurnished"];

  propertyView: IPropertyBase = { //zeigt zwar fehler, jedoch in tsconfig.json mit "strictNullChecks": false, behoben
    Id: null,
    Name: "",
    Price: null,
    SellRent: null,
    PType: null,
    FType: null,
    BHK: null,
    BuiltArea: null,
    City: null,
    RTM: null,
  };

  constructor(private router: Router) { }

  ngOnInit() {
    // this.addPropertyForm.controls['Name'].setValue('Default Value');

    //setTimeout(() => {// Template Form Ansatz arbeitet synchron, daher muss hier gewartet werden bis fertig geladet, dann wird wert gesetzt
    //this.addPropertyForm.controls['Name'].setValue('Default Value') // Funktioniert nur weil Komponente klein, sonst müsste länger gewartet werden
    //}, /*1000*/); // bei größeren Komponenten Timeout verlängern, damit es auch wirklich fertig geladet ist



  }

  onBack(){
    this.router.navigate(["/"]);
  }

  onSubmit(){
    console.log("Form submitted");
    console.log("SellRent =" + this.addPropertyForm.value.BasicInfo.SellRent);
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }
}
