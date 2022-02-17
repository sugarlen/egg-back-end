// var mysql = require('mysql');
// // 引入文件
// var dbConfig = require('../database/DBConfig');

// var connection = mysql.createConnection(dbConfig.mysql);

// var responseJSON = function(res, ret){
//     if(typeof ret == 'undefined'){
//       res.json({
//         code:'-200',
//         msg:'操作失败'
//       });
//     }else{
//       res.json(ret);
//     }
// };
// function findAll(table){
//     var sql = `SELECT * FROM ${table}`;
//     connection.query(sql, function(err,result){

//         if(err) throw err;
//         console.log(result)
//         responseJSON(res, result);
        
//     });
// };


