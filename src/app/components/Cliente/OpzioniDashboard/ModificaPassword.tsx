import { TextField } from "@mui/material";
import React, { useState } from "react";

const ModificaPassword = () => {
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
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
          onClick={() => console.log("ciao")}
        >
          Entra
        </button>
      </div>
    </>
  );
};

export default ModificaPassword;
