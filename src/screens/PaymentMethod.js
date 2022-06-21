import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePayment } from '../Redux/Action';

const PaymentMethod = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { cart : { paymentMethod } } = useSelector((state)=>state.handleCart)

    const [paymentMethodName, setPaymentMethodName] = useState(
        paymentMethod || "PayPal"
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(savePayment(paymentMethodName))
        localStorage.setItem("paymentMethod",paymentMethodName)
        navigate("/placeorder")
    }

    return (
        <div className='container'>
            <h3 className='my-3 text-center'>Payment method</h3>
            <Row>
                <Col sm={12} md={7} className="mx-auto my-5">
                    <Form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <Form.Check
                                type='radio'
                                id="PayPal"
                                label="PayPal"
                                value="PayPal"
                                checked={paymentMethodName === "PayPal"}
                                onChange={(e) => setPaymentMethodName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <Form.Check
                                type='radio'
                                id="Stripe"
                                label="Stripe"
                                value="Stripe"
                                checked={paymentMethodName === "Stripe"}
                                onChange={(e) => setPaymentMethodName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <Button type='submit' variant='outline-dark'>Continue</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default PaymentMethod;