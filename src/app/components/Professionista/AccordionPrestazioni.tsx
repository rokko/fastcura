import React from "react";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const AccordionPrestazioni = () => {
  const [expanded, setExpanded] = React.useState<String|false>(false);
  const handleChange =(panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

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
            <p>Marco Marino </p>
          </MuiAccordionSummary>
          <MuiAccordionDetails>
            <p>
              Effettuato in data 26/20/2021 <br/>
              Presso Via Roma, 5 - Napoli <br/>
              Pagamento: +50€ <br/>
              Valutazione cliente : ★★★★★<br/>
            </p>
          </MuiAccordionDetails>
        </MuiAccordion>
      </div>
    </>
  );
};

export default AccordionPrestazioni;
