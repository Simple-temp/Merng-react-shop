import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import startImg from "../img/1.jpg"

const StartToday = () => {
    return (
        <section>
            <Container className='start-section'>
                <Row>
                    <Col sm={12} md={6} lg={6} className="d-flex justify-content-end">
                        <img src={startImg} alt="" className='img-fluid d-block'/>
                    </Col>
                    <Col sm={12} md={6} lg={6} className="d-flex justify-content-center align-items-center mt-3">
                        <div className="startDetails ps-4">
                            <h3>Become an instructor</h3>
                            <p className='w-75'>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                            <Button variant='dark' className='text-capitalize'>
                                Start teaching today
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default StartToday;