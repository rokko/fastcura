import axios from "axios";
import React, { useEffect, useState } from "react";
import HeaderNoLogin from "../Cliente/HeaderNoLogin";
import HeaderChat from "../General/Chat/HeaderChat";
import Header from "./Header";
import BoxChat from "./BoxChat";

interface IUtente {
  nome: string;
  cognome: string;
  greenpass: string;
  codicepostale: string;
  datadinascita: Date;
  email: string;
  password: string;
  referenze: string;
  sesso: string;
  __v: number;
  _id: string;
}

interface IDettagliProfessionista {
  nome: string;
  cognome: string;
  citta: string;
  professione: string;
  eta: number;
  _id: string;
}

const ChatProfessionisti = () => {
  const [contacts, setContacts] = useState([]);
  const [token, setToken] = useState("");
  const [utente, setUtente] = useState<IDettagliProfessionista>();
  const [contatti, setContatti] = useState([]);
  const [load, setLoad] = useState(false);

  const takeToken = async () => {
    const tokenTest = await localStorage.getItem("tokenaccess");
    if (!!tokenTest) setToken(tokenTest);
  };

  const requestContatti = async () => {
    if (token !== "") {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      axios
        .post(
          "https://fastcuradev.herokuapp.com/professionista/ottieni-contatti",
          {},
          config
        )
        .then((x) => setContatti(x.data));
    }
  };

  const requestInfo = async () => {
    if (token !== "") {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .get("https://fastcuradev.herokuapp.com/professionista/info", config)
        .then((response: any) => {
          setUtente(response.data);
        })
        .catch((e: any) => console.error(e));
    }
  };

  useEffect(() => {
    takeToken();
    requestInfo();
    requestContatti();
  }, [token]);

  return (
    <>
      <Header />

      <div style={{ width: "100%" }}>
        <p style={{ textAlign: "left", fontSize: "26px", marginLeft: "10px" }}>
          Le tue chat
        </p>

        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#f8f8f8",
          }}
        >
          {contatti.reverse().map((contatto) => {
            return <BoxChat contatto={contatto} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ChatProfessionisti;
