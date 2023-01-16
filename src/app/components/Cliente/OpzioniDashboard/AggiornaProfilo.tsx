import { Alert, Box, Snackbar, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loader } from "../../../loader";
interface IUtente {
  nome: string;
  cognome: string;
  sesso: string;
  codicepostale: string;
  number: string;
  email: string;
}

const AggiornaProfilo = () => {
  const [nome, setNome] = useState<any>();
  const [cognome, setCognome] = useState<any>();
  const [sesso, setSesso] = useState<any>();
  const [cap, setCap] = useState<any>();
  const [numero, setNumero] = useState<any>();
  const [profilo, setProfilo] = useState<any>();
  const [load, setLoad] = useState(false);
  const [ok, setOk] = useState(false);
  const [token, setToken] = useState("");

  const salvaProfilo = () => {
    const profiloaggiornato = {
      nome: nome,
      cognome: cognome,
      cap: cap,
      numero: numero,
      sesso: sesso,
    };

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post(
        "https://careful-pear-cockatoo.cyclic.app/cliente/aggiorna-profilo",
        profiloaggiornato,
        config
      )
      .then((res) => {
        ottieniProfilo();
        setOk(true);
      });
  };
  const ottieniProfilo = () => {
    setLoad(true);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post(
        "https://careful-pear-cockatoo.cyclic.app/cliente/ottieni-profilo",
        "",
        config
      )
      .then((res) => {
        console.log(res);
        setNome(res.data.nome);
        setCognome(res.data.cognome);
        setSesso(res.data.sesso);
        setCap(res.data.codicepostale);
        setNumero(res.data.number);
        setLoad(false);
      });
  };

  console.log(nome);
  const takeToken = async () => {
    const tokenTest = await localStorage.getItem("tokenaccess");
    if (!!tokenTest) setToken(tokenTest);
  };
  useEffect(() => {
    takeToken();
    if (token) ottieniProfilo();
  }, [token]);

  return (
    <>
      <Loader isLoading={load} />
      <Box
        style={{
          border: "1px solid #39B1D9",
          backgroundColor: "#F4F4F4",
          width: "300px",
          padding: "15px",
          height: "300px",
          borderRadius: "30px",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        {/*
        <TextField
          sx={{ width: "90%", marginTop: "10px" }}
          id="standard-basic"
          label="Email"
          variant="standard"
          inputProps={{ readOnly: true }}
          defaultValue={profilo?.email}
      ></TextField>*/}
        <TextField
          sx={{ width: "90%", marginTop: "10px" }}
          InputLabelProps={{ shrink: true }}
          id="standard-basic"
          label="Nome"
          variant="standard"
          onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
            setNome(x.target.value)
          }
          value={nome}
        ></TextField>
        <TextField
          sx={{ width: "90%", marginTop: "10px" }}
          id="standard-basic"
          label="Cognome"
          variant="standard"
          onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
            setCognome(x.target.value)
          }
          InputLabelProps={{ shrink: true }}
          value={cognome}
        ></TextField>
        <TextField
          sx={{ width: "90%", marginTop: "10px" }}
          id="standard-basic"
          label="CAP"
          variant="standard"
          InputLabelProps={{ shrink: true }}
          onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
            setCap(x.target.value)
          }
          value={cap}
        ></TextField>
        <TextField
          sx={{ width: "90%", marginTop: "10px" }}
          id="standard-basic"
          label="Numero"
          variant="standard"
          type={"number"}
          onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
            setNumero(x.target.value)
          }
          InputLabelProps={{ shrink: true }}
          value={numero}
        ></TextField>
      </Box>
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
        onClick={() => salvaProfilo()}
      >
        Salva
      </button>

      <Snackbar open={ok} autoHideDuration={3000} onClose={() => setOk(false)}>
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
          Profilo Aggiornato
        </Alert>
      </Snackbar>
    </>
  );
};

export default AggiornaProfilo;
