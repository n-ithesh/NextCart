const express = require('express');
const router = express.Router();
const { registerUser, loginUser, loginAdmin } = require('../controllers/authController');

router.post('/user/login', loginUser);
router.post('/admin/login', loginAdmin);
router.post('/register', registerUser);

module.exports = router;
