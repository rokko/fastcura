import { Box } from "@mui/system";
import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const BoxSearch = () => {
 
  

  const options = ['Infermiere', 'Badante', 'Fisioterapista','Oss'];
  const city = ['Bari', 'Napoli', 'Salerno', 'Roma', 'Milano', 'Bologna']
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
          height: "250px",
          backgroundColor: "#39B1D9",
          borderRadius: "20px",
          display:'flex',
          flexDirection:'column',
          alignContent:'center',
          alignItems:'center',
        }}
      >
        <p className="topsearch-text">Cosa cerchi?</p>
        
         <Autocomplete
         disablePortal
         id="lista-servizi"
         options={options}
         size="small"
         sx={{ width: '240px', border:'none', outline:'false'}}
         style={{backgroundColor:'#ffffff', border:'none', borderRadius:'30px'}}
         renderInput={(params) => <TextField {...params} label="Infermiere..." />}
       />
        <p className="topsearch-text">Dove ti trovi?</p>
        <Autocomplete
         disablePortal
         id="lista-servizi"
         options={city}
         size="small"
         sx={{ width: '240px' }}
         style={{backgroundColor:'#ffffff', borderRadius:'30px'}}
         renderInput={(params) => <TextField {...params} label="Milano..." />}
       />
      </Box>
      <Link to="/risultati">
      <button
            style={{
              width: '120px',
              height: '50px',
              backgroundColor: "#FF3617",
              fontWeight: "bold",
              border: "none",
              marginTop: 20,
              borderRadius: 20,
              color: "#ffffff",
              fontSize:'18px'
            }}
          >Vai</button>
          </Link>
    </>
  );
};

export default BoxSearch;
