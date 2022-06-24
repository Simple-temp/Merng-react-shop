import React from 'react';
import { GET_ALL_ORDER } from '../graphqlQueres/Queres';
import { useQuery, useMutation } from "@apollo/client"
import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { DELETE_ORDER, ORDER_DELIVERED } from '../grapgqlMutation/Mutations';
import { toast } from 'react-toastify';

const AllOrders = () => {

    const { loading, error, data } = useQuery(GET_ALL_ORDER)
    const [deleteorder] = useMutation(DELETE_ORDER)
    const [orderdelevered] = useMutation(ORDER_DELIVERED)
    const navigate = useNavigate()

    const handleRemove = (id) => {
        deleteorder({
            variables : {
                orderId : id
            }
        })
        toast.success("Order delete")
        window.location.reload()
    }

    const deliveried = (id) =>{
        orderdelevered({
            variables : {
                OrderId : id
            }
        })
        toast.success("Order Delivered!")
        window.location.reload()
    }

    return (
        <div className='container'>
            <Row>
                <Col lg={12}>
                    {
                        loading ? <h4>Loading...</h4>
                            : error ? console.log(error)
                                : <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>DATE</th>
                                            <th>TOTAL</th>
                                            <th>PAID</th>
                                            <th>DELIVERED</th>
                                            <th>DETAILS</th>
                                            <th>ACTION</th>
                                        </tr>
                                    </thead>
                                    {
                                        data.order && data.order.length === 0 ? <span className='text-secondary'>No Order Available</span>
                                            : <tbody>
                                                {data.order.map((order) => (
                                                    <tr key={order._id}>
                                                        <td data-label="ID">{order._id}</td>
                                                        <td data-label="DATE">{ new Date(order.sellAt).toDateString() }</td>
                                                        <td data-label="TOTAL">${order.totalPrice.toFixed(2)}</td>
                                                        <td data-label="PAID">{order.isPaid ? <Button variant="outline-success">Paid at {order.paidAt.substring(0, 10)}</Button> : <Button variant="outline-danger">Not Paid</Button>}</td>
                                                        <td data-label="DELIVERED">{
                                                            order.isSelled
                                                                ? <Button variant="outline-success">Delivered {new Date(order.sellAt).toDateString()}</Button>
                                                                : <Button variant="outline-danger" onClick={()=> deliveried (order._id)}>Click to Delivered</Button>
                                                        }
                                                        </td>
                                                        <td data-label="DETAILS">
                                                            <Button type="button" variant="outline-secondary" onClick={() => navigate(`/order/${order._id}`)}>
                                                                Details
                                                            </Button>
                                                        </td>
                                                        <td data-label="ACTION">
                                                            <Button variant="outline-danger" onClick={() => handleRemove(order._id)}><i className="fa-solid fa-trash-can"></i></Button>
                                                        </td>
                                                    </tr>
                                                ))
                                                }
                                            </tbody>
                                    }
                                </table>
                    }
                </Col>
            </Row>
        </div>
    );
};

export default AllOrders;
//order.sellAt.substring(0, 10)