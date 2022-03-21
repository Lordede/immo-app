import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild("Form") addPropertyForm!: NgForm;

  constructor(private router: Router) { }

  ngOnInit() {
    // this.addPropertyForm.controls['Name'].setValue('Default Value');

    setTimeout(() => {// Template Form Ansatz arbeitet synchron, daher muss hier gewartet werden bis fertig geladet, dann wird wert gesetzt
    this.addPropertyForm.controls['Name'].setValue('Default Value') // Funktioniert nur weil Komponente klein, sonst müsste länger gewartet werden
    }, /*1000*/); // bei größeren Komponenten Timeout verlängern, damit es auch wirklich fertig geladet ist
  }

  onBack(){
    this.router.navigate(["/"]);
  }

  onSubmit(){
    console.log("Form submitted");
    console.log(this.addPropertyForm);
  }
}
