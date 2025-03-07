import axios from 'axios'
import React, { useState } from 'react'
import { Container, Form, Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import AppNavbar from '../components/Navbar';



const AddProduct = () => {


    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [published, setPublished] = useState(true)
    const [image, setImage] = useState('')
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const addProductHandler = async (e) => {

        e.preventDefault()

        const data = {
            title: title,
            price: price,
            description: description,
            published: published
        }

        try {
            
            // const formData = new FormData()
    
            // formData.append('image', image)
            // formData.append('title', title)
            // formData.append('price', price)
            // formData.append('description', description)
            // formData.append('published', published)
    
            await axios.post('/api/products/addProduct', data)

            setShowModal(true);
            // navigate('/products');
        } catch (error) {
            console.error('Error adding product:', error.response?.data || error.message);
            alert('Error adding product: ' + (error.response?.data?.message || error.message));
        }
    
    }

    const handleCloseModal = () => {
        setShowModal(false);
        navigate('/products'); // Navigate after closing the modal
    };



    return (
        <>
            <AppNavbar /> 
            <Container className='mt-5 p-2'>
                <h1>Add Product</h1>
                <hr />

                <Form onSubmit={addProductHandler} method="POST" encType='multipart/form-data'>

                <Form.Group controlId="fileName" className="mb-3">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control
                        type="file"
                        name='image'
                        onChange={(e) => setImage(e.target.files[0])}
                        size="lg" />
                </Form.Group>

                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                          />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label>Price ($)</Form.Label>
                        <Form.Control
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
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

                    <Form.Group className="mb-3" controlId="publishedCheckedid">
                        <Form.Check
                            type="checkbox"
                            onChange={(e) => setPublished(e.target.checked)}
                            label="publish"
                           />
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Add Product
                    </Button>
                </Form>
            </Container>

            {/* Success Modal */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Product created successfully!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddProduct