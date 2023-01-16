import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AccordionPrestazioni from "../../Professionista/AccordionPrestazioni";
import { Loader } from "../../../loader";

interface Iprestazione {
  data: Date;
  id_cliente: string;
  id_profesionista: string;
  metodo_pagamento: string;
  totale: number;
}
const ListaAppuntamenti = () => {
  const [load, setLoad] = useState(false);
  const [token, setToken] = useState("");
  const [prestazioni, setPrestazioni] = useState<Iprestazione[]>();
  const takeToken = async () => {
    const tokenTest = await localStorage.getItem("tokenaccess");
    if (!!tokenTest) setToken(tokenTest);
  };

  useEffect(() => {
    setLoad(true);
    takeToken();
    if (!!token) recuperaPrestazioni();
  }, [token]);
  //   const [listaPrestazioni, setListaPrestazioni] = useState()
  const recuperaPrestazioni = () => {
    setLoad(true);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post(
        "https://careful-pear-cockatoo.cyclic.app/cliente/lista-appuntamenti",
        "",
        config
      )
      .then(function (response) {
        setLoad(false);
        setPrestazioni(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Loader isLoading={load} />
      <Box style={{ height: 30, width: "100%" }}>
        {
          // @ts-ignore
          prestazioni?.length === 0 && <p>Nessun appuntamento fissato</p>
        }
        {prestazioni?.map((prestazione: any) => {
          return <AccordionPrestazioni prestazione={prestazione} />;
        })}
      </Box>
    </>
  );
};

export default ListaAppuntamenti;
