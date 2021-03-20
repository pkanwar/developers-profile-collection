const express = require('express');
const developers = require('../controllers/developers');

let router = express.Router();

router.use('/developers', developers);

module.exports = router;