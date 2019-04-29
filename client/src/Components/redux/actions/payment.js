import axios from 'axios';

import { PAY } from './types';

export const pay = (sessionID, price) => {
    return dispatch => {
        axios.post('http://localhost:3001/payment/pay', { sessionID, price })
            .then(res => {
                dispatch({ 
                    type: PAY , 
                    payload: res.data.payment 
                });
            })
            .catch(err => {
                console.log(err.response);
            });
    }
}
