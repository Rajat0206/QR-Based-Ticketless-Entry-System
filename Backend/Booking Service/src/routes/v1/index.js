const express = require('express');
const { create, createQR} = require('../../controllers/booking-controller');

const router = express.Router();

router.post('/book', create);
router.post('/generateQR', createQR);

module.exports = router;