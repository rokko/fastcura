import { Box, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Box
        style={{
            marginTop:'100px',
          width: "280px",
          height: "240px",
          backgroundColor: "#39B1D9",
          borderRadius: "20px",
        }}
      >
        <p className="topsearch-text">Accedi</p>
        <TextField
          size={"small"}
          hiddenLabel
          sx={{
            width: "240px",
            backgroundColor: "#ffffff",
            outlineColor: "#ffffff",
            borderRadius:'30px',
            '& .MuiOutlinedInput-root':{
              borderColor:'#ffffff',
              borderRadius:'30px',
            }
          }}
          placeholder="Indirizzo email"
        />
        <TextField size={'small'}  
        sx={{
            width: "240px",
            backgroundColor: "#ffffff",
            outlineColor: "#ffffff",
            borderRadius:'30px',
            '& .MuiOutlinedInput-root':{
              borderColor:'#ffffff',
              borderRadius:'30px'
            },
            marginTop:'40px',
          }}            
           type={"password"} 
           placeholder="Password"/>
      </Box>
      <Link to="/professionista" >
      <button
        style={{
          marginTop:'40px',
          backgroundColor: "#39B1D9",
          width: 220,
          height: 37,
          borderRadius: 20,
          border: "none",
          color: "white",
          fontWeight:'bold',
          
        }}
      >
        Entra
      </button>
      </Link>
      <p>Hai dimenticato la password?</p>
    </>
  );
};

export default Login;
