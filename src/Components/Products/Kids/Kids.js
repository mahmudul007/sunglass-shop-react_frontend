import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import img3 from '../Dummyproduct/charlesdeluvio-1-nx1QR5dTE-unsplash.jpg';

const Kids = () => {
    return (
        <div>
            <div className='men p-5'>
                <h1 className='color'>Kid's Collection</h1>
            </div>
            <Container className='p-3'>

                <Row>
                    <Col xs={12} sm={6} md={4} >
                        <Card className="text-center shadow-sm ">
                            <Card.Body>
                                <Card.Img variant="top" src={img3} />
                                <Card.Title>Clean Caption</Card.Title>
                                <Card.Header as="h5">20$</Card.Header>

                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button className='justify-content-start' variant="primary">Add To Cart</Button>
                            </Card.Body>
                        </Card>               </Col>
                    <Col xs={12} sm={6} md={4}>



                        <Card className="text-center">

                            <Card.Body>
                                <Card.Img variant="top" src={img3} />
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Header as="h5">20$</Card.Header>

                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Add To Cart</Button>
                            </Card.Body>

                        </Card>


                    </Col>
                    <Col xs={12} sm={6} md={4}>


                        <Card className="text-center">

                            <Card.Body>
                                <Card.Img variant="top" src={img3} />
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Header as="h5">20$</Card.Header>

                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Add To Cart</Button>
                            </Card.Body>

                        </Card>


                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Kids;