let db = [{name: 'admin' , password: '12345'}];

const express = require('express');

const app = express();

const expressHbs = require('express-handlebars');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(process.cwd(), 'views')));

app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({
    defaultLayout: false
}));
app.set('views', path.join(process.cwd(), 'views'));

app.get('/users' ,(req, res) => {
    res.render('users' ,{users: db});
})

app.get('/login', (req, res) => {
    res.render('login');
})
app.post('/login', (req, res) => {
    users
})

app.get('/singin', (req, res) => {
    res.render('singin')
})
app.post('/singin', (req, res) => {
    const {name , password} = req.body;

    db.push({name,password});
    res.redirect('/users');
})
app.listen(3000, err => err && console.log(err) || console.log('listen 3000'));










