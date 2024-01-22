import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import Card from 'react-bootstrap/Card';
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from "react-bootstrap/esm/Button";
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";


function BasicExample3() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

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
    <h3 style={{textAlign:"center",fontFamily:"fantasy"}}>Account Details</h3>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Account Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Savings</MenuItem>
          <MenuItem value={20}>Fixed</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <br/>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Income Range</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>0-50k</MenuItem>
          <MenuItem value={20}>50k-200k</MenuItem>
          <MenuItem value={20}>200k-500k</MenuItem>
          <MenuItem value={20}>500k+</MenuItem>
        </Select>
      </FormControl>
    </Box>
    
    <br/>
    
      <Button variant="primary" size="lg" type="submit" style={{alignItems:"center",}}>
        Submit/Generate Account
      </Button>
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

export default BasicExample3;
