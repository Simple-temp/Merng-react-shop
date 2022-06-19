import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const AdminCOurseEdit = () => {

    const navigate = useNavigate()
    const params = useParams()
    const { id } = params
    const [formData, setFormData] = useState({})

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

            const { data } = await axios.put(`http://localhost:4000/api/course/updatecourse/${id}`,{
                ...formData
            })
            console.log(data)
            toast.success("Course updated")
            navigate("/admin/course")
            window.location.reload()
        }catch(err){
            console.log(err)
            toast.error("Course do not updated")
        }
    }

    const addNew = () =>{
        navigate("/admin/addcourse")
    }

    return (
        <div>
            <Container>
                <Row>
                    <h4 className='text-center my-5'>Update course</h4>
                    <Col md={7} className="mx-auto border p-4 mb-5">
                        <Form onSubmit={handleSubmit} className="mb-5">
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name='name' onChange={(e) => handleChange(e)} />
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
                                <Form.Label>Total video</Form.Label>
                                <Form.Control type="text" name="totalsell" onChange={(e) => handleChange(e)} />
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
                                Update course
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Button onClick={()=>addNew()} className="mb-5 d-block ms-auto" variant='outline-dark'>Add new Course</Button>
            </Container>
        </div>
    );
};

export default AdminCOurseEdit;