import React, { useEffect, useState } from 'react'
import { useLocation} from 'react-router-dom'
//import Header from '../components/Cliente/Header'
import HeaderNoLogin from '../components/Cliente/HeaderNoLogin'
import BoxRisultato from '../components/Cliente/Ricerca/BoxRisultato'
import axios from 'axios'
import Footer from "../components/General/Footer";




interface IPropsRicerca {
    citta: string;
    professione: string;
  }
   

const RisultatiRicerca = () => {
const location = useLocation()

const [listaProfessionisti, setListaProfessionisti] = useState([])

const parametri = location.state as IPropsRicerca


    

useEffect(()=>{

    axios.post('http://localhost:8080/professionista/ricerca',parametri)
    .then(async function (response) {
            setListaProfessionisti(response.data.professionisti)
      })
      .catch(function (error) {
        console.log(error);
      });
    

},[parametri])

    return(
        <>
        <HeaderNoLogin />
        <h1>{parametri.professione}, {parametri.citta}</h1>
            {(listaProfessionisti.length<1)&& <p style={{fontSize:'28px', fontWeight:'bold'}}>Al momento non sono disponibili professionisti nella tua zona</p>}
        {(!!listaProfessionisti) && listaProfessionisti.map((prof)=> {
        return(
            <BoxRisultato professionista={prof}/>
        )})}
<Footer/>
        </>
    )
}

export default RisultatiRicerca