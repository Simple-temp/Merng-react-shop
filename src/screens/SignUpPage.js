import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../grapgqlMutation/Mutations';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { createUser } from '../Redux/Action';
import { Link, useNavigate } from 'react-router-dom';

const SignUpPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({})
    const [signup, { loading, error, data }] = useMutation(SIGNUP_USER,{
        onCompleted(data) {
            localStorage.getItem("userInfo")
            navigate("/")
            // window.location.reload()
        }
    })
    console.log(data)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(e)
        console.log(formData)
        signup({
            variables: {
                signupuser : formData
            }
        })
        dispatch(createUser(formData))
        localStorage.setItem("userInfo", JSON.stringify(formData))
    }

    return (
        <div className='container'>
            {
                loading && <h4>Loading...</h4>
            }
            {
                error && <Alert variant="danger" className='mt-3'>{error.message}</Alert>
            }
            {
                data && data.user && <Alert variant="success" className='mt-3'>Welcome {data.user.name}..please login your account</Alert>
            }
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