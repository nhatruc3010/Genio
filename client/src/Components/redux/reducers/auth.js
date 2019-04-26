import { USER_LOGIN, USER_LOGOUT } from '../actions';

const INITIAL_STATE = {
    user: null,
    token: null
};

export default AuthReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case USER_LOGIN:
            return {
                ...state,
                ...action.payload
            };

        case USER_LOGOUT:
            return INITIAL_STATE;

        default:
            return state;
    };
};