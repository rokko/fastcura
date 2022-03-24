import React, {useEffect, useState} from "react";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import moment from 'moment'
import axios from "axios";

const AccordionPrestazioni = (prestazione:any) => {
  const [nome, setNome]= useState('')
  const [cognome,setCognome]= useState('')
  const [expanded, setExpanded] = React.useState<String|false>(false);
  const handleChange =(panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };
  // @ts-ignore
  useEffect(()=> {
    trovacliente()
  },[])
  const trovacliente = () => {
    const ricerca ={
      idcliente : prestazione.prestazione.id_cliente
    }
    axios.post('https://fastcuradev.herokuapp.com/professionista/nomecliente',ricerca)
        .then((response:any)=> {
        setNome(response.data.nome)
        setCognome(response.data.cognome)
        }
        )
  }
  return (
    <>
      <div>
        <MuiAccordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <MuiAccordionSummary
           sx={{
            height:'30px',
        }}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <p>{nome} {cognome}</p>
          </MuiAccordionSummary>
          <MuiAccordionDetails>
            <p>
              Effettuato in data {moment(prestazione.prestazione.data).format('MM/DD/YYYY')} <br/>
              Pagamento: {prestazione.prestazione.totale} € <br/>

            </p>
          </MuiAccordionDetails>
        </MuiAccordion>
      </div>
    </>
  );
};

export default AccordionPrestazioni;
