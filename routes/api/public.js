const express = require('express');
const router = express.Router();
const { publicBooks, publicBook } = require('../../controllers/public');

router.route('/').get(publicBooks);

module.exports = router;