import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Alert, Snackbar, TextField } from "@mui/material";
import axios from "axios";
import { truncate } from "fs";
import { Loader } from "../../loader";

interface ICurriculum {
  titolodistudio: string;
  master: string;
  numeroiscrizione: string;
  esperienze: string;
  altro: string;
}
const AggiornaCurriculum = () => {
  const [titoloStudio, setTitoloStudio] = useState<any>();
  const [master, setMaster] = useState<any>();
  const [numeroOrdine, setNumeroOrdine] = useState<any>();
  const [esperienze, setEsperienze] = useState<any>();
  const [altro, setAltro] = useState<any>();
  const [token, setToken] = useState("");
  const [curriculum, setCurriculum] = useState<ICurriculum>();
  const [load, setLoad] = useState(false);
  const [ok, setOk] = useState(false);
  const [caricamento, setCaricamento] = useState(false);
  const ottieniCurriculum = () => {
    setCaricamento(true);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get(
        "https://fastcuradev.herokuapp.com/professionista/ottieni-curriculum",
        config
      )
      .then((res) => {
        setCurriculum(res.data);
      })
      .then(() => {
        setTitoloStudio(curriculum?.titolodistudio);
        setMaster(curriculum?.master);
        setNumeroOrdine(curriculum?.numeroiscrizione);
        setEsperienze(curriculum?.esperienze);
        setAltro(curriculum?.altro);
        setCaricamento(false);
      })
      .then(() => {
        setLoad(true);
      });
  };
  const takeToken = async () => {
    const tokenTest = await localStorage.getItem("tokenaccess");
    if (!!tokenTest) setToken(tokenTest);
  };
  useEffect(() => {
    takeToken();
    if (token) ottieniCurriculum();
  }, [token]);
  const curriculumaggiornato = {
    titolodistudio: titoloStudio,
    master: master,
    numeroOrdine: numeroOrdine,
    esperienze: esperienze,
    altro: altro,
  };

  const salvaCurriculum = () => {
    setCaricamento(true);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post(
        "https://fastcuradev.herokuapp.com/professionista/modificacurriculum",
        curriculumaggiornato,
        config
      )
      .then((res) => setCaricamento(false));
    ottieniCurriculum();
    setOk(true);
  };

  if (!load || caricamento) return <Loader />;
  else
    return (
      <>
        <p>Aggiorna curriculum</p>
        <div>
          <Box
            style={{
              border: "1px solid #39B1D9",
              backgroundColor: "#F4F4F4",
              width: "300px",
              padding: "15px",
              height: "400px",
              borderRadius: "30px",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              sx={{ width: "90%", marginTop: "10px" }}
              id="standard-basic"
              label="Titolo di studio"
              variant="standard"
              onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                setTitoloStudio(x.target.value)
              }
              defaultValue={curriculum?.titolodistudio}
            ></TextField>
            <TextField
              sx={{ width: "90%", marginTop: "10px" }}
              id="standard-basic"
              label="Master/Specializzazioni"
              variant="standard"
              onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                setMaster(x.target.value)
              }
              defaultValue={curriculum?.master}
            ></TextField>
            <TextField
              sx={{ width: "90%", marginTop: "10px" }}
              id="standard-basic"
              label="Numero ordine/albo"
              variant="standard"
              onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                setNumeroOrdine(x.target.value)
              }
              defaultValue={curriculum?.numeroiscrizione}
            ></TextField>
            <TextField
              sx={{ width: "90%", marginTop: "10px" }}
              id="standard-basic"
              label="Esperienze"
              variant="standard"
              onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                setEsperienze(x.target.value)
              }
              defaultValue={curriculum?.esperienze}
            ></TextField>
            <TextField
              multiline
              rows={5}
              sx={{ width: "90%" }}
              id="standard-basic"
              label="Altro"
              variant="standard"
              onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                setAltro(x.target.value)
              }
              defaultValue={curriculum?.altro}
            ></TextField>
          </Box>
          <Snackbar
            open={ok}
            autoHideDuration={6000}
            onClose={() => setOk(false)}
          >
            <Alert
              severity="success"
              sx={{
                width: "100%",
                backgroundColor: "rgb(57, 177, 217)",
                color: "white",
                "& .MuiAlert-icon": {
                  color: "white",
                },
              }}
            >
              Curriculum Aggiornato
            </Alert>
          </Snackbar>
          <button
            style={{
              marginTop: "40px",
              backgroundColor: "#39B1D9",
              width: 220,
              height: 37,
              borderRadius: 20,
              border: "none",
              color: "white",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
            onClick={() => salvaCurriculum()}
          >
            Aggiungi
          </button>
        </div>
      </>
    );
};

export default AggiornaCurriculum;
