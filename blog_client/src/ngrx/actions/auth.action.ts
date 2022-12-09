import { createAction, props } from "@ngrx/store";


export const login = createAction('[Auth] Login');

export const LoginSuccess = createAction(
    '[Auth] Login Success',
    props<{ idToken: string }>()
);

export const loginFailure = createAction(
    '[Auth] Login Failure',
    props<{ error: string }>()
);

export const logout = createAction('[Auth] Logout');
export const logoutSuccess = createAction(
    '[Auth] Logout Success',
    props<{ idToken: string }>()
    );
export const logoutFailure = createAction(
    '[Auth] Logout Failure',
    props<{ error: string }>()
);