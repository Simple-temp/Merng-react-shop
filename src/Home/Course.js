import { useQuery } from '@apollo/client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GET_ALL_COURSE } from '../graphqlQueres/Queres';
import { addToCart } from '../Redux/Action';

const Course = () => {

    const cart = useSelector((state) => state.handleCart)
    const dispatch = useDispatch()
    const { loading, error, data: coureItem } = useQuery(GET_ALL_COURSE)
    const [ getdata, setGetdata ] = useState([])
    const [ filter, setFilter ] = useState(getdata)

    useEffect(() => {

        const getProducts = async () => {

            const { data } = await axios.get("https://fake-udemy.herokuapp.com/api/course")
            setGetdata(data)
            setFilter(data)
        }
        getProducts()

    }, [])

    const filterCourseitem = (item) => {
        const filterCOurse = getdata.filter((x) => x.category === item)
        setFilter(filterCOurse)
    }

    const addToCartCourse = (c, courseId, quantity) => {
        // console.log(courseId, quantity)
        const existItem = c.find((x)=> x._id === courseId)
        // console.log(existItem)
        // const quantity = existItem ? ++ existItem.quantity : 1
        // console.log(quantity)
        dispatch(addToCart(existItem, quantity))
    }

    return (
        <section>
            <Container>
                <Row>
                    <h3>A broad selection of courses</h3>
                    <p className='mt-1'>Choose from 185,000 online video courses with new additions published every month</p>
                    <div className="control-filter-btn mt-1">
                        <Button variant='outline-dark' className='me-1 mt-1' onClick={() => setFilter(getdata)}>All</Button>
                        <Button variant='outline-dark' className='me-1 mt-1' onClick={() => filterCourseitem("python")}>Python</Button>
                        <Button variant='outline-dark' className='me-1 mt-1' onClick={() => filterCourseitem("excel")}>Excel</Button>
                        <Button variant='outline-dark' className='me-1 mt-1' onClick={() => filterCourseitem("web")}>Web Development</Button>
                        <Button variant='outline-dark' className='me-1 mt-1' onClick={() => filterCourseitem("javascript")}>Javascript</Button>
                        <Button variant='outline-dark' className='me-1 mt-1' onClick={() => filterCourseitem("dataScience")}>Data Science</Button>
                        <Button variant='outline-dark' className='me-1 mt-1' onClick={() => filterCourseitem("aws")}>Aws Certifiction</Button>
                        <Button variant='outline-dark' className='me-1 mt-1' onClick={() => filterCourseitem("drawing")}>Drawing</Button>
                    </div>
                </Row>
                <Row className='mt-3'>
                    {loading ? <h4>Loading..</h4> :
                        error ? console.log(error)
                            :
                            filter.map((course) => {
                                return (
                                    <Col sm={12} md={6} lg={3} className="mt-2" key={course._id}>
                                        <Card className='m-2'>
                                            <Link to={`/course/${course._id}`} className="text-secondary text-decoration-none">
                                                <Card.Img variant="top" src={course.img} className="img-height" />
                                                <Card.Body>
                                                    <Card.Title>{course.name.substring(0, 11)}</Card.Title>
                                                    <Card.Text>
                                                        {course.description.substring(0, 50)}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Link>
                                            <Button variant="outline-dark" className='d-block me-auto mb-3 ms-3' onClick={() => addToCartCourse(filter, course._id, course.quantity)}>Add to cart</Button>
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