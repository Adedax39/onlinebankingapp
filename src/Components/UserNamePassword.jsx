import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import Card from 'react-bootstrap/Card';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

function BasicExample() {
    const navigate = useNavigate();;
    const handlePageChange = (event, value) => {
       // Navigate to a different route depending on the page number
       switch(value) {
         case 1:
           navigate("/register/1");
           break;
         case 2:
           navigate("/register/2");
           break;
         case 3:
           navigate("/page3");
           break;
         default:
           break;
       }
     };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#ADD8E6",
        flexDirection: "column",
      }}
    >
      <AccountBalanceIcon />
        <p
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "20px",
          }}
        >
         <b> Adedax Bank</b>
        </p>
    <Card style={{width:"80%",height:"100veh"}}>
    <Card.Body>
    <h3 style={{textAlign:"center",fontFamily:"fantasy"}}>Registration Details</h3>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" size="lg" type="submit" style={{alignItems:"center",}}>
        Submit/Generate Account
      </Button>
    </Form>
    </Card.Body>
    </Card>
    <br />
    <Stack spacing={2}>
      <Pagination count={2} size="small" onChange={handlePageChange}/>
      </Stack>
     
    </div>
  );
}

export default BasicExample;
