import { Alert, Snackbar, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ModificaPassword = () => {
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [passAttuale, setPasswAttuale] = useState("");
  const [ok, setOk] = useState(false);
  const [ko, setKo] = useState(false);

  const [token, setToken] = useState("");
  const takeToken = async () => {
    const tokenTest = await localStorage.getItem("tokenaccess");
    if (!!tokenTest) setToken(tokenTest);
  };

  useEffect(() => {
    takeToken();
  }, [token]);
  const salvaPassword = () => {
    const nuovaPassword = {
      nuova: password,
      passAttuale: passAttuale,
    };

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post(
        "https://careful-pear-cockatoo.cyclic.app/cliente/aggiorna-password",
        nuovaPassword,
        config
      )
      .then((res) => {
        if (res.data.message === 1) {
          setOk(true);
        } else {
          setKo(true);
        }
      });
  };

  return (
    <>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          size={"small"}
          hiddenLabel
          sx={{
            width: "240px",
            backgroundColor: "#ffffff",
            outlineColor: "#ffffff",
            borderRadius: "30px",
            "& .MuiOutlinedInput-root": {
              borderColor: "#ffffff",
              borderRadius: "30px",
            },
          }}
          placeholder="Password Attuale"
          onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
            setPasswAttuale(x.target.value)
          }
        />
        <TextField
          size={"small"}
          hiddenLabel
          style={{
            marginTop: "20px",
          }}
          sx={{
            width: "240px",
            backgroundColor: "#ffffff",
            outlineColor: "#ffffff",
            borderRadius: "30px",
            "& .MuiOutlinedInput-root": {
              borderColor: "#ffffff",
              borderRadius: "30px",
            },
          }}
          placeholder="Nuova Password"
          onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(x.target.value)
          }
        />
        <TextField
          size={"small"}
          hiddenLabel
          style={{
            marginTop: "20px",
          }}
          sx={{
            width: "240px",
            backgroundColor: "#ffffff",
            outlineColor: "#ffffff",
            borderRadius: "30px",
            "& .MuiOutlinedInput-root": {
              borderColor: "#ffffff",
              borderRadius: "30px",
            },
          }}
          placeholder="Conferma Password"
          onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
            setConfPassword(x.target.value)
          }
        />
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
        >
          Salva
        </button>
      </div>
      <Snackbar open={ok} autoHideDuration={6000} onClose={() => setOk(false)}>
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
      <Snackbar open={ko} autoHideDuration={6000} onClose={() => setOk(false)}>
        <Alert severity="error">Errore Password</Alert>
      </Snackbar>
    </>
  );
};

export default ModificaPassword;
