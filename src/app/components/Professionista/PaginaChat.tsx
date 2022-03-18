import React, { useEffect, useRef, useState } from "react";
import { Box, TextField } from "@mui/material";
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
      .post("http://localhost:8080/chat/get-message", cont, config)
    
      .then((x) => setChat(x.data));
  };

  const sendMessage = async() => {
     
      const mess = {
          message : messaggio,
          contatti_id: id,
      }
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
      .post("http://localhost:8080/chat/send-message", mess, config)
    
      .then((x) => console.log(x.data));

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
        <Box id="boxchat" style={{ height: "500px",overflowY:'scroll', marginTop:30,  }}>
          {!!chat &&
            chat.map((x, k) => {
              console.log(k)
              if (k==chat.length-1) {
                console.log('ok utlimo')
                if( k !== lastmessage){
                   console.log('sono diverso')
                    vaiallafine()
                  setLastmessage(k)
                 

                }
              }
              
              return (
                <>
                  <div
                    style={{
                        borderRadius:'30px',
                        padding:'5px',
                      backgroundColor: isMine(x.sender)
                        ? "rgb(57, 177, 217)"
                        : "#f8f8f8",
                      textAlign: isMine(x.sender)
                        ? "right"
                        : "left",
                      
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
        </div>
      </div>
      ì{" "}
    </>
  );
};

export default PaginaChat;
