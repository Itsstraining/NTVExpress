import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Express } from '../models/express.model';

@Injectable({
  providedIn: 'root'
})
export class GetexpressService {

  constructor(private http: HttpClient) { }
  // private api = "http://localhost:3000/express/";
  // itemExpress: any;
  // getAllExpress(): Observable<Express[]>{
  //   this.itemExpress = this.http.get(this.api + "all") as Observable<Express[]>;
  //   return this.itemExpress;
  // }
  }

