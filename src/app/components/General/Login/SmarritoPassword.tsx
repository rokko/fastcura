import { TextField } from "@mui/material";
import React, { useState } from "react";
import Header from "../../../components/TrovaIlTuoProfessionista/Header";
import { Alert, Snackbar } from "@mui/material";
import { Link } from "react-router-dom";

const SmarritoPassword = () => {
  const [email, setEmail] = useState("");
  const [req, setReq] = useState(false);

  const requestPassword = () => {
    setReq(true);
  };

  return (
    <>
      <Header />
      <div
        style={{
          width: "100%",
          marginTop: "100px",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/smarrito-password" style={{ textDecoration: "none" }}>
          <p>Hai dimenticato la password?</p>
        </Link>
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
          type={"email"}
          placeholder="Email"
          onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(x.target.value)
          }
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
          onClick={() => requestPassword()}
        >
          Recupera Password
        </button>
      </div>
      <Snackbar
        open={req}
        onClose={() => setReq(false)}
        autoHideDuration={2000}
      >
        <Alert
          severity="success"
          sx={{
            width: "100%",
            backgroundColor: "rgb(57, 177, 217)",
            color: "white",
          }}
        >
          Richiesta effettuata, riceverai una mail se è corretta.
        </Alert>
      </Snackbar>
    </>
  );
};

export default SmarritoPassword;
