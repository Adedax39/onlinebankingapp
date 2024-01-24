import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Container } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

function AdminLogin() {

    const navigate = useNavigate();

    const handleGotClicked = () =>{
        navigate("/");
      
      }
    const transLog = () =>{
        navigate("/transactionlog");

    }

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
      <Container
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: "30px",
          display: "flex",
          alignItems: "center",

          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
       <HomeIcon style={{ position: 'absolute', top: 8, left: 10 }} onClick ={handleGotClicked}/>

        <AccountBalanceIcon />
        <p
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "20px",
          }}
        >
          <b> Adedax Bank</b>
        </p>

        <p>Login to your employee account.</p>
      </Container>

      <Card style={{ width: "70%" }}>
        <Card.Body>
          <>
            <FloatingLabel
              controlId="floatingInput"
              label="Employee Id"
              className="mb-3"
            >
              <Form.Control type="Id" placeholder="Employee Id" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" />
              <br />
              <Button variant="primary" size="lg" style={{ width: "100%" }} onClick={transLog} >
                <span>Login</span>
                <span>
                  <ArrowForwardIcon />{" "}
                </span>
              </Button>
            </FloatingLabel>
          </>
          <br />
        </Card.Body>
      </Card>
    </div>
  );
}

export default AdminLogin;
