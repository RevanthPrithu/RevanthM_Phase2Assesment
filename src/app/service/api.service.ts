import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>("https://fake-server1.herokuapp.com/items")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}

