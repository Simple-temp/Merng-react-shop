import { useQuery } from '@apollo/client';
import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { GET_ALL_COURSE } from '../graphqlQueres/Queres';

const Course = () => {

    const { loading, error, data } = useQuery(GET_ALL_COURSE)
    // console.log(data)

    return (
        <section>
            <Container>
                <Row>
                    <h3>A broad selection of courses</h3>
                    <p className='mt-1'>Choose from 185,000 online video courses with new additions published every month</p>
                    <div className="control-filter-btn mt-1">
                        <Button variant='outline-dark' className='me-1 mt-1'>Python</Button>
                        <Button variant='outline-dark' className='me-1 mt-1'>Excel</Button>
                        <Button variant='outline-dark' className='me-1 mt-1'>Web Development</Button>
                        <Button variant='outline-dark' className='me-1 mt-1'>Javascript</Button>
                        <Button variant='outline-dark' className='me-1 mt-1'>Data Science</Button>
                        <Button variant='outline-dark' className='me-1 mt-1'>Aws Certifiction</Button>
                        <Button variant='outline-dark' className='me-1 mt-1'>Drawing</Button>
                    </div>
                </Row>
                <Row className='mt-3'>
                    {loading ? <h4>Loading..</h4> :
                        error ? console.log(error)
                            :
                            data.courses.map((course) => {
                                return (
                                    <Col sm={12} md={6} lg={3} className="mt-2" key={course._id}>
                                        <Card className='m-2'>
                                            <Card.Img variant="top" src={course.img} className="img-height"/>
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Course;