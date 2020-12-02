const express = require('express');

const {apiRouter, notFoundRouter} = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRouter);
app.use('*', notFoundRouter);

app.listen(3000, err => err && console.log(err) || console.log('listen 3000'));
