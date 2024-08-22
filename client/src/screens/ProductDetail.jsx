import React, { useEffect, useState } from 'react'
import { Card, Button, Container, Form, Row, Col, Modal, Toast, ToastContainer } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import AppNavbar from './../components/Navbar';
import Accordion from 'react-bootstrap/Accordion';

const ProductDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate();

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [productDescription, setProductDescription] = useState('')
    const [published, setPublished] = useState(true)
    const [productImage, setProductImage] = useState('')

    // review rating  description
    const [reviews, setReviews] = useState([])
    const [rating, setRating] = useState(0)
    const [description, setDescription] = useState('')

    // Modal states
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showReviewBreadcrumb, setShowReviewBreadcrumb] = useState(false)

    // Toast state
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        const getSingleProductData = async () => {
            const { data } = await axios.get(`/api/products/getProductReviews/${id}`)
            console.log(data)

            setTitle(data.title)
            setPrice(data.price)
            setProductDescription(data.description)
            setPublished(data.published)
            setProductImage(data.image)

            // for reviews
            setReviews(data.review)
        }
        getSingleProductData()
    }, [id])

    // handling Delete
    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/products/delete/${id}`)
            setShowDeleteModal(true)
        } catch (error) {
            console.error('Error deleting product:', error.response?.data || error.message)
        }
    }

    // to add review
    const addReviewHandler = async (e) => {
        e.preventDefault()

        let review = {
            product_id: id,
            rating: rating,
            description: description
        }

        try {
            await axios.post(`/api/reviews/addReview/${id}`, review)
            // Show the toast notification
            setShowToast(true);

            // Optionally, refresh reviews
            const { data } = await axios.get(`/api/products/getProductReviews/${id}`)
            setReviews(data.review)

            // Reset form fields
            setRating(0);
            setDescription('');
        } catch (error) {
            console.error('Error adding review:', error.response?.data || error.message)
        }
    }

    // Modal close handler
    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false)
        navigate('/products')
    }

    return (
        <>
            <AppNavbar/>
            <Container className="mt-10 p-4">
                <h1 className="text-center">Detail Product</h1>
                <hr />

                <Row>
                    <Col md={8} lg={8} sm={8}>
                        <Card className='shadow-lg m-3 p-2 rounded'>
                            <Card.Img src="https://placehold.co/600x400" />
                            <Card.Body>
                                <Card.Title>Title: {title}</Card.Title>
                                <Card.Title className="text-success">Price: ${price}</Card.Title>
                                <Card.Text>Description: {productDescription}</Card.Text>
                                <Card.Text>
                                    Published: {published ? (<small>True</small>) : (<small>false</small>)}
                                </Card.Text>
                                <br />
                                <Link to={`/product/edit/${id}`}>
                                    <Button>Edit</Button>
                                </Link>
                                <Button className="btn btn-danger m-2" onClick={() => handleDelete(id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} lg={4} sm={4}>
                        <h2 className='text-center'>Add Review</h2>
                        <hr />
                        <Form onSubmit={addReviewHandler}>
                            <Form.Group className="mb-3" controlId="rating">
                                <Form.Label>Rating</Form.Label>
                                <Form.Control
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                    type="number"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    as="textarea"
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Add Review
                            </Button>
                        </Form>
                        <br />
                        <h5>Product Reviews</h5>
                        <hr />
                        {reviews.length > 0 ? (
                            reviews.map(review => (
                                // <p key={review.id}>Rating: {review.rating} <br /> {review.description}</p>
<div>
                                <Accordion defaultActiveKey="0" key={review.id}>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header> Rating: {review.rating} </Accordion.Header>
                                        <Accordion.Body>
                                        {review.description}
                                        </Accordion.Body>
                                    </Accordion.Item>
            
                                </Accordion>
</div>
                            ))
                        ) : (
                            <p>No reviews for this product</p>
                        )}
                    </Col>
                </Row>

                {/* Delete Modal */}
                <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Product Deleted</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        The product has been deleted successfully.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleCloseDeleteModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>

            {/* Toast Notification */}
            <ToastContainer position="bottom-end">
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={5000} autohide>
                    <Toast.Header>
                        {/* <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                        /> */}
                        <strong className="me-auto">Addidies</strong>
                        <small className="text-muted">just now</small>
                    </Toast.Header>

                    <Toast.Body>Review added successfully!</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    )
}

export default ProductDetail
