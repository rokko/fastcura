import React , {useEffect, useState} from "react";
import Modal from "@mui/material/Modal";
import {Box, TextField} from "@mui/material";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import { usePreviousProps } from "@mui/utils";
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from "constants";
interface IToken {
    accessToken : string
}

const ModalOfferta = (props: any) => {
 useEffect(()=>{

 }) 

  const [nomePrestazione, setNomePrestazione] = useState('')
  const [giorno, setGiorno] = useState('')
  const [prezzo, setPrezzo] = useState('')
  
  const sendMessage = async() => {
     
    const mess = {
        message : 'Offerta Inviata',
        contatti_id: props.idconversazione,
    }
    const config = {
      headers: { Authorization: `Bearer ${props.token}` },
    };

    axios
    .post("https://fastcuradev.herokuapp.com/chat/send-message", mess, config)
    .then((x)=> console.log(x))



};
  const invioOfferta = () =>{

    const invi = {
      nome: nomePrestazione,
      data: giorno,
      id_cliente : props.idcliente,
      id_professionista : props.idprofessionista,
      metodo_pagamento : 'contanti',
      totale:prezzo,
      conferma :0,
      id_conversazione : props.idconversazione,
    }
  

    axios
    .post("https://fastcuradev.herokuapp.com/professionista/crea-appuntamento", invi)
    .then((x) => {console.log(x)});
    sendMessage()

props.chiudi(false)

  }

  const annullaOfferta = () => {
    props.chiudi(false)
  }
  return (
    <> 
    <Modal
  open={props.open}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <div style={{
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    marginTop:'100px',
    width: "320px",
    height: "400px",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    outline: 'none',
    border:'1px solid #5DBFE0'
  }}>
        <Box style={{width:'90%',marginBottom:'30px', borderRadius:'10%', padding:'10px', marginTop:'30px', display:'flex', flexDirection:'column', alignContent:'left'}}>
        <p style={{textAlign:'left', color:'#39B1D9'}}>Nome prestazione</p>
        <TextField style={{alignSelf:'left'}} id="standard-basic"  variant="standard"  onChange={(x: React.ChangeEvent<HTMLInputElement>) => setNomePrestazione(x.target.value)}>Nome Prestazione</TextField>
        <p style={{textAlign:'left',color:'#39B1D9'}}>Prezzo</p>
        <TextField id="standard-basic"  variant="standard"  onChange={(x: React.ChangeEvent<HTMLInputElement>) => setPrezzo(x.target.value)}></TextField>
        <p style={{textAlign:'left', color:'#39B1D9'}}>Giorno prestazione</p>
        <TextField id="standard-basic"  variant="standard"  onChange={(x: React.ChangeEvent<HTMLInputElement>) => setGiorno(x.target.value)}></TextField>
        </Box>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
        <button
                        style={{
                            backgroundColor: "rgb(57, 177, 217)",
                            width: 100,
                            height: 37,
                            borderRadius: 20,
                            border: "none",
                            color: "white",
                            fontWeight:'bold',
                            marginRight:'10px'

                        }}

                        onClick={()=> invioOfferta()}
                       
                    >Invia</button>
          <button
                        style={{
                            backgroundColor: "rgb(57, 177, 217)",
                            width: 100,
                            height: 37,
                            borderRadius: 20,
                            border: "none",
                            color: "white",
                            fontWeight:'bold',

                        }}

                        onClick ={()=> annullaOfferta()}
                        
                    >Annulla</button>
        </div>

    </div>

        

</Modal>
    
    </>
  );
};

export default ModalOfferta;