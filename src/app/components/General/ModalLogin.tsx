import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { Box, InputAdornment, TextField } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { stringify } from "querystring";
interface IToken {
  accessToken: string;
  messagge: number;
}

const ModalLogin = (props: any) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [ok, setOk] = useState(false);
  const userlogin = {
    email: email,
    password: passw,
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const loginUser = () => {
    axios
      .post("https://fastcuradev.herokuapp.com/login", userlogin)
      .then(function (response) {
        if (response?.data.accessToken === null) props?.setsnack2(true);
        const token: IToken = response.data;

        if (!!token.accessToken) {
          localStorage.setItem("tokenaccess", token.accessToken);
          localStorage.setItem("type", token.messagge.toString());
          if (token.messagge === 0) {
            props.setsnack(true);
            props.chiudi(false);
            navigate(0);
          } else {
            props.setsnack(true);
            props.chiudi(false);
            navigate("/professionista");
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Modal
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ zIndex: "10000000000" }}
      >
        <Box
          style={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            marginTop: "100px",
            width: "320px",
            height: "470px",
            backgroundColor: "#39B1D9",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            border: "none!important",
            outline: "none",
          }}
        >
          <div
            onClick={() => {
              props.chiudi(false);
            }}
            style={{
              position: "absolute",
              right: "0%",
              top: "-5%",
              width: "50px",
              height: "50px",
              borderRadius: "50px",
              display: "flex",
              backgroundColor: "rgb(233, 51, 35)",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA1UlEQVRIie3UsQ6CQAzGceLqJo+jBNCHcPH9E51QcP472OE8Fe56PVjoREL6/VqiLYq1lixgO3sWUAFX4GiAHiTrNDkdcONdA1AnoLVkIJnjm8uUD2l4ajaXjN7JaGMaVbgaTcGTUQ1uho4EfuHmaAgeMpg5nh118Mb5bw7ec5MFdXB3S/WmmxzDmRefZ3CeT73Ij+vHIWm9d/Y4sP+HZsNDUHM8BjXDNWgy7qFDDKrGgRLopKEHqljUyXLP6x0opxrOgicfBNm8Ay6hDbtUNEfWWqp6Ae770o+mwnJ+AAAAAElFTkSuQmCC" />
          </div>
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
          <Link to="/smarrito-password" style={{ textDecoration: "none" }}>
            <p style={{ color: "white" }}>Hai dimenticato la password?</p>
          </Link>
        </Box>
      </Modal>
    </>
  );
};

export default ModalLogin;
