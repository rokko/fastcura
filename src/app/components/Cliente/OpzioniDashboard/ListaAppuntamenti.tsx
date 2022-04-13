import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AccordionPrestazioni from "../../Professionista/AccordionPrestazioni";

interface Iprestazione {
  data: Date;
  id_cliente: string;
  id_profesionista: string;
  metodo_pagamento: string;
  totale: number;
}
const ListaAppuntamenti = () => {
  const [token, setToken] = useState("");
  const [prestazioni, setPrestazioni] = useState<Iprestazione[]>();
  const takeToken = async () => {
    const tokenTest = await localStorage.getItem("tokenaccess");
    if (!!tokenTest) setToken(tokenTest);
  };

  useEffect(() => {
    takeToken();
    if (!!token) recuperaPrestazioni();
  }, [token]);
  //   const [listaPrestazioni, setListaPrestazioni] = useState()
  const recuperaPrestazioni = () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post(
        "https://fastcuradev.herokuapp.com/cliente/lista-appuntamenti",
        "",
        config
      )
      .then(function (response) {
        console.log(response);
        setPrestazioni(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Box style={{ height: 30, width: "100%" }}>
        {prestazioni?.map((prestazione: any) => {
          return <AccordionPrestazioni prestazione={prestazione} />;
        })}
      </Box>
    </>
  );
};

export default ListaAppuntamenti;
