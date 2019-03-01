const express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    return res.status(200).send("Hello World");
});

router.route('/book').get(function(req,res) {
    return res.status(404).send("No books yet");
}).post(function(req, res) {
    return res.status(200).send("new book stored");
}).put(function(req, res) {
    return res.status(200).send("book updated");
}).delete(function(req,res) {
    return res.status(200).send("book deleted");
})

module.exports = router;