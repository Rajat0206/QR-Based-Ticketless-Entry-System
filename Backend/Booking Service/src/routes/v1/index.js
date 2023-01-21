const express = require('express');
const create = require('../../controllers/booking-controller');

const router = express.Router();

router.post('/book', create);

module.exports = router;