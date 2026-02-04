const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');
const { getUsers, createUser, updateUser, deleteUser } = require('../controllers/adminController');
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

// User Management Routes
router.route('/users')
    .get(protect, admin, getUsers)
    .post(protect, admin, createUser);
router.route('/users/:id')
    .put(protect, admin, updateUser)
    .delete(protect, admin, deleteUser);

// Product Management Routes
router.route('/products')
    .get(protect, admin, getProducts)
    .post(protect, admin, createProduct);
router.route('/products/:id')
    .put(protect, admin, updateProduct)
    .delete(protect, admin, deleteProduct);

module.exports = router;
