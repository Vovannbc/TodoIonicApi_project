var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/users', function(req, res, next) {
    res
        .set('Content-Type', 'application/json')
        .status(200)
        .json({users: 'UsersValue'});
});
router.post('/string', function(req, res) {
    console.log(req.body);
    res.status(200).send('ok');
});

module.exports = router;
