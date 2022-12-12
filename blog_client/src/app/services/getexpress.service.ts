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
    return this.Http.get<Express[]>(URL + `/all`) ;
  }

  addExpress(
    express: Express,
    files: Array<File>
  ): Observable<{
    data: Express;
    message: string;
  }>{
    const formData = new FormData();
    for( let i = 0; i<files.length;i++){
      formData.append('image',files[i]);
    }
    formData.append('title',express.title);
    formData.append('content',express.content);

    return this.Http.post<{
      data: Express;
      message: string;
    }>(URL, formData);
    }
  }

