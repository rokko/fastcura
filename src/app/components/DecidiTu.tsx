import {  Grid, Typography } from "@mui/material";
import React from "react";
import deciditu from "../media/decidi.png";
const DecidiTu = () => {
  return (
    <div style={{display: 'flex', alignItems: 'left' , alignContent:'left', textAlign:'left', marginLeft:'1rem'}}>

    <Grid
      container
      marginTop={15}
      alignItems="center"
      alignContent="center"
      direction="column"
      sm={4}
      lg={10}
    >
      <Grid item>
        <Typography fontWeight="bold" fontSize={25}  style={{display: 'flex', textAlign:'left'}}>
          Decidi tu quando!
        </Typography>
      </Grid>
      <Grid item>
        <Typography fontSize={15} color="#6D6D6D">
          Decidi tu quando e come lavorare. Tu ci metti le competenze, Fastcura
          ti trova i clienti
        </Typography>
      </Grid>

      <img
        src={deciditu}
        alt="deciditu"
        style={{ marginTop: 40, width: "100%", height: "auto" }}
      />
    </Grid>
    </div>
  );
};

export default DecidiTu;
