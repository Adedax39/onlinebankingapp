import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { Container } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Button from "react-bootstrap/esm/Button";
import "../App.css";
import Checkbox from "@mui/material/Checkbox";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import HomeIcon from "@mui/icons-material/Home";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TranscationAdmin() {
  const navigate = useNavigate();

  const [numRows, setNumRows] = useState(5);
  const data = [
    { id: 1, date: "2024-01-22", reference: "Ref1", credit: 100, debit: 50 },
    { id: 2, date: "2024-01-23", reference: "Ref2", credit: 200, debit: 100 },
    { id: 3, date: "2024-01-24", reference: "Ref3", credit: 300, debit: 150 },
    { id: 4, date: "2024-01-25", reference: "Ref4", credit: 400, debit: 200 },
    { id: 5, date: "2024-01-26", reference: "Ref5", credit: 500, debit: 250 },
    { id: 6, date: "2024-01-22", reference: "Ref1", credit: 0, debit: 50 },
    { id: 7, date: "2024-01-23", reference: "Ref2", credit: 0, debit: 100 },
    { id: 8, date: "2024-01-24", reference: "Ref3", credit: 0, debit: 150 },
    { id: 9, date: "2024-01-25", reference: "Ref4", credit: 0, debit: 200 },
    { id: 10, date: "2024-01-26", reference: "Ref5", credit: 0, debit: 250 },
    // More items...
  ];
  const nicdata = [
    { id: 1, nic: "123456789012", accno1: "0010000111", accno2: "0010001001" },
    { id: 2, nic: "234567890123", accno1: "0010000111", accno2: "" },
    { id: 3, nic: "345678901234", accno1: "", accno2: "0010001001" },
  ];

  const [nic, setNic] = useState(0);
  const [account, setAccount] = useState(0);

  const handleNic = (e) => {
    if (e.target.checked) {
      setNic(1);
    } else {
      setNic(0);
      
    }
  };

  const handleAcc = (e) => {
    if (e.target.checked) {
      setAccount(1);
    } else {
      setAccount(0);
    }
  };

  const handleGotClicked = () => {
    navigate("/");
  };

  const displayedData = data.slice(0, numRows);

  const [selectedNic, setSelectedNic] = useState("");
  const [accountNumbers, setAccountNumbers] = useState({
    accno1: "",
    accno2: "",
  });
  const [isValidNic, setIsValidNic] = useState(false); 
  const [result, setResult] = useState(null); 

  const inputChanged = (e) => {
    setSelectedNic(e.target.value);
    setIsValidNic(false);
  };

  const gotClicked = () => {
    const nicItem = nicdata.find((item) => item.nic === selectedNic);
    if (nicItem) {
      setAccountNumbers({ accno1: nicItem.accno1, accno2: nicItem.accno2 });
      setIsValidNic(true); 
      setResult(
        <div>
        <h3>Account Numbers Are</h3>
            <p> Savings Account - {nicItem.accno1}</p>
            <p> Fixed Account - {nicItem.accno2}</p>
        </div>
    );
    } else {
      toast.error("Invalid Input!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "white",
        flexDirection: "column",
      }}
    >
      <div>
        <Container
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "30px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            paddingLeft: "1000px",
            paddingRight: "1000px",
            paddingTop: "30px",
            paddingBottom: "30px",
            backgroundColor: "#ADD8E6",
          }}
        >
          <ToastContainer />
          <HomeIcon
            style={{ position: "absolute", top: 8, left: 10 }}
            onClick={handleGotClicked}
          />
          <CancelRoundedIcon
            style={{ position: "absolute", top: 8, right: 10 }}
            onClick={handleGotClicked}
          />
          <AccountBalanceIcon />
          <p
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "20px",
            }}
          >
            <b> Adedax Bank</b>
          </p>
          <div>
            <ButtonGroup className="me-2" aria-label="First group">
              <FormControlLabel
                control={<Checkbox />}
                label="NIC"
                onChange={handleNic}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="A/N"
                onChange={handleAcc}
              />
            </ButtonGroup>
          </div>
        </Container>
      </div>
      <br />
      {nic === 1 && account === 1 ? (
        <p>Please pick only one option.</p>
      ) : (
        <>
          {nic === 1 ? (
            <Form.Group className="mb-3" controlId="">
              <Form.Label>
                <h2>National Identity Card</h2>
              </Form.Label>
              <div className="d-flex justify-content-between w-100">
                <Form.Control
                  type="texts"
                  placeholder="Enter the nic number."
                  className="flex-grow-1"
                  value={selectedNic}
                  onChange={inputChanged}
                />
                &nbsp;
                  <Button variant="primary" onClick={gotClicked}>
                    Enter
                  </Button>
                <br/>   
              </div>
            </Form.Group>   
          ) : null}
          {isValidNic ? ([result]) : null}
          {account === 1 ? (
            <Form.Group className="mb-3" controlId="">
              <Form.Label>
                <h2>Account number</h2>
              </Form.Label>
              <div className="d-flex justify-content-between w-100">
                <Form.Control
                  type="Nic"
                  placeholder="Enter the account number"
                />
                <span>
                  <Button variant="primary">Enter</Button>
                </span>
              </div>
            </Form.Group>
          ) : null}
        </>
      )}

      <h1
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          marginTop: "30px",
        }}
      >
        Transaction History
      </h1>

      <Table striped bordered hover style={{ width: "100%", marginTop: "1px" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Refference</th>
            <th>Credit</th>
            <th>Debit</th>
          </tr>
        </thead>
        <tbody>
          {displayedData.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.date}</td>
              <td>{item.reference}</td>
              <td>{item.credit}</td>
              <td>{item.debit}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button
        variant="primary"
        size="lg"
        style={{ width: "90%" }}
        onClick={() => setNumRows(numRows + 5)}
      >
        Load More
      </Button>
    </div>
  );
}

export default TranscationAdmin;
