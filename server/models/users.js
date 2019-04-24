const mongoose  = require ('mongoose');
const bcrypt = require ('bcryptjs');

const tuteeAttributes = {
    name: String,
    email: String,
    password: String,
    ccNumber: Number,
    ccCVC: Number,
    ccExpiration: String
}

const tuteeSchema = new mongoose.Schema(tuteeAttributes);

const tutorSchema = new mongoose.Schema({
    ...tuteeAttributes,
    schedule: Object
    
});

const Tutee = mongoose.model('Tutee', tuteeSchema);
const Tutor = mongoose.model('Tutor', tutorSchema);

module.exports = {
    Tutee, Tutor
};

module.exports.createUser = function(newUser, callBack){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callBack); 
        });
    });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if (err) throw err;
        callback(null, isMatch);
    });
}