var express = require('express');


var router = express.Router();

router.get('/', function(req, res) {
    res.json(Math.random());
});

router.get('/add', function(req, res) {
    var inputNumber = req.query.number;
    res.json(+inputNumber + 10);
});

router.post('/add', function(req, res) {
    if (!req.body.hasOwnProperty('inputNumber')) {
        return res.sendStatus(400);
    }
    var reqBody = req.body;
    var response = {
        result: +reqBody.inputNumber + 10
    };
    res.json(response);
});

module.exports = router;