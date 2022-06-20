import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { GET_ALL_USER } from '../graphqlQueres/Queres';
import Modal from 'react-modal';
import { DELETE_USER, MAKE_ADMIN } from '../grapgqlMutation/Mutations';
import { toast } from 'react-toastify';

const customStyles = {
    content: {
        height: "250px",
        width: "340px",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


const AdminAllUser = () => {

    const { loading, error, data } = useQuery(GET_ALL_USER)
    const [ makeAadmin ] = useMutation(MAKE_ADMIN)
    const [ deleteuser  ] = useMutation(DELETE_USER)
    const [ email, setEmail ] = useState("")

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleRemove = async (id) => {
        console.log(id)
        deleteuser({
            variables : {
                userId : id
            }
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        makeAadmin({
            variables : {
                UserId : {
                    email
                }
            }
        })
        toast.success("Admin Make Successfully")
        window.location.reload()
    }

    return (
        <div className='container'>
            {
                data && data.users && data.users.length === 0 && <Alert variant="primary" className='mt-3'>Empty User..</Alert>
            }
            <Alert variant="info" className='mt-3'>Total users : {data && data.users && data.users.length}</Alert>
            <Col lg={5} className="d-block ms-auto">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Make an Admin
                    </Button>
                </Form>
            </Col>
            <Row>
                <Col lg={12} className="mt-3">
                    {
                        loading ? <h4>Loading...</h4>
                            : error ? console.log(error)
                                : <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>NAME</th>
                                            <th>EMAIL</th>
                                            <th>ISADMIN</th>
                                            <th>ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.users.map((users) => (
                                            <tr key={users._id}>
                                                <td data-label="ID">{users._id}</td>
                                                <td data-label="NAME">{users.name}</td>
                                                <td data-label="EMAIL">{users.email}</td>
                                                <td data-label="ISADMIN">
                                                    {
                                                        users.isAdmin ? <Button variant="outline-success">Admin</Button>
                                                            : <Button variant="outline-danger">Not Admin</Button>
                                                    }
                                                </td>
                                                <td data-label="ACTION">
                                                    <Modal
                                                        isOpen={modalIsOpen}
                                                        onRequestClose={closeModal}
                                                        style={customStyles}
                                                    >
                                                        <h4 className='text-center mt-5'>Are you sure ?</h4>
                                                        <div className='confirm-box__actions mt-3 d-flex'>
                                                            <button onClick={() => handleRemove(users._id)} className="outline-success">Confirm</button>
                                                            <button onClick={closeModal} className="outline-danger">Cancel</button>
                                                        </div>
                                                    </Modal>
                                                    {
                                                        users.isAdmin ? <Button variant="outline-danger" onClick={openModal} disabled><i className="fa-solid fa-trash-can"></i></Button>
                                                            : <Button variant="outline-danger" onClick={openModal}><i className="fa-solid fa-trash-can"></i></Button>
                                                    }

                                                </td>
                                            </tr>
                                        ))
                                        }
                                    </tbody>
                                </table>
                    }
                </Col>
            </Row>
        </div>
    );
};

export default AdminAllUser;