import React, { useEffect, useState } from "react";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import moment from "moment";
import axios from "axios";
import { Loader } from "../../loader";

const AccordionPrestazioni = (prestazione: any) => {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [load, setLoad] = useState(false);
  const [expanded, setExpanded] = React.useState<String | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  // @ts-ignore
  useEffect(() => {
    trovacliente();
  }, []);
  const trovacliente = () => {
    setLoad(true);
    const ricerca = {
      idcliente: prestazione.prestazione.id_cliente,
    };
    axios
      .post(
        "https://fastcuradev.herokuapp.com/professionista/nomecliente",
        ricerca
      )
      .then((response: any) => {
        setNome(response.data.nome);
        setCognome(response.data.cognome);
        setLoad(false);
      });
  };

  return (
    <>
      <Loader isLoading={load} />
      <div>
        <MuiAccordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <MuiAccordionSummary
            sx={{
              height: "30px",
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <p style={{ margin: "auto" }}>
              {nome} {cognome}
            </p>
          </MuiAccordionSummary>
          <MuiAccordionDetails>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>
                Nome : {nome} {cognome}
              </p>
              <p>Data : {prestazione.prestazione.data}</p>
              <p>Pagamento: {prestazione.prestazione.totale} € </p>
              <p>
                Conferma :{" "}
                {prestazione.prestazione.conferma == 1 && "Confermato"}
                {prestazione.prestazione.conferma == 2 && "Rifiutato"}
                {prestazione.prestazione.conferma == 0 && "In attesa"}
              </p>
            </div>
          </MuiAccordionDetails>
        </MuiAccordion>
      </div>
    </>
  );
};

export default AccordionPrestazioni;
