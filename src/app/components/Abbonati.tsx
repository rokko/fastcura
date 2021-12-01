import { Button, Grid, Typography } from '@mui/material'
import React from 'react'


const Abbonati = () => {

    return(
        <Grid container alignItems='center' alignContent="center" direction="column" sm={4} lg={10} marginTop={15}>
            <Grid item >
            <Typography fontWeight="bold" fontSize={25}>Abbonati</Typography>

            </Grid>
            <Grid item>
                <Typography>Scegli in piano di abbonamento più adatto a te!</Typography>
            </Grid>
            
        </Grid>
    )

}

export default Abbonati