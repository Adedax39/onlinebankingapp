import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import Card from 'react-bootstrap/Card';
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";

function BasicExample2() {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
      navigate("/"); // replace "/register" with the path to your register page
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
     
    </Form>
    </Card.Body>
    </Card>
    <br />
    <span>
              <p
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                Back to login page -
                <Tooltip title="Add" disableInteractive>
                 
                <Link onClick={handleRegisterClick} underline="hover">
                        {" Login"}
                      </Link>

                </Tooltip>
              </p>
            </span>
     
    </div>
  );
}

export default BasicExample2;
