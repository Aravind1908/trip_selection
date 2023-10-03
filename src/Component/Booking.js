import React, { useState } from "react";
import { Button, Form, Checkbox } from "semantic-ui-react";
import {Url} from '../api/url'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Row,Col} from 'react-bootstrap';
// card
import Card from 'react-bootstrap/Card';
import bali from './images/trip1.png';
import york from './images/trip2.png';
import tokyo from './images/trip3.png';
import rio from './images/trip4.png';


const Booking = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [city, setCity] = useState("");
    const[mobile,setMobile] = useState()
    const [mail, setMail] = useState("");
    const [startdate, setStartdate] = useState("");
    const [enddate, setEnddate] = useState("");
  
    const Navigate = useNavigate();
  
    const Create = async () => {
      await axios.post(Url, {
        firstname,
        lastname,
        mail,
        city,
        mobile,
        startdate,
        enddate,
      });
      Navigate('/Booked')
    };
  
    return (
      <>
      <BasicExample/>
<div className="form-page">
      <div className="form">
        <Form>
          <table>
              <tr>
         <td> <label  for="firstName">First Name</label></td>
         <td> <input
         className="input"
         id="firstName"
         name="firstName" 
            type="text"
            placeholder="fname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          /></td>
  
  </tr>
  <tr>
          <td><label>Last Name</label></td>
         <td> <input
          className="input"
            type="text"
            placeholder="lname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          /></td>
  
  </tr>
  
  <tr>
         
  <td> <label>Email Id</label></td>
  <td> <input
   className="input"
            type="email"
            placeholder="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          /></td>
          
          </tr>
  
          <tr>
          <td> <label>Mobile Number</label></td>
          <td> <input  className="input" type="number" value={mobile} onChange={e=> setMobile(e.target.value)}/></td>
          </tr>
  
  
          <tr>
          <td><label>Trips</label></td>
          <td><select  className="input" onChange={(e) => setCity(e.target.value)}>
            <option>--Select Trip--</option>
            <option >TRIP-1</option>
            <option>TRIP-2</option>
            <option>TRIP-3</option>
            <option>TRIP-4</option>
          </select></td>
          </tr>
  
  <tr>
         <td> <label>Start Date</label></td>
          <td><input
           className="input"
            type="date"
            value={startdate}
            onChange={(e) => setStartdate(e.target.value)}
          /></td>
          
  </tr>
  
  <tr>
          <td><label>End Date</label></td>
          <td><input
           className="input"
            type="date"
            value={enddate}
            onChange={(e) => setEnddate(e.target.value)}
          /></td>
  
  </tr>
         
  
  <tr>
          <td><Button className="sumit-button" onClick={Create} type="submit">
            Submit
          </Button></td>
          </tr>
          </table>
        </Form>
        </div>
        </div>
        

        <footer className="footer">
            <p>Copyright © 2023 WheelsOnDemand. All rights reserved</p>
           </footer>
       
        
      </>
    );
  };
  export default Booking;


export function BasicExample() {
    return (
        <>
<Row>
      <Col lg={6}>
        <div className="card1">   
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={bali}/>
        <Card.Body>
          <Card.Title>TRIP-1 ( Bali, Indonesia)</Card.Title>
          <Card.Text>
          Surfing on Bali's famous beaches, 
          exploring ancient temples like Uluwatu and Tanah Lot, enjoying traditional Balinese dance
           performances, and visiting the lush terraced rice fields of Ubud.
          </Card.Text>
        </Card.Body>
      </Card>
</div>
</Col>


<Col lg={6}>
<div className="card3">
 <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={york}/>
<Card.Body>
  <Card.Title>TRIP-2 (New York City, USA)</Card.Title>
  <Card.Text>
  Exploring iconic landmarks like Times Square, 
  Central Park, and the Statue of Liberty, attending Broadway
   shows, dining at diverse restaurants, and shopping on Fifth Avenue.
  </Card.Text>
</Card.Body>
</Card>
</div>
</Col>
</Row>

<Row>
 <Col lg={6}>
<div className="card2">
<Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={tokyo}/>
        <Card.Body>
          <Card.Title>TRIP-3 (Tokyo, Japan)</Card.Title>
          <Card.Text>
          Experiencing the vibrant nightlife in Shinjuku,
           dining on sushi and ramen, visiting historic temples like 
           Senso-ji, and exploring high-tech districts like Akihabara.
          </Card.Text>
        </Card.Body>
      </Card>
</div>
</Col>


<Col lg={6}>
<div className="card4">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={rio}/>
        <Card.Body>
          <Card.Title>TRIP-4 (Rio de Janeiro, Brazil)</Card.Title>
          <Card.Text>
          Experiencing the vibrant Carnival, visiting the Christ the
           Redeemer statue, relaxing on Copacabana Beach, and exploring 
          the historic Santa Teresa neighborhood.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      </Col>
      </Row>
      </>
    );
  }

  function validateForm() {
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var mobileNumber = document.getElementById("mobileNumber").value.trim();
    var email = document.getElementById("email").value.trim();
    var dropdown = document.getElementById("dropdown").value;
    var date = document.getElementById("date").value;
    var valid = true;

    // Regular expressions for validation
    var nameRegex = /^[a-zA-Z ]+$/;
    var mobileRegex = /^[0-9]{10}$/;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!firstName) {
        document.getElementById("firstNameError").innerHTML = "First name is required";
        valid = false;
    } else if (!nameRegex.test(firstName)) {
        document.getElementById("firstNameError").innerHTML = "Invalid first name";
        valid = false;
    } else {
        document.getElementById("firstNameError").innerHTML = "";
    }

    if (!lastName) {
        document.getElementById("lastNameError").innerHTML = "Last name is required";
        valid = false;
    } else if (!nameRegex.test(lastName)) {
        document.getElementById("lastNameError").innerHTML = "Invalid last name";
        valid = false;
    } else {
        document.getElementById("lastNameError").innerHTML = "";
    }

    if (!mobileNumber) {
        document.getElementById("mobileNumberError").innerHTML = "Mobile number is required";
        valid = false;
    } else if (!mobileRegex.test(mobileNumber)) {
        document.getElementById("mobileNumberError").innerHTML = "Invalid mobile number";
        valid = false;
    } else {
        document.getElementById("mobileNumberError").innerHTML = "";
    }

    if (!email) {
        document.getElementById("emailError").innerHTML = "Email is required";
        valid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email address";
        valid = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    if (!dropdown) {
        document.getElementById("dropdownError").innerHTML = "Please select an option";
        valid = false;
    } else {
        document.getElementById("dropdownError").innerHTML = "";
    }

    if (!date) {
        document.getElementById("dateError").innerHTML = "Date is required";
        valid = false;
    } else {
        document.getElementById("dateError").innerHTML = "";
    }

    return valid;
}


 
  





