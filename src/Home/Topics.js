import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Topics = () => {
    return (
        <section>
            <Container>
                <Row>
                    <h3 className='mb-3'>Featured topics by category</h3>
                    <Col sm={12} md={6} lg={3} className="mt-2">
                        <h4>Development</h4>
                        <ul className='topices-ul mt-4'>
                            <li className='mb-3'>
                                <Link to="/"><h6>Python</h6></Link>
                                <span>35,327,832 students</span>
                            </li>
                            <li className='mb-3'>
                                <Link to="/"><h6>Web Development</h6></Link>
                                <span>11,047,108 students</span>
                            </li>
                            <li className='mb-3'>
                                <Link to="/"><h6>Machine Learning</h6></Link>
                                <span>6,955,922 students</span>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={12} md={6} lg={3} className="mt-2">
                        <h4>Business</h4>
                        <ul className='topices-ul mt-4'>
                            <li className='mb-3'>
                                <Link to="/"><h6>Financial Analysis</h6></Link>
                                <span>1,183,179 students</span>
                            </li>
                            <li className='mb-3'>
                                <Link to="/"><h6>SQL</h6></Link>
                                <span>5,689,783 students</span>
                            </li>
                            <li className='mb-3'>
                                <Link to="/"><h6>PMP</h6></Link>
                                <span>1,672,471 students</span>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={12} md={6} lg={3} className="mt-2">
                        <h4>IT and Software</h4>
                        <ul className='topices-ul mt-4'>
                            <li className='mb-3'>
                                <Link to="/"><h6>AWS Certification</h6></Link>
                                <span>5,682,403 students</span>
                            </li>
                            <li className='mb-3'>
                                <Link to="/"><h6>Ethical Hacking</h6></Link>
                                <span>10,633,094 students</span>
                            </li>
                            <li className='mb-3'>
                                <Link to="/"><h6>Cyber Security</h6></Link>
                                <span>3,876,984 students</span>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={12} md={6} lg={3} className="mt-2">
                        <h4>Design</h4>
                        <ul className='topices-ul mt-4'>
                            <li className='mb-3'>
                                <Link to="/"><h6>Photoshop</h6></Link>
                                <span>10,683,239 students</span>
                            </li>
                            <li className='mb-3'>
                                <Link to="/"><h6>Graphic Design</h6></Link>
                                <span>3,289,863 students</span>
                            </li>
                            <li className='mb-3'>
                                <Link to="/"><h6>Drawing</h6></Link>
                                <span>2,418,777 students</span>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Button variant="outline-dark"className='mt-3'>Explore more topic</Button>
            </Container>
        </section>
    );
};

export default Topics;

// Development
// Python
// 35,327,832 students
// Web Development
// 11,047,108 students
// Machine Learning
// 6,955,922 students

// Business
// Financial Analysis
// 1,183,179 students
// SQL
// 5,689,783 students
// PMP
// 1,672,471 students


// IT and Software
// AWS Certification
// 5,682,403 students
// Ethical Hacking
// 10,633,094 students
// Cyber Security
// 3,876,984 students

// Design
// Photoshop
// 10,683,239 students
// Graphic Design
// 3,289,863 students
// Drawing
// 2,418,777 students