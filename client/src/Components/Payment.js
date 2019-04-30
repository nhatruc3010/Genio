import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios';


class Payment extends Component{
    constructor(props) {
        super(props);
        this.state = {complete: false};
        this.submit = this.submit.bind(this);
    }

    async submit(ev) {
        let {token} = await this.props.stripe.createToken({name: "IVY"});

        let data = {
            amount: 1000,
            currency: 'usd',
            source: `${token.id}`,
            user_id: 'fdkasjhlf'
        }

        let response = await axios.post('http://localhost:3001/payments/pay', data);

        if (response.ok) this.setState({complete: true});  
    }

    render(){
        if (this.state.complete) 
            return <h1>Purchase Complete</h1>;
            return(

            <div className="checkout">
                <p>Would you like to complete the purchase?</p>
                <CardElement />
                <button onClick={this.submit}>Send</button>
            </div>
);
    }
    }

export default injectStripe(Payment);