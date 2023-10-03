import React from 'react';
import logo from './images/logo1.png';
import logo1 from './images/about logo.png';
import { Container } from "react-bootstrap";
import {Row,Col} from 'react-bootstrap';

import fb from './images/fb.png'
import insta from './images/insta.png'
import twitter from './images/twitter.png'

export  function About(){
    return(
        <>
        <div className='totalpage'>

        <Container>
        <Row>

            <Col sm={12}>
            <section>
                <div className='about-logo'>
                <img className='logo-size' src={logo} alt='logo'/>
                <img className='logo-size' src={logo1} alt='logo'/>
               </div>
              <br/>
              <div className='about-para'>
              <p>"Your Dream, Our Destination"</p>
              <p> Our mission is to inspire and assist travelers of all kinds, whether you're seeking<br/> relaxation on pristine beaches,
                  cultural immersion in historic cities, thrilling adventures in the great outdoors, or culinary delights<br/> in far-flung destinations.
                  With our extensive travel guides, expert tips, and curated itineraries, we aim to make your travel planning a breeze.</p>
                 </div>
                 <hr className='hr'/>
            </section>
           </Col>  
            
            
            <Col sm={12}> 
            <section className='about-location'>
                <h2>OUR LOCATION</h2>
                <p>10/4b Insta towers</p>
                <p>meta street</p>
                <p>+91 93440-32391</p>
                <p>info@WheelsOnDemand.com</p>

               
            </section>
            <hr className='hr' />
            </Col>


            <Col sm={12}>
            <section className='find-us'>
            <h2>FIND US ON</h2>
            <div className='find-images'>
            <img className="about-image" src={fb} alt="My" />
            <img className="about-image1" src={insta} alt="My" />
            <img className="about-image1" src={twitter} alt="My" />
            </div>
            </section>
            </Col>
            </Row>
</Container>



            </div>




            <footer className="footer">
            <p>Copyright © 2023 WheelsOnDemand. All rights reserved</p>
           </footer>

        











       
        </>
    )
 
}





