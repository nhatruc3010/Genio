import { PAY } from '../actions/types';

const INITIAL_STATE = {
    sessionID: null,
    price: 0
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case PAY:
            return{
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
