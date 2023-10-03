import React from "react";
import pics from './images/home.png'
import pic from './images/home1.png'
import sm1 from './images/sm1.png'
import sm2 from './images/sm2.png'
import sm3 from './images/sm3.png'
import { BasicExample } from "./Booking";
import { Container } from "react-bootstrap";
import {Row,Col} from 'react-bootstrap';


{
  /* container 1---------------------------------------------------- */
}

export function Home() {
  return (
    <>
      <div className="section1">
      <Container>
<Row>
  <Col lg={6}>
        <div className="home-container1">
          <h1>You'll never travel without our trip planner again</h1>
          <p>
            Build, organize, and map your itineraries in a free travel app
            designed for vacations & road trips
          </p>
        </div>
        </Col>
        <Col lg={6}>
        <div>
           <img className="home-pic1" src={pics} alt="My" />
            </div>
      
      </Col>
</Row>
</Container>
</div>
      {/* container 2---------------------------------------------------- */}
      <div className="section2">
      <Container>
<Row>
  <Col lg={6}>
        <div >
           <img  className="home-pic2" src={pic}alt="My "/> 
           </div>
           </Col>


           <Col lg={6}>
        <div className="home-container2">
          <h1>Get Inspired by Others' Journeys</h1>
          <p>
            Extract valuable travel insights from Instagram reels and TikToks,
            explore the mentioned sights, and effortlessly include them in your
            own adventure
          </p>
        </div>
        </Col>
</Row>
</Container>

      </div>

      {/* container 3---------------------------------------------------- */}
      <div className="page2">

      <Container>
        <Row>
          <Col xs={12}>
        <div className="home-container3">
          <div>
            <h2>Plan like a Pro</h2>
            <p>
              Unlock premium features like offline access, unlimited
              attachments, flight deals, export to Google maps, and much <br/>more
            </p>
          </div>
        </div>
        </Col>
        </Row>
</Container>
        {/* container 4---------------------------------------------------- */}
        <div className="home-container4">

        <Container>
        <Row>

          <Col lg={4}>
          <div>
          <img className="sm-image" src={sm1} alt="My" /> 
            <h2>Offline access</h2>
            <p>
              No wifi, no problem. Your trip plans are locally downloaded for
              access anywhere.
            </p>
          </div>
          </Col>

          <Col lg={4}>
          <div>
          <img className="sm-image" src={sm2} alt="My" /> 
            <h2>Unlimited attachments</h2>
            <p>
              Never dig through your emails again — access all your trip files
              and PDFs in one place.
            </p>
          </div>
          </Col>


          <Col lg={4}>
          <div>
          <img className="sm-image" src={sm3} alt="My" /> 
            <h2>Optimize your route</h2>
            <p>
              Perfect for road trips and saving $$$ on gas! Get the best route
              auto-rearranged.
            </p>
          </div>
          </Col>
          </Row>
</Container>
        </div>
        
      </div>

           {/* footer---------------------------------------------------- */}
           <footer className="footer">
            <p>Copyright © 2023 WheelsOnDemand. All rights reserved</p>
           </footer>

         
    </>
  );
}
