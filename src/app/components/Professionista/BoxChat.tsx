import axios from 'axios'
import React, { useState } from 'react'

const BoxChat = (props:any) => {

    const [infocliente, setInfoCliente] = useState()

    const clienteinfo ={
        id_cliente : props.contatto.id_cliente
    }

    axios.post('http://localhost:8080/professionista/info-cliente',clienteinfo)
    .then((x)=> console.log(x.data))
return(
    <>
    <div style={{display:'flex',width:'100%', borderBottom:'1px solid #000000',justifyContent:'space-around', flexDirection:'row', alignContent:'center',alignItems:'center'}}>
    <p style={{color:'grey', width:'30%'}}>Nome</p>
    <p style={{color:'blue', width:'70%', textAlign:'left'}}>Ultima Chat</p>
    </div>
    </>
)

}

export default BoxChat