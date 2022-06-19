import { useQuery } from '@apollo/client';
import React from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GET_COURSE_BY_ID } from "../graphqlQueres/Queres"
import { addToCart } from '../Redux/Action';

const CourseDetails = () => {

    const dispatch = useDispatch()
    const params = useParams()
    const { id } = params
    const { loading, error, data } = useQuery(GET_COURSE_BY_ID, {
        variables: {
            courseId: id
        }
    })

    const addToCartCourse = (course, quantity) =>{
        dispatch(addToCart(course, quantity))
    }

    return (
        <div>
            <Container className='py-3 my-5 border'>
                <Row>
                    {
                        loading ? <h4>Loading</h4>
                            : error ? console.log(error)
                                : <>
                                    <Col sm={12} md={8} lg={8}>
                                        <Card className='p-2'>
                                            <Card.Body>
                                                <Card.Title>{data.course.name}</Card.Title>
                                                <Card.Text>
                                                    {data.course.description}
                                                </Card.Text>
                                                <ListGroup>
                                                    <ListGroup.Item>Total video : {data.course.totalsell}</ListGroup.Item>
                                                    <ListGroup.Item>Rating : {data.course.rating}</ListGroup.Item>
                                                    <ListGroup.Item>Price : ${data.course.price}</ListGroup.Item>
                                                </ListGroup>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={4} lg={4}>
                                        <Card className="p-2">
                                            <Card.Img variant="top" src={data.course.img} />
                                            <Button variant="outline-dark" className='mt-3' onClick={()=>addToCartCourse(data.course, data.course.quantity)}>
                                                Add now ${data.course.price}
                                            </Button>
                                        </Card>
                                    </Col>
                                </>
                    }
                </Row>
            </Container>
        </div>
    );
};

export default CourseDetails;