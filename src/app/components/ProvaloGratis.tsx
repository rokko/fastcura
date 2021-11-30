import { Button, Grid, Typography } from '@mui/material'
import React from 'react'


const ProvaloGratis = () => {

    return(
        <Grid container alignItems='center' alignContent="center" direction="column" sm={4} lg={10} marginTop={15}>
            <Grid item >
                <Typography>Provalo gratis!</Typography>

            </Grid>
            <Grid item>
                <Typography>Inizia la prova gratuita di 30 giorni. Potrai disdire quando vuoi.</Typography>
            </Grid>
            <Grid item>
                <Typography>Fastcura ha l'obiettivo di darti visibilità sul tuo territorio, allargando la tua rete di clienti</Typography>
            </Grid>
            <Grid item>
                <Button>Scopri di più</Button>
            </Grid>
        </Grid>
    )

}

export default ProvaloGratis