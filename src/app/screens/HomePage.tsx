import { Grid } from '@mui/material'
import React from 'react'
import EntraNelTeam from '../components/HomepageComponent/EntraNelTeam'
import Visibilita from '../components/HomepageComponent/Visibilita'
import Target from '../components/HomepageComponent/Target'
import DecidiTu from '../components/HomepageComponent/DecidiTu'
import FaiTuPrezzo from '../components/HomepageComponent/FaiTuPrezzo'
import ServizioMessagistica from '../components/HomepageComponent/ServizioMessagistica'
import Ricavi from '../components/HomepageComponent/Ricavi'
import ServizioInnovativo from '../components/HomepageComponent/ServizioInnovativo'
import ProvaloGratis from '../components/HomepageComponent/ProvaloGratis'
import Abbonati from '../components/HomepageComponent/Abbonati'
import Header from '../components/HomepageComponent/Header';

const HomePage = () => {

    return(
        <>
<Header></Header>
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
        </>
    )
}

export default HomePage