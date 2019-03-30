require('./config/config');

const express = require('express');

const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(require('./routes/index.routes'));

console.log(process.env.URLDB);
mongoose.connect(process.env.URLDB, (err, res) => {

    if (err) {
        throw err;
    }
});

app.listen(process.env.PORT, () => {
    console.log('escuchando puerto ', process.env.PORT);
});