/**
 * Created by gq-work on 4/18/17.
 */
const express = require('express');
const router = express.Router();

//MAKING HTTP REQUESTS

router.get('/', function(req,res){
  res.send('API WORKS');
});

module.exports = router;
