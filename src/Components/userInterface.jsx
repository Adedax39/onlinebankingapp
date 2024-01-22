import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import { Container } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Button from "react-bootstrap/esm/Button";
import "../App.css"
import Checkbox from '@mui/material/Checkbox';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import HomeIcon from '@mui/icons-material/Home';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { useNavigate } from "react-router-dom";


function TranscationPage() {

  const navigate = useNavigate();


    let myDate = new Date();
    let hours= myDate.getHours();
    let greet;

    if (hours < 12)
    greet =  "morning";
else if (hours >= 12 && hours <= 17)
    greet = "afternoon";
else if (hours >= 17 && hours <= 24)
   greet = "evening";

   const [numRows, setNumRows] = useState(5);
   const data = [
    { id: 1, date: '2024-01-22', reference: 'Ref1', credit: 100, debit: 50 },
    { id: 2, date: '2024-01-23', reference: 'Ref2', credit: 200, debit: 100 },
    { id: 3, date: '2024-01-24', reference: 'Ref3', credit: 300, debit: 150 },
    { id: 4, date: '2024-01-25', reference: 'Ref4', credit: 400, debit: 200 },
    { id: 5, date: '2024-01-26', reference: 'Ref5', credit: 500, debit: 250 },
    { id: 6, date: '2024-01-22', reference: 'Ref1', credit: 0, debit: 50 },
    { id: 7, date: '2024-01-23', reference: 'Ref2', credit: 0, debit: 100 },
    { id: 8, date: '2024-01-24', reference: 'Ref3', credit: 0, debit: 150 },
    { id: 9, date: '2024-01-25', reference: 'Ref4', credit: 0, debit: 200 },
    { id: 10, date: '2024-01-26', reference: 'Ref5', credit: 0, debit: 250 },
    // More items...
];

const data1 = [
  { id: 1, date: '2024-01-22', reference: 'Ref1', credit: 100, debit: 50 },
  { id: 2, date: '2024-01-23', reference: 'Ref2', credit: 200, debit: 100 },
  { id: 3, date: '2024-01-24', reference: 'Ref3', credit: 300, debit: 150 },

]


const[savings,setSavings] = useState(1);
const [fixed,setFixed] = useState(0);

const handleSavings = (event)=>{
  if(event.target.checked){
    setSavings(1);
  }
  else{
    setSavings(0);
  }

};

const handleFixed = (event)=>{
  if(event.target.checked){
    setFixed(1);
  }
  else{
    setFixed(0);
  }

}

const handleGotClicked = () =>{
  navigate("/");

}


const displayedData = data.slice(0, numRows);
const displayedData1 = data1.slice(0, numRows);

    return ( 

     <div style={{display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "white",
        flexDirection: "column",}}>
       
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
          paddingLeft:"1000px",
          paddingRight :"1000px",
          paddingTop:"30px",
          paddingBottom:"30px",
          backgroundColor : "#ADD8E6"
         
        }}
      >  
      <HomeIcon style={{ position: 'absolute', top: 8, left: 10 }} onClick ={handleGotClicked}/>
        <CancelRoundedIcon style={{ position: 'absolute', top: 8, right: 10 }} onClick ={handleGotClicked}/>
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
        <span>
      <ButtonGroup className="me-2" aria-label="First group">
      
      <FormControlLabel control={<Checkbox defaultChecked />} label="Savings" onChange={handleSavings}/>
      <FormControlLabel control={<Checkbox />} label="Fixed" onChange={handleFixed} />
      </ButtonGroup>
      </span>
      </div>

      </Container>
      </div>
        <h2 style={{fontFamily: "Arial, Helvetica, sans-serif",marginTop:"30px"}}><b>Good {greet}, Sir/Madam</b></h2>
        {savings == 1?<h3  style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            width: "100%",
            display:"flex",
            textAlign: "center",
            justifyContent: "center",
            
          }}
        >001-1234-001</h3>:""}
        {fixed ==1?<h3  style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            width: "100%",
            display:"flex",
            textAlign: "center",
            justifyContent: "center",
            
          }}
        >001-0001-101</h3>:""}
        {savings==0 && fixed==0 ?"":""}
        {savings==1 && fixed==1 ?"Please pick one account":""}
        <h1 style={{fontFamily: "Arial, Helvetica, sans-serif",marginTop:"30px"}}>Transaction History</h1>
       
        
        <Table striped bordered hover style={{width:"100%",marginTop:"1px"}}>
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
        {savings == 1 ? displayedData.map((item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.date}</td>
        <td>{item.reference}</td>
        <td>{item.credit}</td>
        <td>{item.debit}</td>
    </tr>
)) : " "}
{fixed == 1 ? displayedData1.map((item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.date}</td>
        <td>{item.reference}</td>
        <td>{item.credit}</td>
        <td>{item.debit}</td>
    </tr>
)):" "} 

        </tbody>
      </Table>
      <Button variant="primary" size="lg" style={{width:"90%"}} onClick={() => setNumRows(numRows + 5)}>Load More</Button>

    
</div>
    )
}

export default TranscationPage;