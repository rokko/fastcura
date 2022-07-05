import { Box } from "@mui/system";
import React from "react";

const CardAbbonamento = () => {
  return (
    <>
      <Box
        style={{
          padding: "20px",
          width: "200px",
          height: "140px",
          backgroundColor: "#39B1D9",
          borderRadius: "5%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
          textAlign: "left",
        }}
      >
        <p style={{ color: "white", fontSize: "23px", textAlign: "center" }}>
          Complimenti hai attivato la tua prova!
        </p>
        <p style={{ color: "white", fontSize: "13px", marginTop: "-10px" }}>
          Hai a disposizione 2 mesi gratuiti
          <br />
        </p>
      </Box>
    </>
  );
};

export default CardAbbonamento;
