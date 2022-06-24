import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { createUser } from '../Redux/Action';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const SignUpPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault(e)

        try{

            const { data } = await axios.post("http://localhost:4000/api/user/signup",{
                formData
            })
            dispatch(createUser(data))
            localStorage.setItem("userInfo", JSON.stringify(data))
            navigate("/")

        }catch(err){

            console.log(err.message)
            toast.error("This user already taken")

        }

    }

    return (
        <div className='container'>
            <Row>
                <h4 className='text-center my-5'>Sign up</h4>
                <Col md={7} className="mx-auto border p-4 mb-5">
                    <Form onSubmit={handleSubmit} className="mb-5">

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Name" onChange={(e) => handleChange(e)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" onChange={(e) => handleChange(e)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" onChange={(e) => handleChange(e)} required />
                        </Form.Group>

                        <p>Already have an account? <Link to="/login">Sign in</Link></p>

                        <Button variant="outline-dark" type="submit">
                            Sign up
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default SignUpPage;