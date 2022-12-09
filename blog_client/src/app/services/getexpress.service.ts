import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Express } from '../models/express.model';
import { URL } from '../../configs/baseURl';

@Injectable({
  providedIn: 'root',
})
export class GetexpressService {
  constructor(private Http: HttpClient) {}

  getAllExpress() {
    return this.Http.get<Express[]>('http://localhost:3000/express/all') ;
  }
}
