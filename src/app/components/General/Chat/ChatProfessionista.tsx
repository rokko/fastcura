import React, { useEffect, useState } from "react";
import HeaderChat from "../Chat/HeaderChat";
import { Box, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ModalLogin from "../ModalLogin";
import axios from "axios";
import ModalRicevutaOfferta from "../ModalRicevutaOfferta";

interface IChat {
  sender: string;
  message: string;
  contatti_id: string;
  _id: string;
}
const ChatProfessionista = () => {
  const [idinvio, setIdinvio] = useState("");
  const [chat, setChat] = useState<IChat[]>();
  const [conversazione, setConversazione] = useState<any>();
  const location = useLocation();
  const valoriProfessionista = location.state as any;
  const idprofessionista = valoriProfessionista.professionista._id;
  const [pop, setPop] = useState(false);
  const [token, setToken] = useState("");
  const [messaggio, setMessaggio] = useState("");
  const [lastmessage, setLastmessage] = useState(0);
  const [offertaricevuta, setOffertaricevuta] = useState(false);
  const [offerta, setOfferta] = useState<any>()

  const takeToken = async () => {
    const tokenTest = await localStorage.getItem("tokenaccess");
    !!tokenTest ? setToken(tokenTest) : setPop(true);
  };

  const vaiallafine = () => {
    var objDiv = document.getElementById("boxchat");
    if (objDiv !== null) objDiv.scrollTop = objDiv.scrollHeight + 1000;
  };

  const isMine = (idsender: string) => {
    if (idsender == idinvio) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    takeToken();
    if (token !== "") {
      const nuovo = {
        id_professionista: idprofessionista,
      };
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .post(
          "https://fastcuradev.herokuapp.com/cliente/nuovo-contatto",
          nuovo,
          config
        )
        .then((x) => {
          setConversazione(x.data._id);
          setIdinvio(x.data.id_cliente);
        });
    }
  }, [token]);

  useEffect(() => {
    aggiorna();
  }, []);

  function aggiorna() {
    recuperaChat();
    setTimeout(aggiorna, 1000);
  }

  const recuperaChat = async () => {
    const inf = {
      id_conversazione: conversazione,
    };
    axios
      .post("https://fastcuradev.herokuapp.com/cliente/info-appuntamento", inf)

      .then((x) => {
       if (x.data != null && x.data.conferma==2) {
        setOfferta( x.data)
        setOffertaricevuta(true)
      }})

    const cont = {
      contatti_id: conversazione,
    };

    console.log(conversazione)

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .post("https://fastcuradev.herokuapp.com/chat/get-message", cont, config)
      .then((x) => console.log(x))
  };

  const inviaMessaggio = () => {
    const mess = {
      message: messaggio,
      contatti_id: conversazione,
    };

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    setMessaggio("");

    axios.post(
      "https://fastcuradev.herokuapp.com/chat/send-message",
      mess,
      config
    );
  };

  return (
    <>
      <div style={{ height: "100%" }}>
        <HeaderChat
          nomeProfessionista={valoriProfessionista.professionista.nome}
          cognomeProfessionista={valoriProfessionista.professionista.cognome}
        />
        <Box
          id="boxchat"
          style={{ height: "500px", overflowY: "scroll", marginTop: 30 }}
        >
          {!!chat &&
            chat.map((x, k) => {
              if (k == chat.length - 1) {
                if (k !== lastmessage) {
                  vaiallafine();
                  setLastmessage(k);
                }
              }

              return (
                <>
                  <div
                    style={{
                      width: "100px",
                      borderRadius: "30px",
                      padding: "5px",
                      backgroundColor: isMine(x.sender)
                        ? "rgb(57, 177, 217)"
                        : "#f8f8f8",
                      textAlign: isMine(x.sender) ? "right" : "left",
                    }}
                  >
                    <p style={{ color: isMine(x.sender) ? "white" : "black" }}>
                      {x.message}
                    </p>
                  </div>
                </>
              );
            })}
        </Box>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            position: "fixed",
            bottom: "0%",
            left: "0%",
            right: "0%",
          }}
        >
          <TextField
            label={"Scrivi un messaggio.."}
            sx={{
              height: "60px",
              width: "80%",
              border: "none",
              outline: "false",
              borderRadius: "30px",
              "& .MuiOutlinedInput-root": {
                borderColor: "#ffffff",
                borderRadius: "30px",
              },
            }}
            value={messaggio}
            onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
              setMessaggio(x.target.value)
            }
            style={{ backgroundColor: "#ffffff" }}
          ></TextField>
          <button
            style={{
              marginLeft: "10px",
              width: "80px",
              height: "60px",
              backgroundColor: "#39B1D9",
              border: "none",
              borderRadius: "30px",
              fontSize: "12px",
              fontWeight: "bold",
              color: "white",
            }}
            onClick={() => {
              inviaMessaggio();
            }}
          >
            Invia
          </button>
        </div>
      </div>
      <ModalLogin open={pop} verifica={setPop} />
      <ModalRicevutaOfferta open={offertaricevuta} chiudi={setOffertaricevuta} offerta={offerta}/>
    </>
  );
};

export default ChatProfessionista;
