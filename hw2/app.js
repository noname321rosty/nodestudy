const {users} = require('./db')

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
    res.render('users' ,{users: users});
})

app.post('/users' , (req, res) => {
    res.redirect('/login')
})

app.get('/login', (req, res) => {
    res.render('login');
})
app.post('/singin', (req, res) => {
    const {name , password , email} = req.body;
    if( users.find(user => user.email !== email)){
        users.push({name,password,email});
        res.redirect('/users');
    }
    res.redirect('/error')

})
app.post('/login', (req, res) => {
    const {email} = req.body;

    if (users.find(user => user.email !== email)){
        res.redirect('/error')
    }
    res.redirect('/users')

})

app.get('/error',(req, res) => {
    res.render('error')
})

app.get('/singin', (req, res) => {
    res.render('singin')
})




app.listen(3000, err => err && console.log(err) || console.log('listen 3000'));










