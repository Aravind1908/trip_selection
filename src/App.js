import "./App.css";
import {About} from "./Component/About";
import { Home } from "./Component/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Booking from "./Component/Booking";
import  Booked  from "./Component/Booked";
import Update from "./Component/Update";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar expand="lg" className="bg-body-" bg="dark" data-bs-theme="dark">
          <Container>
          
            <Navbar.Brand href="#home">WheelsOnDemand</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"\home"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"\Booking"}>Booking</Nav.Link> 
                <Nav.Link as={Link} to={"\Booked"}>Booked</Nav.Link>
                <Nav.Link as={Link} to={"\Update"}>Update</Nav.Link> 
                <Nav.Link as={Link} to={"\about"}>About</Nav.Link> 
                 
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Booked" element={<Booked />} />
          <Route path="/Update" element={<Update />} />
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;


