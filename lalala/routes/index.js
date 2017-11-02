var express = require('express');
var router = express.Router();
var mysql  =require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'item'
});

/* GET home page. */
router.post('/qian', function(req, res, next) {
  connection.query('SELECT * FROM bxf', function(err, rows, fields) {
    res.header('Access-Control-Allow-Origin',"*")
    res.send(rows)
  });
});

router.post('/hou', function(req, res, next) {
    var a=req.body.a;
    var b=req.body.b
  connection.query('INSERT INTO bxf (title,content) VALUES ("'+a+'","'+b+'")', function(err, rows, fields) {
    res.header('Access-Control-Allow-Origin',"*")
    res.send(rows)
  });
});
module.exports = router;
