import axios from 'axios';
import React, { useReducer } from 'react';
import { useEffect } from 'react';
import { Alert, Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return { ...state, loading: true }
        case "FETCH_SUCCESS":
            return { ...state, loading: false, order: action.payload }
        case "FETCH_FAIL":
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

const OrderDetails = () => {

    const user = useSelector((state) => state.handleCart)
    const params = useParams()
    const { id } = params
    const [{ loading, error, order }, dispatch] = useReducer(reducer, {
        loading: true,
        error: ""
    })

    useEffect(() => {

        const fetchOrder = async () => {
            dispatch({ type: "FETCH_REQUEST" })
            try {
                const { data } = await axios.get(`https://fake-udemy.herokuapp.com/api/order/${id}`,
                    {
                        headers: { authorization: `Bearer ${user.userInfo.token}` }
                    }
                )
                dispatch({ type: "FETCH_SUCCESS", payload: data })

            } catch (err) {
                dispatch({ type: "FETCH_FAIL", payload: err })
            }
        }
        fetchOrder()

    }, [])

    const paymentBtn = () =>{
        toast.error("Working on it..coming soon")
    }

    return (
        <div>
            <Container className='my-2'>
                <Row>
                    {
                        loading ? <h4>Loading...</h4>
                            : error ? console.log(error)
                                : <>
                                    <Col md={8} lg={8}>
                                        <h4>Order Id : {id}</h4>
                                        <Card className='mt-1'>
                                            {
                                                order.isPaid
                                                    ? <Alert variant='success'> <b>Paied At:</b> {new Date(order.paidAt).toDateString()}</Alert>
                                                    : <Alert variant='danger'> <b>Paid:</b>  Not paid</Alert>
                                            }
                                        </Card>
                                        <Card className='mt-1'>
                                            {
                                                order.isSelled
                                                    ? <Alert variant='success'> <b>Delivered At:</b>  {new Date(order.sellAt).toDateString()}</Alert>
                                                    : <Alert variant='danger'> <b>Delivered:</b>  Not Delivered</Alert>
                                            }
                                        </Card>
                                        <Card className='mt-1'>
                                            <Alert variant='info'> <b>Payment:</b> {order.paymentMethod}</Alert>
                                        </Card>
                                        <ListGroup className='mt-1'>
                                            {
                                                order.orderitem.map((item) => (
                                                    <ListGroup.Item key={item._id}>
                                                        <Row>
                                                            <Col md={6} lg={4} className="mt-1">
                                                                <h5>Name: {item.name}</h5>
                                                                <p>Description: {item.description}</p>
                                                            </Col>
                                                            <Col md={6} lg={4} className="mt-1">
                                                                <h5>Category: {item.category}</h5>
                                                                <p>Quantity: {item.quantity}</p>
                                                            </Col>
                                                            <Col md={6} lg={4} className="mt-1">
                                                                <img src={item.img} className="img-fluid h-50" alt="" />
                                                                <h5 className='mt-2'>Price: ${item.price}</h5>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                ))
                                            }
                                        </ListGroup>
                                    </Col>
                                    <Col md={4} lg={4}>
                                        <Card className='p-3'>
                                            <ListGroup variant="flush">
                                                <h3 className="ms-3">Order Summary</h3>
                                                <ListGroup.Item>Total Item : {order.orderitem.length}</ListGroup.Item>
                                                <ListGroup.Item>Total Item Price : ${order.itemprice}</ListGroup.Item>
                                                <ListGroup.Item>Total Price : ${order.totalPrice}</ListGroup.Item>
                                            </ListGroup>
                                        </Card>
                                        {
                                            order.paymentMethod === "PayPal"
                                                ? <Button variant='outline-dark' className='ms-2 mt-2' onClick={()=>paymentBtn()}>PayPal</Button>
                                                : <Button variant='outline-dark' className='ms-2 mt-2' onClick={()=>paymentBtn()}>Stripe</Button>
                                        }
                                    </Col>
                                </>
                    }
                </Row>
            </Container>
        </div>
    );
};

export default OrderDetails;