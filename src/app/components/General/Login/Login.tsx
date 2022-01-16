import { Box, TextField } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <>
      <Box style={{
          width: "280px",
          height: "200px",
          backgroundColor: "#39B1D9",
          borderRadius: "20px",
        }}>
        <p className="topsearch-text">Accedi</p>
        <TextField></TextField>
        <TextField></TextField>
      </Box>
      <button style={{
        backgroundColor: "#39B1D9",
        width: 220,
        height: 37,
        borderRadius: 20,
        border: "none",
        color: "white",
        marginTop: 10,
      }}>Entra</button>
      <p>Hai dimenticato la password?</p>
    </>
  );
};

export default Login;
