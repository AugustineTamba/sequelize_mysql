// import { Button } from '@restart/ui'
import React from 'react'
// import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = ({ product }) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://placehold.co/600x400" />
            <Card.Body>
                <Card.Title> {product.title} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted"> Price: ${product.price} </Card.Subtitle>
                <Card.Text>
                    {product.description}
                </Card.Text>
                    
                <Link to={`/product/${product.id}`}>
                    <Button variant="primary"> Detail</Button>
                </Link>
            </Card.Body>
            </Card>

    </>

)

}

export default ProductCard
