import { Box } from "@mui/system";
import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import Lavagna from "./Lavagna";
const BoxSearch = () => {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` })




    const options = ['Infermiere', 'Badante', 'Fisioterapista','Oss'];
  const city = ['Bari', 'Napoli', 'Salerno', 'Roma', 'Milano', 'Bologna']

  const [professione, setProfessione]= useState<String | null>('')
  const [citta, setCitta] = useState<String|null>('')


  console.log(professione)
  console.log(citta)

    if (!isMobile) return(
        <>
            <div style={{display:'flex', flexDirection:'row', justifyContent:"space-around", width:'100%', maxWidth:'100%'}}>
            <div style={{display:'flex', flexDirection:'row', justifyContent:"space-around", }}>
                <Lavagna />
                <p className="top-test boldtext" style={{color:'#000000', textAlign:'left', fontSize:'48px'}}>
                    L'<span className="bluespan">assistenza </span><br />{" "}
                    domiciliare a<br/>portata di <span className="bluespan">click</span>
                </p>
            </div>
                <div>
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
                            sx={{ width: '240px', border:'none', outline:'false', borderRadius:'30px',
                                '& .MuiOutlinedInput-root':{
                                    borderColor:'#ffffff',
                                    borderRadius:'30px'
                                },}}
                            style={{backgroundColor:'#ffffff', border:'none'}}


                            renderInput={(params) => <TextField   {...params} placeholder="Infermiere..." />}
                            onChange={(x, value)=> setProfessione(value)}
                        />
                        <p className="topsearch-text">Dove ti trovi?</p>
                        <Autocomplete
                            disablePortal
                            id="lista-citta"
                            options={city}
                            size="small"
                            sx={{ width: '240px',border:'none', outline:'false', borderRadius:'30px','& .MuiOutlinedInput-root':{
                                    borderColor:'#ffffff',
                                    borderRadius:'30px'
                                }, }}
                            style={{backgroundColor:'#ffffff'}}
                            renderInput={(params) => <TextField {...params} placeholder="Milano..." />}
                            onChange={(x,value)=> setCitta(value)}
                        />
                    </Box>
                    <Link to='/risultati'
                          state={{professione, citta}}
                    >
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
                </div>
            </div>

        </>
    )
    else
  return (
    <>
      <div>
        <p className="top-test boldtext" style={{color:'#000000', textAlign:'left'}}>
          L'<span className="bluespan">assistenza </span><br />{" "}
          domiciliare a<br/>portata di <span className="bluespan">click</span> 
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
         sx={{ width: '240px', border:'none', outline:'false', borderRadius:'30px',
        '& .MuiOutlinedInput-root':{
          borderColor:'#ffffff',
          borderRadius:'30px'
        },}}
         style={{backgroundColor:'#ffffff', border:'none'}}

        
         renderInput={(params) => <TextField   {...params} placeholder="Infermiere..." />}
         onChange={(x, value)=> setProfessione(value)}
       />
        <p className="topsearch-text">Dove ti trovi?</p>
        <Autocomplete
         disablePortal
         id="lista-citta"
         options={city}
         size="small"
         sx={{ width: '240px',border:'none', outline:'false', borderRadius:'30px','& .MuiOutlinedInput-root':{
          borderColor:'#ffffff',
          borderRadius:'30px'
        }, }}
         style={{backgroundColor:'#ffffff'}}
         renderInput={(params) => <TextField {...params} placeholder="Milano..." />}
         onChange={(x,value)=> setCitta(value)}
       />
      </Box>
      <Link to='/risultati'
      state={{professione, citta}}
         >
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
