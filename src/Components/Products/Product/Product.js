import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import './Product.css';
import '../../Cart/Cart.css';
import Navigation from '../../Home/Navigation/Navigation';
import Freedelivery from '../../Home/Freedelivery/Freedelivery';
import img1 from '../Dummyproduct/charlesdeluvio-1-nx1QR5dTE-unsplash.jpg';

const Product = () => {
    return (
        <>
            <Navigation />
            <Freedelivery />
            <Container>

                {/* <div className='wrapper'>
                    <div className='ImgContainer'>
                        <Image src='../Dummyproduct/charlesdeluvio-1-nx1QR5dTE-unsplash.jpg' className='img'></Image>

                    </div>
                    <div className='infoContainer'>
                        <title>Super Glass </title>


                        <div className='description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                            tristique tortor pretium ut. Curabitur elit justo, consequat id
                            condimentum ac, volutpat ornare.
                        </div>
                        <p className='Price'>$ 20</p>
                        <div className='FilterContainer'>
                            <div className='Filter'>
                                <div className='FilterTitle'>Color</div>
                                <div className='FilterColor' color="black" />
                                <div className='FilterColor' color="darkblue" />
                                <div className='FilterColor' color="gray" />
                            </div>
                            <div className='Filter'>
                                <div className='FilterTitle'>Size</div>
                                <div className='FilterSize'>
                                    <div className='FilterSizeOption'>XS</div>
                                    <div className='FilterSizeOption'>XS</div>
                                    <div className='FilterSizeOption'>XS</div>
                                    <div className='FilterSizeOption'>XS</div>
                                    <div className='FilterSizeOption'>XS</div>

                                </div>
                            </div>
                        </div>
                        <div className='AddContainer'>
                            <div className='AmountContainer'>
                                <div className='Remove' />
                                <div className='Amount'>1</div>
                                <div className='Add' />
                            </div>
                            <Button>ADD TO CART</Button>
                        </div>
                    </div>



                </div> */}
                <Row>
                    <Col xs={6}>

                        <Image src={img1} className='img'></Image>
                    </Col>
                    <Col xs={6}>
                        <Container className='infoContainer'>
                            <h1>Title</h1>
                            <div className='description'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                                iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                                tristique tortor pretium ut. Curabitur elit justo, consequat id
                                condimentum ac, volutpat ornare.
                            </div>
                            <p className='Price'>$ 20</p>
                            <h5 class="text-uppercase mb-3">Color</h5>

                            <Row xs={6} className='mb-4 pb-2'>
                                <select class="form-select  col-xs-2" >
                                    <option selected>Choose colour</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </Row>
                            <Row>

                                <div class="col-md-3 col-lg-3 col-xl-2 d-flex AmountContainer">
                                    <button class="btn btn-link px-1"
                                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                    <div className='AmountContainer'>
                                        <input id="form1" type="number"
                                            class="form-control amount " />
                                    </div>
                                    <button class="btn btn-link px-1"
                                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                </div>


                            </Row>
                            <br />
                            <Button>ADD TO CART</Button>

                        </Container>


                    </Col>
                </Row>


            </Container>
        </>
    );
};

export default Product;