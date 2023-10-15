import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
//import Header from '../components/Cliente/Header'
import HeaderNoLogin from "../components/Cliente/HeaderNoLogin";
import BoxRisultato from "../components/Cliente/Ricerca/BoxRisultato";
import axios from "axios";
import Footer from "../components/General/Footer";
import { Loader } from "../loader";
import { TitleTop } from "./trovaprofessionista/TrovaProfessionistaStyled";
import { styled } from "@mui/material";
import SegnalazioneMancanzaProfessionista from "./segnalazioneMancanzaProfessionista/SegnalazioneMancanzaProfessionista";

interface IPropsRicerca {
  citta: string;
  professione: string;
}

const ButtonAiutaciAMigliorare = styled('button')`
  background-color: #39b1d9; 
  color: #ffffff;
  width:308px;
  height:47px;
  border:none;
  border-radius:40px;
  font-size:18px;
  font-family:'Roboto'
  font-weight:500
  `
  

const RisultatiRicerca = () => {
  const location = useLocation();

  const [listaProfessionisti, setListaProfessionisti] = useState([]);
  const [load, setLoad] = useState(false);
  const [apri, setApri] = useState(false)

  const parametri = location.state as IPropsRicerca;

  useEffect(() => {
    setLoad(true);
    console.log(parametri)

    axios
      .post(
        "https://careful-pear-cockatoo.cyclic.app/professionista/ricerca",
        parametri
      )
      .then(async function (response) {
        setListaProfessionisti(response.data.professionisti);
        setLoad(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [parametri]);
  return (
    <>
      <Loader isLoading={load} />
      <HeaderNoLogin />
      <TitleTop style={{ color: "black", textAlign: "center", fontWeight:'400', fontSize:'43px' }}>
        <span style={{ fontWeight: "bold" }}>
          {" "}
          {parametri.professione}, {parametri.citta}
        </span>
      </TitleTop>
      {listaProfessionisti.length < 1 && (
        <div style={{display:'flex', flexDirection:'column', alignContent:'center', alignItems:'center',gap:'4rem'}}>
        <p style={{ fontSize: "22px", fontWeight: "400" , color:'black'}}>
          Al momento non sono disponibili professionisti nella tua zona
        </p>
        <ButtonAiutaciAMigliorare onClick={()=>setApri(true)}>Aiutaci a migliorare</ButtonAiutaciAMigliorare>

        <p style={{fontSize:'16px',fontWeight:'400',fontFamily:'Helvetica', color:'black'}}>Siamo una realtà giovane che ha bisogno del tuo aiuto per cresce.<br/>
Avvisaci quando non trovi il professionista desiderato, ci attiveremo per migliorare la tua ricerca.</p>
<SegnalazioneMancanzaProfessionista cittaprofessione={parametri} apri={apri} chiudi={setApri}/>
        </div>
      )}
      {!!listaProfessionisti &&
        listaProfessionisti.map((prof) => {
          return <BoxRisultato professionista={prof} />;
        })}
      <div style={{ marginBottom: "200px" }} />
      <Footer />
    </>
  );
};

export default RisultatiRicerca;
