import React from 'react'
import { Box } from '@mui/system'
import { TextField } from '@mui/material'
const AggiornaCurriculum = () => {

    return(
        <>
        <p>Aggiorna curriculum</p>
        <Box style={{backgroundColor:'#F4F4F4', width:'300px', height:'400px', borderRadius:'30px'}}>
        <TextField sx={{width:'90%'}} id="standard-basic" label="Titolo di studio" variant="standard"></TextField>
        <TextField sx={{width:'90%'}} id="standard-basic" label="Master/Specializzazioni" variant="standard"></TextField>
        <TextField sx={{width:'90%'}} id="standard-basic" label="Numero ordine/albo" variant="standard"></TextField>
        <TextField sx={{width:'90%'}} id="standard-basic" label="Esperienze" variant="standard"></TextField>
        <TextField sx={{width:'90%'}} id="standard-basic" label="Altro" variant="standard"></TextField>




      </Box>
        </>
    )
}

export default AggiornaCurriculum