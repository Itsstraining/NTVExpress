import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as UserAction from '../actions/user.action';
import { UserService } from 'src/app/services/user/user.service';

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private userService: UserService,
    ) { }

    registerUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserAction.registerUser),
            switchMap((action) => {
                return this.userService.registerUser(action.email, action.name)
            }),
            map((action) => {
                return UserAction.registerUserSuccess({
                    message: "Register user successfully"
                })
            }),
            catchError((error) => {
                return of(UserAction.registerUserFail({ error: error }))
            })
        )
    );
}