var express = require('express');
var router = express.Router();
var {Client , Pool} = require('pg')
var path = require('path')

const connectionString = 'postgresql://libraryMaster:library@123@localhost/libraryManager';

const client = new Client({
    connectionString:connectionString
})

client.connect();


/* GET search listing. */
router.get('/', function(req, res, next) {
  var searchBoxData = req.query.box;
  client.query(`select * from bookstore where name ilike '%${searchBoxData}%'` ,(err , result)=>{
    res.render('searchRelated' , {
      result: result.rows
    })
   })
});

module.exports = router;
