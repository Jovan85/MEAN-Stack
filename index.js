const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const config = require('./config/database');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, {useNewUrlParser: true}, (err) => {
    if(err) {
        console.log('Could not connect to MongoDb: ', err);
    } else {
        console.log('Connected to MongoDb: ' + config.db);
    }
});

app.use(express.static(__dirname + '/client/dist/client'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});

app.listen(8080, () => console.log('Example app listening on port 8080'))