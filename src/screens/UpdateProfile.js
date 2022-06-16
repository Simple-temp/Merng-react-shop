import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import axios from "axios"
import { UpdateUser } from '../Redux/Action';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.handleCart)
    const cart = useSelector((state) => state.handleCart)
    const [formData, setFormData] = useState({})
    // const [username, setUserame] = useState(user.userInfo.name)
    // const [useremail, setUseremail] = useState(user.userInfo.email)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault(e)
        console.log(formData)

        try {

            const { data } = await axios.put("http://localhost:4000/api/user/updateprofile",
                {
                    formData
                },
                {
                    headers: { authorization: `Bearer ${user.userInfo.token}` }
                }
            )
            console.log(data)
            dispatch(UpdateUser(data))
            localStorage.setItem("userInfo", JSON.stringify(data))
            toast.success("Profile update successfully")
        } catch (err) {
            console.log(err.message)
            toast.error("Profile do not update")
        }

    }

    const deleteit = (id) =>{
        console.log(id)
    }

    const deleteOwnAccount = (id) =>{
        if(cart.cart.cartItem !== 0){
            deleteit(id)
            // toast.success("Account remove!")
            // navigate("/login")
        }else{
            // toast.error("Please remove your all order..then delete")
        }
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
                                    : <Button variant='outline-danger' onClick={()=>deleteOwnAccount(user.userInfo._id)}>Remove Account</Button>
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