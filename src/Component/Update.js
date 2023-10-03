import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Form, Checkbox } from "semantic-ui-react";
import { Url } from "../api/url";

function Update() {
  const [id, setId] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [city, setCity] = useState("");
  const[mobile,setMobile] = useState('')
  const [mail, setMail] = useState("");
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  
  const Navigate = useNavigate()

  const updateUser = async () => {
    await axios.put(Url + id, {
      id,
      firstname,
      lastname,
      city,
      mobile,
      mail,
      startdate,
      enddate,
    });
    Navigate('/Booked')
  };

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setFirstname(localStorage.getItem("firstname"));
    setLastname(localStorage.getItem("lastname"));
    setCity(localStorage.getItem("city"));
    setMobile(localStorage.getItem('mobile'))
    setMail(localStorage.getItem("mail"));
    setStartdate(localStorage.getItem("startdate"));
    setEnddate(localStorage.getItem("enddate"));
  }, []);

  return (
    <>
      <div className="form-page">
      <div className="form">
      <Form>
        <table>

        <tr>


        <td><label>First Name</label></td>
        <td> <input
         className="input"
          type="text"
          placeholder="fname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        /></td>
       </tr>

<tr>

<td> <label>Last Name</label></td>
<td><input
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

    <td><label>Mobile Number</label></td>
    <td><input  className="input" type="number" value={mobile} onChange={e=>setMail(e.target.value)} />
    </td>
        </tr>

        <tr>
        <td><label>Trips</label></td>
        <td><select  className="input" onChange={(e) => setCity(e.target.value)}>
        <option>--Select Trip--</option>
            <option >TRIP-1</option>
            <option>TRIP-2</option>
            <option>TRIP-3</option>
            <option>TRIP-4</option>
        </select>
        </td>
        </tr>
       


        <tr>
        <td> <label>Start Date</label></td>
        <td> <input
         className="input"
          type="date"
          value={startdate}
          onChange={(e) => setStartdate(e.target.value)}
        />
        </td>
        </tr>



<tr>
<td> <label>End Date</label></td>
<td> <input
 className="input"
          type="date"
          value={enddate}
          onChange={(e) => setEnddate(e.target.value)}
        />
        </td>
 </tr>

<tr>
<td> <Button className="sumit-button" onClick={updateUser} type="submit">
          Submit
        </Button>
        </td>
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
}

export default Update;