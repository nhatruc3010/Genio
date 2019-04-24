const express = require('express');
const router = express.Router();

const Payment = require('../models/payment');
const Session = require('../models/session');

const uuid = require('uuid/')
var keys = require('../config/stripe');
var stripe = require('stripe')(keys.secret_key);

router.post('/pay', function(req, res) {
    let { data } = req.body;

    stripe.charges.create(data, (err, charge) => {
        if (err) 
            return res.status(400).json({ success: false, msg: err });
        if (charge) {
            return res.status(200).json({ success: true, charge, msg: 'Successfully charged the customer' });
        }
    });
});

router.post('/refund', async (req,res) => {
    let { reservation_id } = req.body;

    try { 
        let reservation = await Session.findOne({ _id: reservation_id });

        if (payment !== null) {
            const refund = stripe.refunds.create({
                charge: Session.charge.id
            });

            return res.status(200).json({
                success: true,
                msg: 'Found and refunded the payment'
            });
        }
        else    
            return res.status(400).json({
                success: false,
                msg: 'Reservation not found!'
            })
    }
    catch(err) {
        return res.status(500).json({
            success: false,
            msg: 'Failed during refund!',
            err
        });
    }
});

module.exports = router;