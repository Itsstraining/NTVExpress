import { createAction, props } from '@ngrx/store';
import { Express } from '../../app/models/express.model';

// LIST EXPRESS
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

// CREATE EXPRESS
export const createExpress = createAction(
  '[Express] Create Express',
  props<{ express: Express; files: Array<File> }>()
);

export const resetCreateExpress = createAction(
  '[Express] Reset Create Express'
);

export const createExpressSuccess = createAction(
  '[Express] Create Express Success',
  props<{ message: string }>()
);

export const createExpressFail = createAction(
  '[Express] Create Express Fail',
  props<{ error: string }>()
);
