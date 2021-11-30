import { Container } from "@mui/material";
import logo from "../media/logo.png";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <Container
        style={{
          display: "flex",
          textAlign: "left",
          marginTop: 10,
          padding: 30,
          height: 90,
        }}
      >
        <img src={logo} alt="logo" />
      </Container>
    </div>
  );
};

export default Header;
