import React from 'react'
import Modal from "@mui/material/Modal";
import {Box, TextField} from "@mui/material";
import axios from 'axios';

const ModalRicevutaOfferta = (props:any) => {
const accettaofferta = () => {
    const ris = {
        idappuntamento : props.offerta._id
    }
    axios.post('https://fastcuradev.herokuapp.com/cliente/accettaofferta',ris)
    .then((response) =>   console.log(response))
    props.accetta()
    props.chiudi(false)
}
const rifiutaofferta = () => {
    const ris = {
        idappuntamento : props.offerta._id
    }
    axios.post('https://fastcuradev.herokuapp.com/cliente/rifiutaofferta',ris)
    .then((response) =>   console.log(response))
    props.rifiuta()
    props.chiudi(false)



}
if (props.offerta== undefined) return null
   else return (

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
        height: "430px",
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
            <p style={{textAlign:'left', color:'#39B1D9'}}>Tipo di prestazione</p>
            <p>{props.offerta.nome}</p>
            <p style={{textAlign:'left',color:'#39B1D9'}}>Prezzo</p>
            <p>{props.offerta.totale}</p>
            <p style={{textAlign:'left', color:'#39B1D9'}}>Giorno prestazione</p>
            <p>{props.offerta.data}</p>
        
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
    
                            onClick={()=> accettaofferta()}
                           
                        >Accetta</button>
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
    
                            onClick ={()=>rifiutaofferta()}
                            
                        >Rifiuta</button>
            </div>
    
        </div>
    
            
    
    </Modal>
    </>

    )}

export default ModalRicevutaOfferta 