import { Box, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
    return(
        <>
        <p className="titleAll">Login</p>
        <Box>
            <p className="topsearch-text">Accedi</p>
            <TextField ></TextField>
            <TextField ></TextField>
        </Box>
        <button >Accedi</button>
        <p>Hai dimenticato la password?</p>
        </>
    )
}

export default Login