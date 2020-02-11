var express = require('express');
var router = express.Router();
var {Client} = require('pg')

const connectionString = 'postgresql://libraryMaster:library@123@localhost/libraryManager';

const client = new Client({
    connectionString:connectionString
})

client.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  client.query(`select * from bookstore` ,(err , result)=>{
    res.render('index' , {
      result: result.rows
    })
   })
});

module.exports = router;
