import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const AdminAddCourse = () => {

    const [formData, setFormData] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault(e)
        console.log(formData)
        try{

            const { data } = await axios.post(`http://localhost:4000/api/course/`,{
                ...formData
            })
            console.log(data)
            toast.success("Course created successfully")
            navigate("/")
            window.location.reload()
        }catch(err){
            console.log(err)
            toast.error("Course do not created")
        }
    }

    const addNew = () =>{
        navigate("/admin/courseedit")
    }

    return (
        <div>
             <Container>
                <Row>
                    <h4 className='text-center my-5'>Add course</h4>
                    <Col md={7} className="mx-auto border p-4 mb-5">
                        <Form onSubmit={handleSubmit} className="mb-5">
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name='name' onChange={(e) => handleChange(e)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control type="number" name="quantity" onChange={(e) => handleChange(e)}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Category</Form.Label>
                                <Form.Control type="text" name="category" onChange={(e) => handleChange(e)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Img link</Form.Label>
                                <Form.Control type="text" name="img" onChange={(e) => handleChange(e)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" name="description" onChange={(e) => handleChange(e)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Totalsell</Form.Label>
                                <Form.Control type="number" name="totalsell" onChange={(e) => handleChange(e)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Rating</Form.Label>
                                <Form.Control type="float" name="rating" onChange={(e) => handleChange(e)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" name="price" onChange={(e) => handleChange(e)} />
                            </Form.Group>
                            <Button variant="outline-dark" type="submit">
                                Add course
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Button onClick={()=>addNew()} className="mb-5 d-block ms-auto" variant='outline-dark'>Back Update Course</Button>
            </Container>
        </div>
    );
};

export default AdminAddCourse;