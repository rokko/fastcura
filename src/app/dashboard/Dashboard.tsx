import React, { useState } from "react";

const Dashboard = () => {
  const [password, setPassword] = useState("");
  const [entra, setEntra] = useState(false);
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
  else return <p>Iscritti</p>;
};

export default Dashboard;
