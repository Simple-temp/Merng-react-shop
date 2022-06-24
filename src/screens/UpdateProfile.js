import React, { useEffect, useReducer, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import axios from "axios"
import { logOutUser, UpdateUser } from '../Redux/Action';
import { useNavigate } from 'react-router-dom';
import { DELETE_USER } from '../grapgqlMutation/Mutations';
import { useMutation } from "@apollo/client"

const UpdateProfile = () => {

    const navigate = useNavigate()
    const dispatchs = useDispatch()
    const user = useSelector((state) => state.handleCart)
    const [formData, setFormData] = useState({})
    const [deleteuser] = useMutation(DELETE_USER)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault(e)

        try {

            const { data } = await axios.put("https://fake-udemy.herokuapp.com/api/user/updateprofile",
                {
                    formData
                },
                {
                    headers: { authorization: `Bearer ${user.userInfo.token}` }
                }
            )
            console.log(data)
            dispatchs(UpdateUser(data))
            localStorage.setItem("userInfo", JSON.stringify(data))
            toast.success("Profile update successfully")
        } catch (err) {
            console.log(err.message)
            toast.error("Profile do not update")
        }

    }

    const deleteOwnAccount = (id, user) =>{

            deleteuser({
                variables : {
                    userId : id
                }
            })
            localStorage.removeItem("userInfo")
            dispatchs(logOutUser(user))
            toast.success("Account remove!")
            navigate("/login")
            window.location.reload()

    }

    return (
        <div className='container'>
            <Card variant="flush" className='mt-3'>
                <h5 className='mt-2 ms-3'>Account Info :</h5>
                <Row>
                    <Col md={3}>
                        <Card.Body>
                            <Card.Title>Name</Card.Title>
                            <Card.Text>
                                {user.userInfo.name}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col md={3}>
                        <Card.Body>
                            <Card.Title>Email</Card.Title>
                            <Card.Text>
                                {user.userInfo.email}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col md={3}>
                        <Card.Body>
                            <Card.Title>IsAdmin</Card.Title>
                            <Card.Text>
                                {
                                    user.userInfo.isAdmin ? <Button variant='success'>Enable</Button> : <Button variant='danger'>Disabled</Button>
                                }
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col md={3}>
                        <Card.Body>
                            <Card.Text>
                                {
                                    user.userInfo.isAdmin ? <Button variant='outline-danger' disabled >Remove Account</Button>
                                    : <Button variant='outline-danger' onClick={()=>deleteOwnAccount(user.userInfo._id, user.userInfo)}>Remove Account</Button>
                                }
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            <Row>
                <h4 className='text-center my-5'>Update profile</h4>
                <Col md={7} className="mx-auto border p-4 mb-5">
                    <Form onSubmit={handleSubmit} className="mb-5">

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Name" onChange={(e) => handleChange(e)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" onChange={(e) => handleChange(e)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" onChange={(e) => handleChange(e)} required />
                        </Form.Group>

                        <Button variant="outline-dark" type="submit">
                            Update
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default UpdateProfile;