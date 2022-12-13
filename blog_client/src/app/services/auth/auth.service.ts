import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, User, onAuthStateChanged } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { resolve } from 'dns';
import { from, BehaviorSubject, Observable } from 'rxjs';
import { registerUserState } from 'src/ngrx/states/user.state';
import * as userAction from '../../../ngrx/actions/user.action'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public registerUser$: Observable<registerUserState>;

  constructor(
    private auth: Auth,
    private store: Store<{ registerUserReducer: registerUserState }>
  ) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.user$.next(user);

        if (user.email == "") return;
        this.store.dispatch(userAction.registerUser({
          email: user.email || "",
          firstName: user.displayName || 'user',
          lastName: user.displayName || 'user',
        }))
      }
    });
    this.registerUser$ = this.store.select(state => state.registerUserReducer);
  }

  public user$ = new BehaviorSubject<User>(<User>{});

  login() {
    return from(
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
