import { createReducer, on } from "@ngrx/store";
import { AuthState } from "../states/auth.state";
import * as AuthActions from '../actions/auth.action';


const initialState: AuthState = {
    isAuthenticatied: false,
    idToken: '',
    error: '',
};

export const authReducer = createReducer(
    initialState,
    on(AuthActions.login, (state) => state),

    on(AuthActions.logoutSuccess, (state, action) => ({
        ...state,
        isAuthenticatied: true,
        idToken: action.idToken,
    })),

    on(AuthActions.loginFailure, (state, action) => ({
        ...state,
        isAuthenticatied: false,
        error: action.error,
    })),

    on(AuthActions.logout, (state) => {
        return {
            ...state,
            isAuthenticatied: false,
            idToken: '',
            error: '',
        };
    }),

    on(AuthActions.logoutSuccess, (state) => ({
        ...state,
        isAuthenticatied: false,
        idToken: '',
        error: '',
    })),

    on(AuthActions.logoutFailure, (state, action) => ({
        ...state,
        error: action.error,
        idToken: '',
        isAuthenticatied: false,
    })),
);