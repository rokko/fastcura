import { Autocomplete, Box, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AggiornaCurriculum from "../Professionista/AggiornaCurriculum";
import CronologiaPrestazioni from "../Professionista/CronologiaPrestazioni";
import PianoAbbonamento from "../Professionista/PianoAbbonamento";
import BoxSearch from "../TrovaIlTuoProfessionista/BoxSearch";
import HeaderUser from "./HeaderUser";
import AggiornaProfilo from "./OpzioniDashboard/AggiornaProfilo";
import ListaAppuntamenti from "./OpzioniDashboard/ListaAppuntamenti";
import ModificaPassword from "./OpzioniDashboard/ModificaPassword";

interface IUtente {
  nome: string;
  cognome: string;
  greenpass: string;
  codicepostale: string;
  datadinascita: Date;
  email: string;
  password: string;
  referenze: string;
  sesso: string;
  __v: number;
  _id: string;
}

const DashBoardUtenti = () => {
  const options = ["Infermiere", "Badante", "Fisioterapista", "Oss"];
  const city = ["Bari", "Napoli", "Salerno", "Roma", "Milano", "Bologna"];
  const [token, setToken] = useState("");
  const [utente, setUtente] = useState<IUtente>();
  const [professione, setProfessione] = useState<String | null>("");
  const [citta, setCitta] = useState<String | null>("");
  const [newPhoto, setNewPhoto] = useState(false);
  const [load, setLoad] = useState(false);

  const openNewPhoto = () => {
    setNewPhoto(!newPhoto);
  };
  const takeToken = async () => {
    const tokenTest = await localStorage.getItem("tokenaccess");
    if (!!tokenTest) setToken(tokenTest);
  };

  const save = () => {
    console.log("salva");
  };

  const requestinfo = async () => {
    setLoad(true);
    if (!!token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .post(
          "https://fastcuradev.herokuapp.com/cliente/infocliente",
          "",
          config
        )
        .then((response) => {
          setUtente(response.data);
          setLoad(false);
        })
        .catch((e) => console.error(e));
    }
  };

  useEffect(() => {
    takeToken();
    requestinfo();
  }, [token]);
  const [scelta, setScelta] = React.useState("");

  return (
    <>
      <HeaderUser />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            marginTop: "-50px",
            border: "1px solid #39B1D9",
            borderStyle: "solid",
            borderWidth: "1px",
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <div onClick={openNewPhoto}>
            <img src="data:image/png;base64,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" />
          </div>
        </div>

        {!!utente && (
          <p style={{ fontSize: "20px" }}>
            {utente!.nome} {utente!.cognome}
          </p>
        )}
        <div>
          <Box
            style={{
              width: "280px",
              height: "250px",
              backgroundColor: "#39B1D9",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <p className="topsearch-text">Cosa cerchi?</p>

            <Autocomplete
              disablePortal
              id="lista-servizi"
              options={options}
              size="small"
              sx={{
                width: "240px",
                border: "none",
                outline: "false",
                borderRadius: "30px",
                "& .MuiOutlinedInput-root": {
                  borderColor: "#ffffff",
                  borderRadius: "30px",
                },
              }}
              style={{ backgroundColor: "#ffffff", border: "none" }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Infermiere..." />
              )}
              onChange={(x, value) => setProfessione(value)}
            />
            <p className="topsearch-text">Dove ti trovi?</p>
            <Autocomplete
              disablePortal
              id="lista-citta"
              options={city}
              size="small"
              sx={{
                width: "240px",
                border: "none",
                outline: "false",
                borderRadius: "30px",
                "& .MuiOutlinedInput-root": {
                  borderColor: "#ffffff",
                  borderRadius: "30px",
                },
              }}
              style={{ backgroundColor: "#ffffff" }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Milano..." />
              )}
              onChange={(x, value) => setCitta(value)}
            />
          </Box>
          <Link to="/risultati" state={{ professione, citta }}>
            <button
              style={{
                width: "220px",
                height: "50px",
                backgroundColor: "#FF3617",
                fontWeight: "bold",
                border: "none",
                marginTop: 20,
                borderRadius: 20,
                color: "#ffffff",
                fontSize: "30px",
              }}
            >
              Vai
            </button>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
              textAlign: "center",
              width: "255px",
              backgroundColor:
                scelta === "ListaAppuntamenti" ? "#ffffff" : "#39B1D9",
              height: "40px",
              borderRadius: "30px",
              border:
                scelta === "ListaAppuntamenti" ? "1px solid #39B1D9" : "none",
              color: "white",
              fontWeight: "bold",
              fontSize: "17px",
            }}
            onClick={() => setScelta("ListaAppuntamenti")}
          >
            <p
              style={{
                color: scelta === "ListaAppuntamenti" ? "#39B1D9" : "white",
              }}
            >
              Lista Appuntamenti
            </p>
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
              textAlign: "center",
              width: "255px",
              backgroundColor:
                scelta === "AggiornaProfilo" ? "#ffffff" : "#39B1D9",
              height: "40px",
              borderRadius: "30px",
              border:
                scelta === "AggiornaProfilo" ? "1px solid #39B1D9" : "none",
              color: "white",
              fontWeight: "bold",
              fontSize: "17px",
            }}
            onClick={() => setScelta("AggiornaProfilo")}
          >
            <p
              style={{
                color: scelta === "AggiornaProfilo" ? "#39B1D9" : "white",
              }}
            >
              Aggiorna Profilo
            </p>
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
              textAlign: "center",
              width: "255px",
              backgroundColor:
                scelta === "RipristinaPassword" ? "#ffffff" : "#39B1D9",
              height: "40px",
              borderRadius: "30px",
              border:
                scelta === "RipristinaPassword" ? "1px solid #39B1D9" : "none",
              color: "white",
              fontWeight: "bold",
              fontSize: "17px",
            }}
            onClick={() => setScelta("RipristinaPassword")}
          >
            <p
              style={{
                color: scelta === "RipristinaPassword" ? "#39B1D9" : "white",
              }}
            >
              Ripristina password
            </p>
          </button>
        </div>
        {scelta === "ListaAppuntamenti" && <ListaAppuntamenti />}
        {scelta === "AggiornaProfilo" && <AggiornaProfilo />}
        {scelta === "RipristinaPassword" && <ModificaPassword />}
      </div>
    </>
  );
};

export default DashBoardUtenti;
