import { Action } from '@ngrx/store'

export const LOGIN = '[AUTH] Login user'
export const LOGOUT = '[AUTH] Logout user'

export class Login implements Action {
    readonly type = LOGIN;
}
export class Logout implements Action {
    readonly type = LOGOUT;
}

export type AuthActions = Login | Logout