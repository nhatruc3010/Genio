const express = require('express');
const router = express.Router();
const validator = require('validator');

const { Tutor, Tutee } = require('../models/users');

router.get('/get/tutors/all', async (req,res) => {
    Tutor.find({}, (err,tutors) => {
        if (err) return res.status(400).json({ success: false, err });

        return res.status(200).json({
            success: true,
            tutors
        });
    });
});

router.get('/tutors/:subject', async (req,res) => {
    let { subject } = req.params;
    let subjectDict = [ 'chemistry', 'physics', 'math', 'history', 'music', 'english', 'biology' ];

    if (!validator.isEmpty(subject)) {
        let inferredSubject = inferSubject(subject, subjectDict);

        if (inferredSubject) {
            Tutor.find({
                subjects: {
                    [subject]: true 
                }
            }, (err,t) => {
                if (err) return res.status(400).json({ success: false, err });

                return res.status(200).json({
                    success: true,
                    tutors
                });
            });
        } else {
            return res.status(400).json({
                success: false,
                msg: 'Invalid subject entered, try again'
            });
        }
    } else {
        Tutor.find({}, (err,tutors) => {
            if (err) return res.status(400).json({ success: false, err });
    
            return res.status(200).json({
                success: true,
                tutors
            });
        });
    }
});

router.get('/profile/:_id', async (req,res) => {
    let { _id } = req.params;

    if (!validator.isEmpty(_id)) {
        try {
            let tutor = await Tutor.findOne({ _id }).exec();
            let tutee, user;

            if (!tutor) {
                tutee = await Tutee.findOne({ _id }).exec();
            }

            if (!tutor && !tutee) {
                throw new Error('User does not exist in database');
            } else {
                user = tutor ? tutor : tutee;
            }

            return res.status(200).json({
                success: true,
                user
            });
        } catch(err) {
            return res.status(400).json({
                success: false,
                err
            });
        }
    }
});

router.post('/profile/edit', async (req,res) => {
    let { _id, data } = req.body;

    if (
            !validator.isEmpty(_id)
        &&  data
    ) {
        try {
            console.log(data);
            let tutor = await Tutor.findOneAndUpdate({ _id }, { ...data.user }).exec();
            let tutee, user;

            console.log(tutor)

            if (!tutor) {
                tutee = await Tutee.findOne({ _id }, data).exec();
            }

            if (!tutor && !tutee) {
                throw new Error('User does not exist in database');
            } else {
                user = tutor ? tutor : tutee;
            }

            return res.status(200).json({
                success: true,
                user
            });
        } catch(err) {
            return res.status(400).json({
                success: false,
                err
            });
        }
    }
});

function inferSubject(subject, subjectDict) {
    let ret = null;

    subjectDict.forEach(v => {
        if (v.search(subject) !== -1)
            ret = subject;
    });

    return ret;
}

module.exports = router;
