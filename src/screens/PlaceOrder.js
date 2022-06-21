import { useSelector, useDispatch } from "react-redux"
import React from 'react';
import { useNavigate } from "react-router-dom"
import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { clearCart, removeCart } from "../Redux/Action";
import axois from "axios"

const PlaceOrder = () => {

    const navigate = useNavigate()
    const item = useSelector((state) => state.handleCart)

    const dispatch = useDispatch()

    const handleDelete = (course) => {
        dispatch(removeCart(course))
    }

    const itemprice = item.cart.cartItem.reduce((a, c) => a + c.quantity * c.price, 0)
    const totalTax = itemprice * 10 / 100
    const totalPrice = itemprice + totalTax

    const placeOrderhandle = async () => {
        try {
            const { data } = await axois.post("http://localhost:4000/api/order",
                {
                    orderitem: item.cart.cartItem,
                    paymentMethod: item.cart.paymentMethod,
                    itemprice: itemprice,
                    totalPrice: totalPrice,
                },
                {
                    headers: { authorization: `Bearer ${item.userInfo.token}` }
                }
            )
            dispatch(clearCart())
            localStorage.removeItem("cartItem")
            navigate(`/order/${data.order._id}`)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <Container className='my-3'>
                <Row>
                    <Col sm={12} md={8}>
                        <ListGroup>
                            <ListGroup.Item> <b>Payment method</b> : {item.cart.paymentMethod}</ListGroup.Item>
                            <Link to="/payment">
                                <Button variant='outline-dark' className="my-2">Edit</Button>
                            </Link>
                        </ListGroup>
                        {
                            item.cart.cartItem.map((product) => (
                                <Row key={product._id} className="my-2 border">
                                    <Col md={3} className="d-flex align-items-center justify-content-center p-1 border">
                                        <img src={product.img} className="img-fluid h-50" alt="" />
                                    </Col>
                                    <Col md={3} className="d-flex align-items-center justify-content-center p-1 border">
                                        <Link to={`/course/${product._id}`}>
                                            <h6>{product.name}</h6>
                                        </Link>
                                    </Col>
                                    <Col md={3} className="d-flex align-items-center justify-content-center p-1 border">
                                        <span className='mx-2'>{product.quantity}</span>
                                    </Col>
                                    <Col md={3} className="p-1 border d-flex align-items-center justify-content-center">
                                        <Button variant="outline-dark" onClick={() => handleDelete(product)}>
                                            <i className="fa-solid fa-trash-can"></i>
                                        </Button>
                                    </Col>
                                </Row>
                            ))
                        }
                        <Link to="/cart">
                            <Button variant='outline-dark' className="my-2">Edit</Button>
                        </Link>
                    </Col>
                    <Col sm={12} md={4}>
                        <Card>
                            <ListGroup variant="flush">
                                <h3 className="ms-3">Order Summary</h3>
                                <ListGroup.Item>Total Item : {item.cart.cartItem.length}</ListGroup.Item>
                                <ListGroup.Item>Total Item Price : ${itemprice.toFixed(2)}</ListGroup.Item>
                                <ListGroup.Item>Total tax : {totalTax.toFixed(2)}</ListGroup.Item>
                                <ListGroup.Item>Total Price : ${totalPrice.toFixed(2)}</ListGroup.Item>
                            </ListGroup>
                            <Button variant='outline-dark' className='py-3 m-2 d-block w-100' onClick={()=>placeOrderhandle()}>Submit order</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PlaceOrder;