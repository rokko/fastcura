import { Box, styled } from "@mui/system";
import React, { useMemo, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Lavagna from "./Lavagna";

const TitleBoxS = styled("p")`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #39b1d9;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const BoxS = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 11px;
  align-content: center;
  align-items: center;
  position: absolute;
  right: 40%;
  top: 20rem;
  width: 348px;
  background: #ffffff;
  backdrop-filter: blur(33px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 11px;

    position: absolute;
    max-width: 300px;
    left: calc(50% - 348px / 2);
    top: 57.21%;
    bottom: 2.88%;

    background: #ffffff;
    backdrop-filter: blur(33px);
    z-index: 100000000;
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 20px;
  }
`;

const InputBoxS = styled("input")`
  width: 308px;
  height: 48px;

  background: rgba(226, 226, 226, 0.3);
  border-radius: 10px;
  border: none;
  @media (max-width: 768px) {
    width: 290px;
    height: 50px;
  }

  /* Inside auto layout */
`;

const ButtonBoxS = styled("button")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 19px;
  gap: 10px;
  color: white;
  width: 308px;
  height: 47px;
  border: none;

  background: #39b1d9;
  border-radius: 40px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;
const BoxSearch = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const options = ["Infermiere", "Badante", "Fisioterapista", "Oss"];
  const city = [
    "Agrigento",

    "Alessandria",

    "Ancona",
    "Arezzo",
    "Ascoli Piceno",
    "Asti",
    "Avellino",
    "Bari",
    "Barletta-Andria-Trani",
    "Belluno",
    "Benevento",
    "Bergamo",
    "Biella",
    "Bologna",
    "Bolzano/Bozen",
    "Brescia",
    "Brindisi",
    "Cagliari",
    "Caltanissetta",
    "Campobasso",
    "Carbonia-Iglesias",
    "Caserta",
    "Catania",
    "Catanzaro",
    "Chieti",
    "Como",
    "Cosenza",
    "Cremona",
    "Crotone",
    "Cuneo",
    "Enna",
    "Fermo",
    "Ferrara",
    "Firenze",
    "Foggia",
    "Forlì-Cesena",
    "Frosinone",
    "Genova",
    "Gorizia",
    "Grosseto",
    "Imperia",
    "Isernia",
    "L'Aquila",
    "La Spezia",
    "Latina",
    "Lecce",
    "Lecco",
    "Livorno",
    "Lodi",
    "Lucca",
    "Macerata",
    "Mantova",
    "Massa-Carrara",
    "Matera",
    "Medio Campidano",
    "Messina",
    "Milano",
    "Modena",
    "Monza e della Brianza",
    "Napoli",
    "Novara",
    "Nuoro",
    "Ogliastra",
    "Olbia-Tempio",
    "Oristano",
    "Padova",
    "Palermo",
    "Parma",
    "Pavia",
    "Perugia",
    "Pesaro e Urbino",
    "Pescara",
    "Piacenza",
    "Pisa",
    "Pistoia",
    "Pordenone",
    "Potenza",

    "Prato",

    "Ragusa",

    "Ravenna",

    "Reggio di Calabria",

    "Reggio nell'Emilia",
    "Rieti",
    "Rimini",
    "Roma",
    "Rovigo",
    "Salerno",
    "Sassari",
    "Savona",
    "Siena",
    "Siracusa",
    "Sondrio",

    "Taranto",

    "Teramo",

    "Terni",

    "Torino",
    "Trapani",

    "Trento",

    "Treviso",

    "Trieste",

    "Udine",

    "Valle d'Aosta/Vallée d'Aoste",

    "Varese",

    "Venezia",
    "Verbano-Cusio-Ossola",

    "Vercelli",

    "Verona",

    "Vibo Valentia",

    "Vicenza",

    "Viterbo",
  ];

  const [professione, setProfessione] = useState<String | null>("");
  const [citta, setCitta] = useState<String | null>("");

  const getCompleted = useMemo(() => {
    return professione !== "" && citta !== "";
  }, [citta, professione]);

  return (
    <BoxS id="ricerca">
      <TitleBoxS>Cosa cerchi?</TitleBoxS>
      <Autocomplete
        disablePortal
        id="lista-servizi"
        options={options}
        size="small"
        sx={{
          height: "50px",
          width: "308px",
          border: "none",
          outline: "false",
          borderRadius: "30px",
          "& .MuiOutlinedInput-root": {
            background: "rgba(226, 226, 226, 0.3)",
            borderRadius: " 10px",
          },
        }}
        style={{ backgroundColor: "#ffffff", border: "none" }}
        renderInput={(params) => (
          <TextField
            style={{ border: "none" }}
            {...params}
            placeholder="Infermiere, Badante, Fisio..."
          />
        )}
        onChange={(x, value) => setProfessione(value)}
      />
      <TitleBoxS>Dove ti trovi?</TitleBoxS>
      <Autocomplete
        disablePortal
        id="lista-citta"
        options={city}
        size="small"
        sx={{
          height: "50px",
          width: "308px",
          border: "none",
          outline: "false",
          borderRadius: "30px",
          "& .MuiOutlinedInput-root": {
            background: "rgba(226, 226, 226, 0.3)",
            borderRadius: " 10px",
          },
        }}
        style={{ backgroundColor: "#ffffff" }}
        renderInput={(params) => (
          <TextField {...params} placeholder="Milano, Napoli, Roma ecc..." />
        )}
        onChange={(x, value) => setCitta(value)}
      />
      {!getCompleted && <ButtonBoxS>Cerca</ButtonBoxS>}
      {!!getCompleted && (
        <Link
          to="/risultati"
          style={{ textDecoration: "none" }}
          state={{ professione, citta }}
        >
          <ButtonBoxS>Cerca</ButtonBoxS>
        </Link>
      )}
    </BoxS>
  );
};
/*
  if (!isMobile)
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Lavagna />
            <p
              className="top-test boldtext"
              style={{
                color: "#000000",
                textAlign: "left",
                fontSize: "48px",
                marginRight: "70px",
              }}
            >
              L'<span className="bluespan">assistenza </span>
              <br /> domiciliare a<br />
              portata di <span className="bluespan">click</span>!
            </p>
          </div>
          <div>
            <Box
              style={{
                width: "280px",
                height: "250px",
                backgroundColor: "#39B1D9",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <p className="topsearch-text">Cosa cerchi?</p>


              <p className="topsearch-text">Dove ti trovi?</p>

            </Box>
            {getCompleted && (
              <Link to="/risultati" state={{ professione, citta }}>
                <button
                  style={{
                    width: "220px",
                    height: "50px",
                    backgroundColor: "#FF3617",
                    fontWeight: "bold",
                    border: "none",
                    marginTop: 20,
                    borderRadius: 20,
                    color: "#ffffff",
                    fontSize: "30px",
                  }}
                >
                  Vai
                </button>
              </Link>
            )}
            {!getCompleted && (
              <>
                <button
                  style={{
                    width: "220px",
                    height: "50px",
                    backgroundColor: "#FF3617",
                    fontWeight: "bold",
                    border: "none",
                    marginTop: 20,
                    borderRadius: 20,
                    color: "#ffffff",
                    fontSize: "30px",
                  }}
                >
                  Vai
                </button>
              </>
            )}
          </div>
        </div>
      </>
    );
  else
    return (
      <>
        <div>
          <p
            className="top-test boldtext"
            style={{ color: "#000000", textAlign: "left" }}
          >
            L'<span className="bluespan">assistenza </span>
            <br /> domiciliare a<br />
            portata di <span className="bluespan">click</span> !
          </p>
        </div>
        <Box
          style={{
            width: "280px",
            height: "250px",
            backgroundColor: "#39B1D9",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <p className="topsearch-text">Cosa cerchi?</p>

          <Autocomplete
            disablePortal
            id="lista-servizi"
            options={options}
            size="small"
            sx={{
              width: "240px",
              border: "none",
              outline: "false",
              borderRadius: "30px",
              "& .MuiOutlinedInput-root": {
                borderColor: "#ffffff",
                borderRadius: "30px",
              },
            }}
            style={{ backgroundColor: "#ffffff", border: "none" }}
            renderInput={(params) => (
              <TextField {...params} placeholder="Infermiere..." />
            )}
            onChange={(x, value) => setProfessione(value)}
          />
          <p className="topsearch-text">Dove ti trovi?</p>
          <Autocomplete
            disablePortal
            id="lista-citta"
            options={city}
            size="small"
            sx={{
              width: "240px",
              border: "none",
              outline: "false",
              borderRadius: "30px",
              "& .MuiOutlinedInput-root": {
                borderColor: "#ffffff",
                borderRadius: "30px",
              },
            }}
            style={{ backgroundColor: "#ffffff" }}
            renderInput={(params) => (
              <TextField {...params} placeholder="Milano..." />
            )}
            onChange={(x, value) => setCitta(value)}
          />
        </Box>
        {getCompleted && (
          <Link to="/risultati" state={{ professione, citta }}>
            <button
              disabled={!getCompleted}
              style={{
                width: "120px",
                height: "50px",
                backgroundColor: "#FF3617",
                fontWeight: "bold",
                border: "none",
                marginTop: 20,
                borderRadius: 20,
                color: "#ffffff",
                fontSize: "18px",
              }}
            >
              Vai
            </button>
          </Link>
        )}
        {!getCompleted && (
          <>
            <button
              style={{
                width: "120px",
                height: "50px",
                backgroundColor: "#FF3617",
                fontWeight: "bold",
                border: "none",
                marginTop: 20,
                borderRadius: 20,
                color: "#ffffff",
                fontSize: "18px",
              }}
            >
              Vai
            </button>
          </>
        )}
      </>
    );
};

 */

export default BoxSearch;
