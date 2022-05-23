import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/Context";
import { Loader } from "../../loader";

interface ICliente {
  codicepostale: string;
  cognome: string;
  email: string;
  nome: string;
  passw: string;
  sesso: string;
}
const BoxChat = (props: any) => {
  const setta = useContext(AppContext);
  const [infocliente, setInfocliente] = useState<ICliente>();
  const navigate = useNavigate();
  const [last, setLast] = useState("");
  const [avatar, setAvatar] = useState("");
  const [chat, setChat] = useState<any>();
  const [load, setLoad] = useState(false);

  const aggiorna = () => {
    recuperaChat();
    setTimeout(aggiorna, 1000);
  };

  useEffect(() => {
    setLoad(true);
    aggiorna();
  }, []);
  const recuperaChat = async () => {
    const cont = {
      contatti_id: props.contatto._id,
    };

    axios
      .post("https://fastcuradev.herokuapp.com/chat/ottieni-ultimo", cont)
      .then((x) => {
        setChat(x.data);
        setLoad(false);
      });
    if (!!chat) {
      const test = chat.filter(
        (x: any) =>
          x.sender !== props.contatto.id_cliente && x.ricreader === false
      );

      if (!!test) {
        await setta?.setNoti(true);
      }
    }
  };

  const recuperaInfo = () => {
    const clienteinfo = {
      id_cliente: props.contatto.id_professionista,
    };

    axios
      .post(
        "https://fastcuradev.herokuapp.com/professionista/info",
        clienteinfo
      )
      .then((x) => setInfocliente(x.data));
  };

  useEffect(() => {
    const prof = {
      id_professionista: props.contatto.id_professionista,
    };
    axios
      .post(
        "https://fastcuradev.herokuapp.com/professionista/recupera-avatar",
        prof
      )
      .then((response: any) => {
        if (response.data.message === 1) {
          setAvatar(response.data.avatar.posizione);
        } else {
          setAvatar("");
        }
      });
  }, []);
  useEffect(() => {
    recuperaInfo();
  }, []);

  return (
    <>
      <Loader isLoading={load} />
      <div
        onClick={() =>
          navigate("/chat", { state: { contatto: props.contatto } })
        }
        style={{
          display: "flex",
          width: "100%",
          borderBottom: "1px solid #000000",
          justifyContent: "space-around",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        {avatar === "" && (
          <img
            width={"20px"}
            height={"20px"}
            src="data:image/png;base64,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"
          />
        )}
        {avatar !== "" && (
          <img
            src={avatar}
            alt="avatar"
            width={"20px"}
            height={"20px"}
            style={{ borderRadius: "100%" }}
          />
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "20%",
            overflow: "hidden",
          }}
        >
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>
            {infocliente?.nome}
          </p>
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>
            {" "}
            {infocliente?.cognome}
          </p>
        </div>
        <p style={{ color: "blue", width: "40%", textAlign: "left" }}>
          {!!chat ? chat[chat.length - 1]?.message : "Nessun Messaggio"}
        </p>
      </div>
    </>
  );
};

export default BoxChat;
