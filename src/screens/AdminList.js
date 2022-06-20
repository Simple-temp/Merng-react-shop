import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Alert, Badge, Button, Col, Form, ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { GET_ALL_USER } from '../graphqlQueres/Queres';
import { toast } from 'react-toastify';
import { DELETE_ADMIN, DELETE_ADMIN_BY_ID } from '../grapgqlMutation/Mutations';

const AdminList = () => {

    const loginuser = useSelector((state) => state.handleCart)
    const { loading, error, data } = useQuery(GET_ALL_USER)
    const [ deleteadmin ] = useMutation(DELETE_ADMIN)
    const [ deleteadminbyid ] = useMutation(DELETE_ADMIN_BY_ID)
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        deleteadmin({
            variables : {
                deleteId : {
                    email
                }
            }
        })
        toast.success("Admin Delete Successfully")
        window.location.reload()
    }

    const deleteAdmin = (id) =>{
        console.log(id)
        deleteadminbyid({
            variables : {
                deleteById : id
            }
        })
        toast.success("Admin Delete Successfully")
        window.location.reload()
    }

    return (
        <div className='container'>
            {
                data && data.users.length === 0 && <Alert variant="primary" className='mt-3'>Empty Admin..</Alert>
            }
            <Row className='my-3'>
                <Col sm={12} md={5} lg={5}>
                    <Form onSubmit={handleSubmit} className="m-2">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>
                        <Button variant="dark" type="submit">
                            Cancel an Admin
                        </Button>
                    </Form>
                </Col>
                <Col sm={12} md={7} lg={7}>
                    <ListGroup className="m-2">
                        <div className="fw-bold pb-2">Admin List</div>
                        {
                            loading ? <h4>Loading</h4>
                                : error ? console.log(error)
                                    : data.users.map((user, index) => {
                                        return (
                                            <div key={user._id}>
                                                {
                                                    user.isAdmin && <ListGroup.Item>
                                                        <span>{index + 1}. </span>
                                                        {
                                                            user.email === loginuser.userInfo.email ? "Your are " : user.email
                                                        }
                                                        {
                                                            user.isAdmin && <Badge bg="success" className='ms-2'>Admin</Badge> 
                                                        }
                                                        {
                                                            loginuser.userInfo.name === user.name
                                                                ? <Button variant='outline-danger' className='d-block ms-auto me-2 mb-2' disabled><i className="fa-solid fa-trash-can"></i></Button>
                                                            : <Button variant='outline-danger' className='d-block ms-auto me-2 mb-2' onClick={()=>deleteAdmin(user._id)}><i className="fa-solid fa-trash-can"></i></Button>
                                                        }
                                                    </ListGroup.Item>
                                                }
                                            </div>
                                        )
                                    })
                        }
                    </ListGroup>
                </Col>
            </Row>
        </div>
    );
};

export default AdminList;

//Math.random().toString(36)