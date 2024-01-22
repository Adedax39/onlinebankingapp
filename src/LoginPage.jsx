import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import "./App.css";
import { Container } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { useNavigate } from "react-router-dom";

function FormFloatingBasicExample() {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
      navigate("/register"); // replace "/register" with the path to your register page
    };

    const handleLoginClick = () => {
      navigate("/transaction"); // replace "/register" with the path to your register page
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
        <AccountBalanceIcon />
        <p
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "20px",
          }}
        >
          <b> Adedax Bank</b>
        </p>

        <p>Login to your account.</p>
      </Container>

      <Card style={{ width: "70%" }}>
        <Card.Body>
          <>
            <FloatingLabel
              controlId="floatingInput"
              label="Username"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Username" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" />
              <br />
              <Button variant="primary" size="lg" style={{ width: "100%" }} onClick={handleLoginClick}>
                <span>Login</span>
                <span>
                  <ArrowForwardIcon />{" "}
                </span>
              </Button>
            </FloatingLabel>
          </>
          <br />
          <div>
            <span>
              <p
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                Join online Banking -
                <Tooltip title="Add" disableInteractive>
                 
                <Link onClick={handleRegisterClick} underline="hover">
                        {" Register"}
                      </Link>

                </Tooltip>
              </p>
            </span>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FormFloatingBasicExample;
