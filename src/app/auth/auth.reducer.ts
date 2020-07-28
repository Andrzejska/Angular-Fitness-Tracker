import { AuthActions, LOGIN, LOGOUT } from "./auth.actions";

export interface State {
    isAuth: boolean;
}

const initialState: State = {
    isAuth: false
}

export function authReducer(state = initialState, action: AuthActions) {
    switch (action.type) {
        case LOGIN:
            return { isAuth: true }
        case LOGOUT:
            return { isAuth: false }
        default: return state;
    }
}

export const getIsAuth = (state: State) => state.isAuth;