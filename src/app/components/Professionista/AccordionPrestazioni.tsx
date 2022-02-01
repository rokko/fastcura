import React from "react";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const AccordionPrestazioni = () => {
  const [expanded, setExpanded] = React.useState<String|false>("panel1");
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
            <p>Collapsible Group Item #1</p>
          </MuiAccordionSummary>
          <MuiAccordionDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </MuiAccordionDetails>
        </MuiAccordion>
      </div>
    </>
  );
};

export default AccordionPrestazioni;
