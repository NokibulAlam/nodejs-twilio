const express = require('express');
const router = express.Router();

const message = require('../controllers/messageController');

router.route("/whatsapp")
    .post(message.sendMessage);


module.exports = router;