import axios from "axios";
import React, { useEffect, useState } from "react";
import HeaderNoLogin from "../Cliente/HeaderNoLogin";
import HeaderChat from "../General/Chat/HeaderChat";
import Header from "./Header";
import BoxChat from "./BoxChat";
import HeaderUser from "./HeaderUser";
import { Loader } from "../../loader";

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

const ListaChat = () => {
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
    setLoad(true);
    if (token !== "") {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      axios
        .post(
          "https://fastcuradev.herokuapp.com/cliente/ottieni-chat",
          {},
          config
        )
        .then((x) => {
          setContatti(x.data);
          setLoad(false);
        });
    }
  };

  const requestInfo = async () => {
    setLoad(true);
    if (token !== "") {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .get("https://fastcuradev.herokuapp.com/cliente/info", config)
        .then((response: any) => {
          setLoad(false);
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
      <Loader isLoading={load} />
      <HeaderUser />

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

export default ListaChat;
