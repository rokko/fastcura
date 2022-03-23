import React , {useState} from "react";
import Modal from "@mui/material/Modal";
import {Box, TextField} from "@mui/material";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
interface IToken {
    accessToken : string
}

const ModalOfferta = (props: any) => {
    const navigate = useNavigate()
    const [totale, setTotale] = useState('')
    const [metodoPagamento,setMetodoPagamento] = useState('')   
    const [data,setData] = useState()
   
    const creaoff = ()=>{

        axios.post('http://guarded-thicket-90200.herokuapp.com/login',userlogin)
            .then(function (response) {
                const token : IToken = response.data;
                
                if (!!token.accessToken) {

                    props.verifica(true)

                    localStorage.setItem('tokenaccess', token.accessToken);
                    props.chiudi(false)
                    props.setok(true)
                
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

 
  return (
    <>
    
      <Modal
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
                <p>Hai dimenticato la password?</p>
      </Modal>
    </>
  );
};

export default ModalOfferta;