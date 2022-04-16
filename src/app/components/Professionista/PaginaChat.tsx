import React, { useEffect, useRef, useState } from "react";
import { Box, TextField } from "@mui/material";
import ModalOfferta from "../../components/General/ModalOfferta";
import { useLocation } from "react-router-dom";
import axios from "axios";
import HeaderChat from "./HeaderChat";

import mappeImmagine from "../../media/location.gif";

interface IChat {
  sender: string;
  message: string;
  contatti_id: string;
  _id: string;
}
const PaginaChat = () => {
  const [token, setToken] = useState("");
  const [messaggio, setMessaggio] = useState("");
  const [chat, setChat] = useState<IChat[]>();
  const location = useLocation();
  const [lastmessage, setLastmessage] = useState(0);
  const conversazione = location.state as any;
  const id = conversazione.contatto._id;
  const [off, setOff] = useState(false);
  const [apri, setApri] = useState(false);
  const idinvio = conversazione.contatto.id_professionista;

  const myRef = React.createRef();

  const takeToken = async () => {
    const tokenTest = await localStorage.getItem("tokenaccess");
    if (!!tokenTest) setToken(tokenTest);
  };

  const recuperaChat = async () => {
    const cont = {
      contatti_id: id,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post("https://fastcuradev.herokuapp.com/chat/get-message", cont, config)

      .then((x) => setChat(x.data));
  };

  const creaOfferta = () => {
    setOff(!off);
    setApri(!apri);
  };

  const inviaOfferta = () => {
    const off = {
      message: messaggio,
      contatti_id: id,
    };
  };
  const sendMessage = async () => {
    const mess = {
      message: messaggio,
      contatti_id: id,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios.post(
      "https://fastcuradev.herokuapp.com/chat/send-message",
      mess,
      config
    );

    setMessaggio("");

    recuperaChat();
  };

  useEffect(() => {
    aggiorna();
  }, [token]);

  function aggiorna() {
    recuperaChat();

    setTimeout(aggiorna, 1000);
  }
  const isMine = (idsender: string) => {
    if (idsender == idinvio) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    takeToken();
    recuperaChat();
  }, [token]);

  const vaiallafine = () => {
    var objDiv = document.getElementById("boxchat");
    if (objDiv !== null) objDiv.scrollTop = objDiv.scrollHeight + 1000;
  };

  return (
    <>
      <div style={{ height: "100%" }}>
        <HeaderChat />
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
            chat.map((x, k) => {
              if (k == chat.length - 1) {
                if (k !== lastmessage) {
                  vaiallafine();
                  setLastmessage(k);
                }
              }
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
                        borderRadius: "20px",
                        paddingLeft: "3px",
                        paddingRight: "3px",
                        backgroundColor: isMine(x.sender)
                          ? "rgb(57, 177, 217)"
                          : "#D1E8F0",
                        alignSelf: isMine(x.sender) ? "flex-end" : "flex-start",
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
            height: "10%",
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
              sendMessage();
            }}
          >
            Invia
          </button>
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
              creaOfferta();
            }}
          >
            {!off ? "Crea Offerta" : "Invia Offerta"}
          </button>
        </div>
      </div>
      <ModalOfferta
        token={token}
        open={apri}
        chiudi={setApri}
        idconversazione={id}
        idcliente={conversazione.contatto.id_cliente}
        idprofessionista={conversazione.contatto.id_professionista}
      />{" "}
    </>
  );
};

export default PaginaChat;
