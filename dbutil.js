const mysql = require('mysql');

var _db;

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
    _db = db;
});
 
getDB =  () => _db;

module.exports = { getDB }
