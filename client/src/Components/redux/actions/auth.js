import axios from 'axios';

import { USER_LOGIN, USER_LOGOUT, GET_ALL_TUTORS } from './types';
import { SERVER_ENDPOINT, ML_SERVER_ENDPOINT } from '../endpoints';

export const getAllTutors = () => {
  return dispatch => {
    axios.post(`${SERVER_ENDPOINT}/get/tutors/all`)
      .then(res => {
        dispatch({
          type: GET_ALL_TUTORS,
          payload: res.data.tutors
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export const register = data => {
  console.log(data)
    return dispatch => {
        axios.post(`${SERVER_ENDPOINT}/register`, data)
            .then(res => {
                let { user, token } = res.data;

                dispatch({
                    type: USER_LOGIN,
                    payload: {
                        user,
                        token,
                    }
                });
            })
            .catch(err => {
                alert('Possible duplicate credentials, try a new username and/or email');
            });
    };
};

export const login = data => {
    return dispatch => {
        axios.post(`${SERVER_ENDPOINT}/login`, data)
            .then(res => {
                let { user, token } = res.data;

                dispatch({
                    type: USER_LOGIN,
                    payload: {
                        user,
                        token
                    }
                });
            })
            .catch(err => {
                alert('Check your login credentials and try again');
            });
    };
};

export const getUser = _id => {
    return dispatch => {
        axios.get(`${SERVER_ENDPOINT}/profile/${_id}`)
            .then(res => {
                let { user } = res.data;

                dispatch({
                    type: USER_LOGIN,
                    payload: {
                        user
                    }
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export const editUser = (data) => {
    return dispatch => {
        axios.post(`${SERVER_ENDPOINT}/profile/edit`, data)
            .then(res => {
                let { user } = res.data;

                console.log(user);
                dispatch({
                    type: USER_LOGIN,
                    payload: {
                        user
                    }
                });

                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export const logout = () => ({
    type: USER_LOGOUT,
    payload: {
        user: null,
        token: null
    }
});
