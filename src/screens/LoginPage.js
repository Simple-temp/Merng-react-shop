import React, { useState } from 'react';
import axios from "axios"
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginUser } from '../Redux/Action';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault(e)
        // console.log(formData)

        try{

            const { data } = await axios.post("https://fake-udemy.herokuapp.com/api/user/signin",{
                formData
            })
            // console.log(data)
            dispatch(loginUser(data))
            localStorage.setItem("userInfo", JSON.stringify(data))
            navigate("/")

        }catch(err){

            console.log(err.message)
            toast.error("Invalid email and password")

        }
    }

    return (
        <div className='container'>
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
                        <p><Link to="/newpassword">Fotget password?</Link></p>

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