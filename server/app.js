const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan  = require('morgan');
const cors = require('cors');
const app = express();

const { auth, sessions } = require('./routes');

require('dotenv').config();

let { PORT } = process.env;

const mongoose = require('mongoose');
const config  = require ('./config/database');
mongoose.connect(
    config.database, {
        useNewUrlParser: true
    });

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json({ limit: '50MB' }));
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

// Auth routes tested -- Nhat
app.use(auth);
app.use(sessions);

app.listen(PORT || 3001, () => console.log(`Server started on port ${PORT || 3001} \n`));
