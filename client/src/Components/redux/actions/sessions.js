import axios from 'axios';

import { GET_SESSIONS, BOOK_SESSION, CONFIRM_SESSION } from './types';
import { SERVER_ENDPOINT, ML_SERVER_ENDPOINT } from '../endpoints';

export const getSessions = (_id, type) => {
    return dispatch => {
        axios.get(`${SERVER_ENDPOINT}/sessions/${type}/${_id}`)
            .then(res => {
                dispatch({
                    type: GET_SESSIONS,
                    payload: res.data.sessions
                });
            })
            .catch(err => {
                console.log(err);
            });
    };
}

export const bookSession = (tuteeID, tutorID, startTime, endTime) => {
    let args = arguments;

    return dispatch => {
        axios.post(`${SERVER_ENDPOINT}/sessions/book`, { ...args })
            .then(res => {
                dispatch({
                    type: BOOK_SESSION,
                    payload: res.data.session
                });
            })
            .catch(err => {
                console.log(err);
            });
    };
};

export const confirmSession = (sessionID, tutorID, tuteeID) => {
    let args = arguments;

    return dispatch => {
        axios.post(`${SERVER_ENDPOINT}/sessions/confirm`, { ...args })
            .then(res => {
                dispatch({
                    type: CONFIRM_SESSION,
                    payload: {
                        ...res.data
                    }
                });
            })
            .catch(err => {
                console.log(err);
            });
    };
};