import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNIN_USER } from '../grapgqlMutation/Mutations';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginUser } from '../Redux/Action';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LoginPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({})
    const [signin, { loading, error, data }] = useMutation(SIGNIN_USER,{
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
        signin({
            variables: {
                signIn: formData
            }
        })
        dispatch(loginUser(formData))
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
            <Row>
                <h4 className='text-center my-5'>Log In</h4>
                <Col md={7} className="mx-auto border p-4 mb-5">
                    <Form onSubmit={handleSubmit} className="mb-5">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" onChange={(e) => handleChange(e)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" onChange={(e) => handleChange(e)} required />
                        </Form.Group>

                        <p>Don't have any account? <Link to="/signup">Sign up</Link></p>

                        <Button variant="outline-dark" type="submit">
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default LoginPage;