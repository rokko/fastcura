import React from "react";
import AbbonamentoCarousel from "./AbbonamentoCarousel";

const PianoAbbonamento = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{ marginTop: "30px" }}>Abbonamento Attivo</p>
      <AbbonamentoCarousel />
    </div>
  );
};

export default PianoAbbonamento;
