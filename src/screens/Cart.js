import React from 'react';
import { Alert, Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeCart } from '../Redux/Action';

const Cart = () => {

    const cart = useSelector((state) => state.handleCart)

    const dispatch = useDispatch()

    const addToCartCourse = (course, quantity) => {
        dispatch(addToCart(course, quantity))
    }

    const handleDelete = (course) => {
        dispatch(removeCart(course))
    }

    const itemPrice = cart.cart.cartItem.reduce((a, c) => a + c.quantity * c.price, 0)
    const totalTax = itemPrice * 10 / 100
    const totalPrice = itemPrice + totalTax

    return (
        <div className='container'>
            {
                cart.cart.cartItem.length > 0 && <h1 className='my-3'>Shopping cart</h1>
            }
            {
                cart.cart.cartItem.length === 0 && <Alert variant="primary" className='mt-3'>Empty cart..go to buy a course <Link to="/">home</Link></Alert>
            }
            <Row>
                <Col md={8}>
                    {
                        cart.cart.cartItem.map(product => (
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
                                    <Button className="mx-1" disabled={product.quantity === 1} variant="outline-dark" onClick={() => addToCartCourse(product, product.quantity - 1)}>
                                        <i className="fa-solid fa-minus"></i>
                                    </Button>
                                    <span className='mx-2'>{product.quantity}</span>
                                    <Button className="mx-1" variant="outline-dark" onClick={() => addToCartCourse(product, product.quantity + 1)}>
                                        <i className="fa-solid fa-plus"></i>
                                    </Button>
                                </Col>
                                <Col md={3} className="p-1 border d-flex align-items-center justify-content-center">
                                    <Button variant="outline-dark" onClick={() => handleDelete(product)}>
                                        <i className="fa-solid fa-trash-can"></i>
                                    </Button>
                                </Col>
                            </Row>
                        ))
                    }
                </Col>
                <Col md={4} className="my-2">
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Total Item : {cart.cart.cartItem.length}</ListGroup.Item>
                            <ListGroup.Item>Total Item Price : ${itemPrice.toFixed(2)}</ListGroup.Item>
                            <ListGroup.Item>Total tax : {totalTax.toFixed(2)}</ListGroup.Item>
                            <ListGroup.Item>Total Price : ${totalPrice.toFixed(2)}</ListGroup.Item>
                            <Button variant='outline-dark' className='py-3 m-2' >Go</Button>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Cart;