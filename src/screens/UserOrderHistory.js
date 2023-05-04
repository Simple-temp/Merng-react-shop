import React, { useEffect, useReducer, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import axois from "axios";
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { useMutation } from "@apollo/client";
import { toast } from 'react-toastify';
import { DELETE_ORDER } from '../grapgqlMutation/Mutations';


const reducer = (state, action) => {

    switch (action.type) {

        case "FETCH_REQUEST":
            return { ...state, loading: true }
        case "FETCH_SUCCESS":
            return { ...state, loading: false, orders: action.payload }
        case "FETCH_FAiL":
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }

}

const UserOrderHistory = () => {

    const [deleteorder] = useMutation(DELETE_ORDER)
    const user = useSelector((state) => state.handleCart)
    const navigate = useNavigate()

    const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
        loading: true,
        error: ""
    })

    useEffect(() => {

        const fetchOrder = async () => {
            dispatch({ type: "FETCH_REQUEST" })
            try {
                const { data } = await axois.get(`https://udemy-j7sz.onrender.com/api/order/author`,
                    {
                        headers: { authorization: `Bearer ${user.userInfo.token}` }
                    }
                )
                dispatch({ type: "FETCH_SUCCESS", payload: data })
            } catch (err) {
                dispatch({ type: "FETCH_FAiL", payload: err })
                console.log(err)
            }
        }
        fetchOrder()

    }, [])

    const handleRemove = (id) => {
        deleteorder({
            variables : {
                orderId : id
            }
        })
        toast.success("Order delete")
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
                                        orders.length === 0 ? <h5 className='text-secondary'>No Order Available</h5>
                                            : <tbody>
                                                {orders.map((order) => (
                                                    <tr key={order._id}>
                                                        <td data-label="ID">{order._id}</td>
                                                        <td data-label="DATE">{order.sellAt.substring(0, 10)}</td>
                                                        <td data-label="TOTAL">${order.totalPrice.toFixed(2)}</td>
                                                        <td data-label="PAID">{order.isPaid ? <Button variant="outline-success">Paid at {order.paidAt.substring(0, 10)}</Button> : <Button variant="outline-danger">Not Paid</Button>}</td>
                                                        <td data-label="DELIVERED">{
                                                            order.isSelled
                                                                ? <Button variant="outline-success">Delivered{order.sellAt.substring(0, 10)}</Button>
                                                                : <Button variant="outline-danger">Not Delivered</Button>
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

export default UserOrderHistory;