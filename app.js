const express = require('express');
const bodyParser = require('body-parser');
const users = require('./user/user');


const app = express()

// Open port
app.listen('3000', () => {
    console.log('Server started at port 3000');
});

app.use(bodyParser.urlencoded({ extended: false }))

//select all users
app.get('/getusers', (req,res) => {
    users.getUser(req,res);
});

//select single user
app.get('/getuser/:id', (req,res) => {
    users.getUserbyID(req,res);
});

//delete user by userid
app.get('/deleteuser/:id', (req,res) => {
    users.deleteUser(req,res);
});

app.post('/insertuser',(req,res) => {
    //console.log(req.body);
    users.insertUser(req,res);
})