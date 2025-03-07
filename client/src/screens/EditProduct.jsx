import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom';
import AppNavbar from '../components/Navbar';

const EditProduct = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [published, setPublished] = useState(true)

    useEffect(() => {
        const getDataById = async () => {
            const {data} = await axios.get(`/api/products/${id}`)
            setTitle(data.title)
            setPrice(data.price)
            setDescription(data.description)
            setPublished(data.published)
        }

        getDataById()
    },[id])

    const updateHandler = async (e) => {
        e.preventDefault()
       
        // update by put request
        const data = {
            title: title,
            price: price,
            description: description,
            published: published
        }

        await axios.put(`/api/products/edit/${id}`, data)
        navigate('/products')
    }

    return (
        <>
            <AppNavbar />
            <Container className='mt-5 p-2'>
                <h1>Edit Product</h1>
                <hr />

                <Form onSubmit={updateHandler}>
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
                            value={published}
                            onChange={(e) => setPublished(e.target.checked)}
                            label="publish"
                           />
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Update Product
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default EditProduct
