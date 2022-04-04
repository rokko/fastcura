import React, { useEffect, useRef, useState } from "react";
import { Box, TextField } from "@mui/material";
import ModalOfferta from '../../components/General/ModalOfferta'
import { useLocation } from "react-router-dom";
import axios from "axios";
import HeaderChat from "../General/Chat/HeaderChat";


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
  const [lastmessage, setLastmessage] = useState(0)
  const conversazione = location.state as any;
  const id = conversazione.contatto._id;
  const [off, setOff] = useState(false)
  const [apri, setApri] = useState(false)
  const idinvio = conversazione.contatto.id_professionista

  const myRef = React.createRef()
  
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

  const creaOfferta =() => {
    setOff(!off)
    setApri(!apri)
  }


  const inviaOfferta = () => {
    const off = {
      message : messaggio,
      contatti_id: id,
  }
  }
  const sendMessage = async() => {
     
      const mess = {
          message : messaggio,
          contatti_id: id,
      }
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
      .post("https://fastcuradev.herokuapp.com/chat/send-message", mess, config)

      setMessaggio('')
  
      recuperaChat()

  };

  useEffect(()=>{
    aggiorna();

  },[token])
  
  function aggiorna() {
      recuperaChat()

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
      if(objDiv!==null) objDiv.scrollTop = objDiv.scrollHeight+1000;
    }

    return (
    <>
      <div style={{ height: "100%" }}>
        <HeaderChat/>
        <Box id="boxchat" style={{ height: "500px",overflowY:'scroll', marginTop:30, width:'100%' , display:'flex', flexDirection:'column'}}>
          {!!chat &&
            chat.map((x, k) => {
              if (k==chat.length-1) {
                if( k !== lastmessage){
                    vaiallafine()
                  setLastmessage(k)
                 

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
                        paddingLeft:'3px',
                        paddingRight:'3px',
                      backgroundColor: isMine(x.sender)
                        ? "rgb(57, 177, 217)"
                        : "#D1E8F0",
                      alignSelf: isMine(x.sender)
                        ? "flex-start"
                        : "flex-end",
                        
                    }}
                  >
                    <p style={{color:isMine(x.sender)?'white':'black'}}>{x.message}</p>
                   
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
            height:'10%',
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
              creaOfferta()
            }}
          >
            {(!off) ? 'Crea Offerta'
            :'Invia Offerta' }
           
          </button>
        </div>
      </div>
      <ModalOfferta token={token} open={apri} chiudi={setApri} idconversazione={id} idcliente={conversazione.contatto.id_cliente} idprofessionista={conversazione.contatto.id_professionista} />
      {" "}
    </>
  );
};

export default PaginaChat;
