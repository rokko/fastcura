import React from 'react'
import {Box} from '@mui/material'
const HeaderChat = (nomeProfessionista : any, cognomeProfessionista:any) => {
    return (
        <>
            <Box
                style={{
                    width: "100%",
                    height: "70px",
                    backgroundColor: "#39B1D9",
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    alignItems: "center",


                }}
            >
                <Box style={{marginTop:10,borderRadius:100,border:'10px solid rgb(57, 177, 217)' ,width:'65px',height:'65px', backgroundColor:'#ffffff'}}></Box>
                <p style={{color:'#ffffff', fontSize:'21px'}}>{nomeProfessionista.nomeProfessionista}</p>
                <p style={{color:'#ffffff'}}>{cognomeProfessionista.cognomeProfessionista}</p>
            </Box>


        </>
    )
}

export default HeaderChat