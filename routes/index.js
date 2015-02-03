var express = require('express');
var router = express.Router();

var tests = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create-test', function(req, res) {
  res.render('create_test');
});

router.post('/tests', function (req, res) {
    tests.push(req.body);
    res.status(500).json({
      message: 'Inserted test ... '
    });
});

router.get('/tests', function(req, res) {
    res.status(200).json(tests);
});

router.get('/json', function (req, res) {
    res.status(200).json({
      message: 'OK'
    });
});

module.exports = router;
