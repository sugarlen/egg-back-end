var express = require('express');
var router = express.Router();
// 引入mysql模块
var mysql = require('mysql');
// const { response } = require('../app');
// 引入文件
var dbConfig = require('../database/DBConfig');
// 连接池
var pool = mysql.createPool(dbConfig.mysql);

/* GET home page. */

var responseJSON = function(res, ret){
  if(typeof ret == 'undefined'){
    res.json({
        code:'-200',
        msg:'操作失败'
    });
  }else{
    res.json({
        code: 200,
        message: '成功',
        data: ret
    });
  }
};

router.get('/', function(req, res, next) {
  pool.getConnection(function(err, connection){
  //   var params = req.query || req.params;
    if(err) throw err;
    console.log('连接成功');

    connection.query('SELECT * FROM info', function(err,result){
        if(err) {
            console.log(err);
        }else{
            console.log(result);
            responseJSON(res, result);
        }
        
        // connection.release();
    });
  })
});

router.post('/login', function(req, res, next) {
  pool.getConnection(function(err, connection){
  //   var params = req.query || req.params;
    if(err) throw err;
    console.log('连接成功');

    connection.query('SELECT * FROM info', function(err,result){
        if(err) {
            console.log(err);
        }else{
            console.log(result);
            responseJSON(res, result);
        }
        
        // connection.release();
    });
  })
});

router.get('/test01', function(req, res, next) {
  pool.getConnection(function(err, connection){
  //   var params = req.query || req.params;
    if(err) throw err;
    console.log('连接成功');

    connection.query('SELECT * FROM info', function(err,result){
        if(err) {
            console.log(err);
        }else{
            console.log(result);
            responseJSON(res, result);
        }
        
        // connection.release();
    });
  })
});


module.exports = router;
