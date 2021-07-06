var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this a global resource, if you are seeing this a global Access Control Policy is enabled from your origin');
  console.log(JSON.stringify(req.headers));
  console.log(JSON.stringify(res.headers));
});

module.exports = router;
