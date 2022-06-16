import React from 'react';
import { Form, Button, Container, Nav, Navbar, FormControl } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from '../Redux/Action';
import { Link } from 'react-router-dom';


const Navigationbar = () => {

    const dispatch = useDispatch()
    const user = useSelector((state) => state.handleCart)
    // console.log(user.userInfo)

    const signoutHandler = (user) => {
        dispatch(logOutUser(user))
        localStorage.removeItem("userInfo")
        window.location.href = "/login"
    }

    return (
        <Navbar bg="light" expand="lg">
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
                                <LinkContainer to="/cart">
                                    <i className="fa-solid fa-cart-shopping mt-2 me-1"></i>
                                </LinkContainer>
                                <LinkContainer to="/admin/dashboard">
                                    <Nav.Link>Dashboard</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/admin/profile">
                                    <Nav.Link>Admin Profile</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/admin/history">
                                    <Nav.Link>Order History</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/admin/user">
                                    <Nav.Link>Users</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/admin/course">
                                    <Nav.Link>Courses</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/admin/adminlist">
                                    <Nav.Link>Admin List</Nav.Link>
                                </LinkContainer>
                                <Button variant='outline-dark' onClick={() => signoutHandler(user.userInfo)}>
                                    <Link to="#signout">
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                    </Link>
                                </Button>

                            </> : user.userInfo ? <>
                                <LinkContainer to="/cart">
                                    <i className="fa-solid fa-cart-shopping mt-2 me-1"></i>
                                </LinkContainer>
                                <LinkContainer to="/updateprofile">
                                    <Nav.Link>Profile</Nav.Link>
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

                                    <LinkContainer to="/cart">
                                        <i className="fa-solid fa-cart-shopping mt-2 me-1"></i>
                                    </LinkContainer>
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