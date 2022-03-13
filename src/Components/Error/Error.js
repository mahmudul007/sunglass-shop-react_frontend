import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './err.css';


const Error = () => {
    return (
        < Container className='bg' >
            <div className='position-absolute text-center top-0 start-50 translate-middle-x'>
                <h1> Error 440</h1>
                <h3>Go Back to Home</h3>
                <Link to={`/`}>  <Button> HOME</Button></Link>
            </div>




        </Container>
    );
};

export default Error;