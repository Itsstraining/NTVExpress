import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { resolve } from 'dns';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: Auth,
  ) { }

  login() {
    return from (
      new Promise<string>(async (resolve, reject) => {
        try {
          let creadential = await signInWithPopup(this.auth, new GoogleAuthProvider());
          let idToken = await creadential.user.getIdToken();
          resolve(idToken);
          console.log(idToken);
        } catch {
          reject('Cannot login with Google');
        }
      }));
  }

  async logout() {
    return await this.auth.signOut();
  }
}
