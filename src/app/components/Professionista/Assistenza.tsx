import React, { useState } from "react";
import HeaderUser from "../Cliente/HeaderUser";
import Footer from "../General/Footer";
import { Input, TextField } from "@mui/material";

const Assistenza = () => {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [richiesta, setRichiesta] = useState("");

  const sendRequest = () => {
    console.log("vai");
  };
  return (
    <>
      <HeaderUser></HeaderUser>
      Per assistenza e/o informazioni compilare il form sottostante
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          gap: "1rem",
          marginTop: "3rem",
        }}
      >
        <TextField
          id="outlined-basic"
          placeholder={"Nome"}
          style={{ width: "400px" }}
        ></TextField>
        <TextField
          id="outlined-basic"
          placeholder={"Cognome"}
          style={{ width: "400px" }}
        ></TextField>
        <TextField
          id="outlined-basic"
          placeholder={"Email"}
          style={{ width: "400px" }}
        ></TextField>
        <TextField
          id="outlined-basic"
          placeholder={"Richiesta"}
          style={{ width: "400px" }}
        ></TextField>
        <button
          style={{
            backgroundColor: "#39B1D9",
            fontSize: "18px",
            width: 220,
            height: 50,
            borderRadius: 20,
            border: "none",
            color: "white",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
          onClick={() => sendRequest()}
        >
          Invia richiesta
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Assistenza;
