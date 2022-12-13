import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, User } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { resolve } from 'dns';
import { from, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: Auth,
  ) { }

  public user$ = new BehaviorSubject<User>(<User>{});

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
