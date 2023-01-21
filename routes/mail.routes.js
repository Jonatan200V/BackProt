const express = require('express');
const mailCreate = require('../controller/mail.controller');

const router = express.Router();
router.post('/mail', mailCreate);
module.exports = router;
