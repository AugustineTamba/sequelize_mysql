const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

// create product
router.post('/addProduct', productController.addProduct);

// get all products
router.get('/allProducts', productController.getAllProducts);

// get published products
router.get('/published', productController.getPublishedProducts);

// get product Reviews
router.get('/getProductReviews/:id', productController.getProductReviews)

// note that dymanic id should be under the other routes

// get single product
router.get('/:id', productController.getOneproduct);

// update product
router.put('/edit/:id', productController.updateProduct);

// delete product
router.delete('/delete/:id', productController.deleteProduct);

module.exports = router;