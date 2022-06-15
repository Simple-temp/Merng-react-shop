import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='container'>
            <Row>
                <Col md={3}>
                    <div className="footer-ul">
                        <ul>
                            <li>Udemy Business</li>
                            <li>Teach on Udemy</li>
                            <li>Get the app</li>
                            <li>About us</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="footer-ul">
                        <ul>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>Help and Support</li>
                            <li>Affiliate</li>
                            <li>Investors</li>
                        </ul>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="footer-ul">
                        <ul>
                            <li>Terms</li>
                            <li>Privacy policy</li>
                            <li>Cookie settings</li>
                            <li>Sitemap</li>
                            <li>Accessibility statement</li>
                        </ul>
                    </div>
                </Col>
                <Col md={3}>
                    <Button variant='outline-dark text-white border-white' className='d-block ms-auto'>
                        <i className="fa-solid fa-globe me-2"></i>
                        English
                    </Button>
                </Col>
            </Row>
            <div className="d-flex justify-content-between w-100 mt-5">
                <h3>Udemy</h3>
                <p className='text-center text-white pt-1'> Made by Aziz &copy; {new Date().getFullYear()} </p>
            </div>
        </div>
    );
};

export default Footer;