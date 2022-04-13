import React, { useEffect, useState } from "react";
import HeaderChat from "../Chat/HeaderChat";
import { Alert, Box, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ModalLogin from "../ModalLogin";
import axios from "axios";
import ModalRicevutaOfferta from "../ModalRicevutaOfferta";
import { NONAME } from "dns";
import { Snackbar } from "@mui/material";
import ModalPosizione from "./ModalPosizione";
import mappeImmagine from "../../../media/location.gif";

interface IChat {
  sender: string;
  message: string;
  contatti_id: string;
  _id: string;
}
const ChatProfessionista = () => {
  const [idinvio, setIdinvio] = useState("");
  const [chat, setChat] = useState<any[]>();
  const location = useLocation();
  const valoriProfessionista = location.state as any;
  const idprofessionista = valoriProfessionista.professionista._id;
  const [pop, setPop] = useState(false);
  const [token, setToken] = useState("");
  const [messaggio, setMessaggio] = useState("");
  const [lastmessage, setLastmessage] = useState(0);
  const [offertaricevuta, setOffertaricevuta] = useState(false);
  const [offerta, setOfferta] = useState<any>();
  const [newconversazione, setNewconversazione] = useState<any>();
  const [tot, setTot] = useState<any>({});
  const [prova, setProva] = useState("");
  const [pos, setPos] = useState(false);

  const [oklog, setOklog] = useState(false);

  var io: any;

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

  const recuperaConversazione = async () => {
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
      .then((x: any) => {
        io = x.data._id;
        setProva(io);
        setIdinvio(x.data.id_cliente);
        aggiorna();
      });
  };

  const inviaPosizione = (posizione: string) => {
    const po = "link" + `http://maps.google.com/?q=${posizione}`;

    const mess = {
      message: po,
      contatti_id: prova,
    };

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios.post(
      "https://fastcuradev.herokuapp.com/chat/send-message",
      mess,
      config
    );
    setPos(false);
  };

  const aggiorna = () => {
    recuperaChat();
    recuperaAppuntamento();
    setTimeout(aggiorna, 1000);
  };

  const recuperaAppuntamento = async () => {
    const inf = {
      id_conversazione: io,
    };

    axios
      .post("https://fastcuradev.herokuapp.com/cliente/info-appuntamento", inf)

      .then((x) => {
        console.log(x);
        if (x.data != null && x.data.conferma == 0) {
          setOfferta(x.data);
          setOffertaricevuta(true);
        }
      });
  };

  const recuperaChat = () => {
    const cont = {
      contatti_id: io,
    };

    axios
      .post("https://fastcuradev.herokuapp.com/chat/get-message", cont)
      .then((x) => setChat(x.data));
  };

  const inviaMessaggio = () => {
    const mess = {
      message: messaggio,
      contatti_id: prova,
    };

    console.log(mess);

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios.post(
      "https://fastcuradev.herokuapp.com/chat/send-message",
      mess,
      config
    );
    setMessaggio("");
  };

  const sendko = () => {
    const mess = {
      message: "Offerta Rifiutata",
      contatti_id: prova,
    };

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios.post(
      "https://fastcuradev.herokuapp.com/chat/send-message",
      mess,
      config
    );
  };

  const sendok = () => {
    const mess = {
      message: "Offerta Accettata",
      contatti_id: prova,
    };

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios.post(
      "https://fastcuradev.herokuapp.com/chat/send-message",
      mess,
      config
    );
  };

  useEffect(() => {
    takeToken();

    recuperaConversazione();
  }, [token]);

  return (
    <>
      <div style={{ height: "100%" }}>
        <HeaderChat
          nomeProfessionista={valoriProfessionista.professionista.nome}
          cognomeProfessionista={valoriProfessionista.professionista.cognome}
        />
        <Box
          id="boxchat"
          style={{
            height: "500px",
            overflowY: "scroll",
            marginTop: 30,
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {!!chat &&
            chat.map((x: any, k: any) => {
              console.log;
              if (k == chat.length - 1) {
                if (k !== lastmessage) {
                  vaiallafine();
                  setLastmessage(k);
                }
              }
              console.log(x.message.substr(0, 4));
              if (x.message.substr(0, 4) == "link") {
                return (
                  <>
                    <div
                      style={{
                        marginTop: "3px",
                        display: "flex",
                        alignContent: "center",
                        width: "max-content",
                        maxWidth: "200px",
                        borderRadius: "30px",
                        padding: "5px",

                        backgroundColor: isMine(x.sender)
                          ? "rgb(255, 54, 23)"
                          : "rgb(255, 54, 23)",
                        alignSelf: isMine(x.sender) ? "flex-end" : "flex-start",

                        textAlign: isMine(x.sender) ? "left" : "right",
                      }}
                    >
                      <a
                        style={{ textDecoration: "none" }}
                        href={x.message.substr(4)}
                      >
                        <p
                          style={{
                            color: isMine(x.sender) ? "white" : "black",
                            paddingLeft: "8px",
                            paddingRight: "8px",
                            fontSize: "20px",
                            display: "flex",
                          }}
                        >
                          Qui la posizione
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEJklEQVRogd2ab2jVVRjHP5MlurzTzI0EXwR255/wz0TpTbCWRCZKTOwP+sq3QpIvJP8F0+WLYvSuIkqoF2IUmiiD0BEjFsbKKYmIpmFIoCXNtjmna7u+eJ7Tyeu953d+v3vORn7hcmH7/r7ne37nnOc55zkXHhJUBdarBdYAzcAS4Elghv7vJnAFOAN8C3QAA4HbrxjzgP3AEFDw/NwCPgXyE+D3AdQA7cAIYm4M6AF2AU1IBx/Vzzz9227gR+UWgLvAe8CUcfb+L/LAWTUzChwA5qZ4/ingILZDJ4HZgT0mohH4Qw1cAJZVoLUcuKhaV4HFFbvzRB7biePAYwE0ZwInsJ2JPjI12Ol0HKgOqP0I0ImdZlHXTDt2OoUYiWLMBH7RNvZE0Ack6owgC7uSNZGEFUgAGASeiNHAfuRNHYghXoQvtK0PQwvXIglsDL8QWw+0AaeRNzsI9AJ7gTqP5/PYUZmWwW9ZbEDeUI8Hdz3QT/mM/jewzkPnJ+W/lsFvWXyiorsSeOuxCe5rJJObzP4ccASbQFsStN5W7seZXZdAj4o2OTj12JHY5uC9pZybwCwHr1l5P6RymoA/VbTBwWnDjkQSjpIcYhuUc93ToxfuqGjOwTlD8qgZmLfd6+DklDPs6dELt1XUlW0HlOMTZYzJfgenRjlDPgYn+ZCQSAP2kFQKBU8tsAc61zNm59DnI+jbESPmWpyX9Xu5h57hXHJwTL4J2hHT4EIH55h+v+mht7XomVJ4Wr8veuh5Yx8yDd5xcOqQKVhAQmw57FBOH/C4g/eu8lpTOU3AqyramcBbhyS7AhJim5HFPw14HhkBkxBfTtDqVm4SLxXqtfFhJJq40IIku3JblD4PczOQnfYIMD2z6zLoVSOrPbizkGR3CgnL/cjeqRX3dDJ4RdvqzuQ0ASZzfxZDvAiHSF5rmTEfu3tNml6VYDqSgMeQAl8UnEI6szFWA8Ab2kZXxDbYjC0OxEA18Ku2sSFSG4CEURORVkTQf121f0eqKlHxvjb2VQRtM3V3RtB+ALOxi3FRQN0XsAcu1+Y0KD4g/Kh0EbmeVQpzsFWVZwPotSCduEGcwp8TrdhTnu8uuhQmY4vYmwP4So2pyA1UAdhUgc421ThH2FpyKph61zWkiJcWddhw/mJAX6lRBXyvRtozPP+5Pus6YI0bGpHrs3+AZ1I8twp7l5jmpisq9iKmzuN3r5EDftNntkT0lRqTgZ9JPg4bfIQ9b1QS8aJgKTLFRpE6bzmsQvLPMLBgHHxlwh7kTV+h9DajHimBFvCrtkwYqoHvEKOHuf+XFZOAb/R/HYT/1UVwzMEWvf97DWGOyteIdKUWA2uRdTAKvIT8PmUUCdErJ9BXJpi92F9ICagAbJ9QRxlRBXyJrWcVr5n/FXLIjdNJAl9qPrS4B84dJyPLsb4IAAAAAElFTkSuQmCC" />
                        </p>
                      </a>
                    </div>
                  </>
                );
              } else
                return (
                  <>
                    <div
                      style={{
                        marginTop: "3px",
                        display: "flex",
                        alignContent: "center",
                        width: "max-content",
                        maxWidth: "200px",
                        borderRadius: "30px",
                        padding: "5px",

                        backgroundColor: isMine(x.sender)
                          ? "rgb(57, 177, 217)"
                          : "#D1E8F0",
                        alignSelf: isMine(x.sender) ? "flex-end" : "flex-start",

                        textAlign: isMine(x.sender) ? "left" : "right",
                      }}
                    >
                      <p
                        style={{
                          color: isMine(x.sender) ? "white" : "black",
                          paddingLeft: "8px",
                          paddingRight: "8px",
                        }}
                      >
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
            placeholder="Messaggio"
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
      <ModalLogin
        open={pop}
        verifica={setPop}
        setsnack={setOklog}
        chiudi={setPop}
      />
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
      <ModalRicevutaOfferta
        accetta={sendok}
        rifiuta={sendko}
        open={offertaricevuta}
        chiudi={setOffertaricevuta}
        offerta={offerta}
        nuovo={setPos}
      />
      <ModalPosizione inviaPosizione={inviaPosizione} open={pos} />
    </>
  );
};

export default ChatProfessionista;
