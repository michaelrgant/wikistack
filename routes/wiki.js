const express = require('express');

const router = express.Router();

 router.post('/', (req, res, next) => {
     
     res.send (console.log('It worked!!'))
 })


module.exports = router;