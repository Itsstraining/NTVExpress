import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs';
import * as UserAction from '../actions/user.action';

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
    ) { }
}