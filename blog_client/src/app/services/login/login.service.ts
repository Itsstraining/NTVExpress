import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private auth: Auth
  ) { }

  async loginWithGoogle() {
    let user = await signInWithPopup(this.auth, new GoogleAuthProvider());
    console.log(user);
  }

  async logoutGoogle() {
    let userLogout = await this.auth.signOut();
    console.log(userLogout);
    console.log('logout');
  }
}
