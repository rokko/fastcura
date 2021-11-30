import { Button, Typography, Grid } from "@mui/material";
import React from "react";
import entrateam from "../media/entrateam.png";

const EntraNelTeam = () => {
  return (
    <Grid
      container
      alignItems="center"
      alignContent="center"
      direction="column"
      sm={4}
      lg={10}
    >
      <Typography fontWeight="bold" fontSize={25}>
        Entra nel Team
      </Typography>
      <img src={entrateam} alt="entrateam" />
      <button
        style={{
          backgroundColor: "#E93323",
          width: 220,
          height: 37,
          borderRadius: 20,
          border: "none",
          color: "white",
          marginTop: 10,
        }}
      >
        <Typography fontWeight="bold"> Inizia la prova gratuita</Typography>
      </button>
    </Grid>
  );
};

export default EntraNelTeam;
