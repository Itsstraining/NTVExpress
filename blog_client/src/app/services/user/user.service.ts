import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private Http: HttpClient,
  ) { }

  registerUser(email: string, name: string) {
    return this.Http.post<User>(URL + 'user/register', { 
      email, 
      name 
    })
  }

  getProfile(email: string) {
    return this.Http.get(URL + `user/profile/${email}`);
  }
}
