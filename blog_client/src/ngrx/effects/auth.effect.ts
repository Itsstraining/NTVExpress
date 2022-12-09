import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth/auth.service";
import * as AuthActions from '../actions/auth.action';
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()

export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
    ) { }

    authEffect = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.login),
            switchMap(() => this.authService.login()),
            map((idToken) => AuthActions.LoginSuccess({ idToken: idToken })),
            catchError((error) => of(AuthActions.loginFailure({ error: error })))
        ))
}