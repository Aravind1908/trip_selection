import axios from "axios";
import React, { useEffect, useState } from "react";
import {  Button, Label, Table } from 'semantic-ui-react'
import { Url } from "../api/url";
import { useNavigate } from "react-router-dom";

function Booked() {
  const [getapi, setGetapi] = useState([]);
  const Navigate = useNavigate()

  const updateUser = ({id,firstname,lastname,mail,city,startdate,enddate,checked,mobile}) =>{
    localStorage.setItem('id',id)
    localStorage.setItem('firstname',firstname)
    localStorage.setItem('lastname',lastname)
    localStorage.setItem('mail',mail)
    localStorage.setItem('city',city)
    localStorage.setItem('mobile',mobile)
    localStorage.setItem('startdate',startdate)
    localStorage.setItem('enddate',enddate)
    Navigate('/Update')
  }

  const removeUser = async(id) =>{
    await axios.delete(Url + id);
    read();
  }

  const read = async () => {
    const result = await axios.get(Url);
    setGetapi(result.data);
  }

  useEffect(() => {
    read();
  },[])

  return (
    <>
    <div className="update">
      <Table celled >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>FirstName</Table.HeaderCell>
            <Table.HeaderCell>LastName</Table.HeaderCell>
            <Table.HeaderCell>E-Mail</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Mobile Number</Table.HeaderCell>
            <Table.HeaderCell>Start Date</Table.HeaderCell>
            <Table.HeaderCell>End Date</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {getapi.map((data) => (
            <Table.Row key={data.id}>
              <Table.Cell>
                <Label ribbon>{data.firstname}</Label>
              </Table.Cell>
              <Table.Cell>{data.lastname}</Table.Cell>
              <Table.Cell>{data.mail}</Table.Cell>
              <Table.Cell>{data.city}</Table.Cell>
              <Table.Cell>{data.mobile}</Table.Cell>
              <Table.Cell>{data.startdate}</Table.Cell>
              <Table.Cell>{data.enddate}</Table.Cell>
              <Table.Cell>
                <Button className="update-button" onClick={() => removeUser(data.id)}>Delete</Button>
                <Button className="update-button" onClick={() => updateUser(data)}>Update</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      </div>
    </>
  );
}

export default Booked;