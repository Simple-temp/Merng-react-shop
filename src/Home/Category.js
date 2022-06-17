import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Design from "../img/design.jpg"
import busines from "../img/business.jpg"
import development from "../img/development.jpg"
import marketing from "../img/marketing.jpg"
import music from "../img/music.jpg"
import personaldevelopment from "../img/personal-development-.jpg"
import photography from "../img/photography-.jpg"
import software from "../img/software.jpg"


const Category = () => {
    return (
        <section>
            <Container>
                <Row>
                    <h3>Top categories</h3>
                    <Col md={6} lg={3}>
                        <div className="img-box m-2">
                            <img src={Design} alt="" className='img-fluid d-block w-100' />
                            <p className='fw-bold my-3'>Design</p>
                        </div>
                    </Col>
                    <Col md={6} lg={3}>
                        <div className="img-box m-2">
                            <img src={busines} alt="" className='img-fluid d-block w-100' />
                            <p className='fw-bold my-3'>Busines</p>
                        </div>
                    </Col>
                    <Col md={6} lg={3}>
                        <div className="img-box m-2">
                            <img src={development} alt="" className='img-fluid d-block w-100' />
                            <p className='fw-bold my-3'>Development</p>
                        </div>
                    </Col>
                    <Col md={6} lg={3}>
                        <div className="img-box m-2">
                            <img src={marketing} alt="" className='img-fluid d-block w-100' />
                            <p className='fw-bold my-3'>Marketing</p>
                        </div>
                    </Col>
                    <Col md={6} lg={3}>
                        <div className="img-box m-2">
                            <img src={music} alt="" className='img-fluid d-block w-100' />
                            <p className='fw-bold my-3'>Music</p>
                        </div>
                    </Col>
                    <Col md={6} lg={3}>
                        <div className="img-box m-2">
                            <img src={personaldevelopment} alt="" className='img-fluid d-block w-100' />
                            <p className='fw-bold my-3'>Personal-Development</p>
                        </div>
                    </Col>
                    <Col md={6} lg={3}>
                        <div className="img-box m-2">
                            <img src={photography} alt="" className='img-fluid d-block w-100' />
                            <p className='fw-bold my-3'>Photography</p>
                        </div>
                    </Col>
                    <Col md={6} lg={3}>
                        <div className="img-box m-2">
                            <img src={software} alt="" className='img-fluid d-block w-100' />
                            <p className='fw-bold my-3'>Software</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Category;