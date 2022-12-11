import { createAction, props } from '@ngrx/store';
import { Express } from '../../app/models/express.model';

export const getExpress = createAction(
  '[Express] Get All Express',
//   props<{ page: number }>()
);

export const getExpressSuccess = createAction(
  '[Express] Get All Express Success',
  props<{ express: Express[] }>()
);

export const getExpressFail = createAction(
  '[Express] Get All Express Fail',
  props<{ error: string }>()
);
