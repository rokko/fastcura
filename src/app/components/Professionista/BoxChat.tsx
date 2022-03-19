import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


interface ICliente {
    codicepostale: string,
    cognome: string,
    email: string,
    nome: string,
    passw: string,
    sesso: string
}
const BoxChat = (props:any) => {

    const [infocliente, setInfocliente] = useState<ICliente>()
    const navigate = useNavigate()

    const recuperaInfo = () => {
        const clienteinfo ={
            id_cliente : props.contatto.id_cliente
        }
    
        axios.post('http://guarded-thicket-90200.herokuapp.com/professionista/info-cliente',clienteinfo)
        .then((x)=> setInfocliente(x.data))

    }

    useEffect(()=>{
        recuperaInfo()
    },[])

   


return(
    <>
    <div onClick={()=> navigate('/chatmessage' ,{ state:{contatto : props.contatto}})} style={{display:'flex',width:'100%', borderBottom:'1px solid #000000',justifyContent:'space-around', flexDirection:'row', alignContent:'center',alignItems:'center'}}>
    <p style={{color:'grey', width:'30%'}}> {(!!infocliente) && infocliente.nome} </p>
    <p style={{color:'blue', width:'70%', textAlign:'left'}}>Ultima Chat</p>
    </div>
    </>
)

}

export default BoxChat