import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Feature.css';
import img1 from '../Dummyproduct/charlesdeluvio-1-nx1QR5dTE-unsplash.jpg';
import img2 from '../Dummyproduct/giorgio-trovato-K62u25Jk6vo-unsplash.jpg';
import img3 from '../Dummyproduct/thirteen-j-EE0G0CgC-WM-unsplash.jpg';


const Feature = () => {
    return (
        <div>
            <div className='feature p-5'>
                <h1 className='color'>Special Collection</h1>
            </div>

            <Container>

                {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                <Row >

                    <Col xs={12} sm={6} md={4}>
                        <Card style={{ width: '18rem' }} className='cards'>
                            <Card.Img className='img' variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.

                                </Card.Text>
                                <Button variant="primary">Add to Cart</Button>


                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Card style={{ width: '18rem' }} className='cards'>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Add To Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Card style={{ width: '18rem' }} className='cards'>
                            <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
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

export default Feature;