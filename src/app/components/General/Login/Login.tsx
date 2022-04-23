import {Alert, Box, Snackbar, TextField} from "@mui/material";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface IToken {
  accessToken: string;
  message: number;
}

const Login = (props: any) => {
  let navigate = useNavigate();

  const loginUser = () => {
    axios
      .post("https://fastcuradev.herokuapp.com/login", userlogin)
      .then(function (response) {
          console.log(response.data)
          if (response?.data.accessToken === null) setKolog(true)
        const token: IToken = response.data;
        if (!!token.accessToken) {
          localStorage.setItem("tokenaccess", token.accessToken);
          if (token.message === 0) {
              setOklog(true)
            navigate("/cliente");
          }
          else {
              console.log('professionista')
              setOklog(true)
            navigate("/professionista");
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [oklog, setOklog]=useState(false)
    const [kolog, setKolog] = useState(false)
  const userlogin = {
    email: email,
    password: passw,
  };
  if (!isMobile)
    return (
      <>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Box
            style={{
              marginTop: "100px",
              width: "280px",
              height: "240px",
              backgroundColor: "#39B1D9",
              borderRadius: "20px",
            }}
          >
            <p className="topsearch-text">Accedi</p>
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
              onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(x.target.value)
              }
              placeholder="Indirizzo email"
            />
            <TextField
              size={"small"}
              sx={{
                width: "240px",
                backgroundColor: "#ffffff",
                outlineColor: "#ffffff",
                borderRadius: "30px",
                "& .MuiOutlinedInput-root": {
                  borderColor: "#ffffff",
                  borderRadius: "30px",
                },
                marginTop: "40px",
              }}
              type={"password"}
              placeholder="Password"
              onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                setPassw(x.target.value)
              }
            />
          </Box>
          <div>
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
              }}
              onClick={() => loginUser()}
            >
              Entra
            </button>
          </div>
          <div>
            <p>Hai dimenticato la password?</p>
          </div>
        </div>
          <Snackbar
              open={oklog}
              autoHideDuration={6000}
              onClose={() => setOklog(false)}
          >
              <Alert
                  severity="success"
                  sx={{
                      width: "100%",
                      backgroundColor: "rgb(57, 177, 217)",
                      color: "white",
                  }}
              >
                  Login Effettuato
              </Alert>
          </Snackbar>
          <Snackbar open={kolog} autoHideDuration={6000} onClose={()=>setKolog(false)} >
              <Alert   severity="error" sx={{ width: '100%', backgroundColor: "rgb(57, 177, 217)" , color:'white'}} >
                  Errore Login
              </Alert>
          </Snackbar>
      </>
    );
  else
    return (
      <>
        <Box
          style={{
            marginTop: "100px",
            width: "280px",
            height: "150px",
            backgroundColor: "#39B1D9",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              marginTop: "-30px",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ color: "#ffffff", fontSize: "17px" }}>Accedi</p>
            <TextField
              size={"small"}
              hiddenLabel
              sx={{
                width: "213px",
                height: "35px",
                backgroundColor: "#ffffff",
                outlineColor: "#ffffff",
                borderRadius: "30px",
                "& .MuiOutlinedInput-root": {
                  borderColor: "#ffffff",
                  borderRadius: "30px",
                },
              }}
              placeholder="Indirizzo email"
              onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(x.target.value)
              }
            />
            <TextField
              size={"small"}
              sx={{
                width: "213px",
                height: "35px",
                border: "none",
                backgroundColor: "#ffffff",
                outlineColor: "#ffffff",
                borderRadius: "30px",
                "& .MuiOutlinedInput-root": {
                  borderColor: "none",
                  borderRadius: "30px",
                },
                marginTop: "20px",
              }}
              type={"password"}
              placeholder="Password"
              onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                setPassw(x.target.value)
              }
            />
          </div>
        </Box>

        <button
          style={{
            marginTop: "10px",
            backgroundColor: "#39B1D9",
            width: 85,
            height: 37,
            borderRadius: 20,
            border: "none",
            color: "white",
            fontWeight: "bold",
            fontSize: 14,
          }}
          onClick={() => loginUser()}
        >
          Entra
        </button>
        <p>Hai dimenticato la password?</p>
          <Snackbar
              open={oklog}
              autoHideDuration={6000}
              onClose={() => setOklog(false)}
          >
              <Alert
                  severity="success"
                  sx={{
                      width: "100%",
                      backgroundColor: "rgb(57, 177, 217)",
                      color: "white",
                  }}
              >
                  Login Effettuato
              </Alert>
          </Snackbar>
          <Snackbar open={kolog} autoHideDuration={6000} onClose={()=>setKolog(false)} >
              <Alert   severity="error" sx={{ width: '100%', backgroundColor: "rgb(57, 177, 217)" , color:'white'}} >
                  Errore Login
              </Alert>
          </Snackbar>
      </>
    );
};

export default Login;
