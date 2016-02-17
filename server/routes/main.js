/**
 * Created by jfleetwood on 2/17/2016.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('main', { title: 'Bookwright' });
});

module.exports = router;
