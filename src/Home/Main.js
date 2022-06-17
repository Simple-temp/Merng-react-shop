import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Main = () => {
    return (
        <section className='hero-bg'>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <Card className='p-1'>
                            <Card.Body>
                                <Card.Title>
                                    <h2>Learning that gets you</h2>
                                </Card.Title>
                                <Card.Text>
                                    Skills for your present (and your future). Get started with us.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Main;