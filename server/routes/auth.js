const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const passport = require('passport');
const jwt =  require('jsonwebtoken');
const validator = require('validator');

const { 
    Tutee, Tutor,
    createUser, comparePassword
 } = require('../models/users');

/**
 * Tutor authentication
 */
router.post('/register', async (req, res) => {
    let { name, email, password, type } = req.body;

    if (
            !validator.isEmpty(name)
        &&  !validator.isEmpty(email)
        &&  !validator.isEmpty(password)
        &&  !validator.isEmpty(type)
    ) {
        try {
            let newUser;
        
            if (type === 'tutor') {
                newUser = new Tutor({
                    name,
                    email,
                    password
                });
            } else if (type === 'tutee') {
                newUser = new Tutee({
                    name,
                    email,
                    password
                });
            }

            createUser(newUser, function(err, user){
                if(err) {
                    return res.status(500).json({
                        success: false, 
                        msg: 'Failed to register User', errors: err
                    });
                } else {
                    return res.status(200).json({
                        success: true, 
                        msg: 'User Registered', 
                        user
                    });
                }
            });
        } catch (err) {
            console.log(err);
            return res.status(400).json({
                success: false,
                msg : 'Unable to create a user',
                err
            });
        }
    }
});

router.post('/login', async (req, res) => {
    let { email, password } = req.body;

    if (
            !validator.isEmpty(email)
        &&  !validator.isEmpty(password)
    ) { 
        try {
            let tutor = await Tutor.findOne({ email }).exec();
            let tutee, user;
            
            if (!tutor) {
                tutee = await Tutee.findOne({ email }).exec();
            }

            if (!tutor && !tutee) {
                throw new Error('Email does not exist in database');
            } else {
                user = tutor ? tutor : tutee;
            }

            comparePassword(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if(isMatch) {
                    const token = jwt.sign({data: {
                        _id: user._id,
                    }}, config.secret, {
                        expiresIn: 604800 // 1 week
                    });

                    let { password, ...rest } = user;
    
                    return res.status(200).json({
                        token: 'Bearer ' + token,
                        user: {
                            rest
                        }
                    });
                } else {
                    return res.status(500).json({
                        success: false, 
                        msg: 'Password is incorrect'
                    });
                }
            });
        } catch (err) {
            return res.status(500).json({
                success: false,
                msg: ' Server was unable to process your request, wait a while or try reformatting your request'
            });
        }
    } else {
        return res.status(403).json({
            success: false,
            msg: 'Invalid request, try again'
        });
    }
});

module.exports = router;
