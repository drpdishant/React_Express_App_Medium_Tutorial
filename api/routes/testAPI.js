var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.send("API Resource Allowing only http://localhost:3000" );
    console.log(JSON.stringify(req.headers));
});

module.exports = router;
