import React from 'react';
import '../Slider/Slider';
import { Col, Container, Row } from 'react-bootstrap';
import { GrDeliver } from "react-icons/gr";
import { MdRecommend } from "react-icons/md";
import { GrMoney } from "react-icons/gr";


const CustomerCenticity = () => {
    return (
        <><div className='center p-2'>
            <h1>Your Best Sunglass Destination</h1>
        </div>
            <Container >

                <Row className='p-3 align '>
                    <Col xs={12} sm={6} md={4}>
                        <h3> <MdRecommend /> <br /> Recommended by 99% <br /> of customers</h3>

                    </Col>
                    <Col xs={12} sm={6} md={4}><h3> <GrMoney />  <br />Saving your money on every purchase </h3></Col>
                    <Col xs={12} sm={6} md={4}>

                        <h3> < GrDeliver /> <br /> Delivery – Fast and Reliable</h3>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CustomerCenticity;