import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IPropertyBase } from '../model/ipropertybase';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  path = "data/properties.json";

constructor(private http: HttpClient) { }

  getAllProperties(SellRent: number): Observable<IPropertyBase[]>{
    return this.http.get(this.path).pipe(
      map(data => {
        const propertiesArray: Array<IPropertyBase> = [];
        for(const id in data){
          if(data.hasOwnProperty(id) && data[id].SellRent == SellRent){ // es werden nur Parameter geladet, welche auch zur Seite passen
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }

}
