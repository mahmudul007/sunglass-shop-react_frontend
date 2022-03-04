import React from 'react';
import Contact from '../../Contactus/Contact';
import Footer from '../../Footer/Footer';
import Feature from '../../Products/Featuredproduct/Feature';
import Kids from '../../Products/Kids/Kids';
import Men from '../../Products/Men/Men';
import Women from '../../Products/Women/Women';
import CustomerCenticity from '../Customercentricity/CustomerCenticity';
import Freedelivery from '../Freedelivery/Freedelivery';
import Navigation from '../Navigation/Navigation';
import Slider from '../Slider/Slider';



const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Freedelivery></Freedelivery>
            <Slider></Slider>
            <CustomerCenticity></CustomerCenticity>
            <Feature></Feature>
            <Men></Men>
            <Women></Women>
            <Kids></Kids>
            <Contact></Contact>
            <Footer></Footer>

        </>
    );
};

export default Home;