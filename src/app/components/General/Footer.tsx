import React from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const location = useLocation();

  return (
    <div
      style={{
        display: "flex",
        position: location.pathname == "/risultati" ? "fixed" : "relative",
        bottom: "0",
        marginTop: "50px",
        flexDirection: "column",
        height: "50px",
        width: "100%",
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
        <a style={{ textDecoration: "none" }} href="/terminicondizioni.pdf">
          <p style={{ color: "#ffffff" }}>Termini e Condizioni</p>
        </a>
        <a style={{ textDecoration: "none" }} href="/cookie.docx.pdf">
          <p style={{ color: "#ffffff" }}>Cookies</p>
        </a>
        <a style={{ textDecoration: "none" }} href="/Privacy.docx.pdf">
          <p style={{ color: "#ffffff" }}>Privacy</p>
        </a>
        <a style={{ textDecoration: "none" }} href="/consensoprivacy.docx.pdf">
          <p style={{ color: "#ffffff" }}>Consenso Privacy</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
