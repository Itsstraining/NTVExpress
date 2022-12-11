import { ExpressState } from '../states/express.state';
import { Express } from '../../app/models/express.model';
import { createReducer, on } from '@ngrx/store';
import * as ExpressAction from '../actions/express.action';

const initGetAllExpressState: ExpressState = {
  isLoading: false,
  express: <Express[]>[],
  error: '',
  isSuccess: false,
};

export const expressReducer = createReducer(
  initGetAllExpressState,
  on(ExpressAction.getExpress, (state, action) => {
    console.log(action.type);
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      error: '',
      express: [],
    };
  }),

  on(ExpressAction.getExpressSuccess, (state,action) => {
    console.log(action.express);
    return {
      ...state,
      isLoading: false,
      express: action.express,
      isSuccess: true,
      error: '',
    };
  }),

  on(ExpressAction.getExpressFail, (state, { error, type }) => {
    console.log(type);
    return {
      ...state,
      isLoading: false,
      error: error,
      isSuccess: false,
      express: [],
    };
  })
);
