const express = require('express');

const {apiRouter, notFoundRouter} = require('./routes');

const app = express();

// const expressHbs = require('express-handlebars');
// const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.use(express.static(path.join(process.cwd(), 'views')));
//
// app.set('view engine', '.hbs');
// app.engine('.hbs', expressHbs({
//     defaultLayout: false
// }));
// app.set('views', path.join(process.cwd(), 'views'));

app.use('/api', apiRouter);
app.use('*', notFoundRouter);

app.listen(3000, err => err && console.log(err) || console.log('listen 3000'));










