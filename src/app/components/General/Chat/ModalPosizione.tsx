import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { Box, TextField } from "@mui/material";
import axios from "axios";

const ModalPosizione = (props: any) => {
  const [posizione, setPosizione] = useState("");
  return (
    <>
      <Modal
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            marginTop: "100px",
            width: "320px",
            height: "300x",
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            outline: "none",
            border: "1px solid #5DBFE0",
          }}
        >
          <Box
            style={{
              width: "90%",
              marginBottom: "30px",
              borderRadius: "10%",
              padding: "10px",
              marginTop: "30px",
              display: "flex",
              flexDirection: "column",
              alignContent: "left",
            }}
          >
            <p style={{ textAlign: "left", color: "#39B1D9" }}>
              Inserisci la posizione dove si terra la prestazione
            </p>
            <TextField
              onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                setPosizione(x.target.value)
              }
              id="outlined-size-small"
              type={"string"}
            ></TextField>
            <button
              style={{
                backgroundColor: "rgb(57, 177, 217)",
                width: 100,
                height: 37,
                borderRadius: 20,
                border: "none",
                color: "white",
                fontWeight: "bold",
                marginRight: "10px",
                marginTop: "30px",
              }}
              onClick={() => props.inviaPosizione(posizione)}
            >
              Invia
            </button>
          </Box>
        </div>
      </Modal>
    </>
  );
};

export default ModalPosizione;
