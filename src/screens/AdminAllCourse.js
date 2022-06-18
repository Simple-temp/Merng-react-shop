import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Alert, Button, Col, Row } from 'react-bootstrap';
import { GET_ALL_COURSE } from '../graphqlQueres/Queres';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { DELETE_COURSE } from '../grapgqlMutation/Mutations';
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


const AdminAllCourse = () => {

    const { loading, error, data } = useQuery(GET_ALL_COURSE)
    const [deletesinglecourse] = useMutation(DELETE_COURSE)

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleRemove = async (id) => {
        console.log(id)
        deletesinglecourse({
            variables : {
                courseId : id
            }
        })
        toast.success("Deleted Successfully")
        window.location.reload()
    }

    return (
        <div className='container'>
            {
                data && data.courses && data.courses.length === 0 ? <Alert variant="primary" className='mt-3'>Empty Course..</Alert>
                    : <Alert variant="info" className='mt-3'>Total course : {data && data.courses && data.courses.length}</Alert>
            }
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
                                            <th>CATEGORY</th>
                                            <th>IMAGE</th>
                                            <th>DESCRIPTION</th>
                                            <th>PRICE</th>
                                            <th>DELETE</th>
                                            <th>EDIT</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.courses.map((courses) => (
                                            <tr key={courses._id}>
                                                <td data-label="ID">{courses._id}</td>
                                                <td data-label="NAME">{courses.name}</td>
                                                <td data-label="CATEGORY">{courses.category}</td>
                                                <td data-label="IMAGE">
                                                    <img src={courses.img} alt="" className='img-fluid d-block courser-img' />
                                                </td>
                                                <td data-label="DESCRIPTION">{courses.description}</td>
                                                <td data-label="PRICE">${courses.price}</td>
                                                <td data-label="DELETE">
                                                    <Modal
                                                        isOpen={modalIsOpen}
                                                        onRequestClose={closeModal}
                                                        style={customStyles}
                                                    >
                                                        <h4 className='text-center mt-5'>Are you sure ?</h4>
                                                        <div className='confirm-box__actions mt-3 d-flex'>
                                                            <button onClick={() => handleRemove(courses._id)} className="outline-success">Confirm</button>
                                                            <button onClick={closeModal} className="outline-danger">Cancel</button>
                                                        </div>
                                                    </Modal>
                                                    <Button variant="outline-danger" onClick={openModal}><i className="fa-solid fa-trash-can"></i></Button>
                                                </td>
                                                <td data-label="EDIT">
                                                    <Link to={`/admin/courseedit/${courses._id}`}>
                                                        <Button variant='outline-info'>Edit</Button>
                                                    </Link>
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

export default AdminAllCourse;