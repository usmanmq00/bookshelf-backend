const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMe } = require('../../controllers/users');
const { protect } = require('../../middleware/auth');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.get('/me', protect, getMe);

module.exports = router;