import { Grid } from '@mui/material'
import React from 'react'
import EntraNelTeam from '../components/EntraNelTeam'
import Visibilita from '../components/Visibilita'
import Target from '../components/Target'
import DecidiTu from '../components/DecidiTu'
import FaiTuPrezzo from '../components/FaiTuPrezzo'
import ServizioMessagistica from '../components/ServizioMessagistica'
import Ricavi from '../components/Ricavi'
import ServizioInnovativo from '../components/ServizioInnovativo'
import ProvaloGratis from '../components/ProvaloGratis'
import Abbonati from '../components/Abbonati'
const HomePage = () => {

    return(
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
       
        >
            <Grid item sm={3}>
        <EntraNelTeam />
        <Visibilita />
        <Target />
        <DecidiTu />
        <FaiTuPrezzo/>
        <ServizioMessagistica/>
        <Ricavi />
        <ServizioInnovativo />
        <ProvaloGratis/>
        <Abbonati />
        </Grid>
        </Grid>
        
    )
}

export default HomePage