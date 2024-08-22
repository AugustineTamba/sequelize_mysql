const db = require('../models');

// create main model
const Product = db.products;
const Review = db.reviews;

// main work 
// 1. create product

const addProduct = async(req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Product
    const productInfo = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        published: req.body.published ? req.body.published : false
    };

    // Save Product in the database
    const product = await Product.create(productInfo)
    res.status(200).send(product)
};

// 2. get all products

const getAllProducts = async(req, res) => {

    let products = await Product.findAll({})
    res.status(200).send(products);

};

// 3. get single product

const getOneproduct = async(req, res) => {
    const id = req.params.id;

    let product = await Product.findOne({ where: { id: id }})
    res.status(200).send(product);
};

// 4. update product info

const updateProduct = async(req, res) => {
    const id = req.params.id;

    const product = await Product.update(req.body, { where: { id: id }})
    res.status(200).send(product);
};

// 5. delete product by id

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.destroy({ where: { id: id }});

        if (product) {
            res.status(200).send({ message: `Product with id ${id} was deleted successfully.` });
        } else {
            res.status(404).send({ message: `Product with id ${id} not found.` });
        }
    } catch (error) {
        res.status(500).send({ message: "An error occurred while deleting the product.", error: error.message });
    }
};


// 6. get published products

const getPublishedProducts = async (req, res) => {
    try {
        const products = await Product.findAll({ 
            where: { 
                published: true  // Make sure this is querying the `published` column
            }
        });
        res.status(200).send(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

// 7. connnect one to many relation Product and reviews

const getProductReviews =  async (req, res) => {

    const id = req.params.id

    const product = await Product.findOne({
        include: [{
            model: Review,
            as: 'review'
        }],
        where: { id: id }
    })

    res.status(200).send(product)

}

module.exports = {
    addProduct,
    getAllProducts,
    getOneproduct,
    updateProduct,
    deleteProduct,
    getPublishedProducts,
    getProductReviews
};