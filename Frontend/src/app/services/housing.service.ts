import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IProperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  path = "data/properties.json";

constructor(private http: HttpClient) { }

  getAllProperties(): Observable<IProperty[]>{
    return this.http.get(this.path).pipe(
      map(data => {
        const propertiesArray: Array<IProperty> = [];
        for(const id in data){
          if(data.hasOwnProperty(id)){
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }

}
