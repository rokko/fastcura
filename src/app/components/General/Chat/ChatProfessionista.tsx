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


interface IChat {
  sender: string;
  message: string;
  contatti_id: string;
  _id: string;
}
const ChatProfessionista = () => {
  const [idinvio, setIdinvio] = useState("");
  const [chat, setChat] = useState<any[]>()
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
  const [tot, setTot] = useState<any>({})
  const [prova,setProva] = useState('')

  const [oklog, setOklog] = useState(false)

  var  io : any

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
      .then((x:any) => {
          io = x.data._id
          setProva(io)
          setIdinvio(x.data.id_cliente)
          aggiorna()
        
      });
  };

  const aggiorna = () => {
      recuperaChat();
      recuperaAppuntamento();
      setTimeout(aggiorna, 1000);
    }


  const recuperaAppuntamento = async () => {
    const inf = {
      id_conversazione: io,
    };

    axios
      .post("https://fastcuradev.herokuapp.com/cliente/info-appuntamento", inf)

      .then((x) => {
        console.log(x)
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

    console.log(mess)

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
           style={{ height: "500px",overflowY:'scroll', marginTop:30, width:'100%' , display:'flex', flexDirection:'column'}}
          >
          {!!chat &&
            chat.map((x:any, k:any) => {
              console.log
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
                      marginTop:'3px',
                      display:'flex',
                      alignContent:'center',
                      width:'max-content',
                      maxWidth:'200px',
                        borderRadius:'30px',
                        padding:'5px',

                      backgroundColor: isMine(x.sender)
                        ? "rgb(57, 177, 217)"
                        : "#D1E8F0",
                      alignSelf: isMine(x.sender)
                        ? "flex-start"
                        : "flex-end",

                        textAlign:isMine(x.sender)
                        ? "left"
                        :"right"
                        
                    }}
                  >
                    <p style={{color:isMine(x.sender)?'white':'black', paddingLeft:'8px', paddingRight:'8px'}}>{x.message}</p>
                   
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
      <ModalLogin open={pop} verifica={setPop} setsnack={setOklog} />
      <Snackbar open={oklog} autoHideDuration={6000} >
  <Alert  severity="success" sx={{ width: '100%' }}>
    Login Effettuato
  </Alert>
</Snackbar>
      <ModalRicevutaOfferta
        open={offertaricevuta}
        chiudi={setOffertaricevuta}
        offerta={offerta}
      />
    </>
  );
};

export default ChatProfessionista;
