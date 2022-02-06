import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const ProvaloGratis = () => {

    return(

        <div style={{display: 'flex', alignItems: 'left' , alignContent:'left', textAlign:'left', marginLeft:'1rem'}}>

        <Grid container alignItems='left' alignContent="left" direction="column" sm={4} lg={10} marginTop={15}>
            <Grid item >
            <Typography fontWeight="bold" fontSize={25}>Provalo gratis!</Typography>

            </Grid>
            <Grid item>
            <Typography fontSize={15} color="#6D6D6D" >Inizia la prova gratuita di 30 giorni. Potrai disdire quando vuoi.</Typography>
            </Grid>
            <Grid item>
            <Typography fontSize={15} color="#6D6D6D" marginBottom={8}>Fastcura ha l'obiettivo di darti visibilità sul tuo territorio, allargando la tua rete di clienti</Typography>
            </Grid>
            <Grid item>
            <Link to = '/signup-professionista'>

                <button style={{width:210, height:35,backgroundColor:'#39B1D9',fontSize:'1rem', borderRadius:20,border:'none',fontWeight:'bold', color:'#ffffff', fontStyle:'Charter'}}>Inizia la prova gratuita</button>
            </Link>
            </Grid>
        </Grid>
        </div>
    )

}

export default ProvaloGratis