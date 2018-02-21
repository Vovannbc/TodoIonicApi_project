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
    var receivedBody = req.body.title;
    console.log(receivedBody);
    db.collection('receipts').incert(receivedBody, (err, result) => {
        if (err) {
            res
                .set('Content-Type', 'application/json')
                .status(0)
                .json({ 'error': 'An error has occurred' });
        } else {
            res
                .status(200)
                .json({
                    body: receivedBody
                });
        }
    });
});

module.exports = router;
