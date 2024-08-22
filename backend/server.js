const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

let corOptions = {
    origin: "http://localhost:8080"
};

// middleware 

app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// testing
app.get('/', (req, res) => {
  res.json({ message: 'Hello World! api'});
});

// routers

// Import the product router
const productRouter = require('./routes/productRouter');
app.use('/api/products', productRouter);

// Import the review router
const reviewRouter = require('./routes/reviewRouter');
app.use('/api/reviews', reviewRouter);


// port 

const PORT = process.env.PORT || 8080;

//server

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

