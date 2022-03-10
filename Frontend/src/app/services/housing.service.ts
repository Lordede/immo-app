import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  path = "data/properties.json";

constructor(private http: HttpClient) { }

  getAllProperties(){
    return this.http.get(this.path);
  }

}
