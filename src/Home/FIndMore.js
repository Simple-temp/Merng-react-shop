import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import startImg from "../img/3.jpg"

const FIndMore = () => {
    return (
        <section>
            <Container className='start-section'>
                <Row>
                    <Col sm={12} md={6} lg={6} className="d-flex justify-content-end">
                        <img src={startImg} alt="" className='img-fluid d-block' />
                    </Col>
                    <Col sm={12} md={6} lg={6} className="d-flex justify-content-center align-items-center mt-3">
                        <div className="startDetails ps-4">
                            <h3>Transform your life through education</h3>
                            <p className='w-75'>Learners around the world are launching new careers, advancing in their fields, and enriching their lives..</p>
                            <Button variant='dark' className='text-capitalize'>
                                find out how
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FIndMore;