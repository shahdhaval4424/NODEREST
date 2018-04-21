const express = require('express');
const mysql = require('mysql');

const app = express()

//Create Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : 'sqladm1n',
    database:  'eCommerce'
});

//connect
db.connect((err) => {
    if(err)  
    {
        throw err;
    }
    console.log('MySQL Connected....');
})

// Open port
app.listen('3000', () => {
    console.log('Server started at port 3000');
});

//select data
app.get('/getusers',(req,res) => {
    let sql =   'select * from users'
    let query = db.query(sql, (err , results) => {
        if(err) throw err;
        console.log(results);
        res
        res.send(JSON.stringify(results));
    });
});