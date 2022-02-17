var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json(200, { data:{message:'hello world!'} })
});

module.exports = router;
