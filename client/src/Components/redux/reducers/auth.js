import { USER_LOGIN, USER_LOGOUT } from '../actions';

const initialState = {
    user: null,
    token: null
};

export const AuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_LOGIN:
            return {
                ...state,
                ...action.payload
            };

        case USER_LOGOUT:
            return initialState;

        default:
            return state;
    };
};