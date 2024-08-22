const express = require('express');
const router = express.Router();

const reviewController = require('../controllers/reviewController');

// create review
router.post('/addReview/:id', reviewController.addReview);

// get all reviews
router.get('/allReviews', reviewController.getAllReviews);

// get single review
router.get('/:id', reviewController.getOneReview);

// update review
router.put('/edit/:id', reviewController.updateReview);

// delete review
router.delete('/delete/:id', reviewController.deleteReview);

// get reviews by product id
router.get('/product/:productId', reviewController.getReviewsByProductId);

module.exports = router;