var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
//   var origin = req.headers.origin;  
  res.header('Access-Control-Allow-Origin', global.allowedDomains);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send('API Enpoint with Cors Allowing Only ' +  global.allowedDomains);
  console.log(JSON.stringify(req.headers));
  
});

module.exports = router;
