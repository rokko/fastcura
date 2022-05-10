import React, { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  IconButton,
  makeStyles,
  Snackbar,
} from "@mui/material";
import { Link } from "react-router-dom";
import BoxLogin from "../General/Login/BoxLogin";
import ModalLogin from "../General/ModalLogin";
import ProfiloProfessionista from "../ListaProfessionisti/ProfiloProfessionista";
import Confir from "../General/Confir";
import { style } from "@mui/system";
import axios from "axios";
import { flexbox } from "@mui/system";
import VerticalMenu from "../Professionista/VerticalMenu";
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

const HeaderNoLogin = () => {
  const [pop, setPop] = useState(false);
  const [ok, setOk] = useState(false);
  const [oklog, setOklog] = useState(false);
  const [kolog, setKolog] = useState(false);
  const [token, setToken] = useState("");
  const [utente, setUtente] = useState<IUtente>();
  const [open, setOpen] = useState(false);

  const takeToken = async () => {
    const tokenTest = await localStorage.getItem("tokenaccess");
    if (!!tokenTest) setToken(tokenTest);
  };

  const requestinfo = async () => {
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
        })
        .catch((e) => console.error(e));
    }
  };

  useEffect(() => {
    takeToken();
    requestinfo();
  }, [token]);

  return (
    <>
      <Box
        style={{
          width: "100%",
          height: "70px",
          backgroundColor: "#39B1D9",
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to="/">
          <svg
            style={{ marginLeft: "20px" }}
            id="Raggruppa_16"
            data-name="Raggruppa 16"
            xmlns="http://www.w3.org/2000/svg"
            width="55.393"
            height="35.4"
            viewBox="0 0 55.393 35.4"
          >
            <path
              id="Tracciato_39"
              data-name="Tracciato 39"
              d="M116.8,132.852q.052-.658.154-1.3h-8.219v0h-3.061v3.773H108.6v-.016h8.178A18.068,18.068,0,0,1,116.8,132.852Z"
              transform="translate(-101.64 -118.684)"
              fill="#fff"
            />
            <path
              id="Tracciato_40"
              data-name="Tracciato 40"
              d="M242.35,177.224l-7.113-5.873a17.071,17.071,0,0,1-2.965,3.336l7.183,6a1.823,1.823,0,0,0,2.568-.23l.557-.667A1.823,1.823,0,0,0,242.35,177.224Z"
              transform="translate(-187.612 -145.714)"
              fill="#fff"
            />
            <g
              id="Raggruppa_10"
              data-name="Raggruppa 10"
              transform="translate(17.34 0)"
            >
              <path
                id="Tracciato_41"
                data-name="Tracciato 41"
                d="M163.958,122.529a15.563,15.563,0,1,1,14.245-14.24A15.579,15.579,0,0,1,163.958,122.529Zm-.032-27.491a12.043,12.043,0,1,0,10.745,10.746A12.055,12.055,0,0,0,163.926,95.038Z"
                transform="translate(-147.13 -91.455)"
                fill="#fff"
              />
            </g>
            <path
              id="Tracciato_42"
              data-name="Tracciato 42"
              d="M185.939,118.889h-5.982v-5.982h-5.392v5.982h-5.982v5.392h5.982v5.982h5.392v-5.982h5.982Z"
              transform="translate(-144.359 -106.023)"
              fill="#fff"
            />
            <path
              id="Tracciato_43"
              data-name="Tracciato 43"
              d="M125.939,155.546h-7.706v3.638h9.222A18.924,18.924,0,0,1,125.939,155.546Z"
              transform="translate(-110.166 -134.98)"
              fill="#fff"
            />
            <path
              id="Tracciato_44"
              data-name="Tracciato 44"
              d="M111.629,107.458H93.093v3.76h16.419A17.722,17.722,0,0,1,111.629,107.458Z"
              transform="translate(-93.093 -102.323)"
              fill="#fff"
            />
          </svg>
        </Link>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{ marginRight: "10px" }}
            onClick={() => {
              if (!utente?.email) {
                setPop(true);
              } else {
                setOpen(!open);
              }
            }}
          >
            {!!utente && (
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "white",
                  borderRadius: "100%",
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    color: "rgb(57, 177, 217)",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  {utente?.nome.charAt(0)}
                  {utente?.cognome.charAt(0)}
                </p>
              </div>
            )}
            {!utente && (
              <svg
                id="person"
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
              >
                <path
                  id="Tracciato_130"
                  data-name="Tracciato 130"
                  d="M0,0H34V34H0Z"
                  fill="none"
                />
                <path
                  id="Tracciato_131"
                  data-name="Tracciato 131"
                  d="M15.333,15.333A5.667,5.667,0,1,0,9.667,9.667,5.665,5.665,0,0,0,15.333,15.333Zm0,2.833C11.551,18.167,4,20.065,4,23.833v2.833H26.667V23.833C26.667,20.065,19.116,18.167,15.333,18.167Z"
                  transform="translate(1.667 1.667)"
                  fill="#fff"
                />
              </svg>
            )}
          </div>
        </div>
        <ModalLogin
          setok={setOk}
          open={pop}
          chiudi={setPop}
          verifica={setOk}
          setsnack={setOklog}
          setsnack2={setKolog}
        />
        <Snackbar
          open={oklog}
          onClose={() => setOklog(false)}
          autoHideDuration={2000}
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
            Login Effettuato
          </Alert>
        </Snackbar>

        <Snackbar
          open={kolog}
          autoHideDuration={6000}
          onClose={() => setKolog(false)}
        >
          <Alert
            severity="error"
            sx={{
              width: "100%",
              backgroundColor: "rgb(57, 177, 217)",
              color: "white",
            }}
          >
            Errore Login
          </Alert>
        </Snackbar>
      </Box>
      <Confir open={ok} message={"Login Effettuato"} setOpen={setOk} />
      <VerticalMenu open={open} />
    </>
  );
};

export default HeaderNoLogin;
