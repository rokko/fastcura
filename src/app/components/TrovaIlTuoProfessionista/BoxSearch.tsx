import { Box } from "@mui/system";
import React from "react";
import { TextField } from "@mui/material";

const BoxSearch = () => {
  return (
    <>
      <div className="top-box">
        <p className="top-test boldtext">
          Trova subito il <br />{" "}
          <span className="bluespan">professionista</span> <br /> di cui hai
          bisogno!
        </p>
      </div>
      <Box
        style={{
          width: "280px",
          height: "200px",
          backgroundColor: "#39B1D9",
          borderRadius: "20px",
        }}
      >
        <p className="topsearch-text">Cosa cerchi?</p>
        <TextField
          style={{
            width: "220px",
            borderRadius: "30px",
            height: "30px",
            backgroundColor: "#ffffff",
          }}
          InputLabelProps={{
            style: {
              height:'30px'
            },
          }}
          inputProps={{
            style: {
              height: '30px',
            },
        }}
          id="outlined-size-small"
        />
        <p className="topsearch-text">Dove ti trovi?</p>
        <TextField
          id="outlined-size-small"
          defaultValue="Bari, Milano, Napoli .."
        />
      </Box>
    </>
  );
};

export default BoxSearch;
