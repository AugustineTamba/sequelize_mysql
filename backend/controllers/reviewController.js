const db = require('../models');

// create main model
const Review = db.reviews;
const Product = db.products;

// main work 
// 1. create review

const addReview = async(req, res) => {

    const id = req.params.id
    // Validate request
    if (!req.body.rating) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Review
    const reviewInfo = {
        product_id: id,
        rating: req.body.rating,
        description: req.body.description
    };

    // Save Review in the database
    const review = await Review.create(reviewInfo)
    res.status(200).send(review)
};

// 2. get all reviews

const getAllReviews = async(req, res) => {

    let reviews = await Review.findAll({})
    res.status(200).send(reviews);

};

// 3. get single review

const getOneReview = async(req, res) => {
    const id = req.params.id;

    let review = await Review.findOne({ where: { id: id }})
    res.status(200).send(review);
};

// 4. update review info

const updateReview = async(req, res) => {
    const id = req.params.id;

    const review = await Review.update(req.body, { where: { id: id }})
    res.status(200).send(review);
};

// 5. delete review by id

const deleteReview = async(req, res) => {
    const id = req.params.id;

    let review = await Review.destroy({ where: { id: id }})
    res.status(200).send("review is deleted successfully");
};

// 6. get reviews by product id

const getReviewsByProductId = async(req, res) => {
    const productId = req.params.productId;

    const reviews = await Review.findAll({ where: { productId: productId }})
    res.status(200).send(reviews);
}

module.exports = {
    addReview,
    getAllReviews,
    getOneReview,
    updateReview,
    deleteReview,
    getReviewsByProductId
};