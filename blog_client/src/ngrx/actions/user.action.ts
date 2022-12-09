import { createAction, props } from "@ngrx/store";


export const registerUser = createAction(
    '[User] Register User',
    props<{
        email: string,
        name: string
    }>()
);

export const registerUserSuccess = createAction(
    '[User] Register User Success',
    props<{
        message: string,
    }>()
)

export const registerUserFail = createAction(
    '[User] Register User Failure',
    props<{
        error: string,
    }>()
)