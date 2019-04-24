const express = require('express');
const router = express.Router();
const validator = require('validator');

const Session = require('../models/session');
const { Tutee, Tutor } = require('../models/users');

router.post('/sessions/book', async (req,res) => {
    let { tuteeID, tutorID, startTime, endTime } = req.body;

    if (
            !validator.isEmpty(tuteeID) 
        &&  !validator.isEmpty(tutorID) 
        &&  validator.isNumeric(startTime) 
        &&  validator.isNumeric(endTime) 
    ) {
        try {

        } catch(err) {
            return res.status(400).json({
                success: false,
                err
            });
        }
    } else {
        return res.status(400).json({
            success: false,
            msg: 'Must supply tuteeID, tutorID, startTime, and endTime in the request body'
        });
    }
});

router.post('/sessions/confirm', async (req,res) => {

});

router.get('/sessions/:userType/:_id', async (req,res) => {
    let { userType, _id } = req.params;
    
    if (
            !validator.isEmpty(userType)
        &&  !validator.isEmpty(_id)
    ) {
        try {
            switch(userType) {
                case 'tutee':
                    let tutee = await Tutee.findOne({ _id }).exec();

                    if (tutee) {
                        Session.find({ tuteeID: _id },(err,sessions) => {
                            if (err) 
                                return res.status(500).json({
                                    success: false,
                                    err
                                });
                            if (sessions) {
                                return res.status(200).json({
                                    success: true,
                                    sessions
                                });
                            }
                        });
                    } else {
                        return res.status(403).json({
                            sucess: false,
                            msg: 'Invalid tutee id'
                        });
                    }
                    break;

                case 'tutor':
                    let tutor = await Tutor.findOne({ _id }).exec();

                    if (tutor) {
                        Session.find({ tutorID: _id },(err,sessions) => {
                            if (err) 
                                return res.status(500).json({
                                    success: false,
                                    err
                                });
                            if (sessions) {
                                return res.status(200).json({
                                    success: true,
                                    sessions
                                });
                            }
                        });
                    } else {
                        return res.status(403).json({
                            sucess: false,
                            msg: 'Invalid tutor id'
                        });
                    }
                    break;

                default:
                    return res.status(400).json({
                        success: false,
                        msg: 'Wrong type of user'
                    });
            }
        } catch(err) {
            return res.status(400).json({
                success: false,
                err
            });
        }
    } else {
        return res.status(400).json({
            success: false,
            msg: 'Must supply type of user and id in the url parameters'
        });
    }
});

module.exports = router;