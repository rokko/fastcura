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
import ModalTelefono from "./ModalTelefono";

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
  const [tel, setTel] = useState(false);
  const [kolog, setKolog] = useState(false);

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
  const inviaTelefono = (telefono: number) => {
    const te = "tel" + `whatsapp://send?phone=${telefono}`;

    const mess = {
      message: te,
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
    setTel(false);
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
    setTel(true);
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
  if (!token) {
    return (
      <ModalLogin
        open={pop}
        verifica={setPop}
        setsnack={setOklog}
        setsnack2={setKolog}
        chiudi={setPop}
      />
    );
  } else
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
                if (k == chat.length - 1) {
                  if (k !== lastmessage) {
                    vaiallafine();
                    setLastmessage(k);
                  }
                }
                if (x.message.substr(0, 3) == "tel") {
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
                          alignSelf: isMine(x.sender)
                            ? "flex-end"
                            : "flex-start",

                          textAlign: isMine(x.sender) ? "left" : "right",
                        }}
                      >
                        <a
                          style={{
                            textDecoration: "none",
                            display: "flex",
                            flexDirection: "row",
                            alignContent: "center",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          href={x.message.substr(3)}
                        >
                          <p
                            style={{
                              color: "white",
                              paddingLeft: "8px",
                              paddingRight: "8px",
                              fontSize: "18px",
                              display: "flex",
                              alignContent: "center",
                            }}
                          >
                            Whatsapp
                          </p>
                          <img src="data:image/png;base64,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" />
                        </a>
                      </div>
                    </>
                  );
                }
               else if (x.message.substr(0, 4) == "link") {
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
                          alignSelf: isMine(x.sender)
                            ? "flex-end"
                            : "flex-start",

                          textAlign: isMine(x.sender) ? "left" : "right",
                        }}
                      >
                        <a
                          style={{
                            textDecoration: "none",
                            display: "flex",
                            flexDirection: "row",
                            alignContent: "center",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          href={x.message.substr(4)}
                        >
                          <p
                            style={{
                              color: "white",
                              paddingLeft: "8px",
                              paddingRight: "8px",
                              fontSize: "18px",
                              display: "flex",
                              alignContent: "center",
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
                          borderRadius: "30px",
                          padding: "5px",

                          backgroundColor: isMine(x.sender)
                            ? "rgb(57, 177, 217)"
                            : "#D1E8F0",
                          alignSelf: isMine(x.sender)
                            ? "flex-end"
                            : "flex-start",

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
          setsnack2={setKolog}
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
        <ModalRicevutaOfferta
          accetta={sendok}
          rifiuta={sendko}
          open={offertaricevuta}
          chiudi={setOffertaricevuta}
          offerta={offerta}
          nuovo={setPos}
        />
        <ModalPosizione inviaPosizione={inviaPosizione} open={pos} />
        <ModalTelefono inviaTelefono={inviaTelefono} open={tel} />
      </>
    );
};

export default ChatProfessionista;
