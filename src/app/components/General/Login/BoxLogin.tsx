import { Box, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

interface IToken {
  accessToken: string;
  messagge: number;
}

const BoxLogin = (props: any) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const loginUser = () => {
    axios
      .post("https://careful-pear-cockatoo.cyclic.app/login", userlogin)
      .then(function (response) {
        const token: IToken = response.data;
        if (!!token.accessToken) {
          localStorage.setItem("tokenaccess", token.accessToken);
          localStorage.setItem("type", token.messagge.toString());
          props.chiudi(false);
          navigate("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const userlogin = {
    email: email,
    password: passw,
  };

  return (
    <>
      <Box
        style={{
          marginTop: "100px",
          width: "280px",
          height: "330px",
          backgroundColor: "#39B1D9",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <p className="topsearch-text">Accedi</p>
        <TextField
          variant={"standard"}
          hiddenLabel
          sx={{
            width: "240px",
            backgroundColor: "#ffffff",
            borderRadius: "30px",
            outline: "none",
            padding: "6px 10px !important",
            "& .MuiOutlinedInput-root": {
              borderColor: "#ffffff",
              borderRadius: "30px",
              outline: "none",
              padding: "6px 10px!important",
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
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
            setPassw(x.target.value)
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <img
                  onClick={handleClickShowPassword}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABXElEQVRIie2UQUtCQRSFP8JdUta2HkFCj/6ERH+lWvkLWtR/cWkIbsRACCTbuMhFCzcmLdxWoFItX4s5L+fNG/W1MFp44MJwz7mHmXtnBtb479gFykADGAFfipFyZWl+jRxwCUyBaElMpc1lNd8HupZBCzgDQmBTESrXsnRd1S7EATBUwTNQyrChEjBQzVAeXuSBvoT3QMHiAqAGTBR1nSLGNtBWbV9eKVQk6DmCAHgj3ft3cfYGe+IqrvmJiE+g6HA1cQ1gD9PnpnI3jrYoj0ieP+goee052UScPcBAubFHfyWuA7DhkJGnYBF8etcTmLXoAzh0uLq4JuYUAXCrXNXRHmEeYqpFMBvyI+auxwgxA3WH/EqybVvAE3OGDMlr2sZcvRgBZqBjRdUx3wEeWHJNIfnQBmR7aKfACxkeWgzfV3EOHGtnea0vgDtLl+mriLHSz87Gyr7rNf4O31JZhMjSyXpfAAAAAElFTkSuQmCC"
                />
              </InputAdornment>
            ),
          }}
        />
        <button
          style={{
            marginTop: "40px",
            backgroundColor: "#E93323",
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
        <Link to="/signup-cliente" style={{ textDecoration: "none" }}>
          <p style={{ color: "#ffffff", textDecoration: "none" }}>
            oppure registrati
          </p>
        </Link>
      </Box>

      <Link to="/smarrito-password" style={{ textDecoration: "none" }}>
        <p style={{ color: "white" }}>Hai dimenticato la password?</p>
      </Link>
    </>
  );
};

export default BoxLogin;
