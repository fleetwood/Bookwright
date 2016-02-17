/**
 * Created by jfleetwood on 2/17/2016.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
	res.render('about', { title: 'About Bookwright' });
});

module.exports = router;
