import { Button, Grid, Typography } from '@mui/material'
import React from 'react'


const ServizioInnovativo = () => {

    return(
        <Grid container alignItems='center' alignContent="center" direction="column" sm={4} lg={10} marginTop={15}>
            <Grid item >
            <Typography fontWeight="bold" fontSize={25}>Un servizio innovativo</Typography>

            </Grid>
            <Grid item>
            <Typography fontSize={15} color="#6D6D6D">astcura è un servizio unico nel suo genere. Al centro di tutto vi è la tutela del professionista.</Typography>
            </Grid>
            
        </Grid>
    )

}

export default ServizioInnovativo