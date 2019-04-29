import { combineReducers } from 'redux';

import { AuthReducer } from './auth';
import { SessionsReducer } from './sessions';

const reducers = combineReducers({
    auth: AuthReducer,
    data: SessionsReducer
});

export default reducers;