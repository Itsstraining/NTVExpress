import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { GetexpressService } from 'src/app/services/getexpress.service';
import * as ExpressAction from '../actions/express.action';

@Injectable()
export class ExpressEffects {
  constructor(
    private action$: Actions,
    private expressServices: GetexpressService
  ) {}

  getAllPost$ = createEffect(() =>
    this.action$.pipe(
      ofType(ExpressAction.getExpress),
      switchMap(() => this.expressServices.getAllExpress()),
      map((value) => {
        console.log(value)
        return ExpressAction.getExpressSuccess({ express: value });
      }),
      catchError((error) => {
        console.log(error)
        return of(ExpressAction.getExpressFail({ error: error }));
      })
    )
  );
}
