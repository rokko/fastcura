import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import AccordionPrestazioni from "./AccordionPrestazioni";
import axios from "axios";
import { Loader } from "../../loader";

interface Iprestazione {
  data: Date;
  id_cliente: string;
  id_profesionista: string;
  metodo_pagamento: string;
  totale: number;
}
const CronologiaPrestazioni = () => {
  const [token, setToken] = useState("");
  const [prestazioni, setPrestazioni] = useState<Iprestazione[]>();
  const [load, setLoad] = useState(false);
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
    setLoad(true);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get(
        "https://careful-pear-cockatoo.cyclic.app/professionista/lista-appuntamenti",
        config
      )
      .then(function (response) {
        setPrestazioni(response.data);
        setLoad(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Loader isLoading={load} />
      <Box style={{ height: 30, width: "100%" }}>
        {prestazioni?.length === 0 && <p>Nessun appuntamento fissato</p>}

        {prestazioni?.map((prestazione: any) => {
          return <AccordionPrestazioni prestazione={prestazione} />;
        })}
      </Box>
    </>
  );
};

export default CronologiaPrestazioni;
