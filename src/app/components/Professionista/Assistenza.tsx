import React from "react";
import HeaderUser from "../Cliente/HeaderUser";
import Footer from "../General/Footer";
import { Input } from "@mui/material";

const Assistenza = () => {
  return (
    <>
      <HeaderUser></HeaderUser>
      Per assistenza e/o informazioni compilare il form sottostante
      <Input placeholder={"Nome"}></Input>
      <Input placeholder={"Nome"}></Input>
      <Input placeholder={"email"}></Input>
      <Input placeholder={"testo"}></Input>
      <Footer />
    </>
  );
};

export default Assistenza;
