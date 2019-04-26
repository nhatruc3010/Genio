import _ from 'lodash';

import { BOOK_SESSION, CONFIRM_SESSION, GET_SESSIONS } from '../actions/types';

const initialState = {
    sessions: []
};

export default SessionsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BOOK_SESSION:
            let { sessions } = state;

            return {
                ...state,
                sessions: sessions.push(action.payload)    
            };
        
        case CONFIRM_SESSION:
            let { sessions } = state;
            let oldSession = sessions.filter(v => v._id === action.payload._id);

            return {
                ...state,
                sessions: upsert(sessions, oldSession, action.payload)
            };
        
        case GET_SESSIONS:
            return {
                ...state,
                sessions: action.payload
            };

        default:
            return state;
    };
};

const upsert = (arr, key, newValue) => {
    let match = _.find(arr, key);

    if (match) {
        var index = _.indexOf(arr, _.find(arr, key));
        arr.splice(index, 1, newValue);
    } else {
        arr.push(newValue);
    }

    return arr;
};