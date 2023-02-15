import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [password, setPassword] = useState("");
  const [entra, setEntra] = useState(false);
  const [list, setLista] = useState<any>();
  useEffect(() => {
    axios
      .get("https://careful-pear-cockatoo.cyclic.app/professionista/getAll")
      .then((x) => {
        setLista(x);
      });
  }, []);

  const checkPass = () => {
    if (password === "fastcura2022") {
      setEntra(true);
    }
  };
  if (!entra)
    return (
      <>
        <p>Inserisci password</p>
        <input
          onChange={(x) => {
            setPassword(x.target.value);
          }}
        ></input>
        <button onClick={() => checkPass()}>entra</button>
      </>
    );
  else
    return (
      <table>
        <tr>
          <th>Nome</th>
          <th>Cognome</th>
          <th>Email</th>
          <th>Citta</th>
        </tr>
        {list.map((val: any, key: any) => {
          return (
            <tr key={key}>
              <td>{val.nome}</td>
              <td>{val.cognome}</td>
              <td>{val.email}</td>
              <td>{val.citta}</td>
            </tr>
          );
        })}
      </table>
    );
};

export default Dashboard;
