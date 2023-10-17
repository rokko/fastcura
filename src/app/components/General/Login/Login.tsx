import { Alert, Box, InputAdornment, Snackbar, TextField } from "@mui/material";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { NONAME } from "dns";
import { styled } from "@mui/system";

interface IToken {
  accessToken: string;
  messagge: number;
}

const Login = (props: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  let navigate = useNavigate();

  const loginUser = () => {
    axios
      .post("https://careful-pear-cockatoo.cyclic.app/login", userlogin)
      .then(function (response) {
        if (response?.data.accessToken === null) setKolog(true);
        const token: IToken = response.data;
        if (!!token.accessToken) {
          localStorage.setItem("tokenaccess", token.accessToken);
          localStorage.setItem("type", token.messagge.toString());
          if (token.messagge === 0) {
            setOklog(true);
            navigate("/cliente");
          } else {
            setOklog(true);
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
  const [oklog, setOklog] = useState(false);
  const [kolog, setKolog] = useState(false);
  const userlogin = {
    email: email,
    password: passw,
  };
  const InputStyle = styled("input")`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 13px 19px;
    gap: 10px;
    width: 250px;
    border: none;
    background: #e2f4fc;
    border-radius: 10px;
  `;
  const ContainerLogin = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 318px;
    align-items: center;
  `;

  const ButtonLogin = styled("button")`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 13px 19px;
    gap: 10px;
    border: none;
    background: #39b1d9;
    border-radius: 40px;
    color: white;
  `;

  const Title = styled("p")`
    font-style: normal;
    font-weight: 900;
    font-size: 23px;
    line-height: 27px;
    /* identical to box height */

    text-align: center;

    /* Black */

    color: #273237;
  `;
  

  return (
    <ContainerLogin>
      <Title>Accedi</Title>
      <div style={{display:'flex', flexDirection:isMobile?'column':'row', gap:'3rem'}}>
      <InputStyle
        placeholder="Indirizzo email"
        onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(x.target.value)
        }
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <InputStyle
          placeholder="Password"
          onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
            setPassw(x.target.value)
          }
          type={showPassword ? "text" : "password"}
        ></InputStyle>
        <img
          style={{ marginLeft: "-30px", width: "24px", height: "24px" }}
          onClick={handleClickShowPassword}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABXElEQVRIie2UQUtCQRSFP8JdUta2HkFCj/6ERH+lWvkLWtR/cWkIbsRACCTbuMhFCzcmLdxWoFItX4s5L+fNG/W1MFp44MJwz7mHmXtnBtb479gFykADGAFfipFyZWl+jRxwCUyBaElMpc1lNd8HupZBCzgDQmBTESrXsnRd1S7EATBUwTNQyrChEjBQzVAeXuSBvoT3QMHiAqAGTBR1nSLGNtBWbV9eKVQk6DmCAHgj3ft3cfYGe+IqrvmJiE+g6HA1cQ1gD9PnpnI3jrYoj0ieP+goee052UScPcBAubFHfyWuA7DhkJGnYBF8etcTmLXoAzh0uLq4JuYUAXCrXNXRHmEeYqpFMBvyI+auxwgxA3WH/EqybVvAE3OGDMlr2sZcvRgBZqBjRdUx3wEeWHJNIfnQBmR7aKfACxkeWgzfV3EOHGtnea0vgDtLl+mriLHSz87Gyr7rNf4O31JZhMjSyXpfAAAAAElFTkSuQmCC"
        />
      </div>
      </div>
      <ButtonLogin style={{width:'289px', height:'47px'}} onClick={() => loginUser()}>Entra</ButtonLogin>
      <Link to="/smarrito-password" style={{ textDecoration: "none" }}>
        <p style={{ color: "#39B1D9" }}>Hai dimenticato la password?</p>
      </Link>
    </ContainerLogin>
  );
};

export default Login;

/*<>
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
                  font: "none",
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
                  font: "none",

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
            <Link to="/smarrito-password" style={{ textDecoration: "none" }}>
              <p style={{ color: "white" }}>Hai dimenticato la password?</p>
            </Link>
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
            <input
              style={{
                textIndent: "20px",
                width: "213px",
                height: "35px",
                backgroundColor: "#ffffff",
                outlineColor: "#ffffff",
                borderRadius: "30px",
                border: "none",
              }}
              placeholder="Indirizzo email"
              onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(x.target.value)
              }
            />
            <input
              style={{
                textIndent: "20px",
                width: "213px",
                height: "35px",
                border: "none",
                backgroundColor: "#ffffff",
                outlineColor: "#ffffff",
                borderRadius: "30px",
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
        <Link to="/smarrito-password" style={{ textDecoration: "none" }}>
          <p style={{ color: "white" }}>Hai dimenticato la password?</p>
        </Link>{" "}
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
        </Snackbar>*/
