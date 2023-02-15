import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const location = useLocation();

  return (
    <div
      style={{
        display: "flex",
        position:
          location.pathname == "/risultati" ||
          location.pathname == "/consenso-privacy" ||
          location.pathname == "/termini-condizioni" ||
          location.pathname == "/cookies" ||
          location.pathname == "/privacy" ||
          location.pathname == "/registrazione" ||
          location.pathname == "/assistenza"
            ? "fixed"
            : "relative",
        bottom: "0",
        marginTop: "50px",
        flexDirection: "column",
        height: "50px",
        width: "100%",
        zIndex: "100000000",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-evenly",
          backgroundColor: "rgb(57, 177, 217)",
          color: "#ffffff",
        }}
      >
        <p style={{ color: "#ffffff" }}>FastCura Copyright 2022</p>
        <Link style={{ textDecoration: "none" }} to={"/termini-condizioni"}>
          <p style={{ color: "#ffffff" }}>Termini e Condizioni</p>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/cookies">
          <p style={{ color: "#ffffff" }}>Cookies</p>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/privacy">
          <p style={{ color: "#ffffff" }}>Privacy</p>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/consenso-privacy">
          <p style={{ color: "#ffffff" }}>Consenso Privacy</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
