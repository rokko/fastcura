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
                            style={{ textDecoration: "none", display:'flex', flexDirection:'row', alignContent:'center', justifyContent:'center' , alignItems:'center'}}
                            href={x.message.substr(4)}
                        >
                            <p
                                style={{
                                    color:  "white" ,
                                    paddingLeft: "8px",
                                    paddingRight: "8px",
                                    fontSize: "18px",
                                    display: "flex",
                                    alignContent:'center',
                                }}
                            >
                                Qui la posizione
                            </p>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACtElEQVRYhe2WS0hUcRTGv9tDLB9J9DKyx6KGMpMyKJDatCooaOvarFUREe3bVEulJ0WRRruCsggiiB4bCWknmFCWi9JNakpYTb8W9xsZ5c69M860qgOHO/zPd77v/P/zv/cc6b8VaEAzcAXoA77Z+4DLQPPfFF4FPCTZHgArSy2eAgYt8BU4CzQBFfYmr40aMwhsKpV4DdBv4ufA8hjsCuCFsf1ATSkKuGjCXmBRHvhyoMc57cWKrwamgJ9AqoC8zcAv59YWU8Ax7+ReROwAMGTfHxG/79y2YgroMklrRGwo6+Z/ioi3OtYZpzEvoYbM8X3Iv+xpG5zFMacCAj8rImJtkobsUce8eBZHpC1IKCBztFskPZxRWRA8kbQ2Jrfez49xAkkn8MrPQwm4KMvkvIpFxRlQDUz6MtUnZ0znbXXOBFA15wJMdttkXQXk3HHOraLETZYCfgBpYEce+EZjf5SyH1zyjl4COe8NMA94bWxHScRNvAwYNvHxGNwJYz4DS0tWgMkPm3wSaIiIN2Rd2Lm8NTmFa4Ey/75pgXdktVrClj3g2HWvLQRWFSN8kLD/p4FzXisH3lioG5hv7/ZaD1Bu7AXCjvi8oBMBqpg5en0HHgOVjtdl3YerwDX//gKsyTqRp4TtOGOPyOebAFx3wihwCqiOwOwlfM0yNgXsicDVAKeBMeNu5FPAuMFNCbgW/z1poCUBu9OcY7NjUc1oWFKVpJSk3lykQRDcBUYl4cYUZ5lpajgBJwFHXe1vws/wtsSk3FyNQKe5AI7MxkT2auCkpPOSyrw0IOmZwhPpVzgDjNslqdpep3C3OyXtk7TR8SlJZ4IgyH9IBdYDHcAIc7cRoB1Yl0sndlpxIfMl7ZK0W9J2SRsUDiKVkpYYNiZpQuEA817SW0k9knqCIEjnvet/0v4A9/F83j3jPUUAAAAASUVORK5CYII=" />


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
