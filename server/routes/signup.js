/**
 * Created by jfleetwood on 2/17/2016.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/signup', function(req, res, next) {
	res.render('signup', { title: 'Sign Up!' });
});

module.exports = router;
