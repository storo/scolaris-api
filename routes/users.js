var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.json({ page : 'users'});
});

module.exports = router;
