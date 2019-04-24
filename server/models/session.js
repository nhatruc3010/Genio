const mongoose = require('mongoose');
const moment = require('moment');

const { Tutee, Tutor } = require('./users');

const SessionSchema = new mongoose.Schema({
    tuteeID: String,
    tutorID: String,
    time_created: {type: Number, default: Date.now()},
    start_date: Number,
    end_date: Number,
    charge: Object,
    subtotal: Number,
    total: Number,
    tax: Number
});

const Session = module.exports = mongoose.model('Session', SessionSchema);