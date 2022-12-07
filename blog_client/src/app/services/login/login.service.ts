import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private auth: Auth
  ) { }

  login() {
    let user = new GoogleAuthProvider();
    return signInWithPopup(this.auth, user);
  }
}
