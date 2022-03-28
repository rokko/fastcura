import React , {useState} from "react";
import Modal from "@mui/material/Modal";
import {Box, TextField} from "@mui/material";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
interface IToken {
    accessToken : string
}

const ModalOfferta = (props: any) => {

  const [nomePrestazione, setNomePrestazione] = useState('')
  const [giorno, setGiorno] = useState('')
  const [przzo, setPrezzo] = useState('')
  
 
  const invioOfferta = () =>{

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