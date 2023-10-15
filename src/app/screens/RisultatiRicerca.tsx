import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
//import Header from '../components/Cliente/Header'
import HeaderNoLogin from "../components/Cliente/HeaderNoLogin";
import BoxRisultato from "../components/Cliente/Ricerca/BoxRisultato";
import axios from "axios";
import Footer from "../components/General/Footer";
import { Loader } from "../loader";
import { TitleTop } from "./trovaprofessionista/TrovaProfessionistaStyled";

interface IPropsRicerca {
  citta: string;
  professione: string;
}

const RisultatiRicerca = () => {
  const location = useLocation();

  const [listaProfessionisti, setListaProfessionisti] = useState([]);
  const [load, setLoad] = useState(false);

  const parametri = location.state as IPropsRicerca;

  useEffect(() => {
    setLoad(true);

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
        <p style={{ fontSize: "28px", fontWeight: "bold" }}>
          Al momento non sono disponibili professionisti nella tua zona
        </p>
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
