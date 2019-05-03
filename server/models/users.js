const mongoose  = require ('mongoose');
const bcrypt = require ('bcryptjs');

const tuteeAttributes = {
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    ccNumber: Number,
    ccCVC: Number,
    ccExpiration: String,
    sessions: Array,
    type: {
        type: String,
        default: 'tutee'
    }
};

const tuteeSchema = new mongoose.Schema(tuteeAttributes);

const tutorSchema = new mongoose.Schema({
    ...tuteeAttributes,
    schedule: {
        type: Object,
        default: {
            mon: {},
            tue: {},
            wed: {},
            thurs: {},
            fri: {},
            sat: {},
            sun: {}
        }
    },
    hourly_rate: {
        type: Number,
        default: 20
    },
    address: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'tutor'
    },
    subjects: {
        type: Object,
        default: {
            biology: false,
            chemistry: false,
            english: false,
            math: false,
            music: false,
            history: false,
            physics: false
        }
    },
    about_me: {
        type: String,
        default: ''
    }
});

const Tutee = mongoose.model('Tutee', tuteeSchema);
const Tutor = mongoose.model('Tutor', tutorSchema);

module.exports = {
    Tutee, Tutor
};

module.exports.createUser = function(newUser, cb){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(cb);
        });
    });
}

module.exports.comparePassword = function(candidatePassword, hash, cb) {
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if (err) throw err;
        cb(null, isMatch);
    });
}
