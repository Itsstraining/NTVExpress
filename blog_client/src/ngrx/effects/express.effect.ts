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

  createExpress$ = createEffect(() => 
  this.action$.pipe(
    ofType(ExpressAction.createExpress),
    switchMap((action) =>
    this.expressServices.addExpress(action.express, action.files)),
    map((res) => {
      console.log(res);
      return ExpressAction.createExpressSuccess({message: res.message});
    }),
    catchError((error) => {
      console.log(error);
      return of(ExpressAction.createExpressFail({error: error.error.message}));
    })
  )
  );
}
