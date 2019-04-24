const mongoose = require('mongoose');
const moment = require('moment');

const { Tutee, Tutor } = require('./users');

const SessionSchema = new mongoose.Schema({
    tutee_id: String,
    tutor_id: String,
    time_created: {
        type: Number, 
        default: Date.now()
    },
    start_time: Number,
    end_time: Number,
    charge: Object,
    subtotal: Number,
    total: Number,
    tax: Number,
    approved: {
        type: Boolean,
        default: false
    }
});

const Session = module.exports = mongoose.model('Session', SessionSchema);