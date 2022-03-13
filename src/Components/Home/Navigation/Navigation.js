import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';
import { BsCart4 } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (

        <Navbar className="justify-content-center" bg="light" expand="lg">
            <Container fluid>
                <Navbar.Collapse >
                    <Navbar.Text>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Text>
                </Navbar.Collapse>
                <Navbar className="justify-content-end">
                    <Navbar.Text>
                        <Link to={`/`} >   <h1  > SUNGLASS SHOP</h1></Link>
                    </Navbar.Text>
                </Navbar>


                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >


                    </Nav>

                </Navbar.Collapse>
                <Link to={`/cart`}> < BsCart4 className='cart bg-dark'></BsCart4 ></Link>
                <Navbar.Collapse className="justify-content-end">


                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                    <Link to={`/register`} >
                        <Navbar.Text>
                            Regsiter
                        </Navbar.Text>
                    </Link>
                    <Link to={`/login`} >
                        <Navbar.Text>
                            Log In
                        </Navbar.Text>
                    </Link>

                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Navigation;