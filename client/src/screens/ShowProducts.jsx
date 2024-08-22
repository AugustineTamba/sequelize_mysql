import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import ProductCard from '../components/ProductCard';
import AppNavbar from '../components/Navbar';

const ShowProducts = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProductsData = async () => {
            try {
                const { data } = await axios.get('/api/products/allProducts');
                console.log(data);
                setProducts(data); 
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        getProductsData();
    }, []);

    return (
        <>
            <AppNavbar />
            <Container className="show-products-container p-4">
                <h1 className="text-center display-4 mb-4">Our Products</h1>
                <hr className="mb-5" />

                <Row xs={1} md={2} className="g-4">
                    {products.length > 0 ? (
                        products.map(product => (
                            <Col md={6} lg={4} sm={12} className="mb-4" key={product.id}>
                                <ProductCard product={product} />
                            </Col>
                        ))
                    ) : (
                        <Col>
                            <p className="text-center">No products found.</p>
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    )
}

export default ShowProducts
