import React from 'react';
import { Form, Button, Container, Nav, Navbar, FormControl, Badge } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from '../Redux/Action';
import { Link } from 'react-router-dom';


const Navigationbar = () => {

    const dispatch = useDispatch()
    const user = useSelector((state) => state.handleCart)
    const cart = useSelector((state) => state.handleCart)

    const signoutHandler = (user) => {
        dispatch(logOutUser(user))
        localStorage.removeItem("userInfo")
        window.location.href = "/login"
    }

    return (
        <Navbar bg="light" expand="lg" className='navbar-bg-color'>
            <Container >
                <Navbar.Brand href="#">
                    <LinkContainer to="/">
                        <h2>Udemy</h2>
                    </LinkContainer>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex search-form">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-dark">Search</Button>
                    </Form>
                    <Nav className="ms-auto my-2 my-lg-0">
                        {
                            user.userInfo && user.userInfo.isAdmin ? <>
                                <Link to="/cart" className='cart-icon text-secondary'>
                                    <Badge bg='danger'>{cart.cart.cartItem.length}</Badge>
                                    <i className="fa-solid fa-cart-shopping mt-2 me-1"></i>
                                </Link>
                                <LinkContainer to="/admin/dashboard">
                                    <Nav.Link>Dashboard</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/admin/profile">
                                    <Nav.Link> {user.userInfo.name}</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/userorderhistory">
                                    <Nav.Link>History</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/admin/user">
                                    <Nav.Link>Users</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/admin/course">
                                    <Nav.Link>Courses</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/admin/orders">
                                    <Nav.Link>Orders</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/admin/adminlist">
                                    <Nav.Link>List</Nav.Link>
                                </LinkContainer>
                                <Button variant='outline-dark' onClick={() => signoutHandler(user.userInfo)}>
                                    <Link to="#signout">
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                    </Link>
                                </Button>

                            </> : user.userInfo ? <>
                                <Link to="/cart" className='cart-icon text-secondary'>
                                    <Badge bg='danger'>{cart.cart.cartItem.length}</Badge>
                                    <i className="fa-solid fa-cart-shopping mt-2 me-1"></i>
                                </Link>
                                <LinkContainer to="/updateprofile">
                                    <Nav.Link> {user.userInfo.name}</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/userorderhistory">
                                    <Nav.Link>Order history</Nav.Link>
                                </LinkContainer>
                                <Button variant='outline-dark' onClick={() => signoutHandler(user.userInfo)}>
                                    <Link to="#signout">
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                    </Link>
                                </Button>
                            </>
                                :
                                <>

                                    <Link to="/cart" className='cart-icon text-secondary'>
                                        <Badge bg='danger'>{cart.cart.cartItem.length}</Badge>
                                        <i className="fa-solid fa-cart-shopping mt-2 me-1"></i>
                                    </Link>
                                    <LinkContainer to="/login">
                                        <Button variant="outline-dark m-1">Log in</Button>
                                    </LinkContainer>
                                    <LinkContainer to="/signup">
                                        <Button variant="dark" className='m-1'>Sign Up</Button>
                                    </LinkContainer>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigationbar;