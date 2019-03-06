const express = require('express');
const router = express.Router();

const { paypal } = require('../config/paypal');

router.post('/pay/paypal', (req,res) => {
    let basePaymentObj = Object.freeze({
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3001/pay/paypal/return",
            "cancel_url": "http://localhost:3001/pay/paypal/cancel"
        },
        "transactions": [{
            "item_list": {
            },
            "amount": {
                "currency": "USD",
                "total": ""
            },
            "description": "This is the payment description."
        }]
    });

    let { 
        total, description,
        tutorName, tuteeName, startTime, endTime
    } = req.body;

    try {
        let payment = { 
            ...basePaymentObj,
            total, description,
        };

        let session = [{
            "name": "item",
            "sku": "item",
            "price": total,
            "currency": "USD",
            "quantity": 1,
            tutorName, tuteeName, startTime, endTime
        }];

        payment.transactions[0].item_list.session = session;

        paypal.payment.create(payment, (err, payment) => {
            if (err) throw err;
            else {
                return res.status(200).json({
                    sucess: true,
                    msg: 'Successfully paid the tutor',
                    payment
                });
            }
        });
    } catch(err) {
        return res.status(500).json({
            success: false,
            msg: 'Server Error! Please try again'
        });
    }
});

module.exports = router;