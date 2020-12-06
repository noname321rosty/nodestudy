const express = require('express');

const {apiRouter, notFoundRouter} = require('./routes');
const {sequelize} = require('./db');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRouter);
app.use('*', notFoundRouter);


(async () => {
    await sequelize.sync();//{alter: true}
    app.listen(3000, err => err && console.log(err) || console.log('Listen 3000'));
})();


