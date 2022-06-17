import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import startImg from "../img/2.jpg"

const Business = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={6} className="d-flex justify-content-center align-items-center mt-3">
                        <div className="startDetails">
                            <h3 className="d-flex justify-content-end">Udemy Business</h3>
                            <p className='w-75 d-block ms-auto'>Get unlimited access to 16,000+ of Udemy’s top courses for your team. Learn and improve skills across business, tech, design, and more.</p>
                            <Button variant='dark' className='text-capitalize d-block ms-auto'>
                                Get udemy business
                            </Button>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <img src={startImg} alt="" className='img-fluid d-block' />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Business;