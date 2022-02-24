import React from 'react'
import HeaderChat from '../Chat/HeaderChat';
import socketClient  from "socket.io-client";
import {Box} from "@mui/material";
import {useLocation} from "react-router-dom";
const SERVER = "http://localhost:3001";

const ChatProfessionista = () => {

    const location = useLocation()
    const valoriProfessionista = location.state as any
    const idprofessionista=(valoriProfessionista.professionista._id)
    console.log (idprofessionista)
    const socket = socketClient (SERVER);
    socket.on('connection', () => {

    });
    return(
       
        <>
        <HeaderChat nomeProfessionista={valoriProfessionista.professionista.nome} cognomeProfessionista={valoriProfessionista.professionista.cognome}/>
            <Box style={{height:'90%'}}>

            </Box>

            </>

    )
}

export default ChatProfessionista