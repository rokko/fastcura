import React from 'react'
import {Box} from '@mui/material'
import { useNavigate } from "react-router-dom";



const HeaderChat = (nomeProfessionista : any, cognomeProfessionista:any) => {
const navigate = useNavigate()
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
                    justifyContent:'space-between'


                }}
            ><div>
                <Box style={{position:'absolute', top:'1px' ,borderRadius:100,border:'10px solid rgb(57, 177, 217)' ,width:'65px',height:'65px', backgroundColor:'#ffffff'}}></Box>
                <p style={{color:'#ffffff', fontSize:'21px'}}>{nomeProfessionista.nomeProfessionista}</p>
                <p style={{color:'#ffffff'}}>{cognomeProfessionista.cognomeProfessionista}</p>
                </div>
                <div onClick={()=>navigate('/chatprofessionista')}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA0ElEQVRIic3VoQ3CUBCA4eYFUQkWgUOAqATDCCh8EwQOHLrdARwzgIENYAUWQFQRSBAEA+FHcOJSRZq7hBvg+5vX9l0U/fMAdWDshcfAnu/MrfEAbAQvgJZ1YCn4BehY47ngD2BgjU8EfwEja3wIPCUwtcb7wF3wzBrvAlfBV9Z4EzgJvgVqlngDOAp+AOIqTjB7oipTOqKd6RGpSBs4u7xkFempzzT3iugfbeYVSYG3y1WhIpnbZaciC4ncgMQjEIC128KRiN/KVBG/pf/rfABRjDDifKboQgAAAABJRU5ErkJggg=="></img>
                </div>
            </Box>


        </>
    )
}

export default HeaderChat