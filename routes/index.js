var express = require('express');
var fs = require("fs");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/submit-email', function(req, res) {
    console.log("email: " + req.body.email);
    fs.appendFile("emails.txt", req.body.email + "\n", function (err) {
	if (err)
	        console.log("Error appending email to file.");
    });    
    res.send(200);
});

module.exports = router;
