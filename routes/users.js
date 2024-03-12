var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/get-players', function (req, res, next) {
  res.send(`My name is sachin, am from Mumabi`);
});

router.get('/get-players-query', function (req, res, next) {
  const { name, loc } = req.query
  res.send(`My name is ${name}, am from ${loc}.`);
});

router.get('/get-players-path/:name/:loc', function (req, res, next) {
  const { name, loc } = req.params
  res.send(`My name is ${name}, am from ${loc}`);
})

router.put("/get-players-headers", function (req, res, next) {
  const { name, loc } = req.headers
  res.send(`My name is ${name}, am from ${loc}`);
})

router.post('/get-players-body', function (req, res, next) {
  const { name, loc } = req.body
  res.send(`My name is ${name}, am from ${loc}`);
})




module.exports = router;
