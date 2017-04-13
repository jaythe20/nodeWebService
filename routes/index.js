/**
 * Created by jaythe20 on 12/04/17.
 */
var express = require('express');
var router = express.Router();

router.get("/",function (req, res) {
    res.send("Welcome to my api");
});

module.exports = router;