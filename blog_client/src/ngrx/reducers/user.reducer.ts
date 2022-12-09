import { registerUserState } from '../../ngrx/states/user.state';
import * as UserAction from '../../ngrx/actions/user.action';
import { createReducer, on } from '@ngrx/store';

const initUserCreateuserState: registerUserState = {
    isSuccess: false,
    message: '',
    error: ''
};

export const registerUserReducer = createReducer(
    initUserCreateuserState,
    on ( UserAction.registerUser, (state, action)=>{
        return {
            ...state,
            isSuccess: false,
            message: '',
            error: ''
        };
    }),

    on ( UserAction.registerUserSuccess, (state, action)=>{
        return {
            ...state,
            isSuccess: true,
            message: action.message,
            error: ''
        };
    }),

    on ( UserAction.registerUserFail, (state, action)=>{
        return {
            ...state,
            isSuccess: false,
            message: action.error,
            error: action.error
        };
    }),
);