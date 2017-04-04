const express = require('express');
const router = express.Router();
var guestsController = require('../controllers/guestsController');

router.get('/',function(res,res){
  res.send('HOMEPAGE');
})


module.exports = router;
