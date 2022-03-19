import React, {useEffect, useState} from 'react'
import HeaderChat from '../Chat/HeaderChat';
import {Box, TextField} from "@mui/material";
import {useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ModalLogin from '../ModalLogin';
import axios from 'axios';


const SERVER = "http://localhost:8080";

const ChatProfessionista = () => {
    const [chat, setChat] = useState<any>()
   const  [conversazione, setConversazione] = useState<any>()
    const location = useLocation()
    const valoriProfessionista = location.state as any
    const idprofessionista=(valoriProfessionista.professionista._id)
    const [pop, setPop] = useState(false)
    const navigate = useNavigate()
    const [token,setToken]= useState('')
    const [messaggio,setMessaggio] = useState('')


    const takeToken = async () => {
        const tokenTest = await localStorage.getItem('tokenaccess');
        (!!tokenTest)  ? setToken(tokenTest) : setPop(true)
    }

 useEffect(()=>{
     takeToken()
 },[token])

 useEffect(()=>{
     if(token !== ''){
        const nuovo = {
            id_professionista:idprofessionista
        }
        const config = {
            headers: {Authorization: `Bearer ${token}`}
        }
       
        axios.post('http://localhost:8080/cliente/nuovo-contatto',nuovo,config)
            .then((x)=> setConversazione(x.data._id))
     }
 },[token])

 const recuperaChat = async () => {
    const cont = {
      contatti_id: conversazione,
    };

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post("http://localhost:8080/chat/get-message", cont, config)
    
      .then((x) => console.log(x.data));
  };

    const inviaMessaggio = () => {
        const mess = {
          message : messaggio,
          contatti_id: conversazione,
      }
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
      .post("http://localhost:8080/chat/send-message", mess, config)
    
      .then((x) => console.log(x.data));

      recuperaChat()
    }
   
  

    return(
       
        <>
            <div style={{height:'100%'}}>
        <HeaderChat nomeProfessionista={valoriProfessionista.professionista.nome} cognomeProfessionista={valoriProfessionista.professionista.cognome}/>
            <Box style={{height:'600px'}}>

            </Box>
                <div style={{display:'flex',flexDirection:'row', alignContent:'center',position:'fixed',bottom:'0%',left:'0%',right:'0%'}}>
                <TextField
                    label={'Scrivi un messaggio..'}
                    sx={{ height:'60px', width: '80%',border:'none', outline:'false', borderRadius:'30px','& .MuiOutlinedInput-root':{
                        borderColor:'#ffffff',
                        borderRadius:'30px'
                    }, }}
                    onChange={(x:React.ChangeEvent<HTMLInputElement>) => setMessaggio(x.target.value)}

                            style={{backgroundColor:'#ffffff'}}></TextField>
                    <button style={{marginLeft:'10px' ,width:'80px', height:'60px',backgroundColor:'#39B1D9', border:'none', borderRadius:'30px', fontSize:'12px', fontWeight:'bold', color:'white'}}  onClick={()=>{inviaMessaggio()}}>Invia</button>
                 </div>
            </div>
            <ModalLogin open={pop}/>
            </>

    )
}

export default ChatProfessionista