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
        setLista(x.data);
        console.log(x);
      });
  }, []);

  const checkPass = () => {
    if (password === "fastcura2022!!!@") {
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
      <>
        <p style={{ fontSize: "40px", fontWeight: "bold" }}>
          Lista professionisti iscritti
        </p>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <table style={{ alignContent: "center" }}>
            <tr>
              <th>Numero</th>
              <th>Nome</th>
              <th>Cognome</th>
              <th>Email</th>
              <th>Citta</th>
              <th>DataIscrizione</th>
              <th>Professione</th>
            </tr>
            {list.map((val: any, key: any) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{val.nome}</td>
                  <td>{val.cognome}</td>
                  <td>{val.email}</td>
                  <td>{val.citta}</td>
                  <td>{val?.dataIscrizione}</td>
                  <td>{val?.professione}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </>
    );
};

export default Dashboard;
