import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Ricavi = () => {
  return (
    <Grid
      container
      alignItems="center"
      alignContent="center"
      direction="column"
      sm={4}
      lg={10}
      marginTop={15}
    >
      <Grid item>
        <Typography fontWeight="bold" fontSize={25}>
          Ricavi
        </Typography>
      </Grid>
      <Grid item>
        <Typography fontSize={15} color="#6D6D6D" marginBottom={10}>
          Accordato con il cliente il prezzo, lui potrà pagare nella più
          completa sicurezza sul sito o in contanti a prestazione ultimata{" "}
        </Typography>
      </Grid>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="121.179"
        height="156.289"
        viewBox="0 0 121.179 156.289"
      >
        <g
          id="Raggruppa_102"
          data-name="Raggruppa 102"
          transform="translate(-160.209 -41.432)"
        >
          <rect
            id="Rettangolo_110"
            data-name="Rettangolo 110"
            width="22.072"
            height="76.25"
            transform="translate(170.525 121.22)"
            fill="#39b1d9"
          />
          <rect
            id="Rettangolo_111"
            data-name="Rettangolo 111"
            width="23.076"
            height="96.316"
            transform="translate(215.171 101.154)"
            fill="#39b1d9"
          />
          <rect
            id="Rettangolo_112"
            data-name="Rettangolo 112"
            width="21.822"
            height="114.626"
            transform="translate(259.567 83.095)"
            fill="#39b1d9"
          />
          <path
            id="Tracciato_652"
            data-name="Tracciato 652"
            d="M163,122.109S195.105,118.1,241.257,89"
            transform="translate(0 -22.46)"
            fill="none"
            stroke="#39b1d9"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="5"
          />
          <path
            id="Tracciato_653"
            data-name="Tracciato 653"
            d="M296.339,56.472l37.4-12.54L317.464,75.293"
            transform="translate(-66.45)"
            fill="none"
            stroke="#39b1d9"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="5"
          />
        </g>
      </svg>

      <button style={{width:120, height:35, backgroundColor:'#FF3617', fontWeight:'bold', border:'none',fontSize:'1rem',marginTop:30, borderRadius:20, color:'#ffffff'}}>Inizia Ora</button>
    </Grid>
  );
};

export default Ricavi;
