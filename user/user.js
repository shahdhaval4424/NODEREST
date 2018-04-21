const dbutil = require('../dbutil');
const dateShortcode = require('date-shortcode')

const getUser = async (req,res)  => 
{
    let sql =   'select * from users'
    let query =  await dbutil.getDB().query(sql, (err , results) => {
        if(err) throw err;
        console.log(results);
        res.send(JSON.stringify(results));
    });
}

const getUserbyID = async (req,res)  => 
{
    let sql =   `select * from users where userid = ${req.params.id}`
    let query =  await dbutil.getDB().query(sql, (err , results) => {
        if(err) throw err;
        console.log(results);
        res.send(JSON.stringify(results));
    });
}

const deleteUser = async (req,res)  => 
{
    let sql =   `Delete from users where userid = ${req.params.id}`
    let query =  await dbutil.getDB().query(sql, (err , results) => {
        if(err) throw err;
        console.log(results);
        res.send(JSON.stringify(results));
    });
}

// const updateUser = async (req,res)  => 
// {
//     let sql =   `Delete from users where userid = ${req.params.id}`
//     let query =  await dbutil.getDB().query(sql, (err , results) => {
//         if(err) throw err;
//         console.log(results);
//         res.send(JSON.stringify(results));
//     });
// }

const insertUser = async (req,res)  => 
{  
    var user = {   
                    userid : req.body.userid, 
                    username : req.body.username, 
                    password : req.body.password,
                    createdon :dateShortcode.parse('{YYYY-MM-DD HH:mm:ss}', Date.now()),
                    createdby : req.body.createdby, 
                    modifiedon : dateShortcode.parse('{YYYY-MM-DD HH:mm:ss}', Date.now()), 
                    modifiedby : req.body.modifiedby,
                    enabled : req.body.enabled 
                }
    let sql =   'insert into users SET ?'
    let query =  await dbutil.getDB().query(sql, user , (err , results) => {
        if(err) res.send (err);
        console.log(results);
        res.send(JSON.stringify(results));
    });
}

module.exports = { getUser, getUserbyID, deleteUser, insertUser };