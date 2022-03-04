import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';
import { BsCart4 } from "react-icons/bs";
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
                        <h1  > SUNGLASS SHOP</h1>
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
                < BsCart4 className='cart'></BsCart4>
                <Navbar.Collapse className="justify-content-end">


                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;