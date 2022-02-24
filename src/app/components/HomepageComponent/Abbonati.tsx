import {Typography } from '@mui/material'
import React from 'react'


const Abbonati = () => {

    return(
        <div style={{display:'flex', marginTop:'50px',flexDirection:'row', justifyContent:"space-around", width:'100%', maxWidth:'100%'}}>
            <div style={{display:'flex', flexDirection:'column', justifyContent:"space-around",alignContent:'center', alignItems:'center' }}>

            <Typography fontWeight="bold" fontSize={25} >Abbonati</Typography>
                <Typography>Scegli in piano di abbonamento più adatto a te!</Typography>
    </div>
    </div>
)

}

export default Abbonati