import React from 'react';
import { Alert, CloseButton, Container } from 'react-bootstrap';
import { AiFillGift } from 'react-icons/ai';


const Freedelivery = () => {
    return (

        <Alert variant='primary' className='d-flex justify-content-center p-0'>
            <p> <AiFillGift variant='h3' /> Free Delivery , Order More than BDT 3000</p>
            <CloseButton aria-label="Hide" />
        </Alert>

    );
};

export default Freedelivery;