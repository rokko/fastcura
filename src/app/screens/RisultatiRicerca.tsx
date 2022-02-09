import React, { useEffect, useState } from 'react'
import { useLocation} from 'react-router-dom'
import Header from '../components/Cliente/Header'
import BoxRisultato from '../components/Cliente/Ricerca/BoxRisultato'
import axios from 'axios'




interface IPropsRicerca {
    citta: string;
    professione: string;
  }
   

const RisultatiRicerca = () => {
const location = useLocation()

const [listaProfessionisti, setListaProfessionisti] = useState([])

const parametri = location.state as IPropsRicerca


    

useEffect(()=>{

    axios.post('http://localhost:3001/professionista/ricerca',parametri)
    .then(async function (response) {
            setListaProfessionisti(response.data.professionisti)
      })
      .catch(function (error) {
        console.log(error);
      });
    

})

    return(
        <>
        <Header />
        <h1>{parametri.professione}, {parametri.citta}</h1>
        {(!!listaProfessionisti) && listaProfessionisti.map((prof)=> {
        return(
            <BoxRisultato professionista={prof}/>
        )})}

        </>
    )
}

export default RisultatiRicerca