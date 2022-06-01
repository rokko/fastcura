import React, { useState } from "react";
import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Autocomplete,
} from "@mui/material";
import axios from "axios";
import Header from "../../../TrovaIlTuoProfessionista/Header";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

const SignUpProfessionista = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [cognome, setCognome] = useState<String | null>();
  const [nome, setNome] = useState<String>();
  const [email, setEmail] = useState<String>();
  const [password, setPassword] = useState<String>();
  const [data, setData] = useState<String>();
  const [sesso, setSesso] = useState<String | null>();
  const [citta, setCitta] = useState<String | null>();
  const [cellulare, setCellulare] = useState<String>();
  const [professione, setProfessione] = useState<String | null>();
  const [greenpass, setGreenpass] = useState<String | null>();
  const [referenze, setReferenze] = useState<String | null>();
  const [anni, setAnni] = useState<String | null>();
  const [anniEsperienza, setAnniEsperienza] = useState<String | null>();
  const [terminelavoro, setTerminelavoro] = useState<String | null>();
  const [livelloItaliano, setLivelloItaliano] = useState<String | null>();
  const [titoloStudio, setTitoloStudio] = useState<String | null>();
  const [dichiarazione, setDichiarazione] = useState<String | null>();
  const [numeroiscrizione, setNumeroiscrizione] = useState<String | null>();
  const [assicurazione, setAssicurazione] = useState<String | null>();
  const [precedente, setPrecedente] = useState<String | null>();
  const prof = ["Infermiere", "Badante", "Fisioterapista", "Oss"];
  const primo = ["SI", "NO"];
  const reference = ["Una", "Due", "Piu di due"];
  const [passwordconf, setPasswordconf] = useState<String>();
  const anniItalia = ["0-3 Anni ", "3-5", "piu di 5"];
  const lavoro = ["Morte Paziente", "Dimissioni", "Licenziamento", "Nessuna"];
  const conoita = ["Ottimo", "Buono", "Sufficiente", "Insufficiente", "Scarso"];
  const tit = ["Laurea", "Scuole Superiori", "Diploma (O.S.S., A.S.A.)"];
  const sess = ["Uomo", "Donna"];
  const getConfN = useMemo(() => {
    if (professione !== "Badante") return !!numeroiscrizione;
  }, [professione, numeroiscrizione]);

  const getConfPass = useMemo(() => {
    return password === passwordconf;
  }, [password, passwordconf]);
  const citt = [
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
  const validatePassword = useMemo(() => {
    let check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    if (password?.match(check)) {
      return true;
    } else {
      return false;
    }
  }, [password]);
  const nuovoProfessionista = {
    cognome: cognome,
    email: email,
    nome: nome,
    password: password,
    data: data,
    sesso: sesso,
    citta: citta,
    cellulare: cellulare,
    professione: professione,
    greenpass: greenpass,
    referenze: referenze,
    anni: anni,
    anniEsperienza: anniEsperienza,
    terminelavoro: terminelavoro,
    livelloItaliano: livelloItaliano,
    titoloStudio: titoloStudio,
    dichiarazione: dichiarazione,
    numeroiscrizione: numeroiscrizione,
    assicurazione: assicurazione,
    precedente: precedente,
  };
  const sendRegister = () => {
    axios
      .post(
        "https://fastcuradev.herokuapp.com/professionista/signup",
        nuovoProfessionista
      )
      .then(function (response) {
        navigate("/registrazione");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <Header />
      <p className="registertitle">Compila i dati per iscriverti!</p>
      {isMobile && (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: 30,
            }}
          >
            <TextField
              onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                setCognome(x.target.value)
              }
              style={{ width: 310, marginTop: 10 }}
              id="outlined-size-small"
              label="Cognome"
            ></TextField>
            <TextField
              onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                setNome(x.target.value)
              }
              style={{ width: 310, marginTop: 10 }}
              id="outlined-size-small"
              label="Nome"
            ></TextField>
            <TextField
              onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(x.target.value)
              }
              style={{ width: 310, marginTop: 10 }}
              id="outlined-size-small"
              label="Indirizzo email"
            ></TextField>
            <TextField
              onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(x.target.value)
              }
              style={{ width: 310, marginTop: 10 }}
              id="outlined-size-small"
              type={"password"}
              label="Password"
            ></TextField>

            {!validatePassword && (
              <p style={{ maxWidth: 310, fontSize: "12px" }}>
                Attenzione la password deve essere lunga 8 caratteri, contenere
                almeno una lettera maiuscola un numero e un carattere speciale (
                es. ; . ! ?)
              </p>
            )}
            <TextField
              onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                setPasswordconf(x.target.value)
              }
              style={{ width: 310, marginTop: 10 }}
              id="outlined-size-small"
              type={"password"}
              label="Conferma Password"
            ></TextField>
            {!getConfPass && (
              <p> Attenzione le password inserite non combaciano.</p>
            )}
            <TextField
              onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                setData(x.target.value)
              }
              style={{ width: 310, marginTop: 10 }}
              id="outlined-size-small"
              type={"date"}
            ></TextField>
            <Autocomplete
              disablePortal
              id="lista-sesso"
              options={sess}
              sx={{ width: 310, marginTop: 1.5 }}
              style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
              renderInput={(params) => <TextField {...params} label="Sesso" />}
              onChange={(x, value) => setSesso(value)}
            />
            <Autocomplete
              disablePortal
              id="lista-citta"
              options={citt}
              sx={{ width: 310, marginTop: 1.5 }}
              style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
              renderInput={(params) => <TextField {...params} label="Città" />}
              onChange={(x, value) => setCitta(value)}
            />
            <TextField
              onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                setCellulare(x.target.value)
              }
              style={{ width: 310, marginTop: 10 }}
              id="outlined-size-small"
              label="Cellulare"
            ></TextField>
            <Autocomplete
              disablePortal
              id="lista-professioni"
              options={prof}
              sx={{ width: 310, marginTop: 1.5 }}
              style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
              renderInput={(params) => (
                <TextField {...params} label="Professione" />
              )}
              onChange={(x, value) => setProfessione(value)}
            />

            {professione === "Badante" && (
              <>
                <Autocomplete
                  disablePortal
                  id="green-pass"
                  options={primo}
                  sx={{ width: 310, marginTop: 1.5 }}
                  style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
                  renderInput={(params) => (
                    <TextField {...params} label="GreenPass" />
                  )}
                  onChange={(x, value) => setGreenpass(value)}
                />
                <Autocomplete
                  disablePortal
                  id="referenze"
                  options={reference}
                  sx={{ width: 310, marginTop: 1.5 }}
                  style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Referenze" />
                  )}
                  onChange={(x, value) => setReferenze(value)}
                />
                <Autocomplete
                  disablePortal
                  id="anni-italia"
                  options={anniItalia}
                  sx={{ width: 310, marginTop: 1.5 }}
                  style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Anni in Italia" />
                  )}
                  onChange={(x, value) => setAnni(value)}
                />
                <Autocomplete
                  disablePortal
                  id="esperienza"
                  options={anniItalia}
                  sx={{ width: 310, marginTop: 1.5 }}
                  style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Esperienza" />
                  )}
                  onChange={(x, value) => setAnniEsperienza(value)}
                />
                <Autocomplete
                  disablePortal
                  id="lavoro-terminato"
                  options={lavoro}
                  sx={{ width: 310, marginTop: 1.5 }}
                  style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Motivazione termine lavoro" />
                  )}
                  onChange={(x, value) => setTerminelavoro(value)}
                />
                <Autocomplete
                  disablePortal
                  id="conoscenza-italiano"
                  options={conoita}
                  sx={{ width: 310, marginTop: 1.5 }}
                  style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Conoscenza italiano" />
                  )}
                  onChange={(x, value) => setLivelloItaliano(value)}
                />
                <Autocomplete
                  disablePortal
                  id="titolo-studio"
                  options={tit}
                  sx={{ width: 310, marginTop: 1.5 }}
                  style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Titolo Studio" />
                  )}
                  onChange={(x, value) => setTitoloStudio(value)}
                />
              </>
            )}

            {professione !== "Badante" && !!professione && (
              <>
                <Autocomplete
                  disablePortal
                  id="dichiarazione"
                  options={primo}
                  sx={{ width: 310, marginTop: 1.5 }}
                  style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Laurea" />
                  )}
                  onChange={(x, value) => setDichiarazione(value)}
                />
                <Autocomplete
                  disablePortal
                  id="dichiarazione-assicurazione"
                  options={primo}
                  sx={{ width: 310, marginTop: 1.5 }}
                  style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Sei assicurato?" />
                  )}
                  onChange={(x, value) => setAssicurazione(value)}
                />
                <Autocomplete
                  disablePortal
                  id="lista-professioni"
                  options={primo}
                  sx={{ width: 310, marginTop: 1.5 }}
                  style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Precedenti Penali" />
                  )}
                  onChange={(x, value) => setPrecedente(value)}
                />
                <TextField
                  onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                    setNumeroiscrizione(x.target.value)
                  }
                  style={{ width: 310, marginTop: 10 }}
                  id="outlined-size-small"
                  label="Numero Iscrizione "
                ></TextField>
                {!numeroiscrizione && <p>Questo campo è obbligatorio</p>}
              </>
            )}

            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Acconsento all'utilizzo dei dati personali"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Accetto termini e condizioni"
              />{" "}
            </FormGroup>
          </div>

          <button
            style={{
              backgroundColor: "#39B1D9",
              width: 220,
              height: 37,
              borderRadius: 20,
              border: "none",
              color: "white",
              marginTop: 10,
              marginBottom: 20,
            }}
            disabled={
              !!getConfN &&
              !!cognome &&
              !!nome &&
              !!email &&
              !!data &&
              !!sesso &&
              !!citta &&
              !!getConfPass &&
              validatePassword
                ? false
                : true
            }
            onClick={() => sendRegister()}
          >
            Iscriviti
          </button>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="259.62"
            height="171.237"
            viewBox="0 0 259.62 171.237"
          >
            <g
              id="Raggruppa_128"
              data-name="Raggruppa 128"
              transform="translate(-49.094 -639.763)"
            >
              <path
                id="Tracciato_15"
                data-name="Tracciato 15"
                d="M1475.976,2019.085q.138-3.539.54-7.016l-44.08,1.795v.024l-16.415.668.823,20.234,15.659-.638,0-.088,43.859-1.785A97.431,97.431,0,0,1,1475.976,2019.085Z"
                transform="translate(-1343.579 -1303.239)"
                fill="#39b1d9"
              />
              <g
                id="Raggruppa_5"
                data-name="Raggruppa 5"
                transform="translate(148.919 641.844)"
              >
                <g
                  id="Raggruppa_4"
                  data-name="Raggruppa 4"
                  transform="translate(2.125 2.176)"
                >
                  <g id="Raggruppa_3" data-name="Raggruppa 3">
                    <path
                      id="Tracciato_16"
                      data-name="Tracciato 16"
                      d="M1776.956,1932.438c-46.679,3.682-85.5-34.848-81.787-81.174,2.922-36.461,32.678-66,69.413-68.914,46.694-3.7,85.539,34.848,81.81,81.194C1843.46,1900.006,1813.695,1929.54,1776.956,1932.438Zm-.159-133c-37.073-3.68-68.117,27.126-64.409,63.921,2.744,27.238,24.942,49.266,52.386,51.989,37.074,3.679,68.108-27.127,64.4-63.922C1826.432,1824.19,1804.24,1802.161,1776.8,1799.438Z"
                      transform="translate(-1694.923 -1782.104)"
                      fill="#39b1d9"
                    />
                  </g>
                </g>
              </g>
              <path
                id="Tracciato_17"
                data-name="Tracciato 17"
                d="M1539.985,2158.253l-41.334,1.683.795,19.51,49.459-2.014C1545.572,2171.437,1542.061,2165.034,1539.985,2158.253Z"
                transform="translate(-1402.921 -1408.224)"
                fill="#39b1d9"
              />
              <path
                id="Tracciato_18"
                data-name="Tracciato 18"
                d="M1432.591,1862.454l-99.416,4.047.821,20.165,21.607-.88,35.008-1.425,31.447-1.281A95.122,95.122,0,0,1,1432.591,1862.454Z"
                transform="translate(-1284.081 -1195.79)"
                fill="#39b1d9"
              />
              <path
                id="Tracciato_19"
                data-name="Tracciato 19"
                d="M1811.363,2088.937l-32.925,14.158s-.566,32.457,19.469,31.647,61.536,14.009,76.181-7.176c12.318-17.819,12.318-31.635,12.318-31.635l-37.256-7.784Z"
                transform="translate(-1603.856 -1357.877)"
                fill="#3f8dac"
              />
              <path
                id="Tracciato_20"
                data-name="Tracciato 20"
                d="M1849.907,1855.2s.568,3.321-10.414-.843-14.1,1.521-14.921-9.184-1.387-16.62-2.6-27.481,5.025-10.1,7.013-17.6-3.49-16.615,12.145-22.323,22.917-18.91,39.054-3.679,7.123,19.695,12.066,31.285,5.091,35.643-3.6,41.468-7.1,12.831-19.635,10.434S1849.907,1855.2,1849.907,1855.2Z"
                transform="translate(-1635.014 -1127.237)"
                fill="#1d1d1b"
              />
              <path
                id="Tracciato_21"
                data-name="Tracciato 21"
                d="M1882.113,1861.44s1.051,24.219,21.8,22.264,24.761-13.26,23.785-31.791-4.709-18.949-4.709-18.949-10.7-.839-12.474-4.981c0,0-9.877,12.781-17.758,12.446S1879.7,1848.893,1882.113,1861.44Z"
                transform="translate(-1677.885 -1171.033)"
                fill="#f2be9f"
              />
              <path
                id="Tracciato_22"
                data-name="Tracciato 22"
                d="M1895.268,2025.745s9.286-2.722,9.748-14.154l.462-11.433,17.3.679s-4.521,17.356-.758,20.541,11.034,3.578,11.034,3.578a23.553,23.553,0,0,1-13.842,11.424C1908.34,2039.528,1907.9,2033.037,1895.268,2025.745Z"
                transform="translate(-1687.761 -1294.685)"
                fill="#f2be9f"
              />
              <ellipse
                id="Ellisse_1"
                data-name="Ellisse 1"
                cx="1.341"
                cy="2.069"
                rx="1.341"
                ry="2.069"
                transform="translate(217.588 678.028) rotate(-5.382)"
                fill="#273237"
              />
              <ellipse
                id="Ellisse_2"
                data-name="Ellisse 2"
                cx="1.302"
                cy="1.992"
                rx="1.302"
                ry="1.992"
                transform="translate(235.648 678.019) rotate(-5.382)"
                fill="#273237"
              />
              <path
                id="Tracciato_23"
                data-name="Tracciato 23"
                d="M1931.009,1963.036s9.758,13.764,20.411.2C1951.42,1963.238,1938.452,1964.713,1931.009,1963.036Z"
                transform="translate(-1713.429 -1268.025)"
                fill="#fff"
              />
              <path
                id="Tracciato_24"
                data-name="Tracciato 24"
                d="M1928.188,1887.985s-3.644-2.187-8.548,1.13"
                transform="translate(-1705.264 -1213.617)"
                fill="none"
                stroke="#283237"
                stroke-miterlimit="10"
                stroke-width="1.451"
              />
              <path
                id="Tracciato_25"
                data-name="Tracciato 25"
                d="M1987.205,1885.073s4.9-3.073,8.548.729"
                transform="translate(-1753.788 -1211.192)"
                fill="none"
                stroke="#283237"
                stroke-miterlimit="10"
                stroke-width="1.451"
              />
              <path
                id="Tracciato_26"
                data-name="Tracciato 26"
                d="M1831.668,2106.691a58.827,58.827,0,0,1-112.781,0h-17.7a76,76,0,0,0,148.191,0Z"
                transform="translate(-1548.381 -1371.194)"
                fill="#39b1d9"
              />
              <g
                id="Raggruppa_9"
                data-name="Raggruppa 9"
                transform="translate(201.057 727.178)"
              >
                <g
                  id="Raggruppa_8"
                  data-name="Raggruppa 8"
                  transform="translate(2.93 0)"
                >
                  <g id="Raggruppa_7" data-name="Raggruppa 7">
                    <path
                      id="Tracciato_27"
                      data-name="Tracciato 27"
                      d="M1886.394,2086.069c-4.44,2.117-7.983,22.061,9.712,41.19"
                      transform="translate(-1882.781 -2086.069)"
                      fill="rgba(0,0,0,0)"
                      stroke="#273237"
                      stroke-miterlimit="10"
                      stroke-width="2"
                    />
                    <g
                      id="Raggruppa_6"
                      data-name="Raggruppa 6"
                      transform="translate(39.513 1.051)"
                    >
                      <path
                        id="Tracciato_28"
                        data-name="Tracciato 28"
                        d="M2036.838,2141.666l-1.5-.345c.09-.394,8.342-39.619-11.8-49.953l-.55-1.57c10.708,3.862,15.416,15.17,15.845,30.317A97.125,97.125,0,0,1,2036.838,2141.666Z"
                        transform="translate(-2022.984 -2089.798)"
                        fill="#273237"
                        stroke="rgba(0,0,0,0)"
                        stroke-width="2"
                      />
                    </g>
                    <ellipse
                      id="Ellisse_3"
                      data-name="Ellisse 3"
                      cx="7.704"
                      cy="7.704"
                      rx="7.704"
                      ry="7.704"
                      transform="translate(44.912 45.042)"
                      fill="#273237"
                      stroke="rgba(0,0,0,0)"
                      stroke-width="2"
                    />
                    <ellipse
                      id="Ellisse_4"
                      data-name="Ellisse 4"
                      cx="2.341"
                      cy="2.341"
                      rx="2.341"
                      ry="2.341"
                      transform="translate(14.836 78.139)"
                      fill="#273237"
                      stroke="rgba(0,0,0,0)"
                      stroke-width="2"
                    />
                    <ellipse
                      id="Ellisse_5"
                      data-name="Ellisse 5"
                      cx="2.341"
                      cy="2.341"
                      rx="2.341"
                      ry="2.341"
                      transform="translate(39.489 58.109)"
                      fill="#273237"
                      stroke="rgba(0,0,0,0)"
                      stroke-width="2"
                    />
                    <path
                      id="Tracciato_29"
                      data-name="Tracciato 29"
                      d="M1911.806,2268.248s1.55,2.664-8.306-11.211,5.069-28.027,5.069-28.027,15.408-7.7,26.555,14.975l2.325,4"
                      transform="translate(-1895.244 -2187.82)"
                      fill="rgba(0,0,0,0)"
                      stroke="#273237"
                      stroke-miterlimit="10"
                      stroke-width="2"
                    />
                  </g>
                </g>
              </g>
              <path
                id="Tracciato_30"
                data-name="Tracciato 30"
                d="M1931.009,2021.306s5.875,3.419,10.832,2.8,5.476-3.351,5.476-3.351S1935.667,2023.773,1931.009,2021.306Z"
                transform="translate(-1713.429 -1309.477)"
                fill="#e3b699"
              />
            </g>
          </svg>
        </>
      )}
      {!isMobile && (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: 30,
              }}
            >
              <TextField
                onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                  setCognome(x.target.value)
                }
                style={{ width: 310, marginTop: 10 }}
                id="outlined-size-small"
                label="Cognome"
              ></TextField>
              <TextField
                onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                  setNome(x.target.value)
                }
                style={{ width: 310, marginTop: 10 }}
                id="outlined-size-small"
                label="Nome"
              ></TextField>
              <TextField
                onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(x.target.value)
                }
                style={{ width: 310, marginTop: 10 }}
                id="outlined-size-small"
                label="Indirizzo email"
              ></TextField>
              <TextField
                onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(x.target.value)
                }
                style={{ width: 310, marginTop: 10 }}
                id="outlined-size-small"
                type={"password"}
                label="Password"
              ></TextField>
              {!validatePassword && (
                <p style={{ maxWidth: 310, fontSize: "12px" }}>
                  Attenzione la password deve essere lunga 8 caratteri,
                  contenere almeno una lettera maiuscola un numero e un
                  carattere speciale ( es. ; . ! ?)
                </p>
              )}
              <TextField
                onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                  setPasswordconf(x.target.value)
                }
                style={{ width: 310, marginTop: 10 }}
                id="outlined-size-small"
                type={"password"}
                label="Conferma Password"
              ></TextField>
              {!getConfPass && <p>Attenzione le password non combaciano.</p>}
              <TextField
                onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                  setData(x.target.value)
                }
                style={{ width: 310, marginTop: 10 }}
                id="outlined-size-small"
                type={"date"}
              ></TextField>
              <Autocomplete
                disablePortal
                id="lista-sesso"
                options={sess}
                sx={{ width: 310, marginTop: 1.5 }}
                style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
                renderInput={(params) => (
                  <TextField {...params} label="Sesso" />
                )}
                onChange={(x, value) => setSesso(value)}
              />
              <Autocomplete
                disablePortal
                id="lista-citta"
                options={citt}
                sx={{ width: 310, marginTop: 1.5 }}
                style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
                renderInput={(params) => (
                  <TextField {...params} label="Città" />
                )}
                onChange={(x, value) => setCitta(value)}
              />
              <TextField
                onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                  setCellulare(x.target.value)
                }
                style={{ width: 310, marginTop: 10 }}
                id="outlined-size-small"
                label="Cellulare"
              ></TextField>
              <Autocomplete
                disablePortal
                id="lista-professioni"
                options={prof}
                sx={{ width: 310, marginTop: 1.5 }}
                style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
                renderInput={(params) => (
                  <TextField {...params} label="Professione" />
                )}
                onChange={(x, value) => setProfessione(value)}
              />

              {professione === "Badante" && (
                <>
                  <Autocomplete
                    disablePortal
                    id="green-pass"
                    options={primo}
                    sx={{ width: 310, marginTop: 1.5 }}
                    style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
                    renderInput={(params) => (
                      <TextField {...params} label="GreenPass" />
                    )}
                    onChange={(x, value) => setGreenpass(value)}
                  />
                  <Autocomplete
                    disablePortal
                    id="referenze"
                    options={reference}
                    sx={{ width: 310, marginTop: 1.5 }}
                    style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
                    renderInput={(params) => (
                      <TextField {...params} label="Referenze" />
                    )}
                    onChange={(x, value) => setReferenze(value)}
                  />
                  <Autocomplete
                    disablePortal
                    id="anni-italia"
                    options={anniItalia}
                    sx={{ width: 310, marginTop: 1.5 }}
                    style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
                    renderInput={(params) => (
                      <TextField {...params} label="Anni in Italia" />
                    )}
                    onChange={(x, value) => setAnni(value)}
                  />
                  <Autocomplete
                    disablePortal
                    id="esperienza"
                    options={anniItalia}
                    sx={{ width: 310, marginTop: 1.5 }}
                    style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
                    renderInput={(params) => (
                      <TextField {...params} label="Esperienza" />
                    )}
                    onChange={(x, value) => setAnniEsperienza(value)}
                  />
                  <Autocomplete
                    disablePortal
                    id="lavoro-terminato"
                    options={lavoro}
                    sx={{ width: 310, marginTop: 1.5 }}
                    style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Motivazione termine lavoro"
                      />
                    )}
                    onChange={(x, value) => setTerminelavoro(value)}
                  />
                  <Autocomplete
                    disablePortal
                    id="conoscenza-italiano"
                    options={conoita}
                    sx={{ width: 310, marginTop: 1.5 }}
                    style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
                    renderInput={(params) => (
                      <TextField {...params} label="Conoscenza italiano" />
                    )}
                    onChange={(x, value) => setLivelloItaliano(value)}
                  />
                  <Autocomplete
                    disablePortal
                    id="titolo-studio"
                    options={tit}
                    sx={{ width: 310, marginTop: 1.5 }}
                    style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
                    renderInput={(params) => (
                      <TextField {...params} label="Titolo Studio" />
                    )}
                    onChange={(x, value) => setTitoloStudio(value)}
                  />
                </>
              )}

              {professione !== "Badante" && !!professione && (
                <>
                  <Autocomplete
                    disablePortal
                    id="dichiarazione"
                    options={primo}
                    sx={{ width: 310, marginTop: 1.5 }}
                    style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="In possesso di diploma di Laurea"
                      />
                    )}
                    onChange={(x, value) => setDichiarazione(value)}
                  />
                  <Autocomplete
                    disablePortal
                    id="dichiarazione-assicurazione"
                    options={primo}
                    sx={{ width: 310, marginTop: 1.5 }}
                    style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
                    renderInput={(params) => (
                      <TextField {...params} label="Sono assicurato?" />
                    )}
                    onChange={(x, value) => setAssicurazione(value)}
                  />
                  <Autocomplete
                    disablePortal
                    id="lista-professioni"
                    options={primo}
                    sx={{ width: 310, marginTop: 1.5 }}
                    style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
                    renderInput={(params) => (
                      <TextField {...params} label="Precedente Penale" />
                    )}
                    onChange={(x, value) => setPrecedente(value)}
                  />
                  <TextField
                    onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                      setNumeroiscrizione(x.target.value)
                    }
                    style={{ width: 310, marginTop: 10 }}
                    id="outlined-size-small"
                    label="Numero Iscrizione "
                  ></TextField>
                  {!numeroiscrizione && <p>Questo campo è obbligatorio</p>}
                </>
              )}

              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Acconsento all'utilizzo dei dati personali"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Accetto termini e condizioni"
                />{" "}
              </FormGroup>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <button
                style={{
                  backgroundColor: "#39B1D9",
                  width: 220,
                  height: 37,
                  borderRadius: 20,
                  border: "none",
                  color: "white",
                  marginTop: 10,
                  marginBottom: 30,
                }}
                disabled={
                  getConfN &&
                  !!numeroiscrizione &&
                  !!cognome &&
                  !!nome &&
                  !!email &&
                  !!data &&
                  !!sesso &&
                  !!citta &&
                  !!getConfPass &&
                  validatePassword
                    ? false
                    : true
                }
                onClick={() => sendRegister()}
              >
                Iscriviti
              </button>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="259.62"
                height="171.237"
                viewBox="0 0 259.62 171.237"
              >
                <g
                  id="Raggruppa_128"
                  data-name="Raggruppa 128"
                  transform="translate(-49.094 -639.763)"
                >
                  <path
                    id="Tracciato_15"
                    data-name="Tracciato 15"
                    d="M1475.976,2019.085q.138-3.539.54-7.016l-44.08,1.795v.024l-16.415.668.823,20.234,15.659-.638,0-.088,43.859-1.785A97.431,97.431,0,0,1,1475.976,2019.085Z"
                    transform="translate(-1343.579 -1303.239)"
                    fill="#39b1d9"
                  />
                  <g
                    id="Raggruppa_5"
                    data-name="Raggruppa 5"
                    transform="translate(148.919 641.844)"
                  >
                    <g
                      id="Raggruppa_4"
                      data-name="Raggruppa 4"
                      transform="translate(2.125 2.176)"
                    >
                      <g id="Raggruppa_3" data-name="Raggruppa 3">
                        <path
                          id="Tracciato_16"
                          data-name="Tracciato 16"
                          d="M1776.956,1932.438c-46.679,3.682-85.5-34.848-81.787-81.174,2.922-36.461,32.678-66,69.413-68.914,46.694-3.7,85.539,34.848,81.81,81.194C1843.46,1900.006,1813.695,1929.54,1776.956,1932.438Zm-.159-133c-37.073-3.68-68.117,27.126-64.409,63.921,2.744,27.238,24.942,49.266,52.386,51.989,37.074,3.679,68.108-27.127,64.4-63.922C1826.432,1824.19,1804.24,1802.161,1776.8,1799.438Z"
                          transform="translate(-1694.923 -1782.104)"
                          fill="#39b1d9"
                        />
                      </g>
                    </g>
                  </g>
                  <path
                    id="Tracciato_17"
                    data-name="Tracciato 17"
                    d="M1539.985,2158.253l-41.334,1.683.795,19.51,49.459-2.014C1545.572,2171.437,1542.061,2165.034,1539.985,2158.253Z"
                    transform="translate(-1402.921 -1408.224)"
                    fill="#39b1d9"
                  />
                  <path
                    id="Tracciato_18"
                    data-name="Tracciato 18"
                    d="M1432.591,1862.454l-99.416,4.047.821,20.165,21.607-.88,35.008-1.425,31.447-1.281A95.122,95.122,0,0,1,1432.591,1862.454Z"
                    transform="translate(-1284.081 -1195.79)"
                    fill="#39b1d9"
                  />
                  <path
                    id="Tracciato_19"
                    data-name="Tracciato 19"
                    d="M1811.363,2088.937l-32.925,14.158s-.566,32.457,19.469,31.647,61.536,14.009,76.181-7.176c12.318-17.819,12.318-31.635,12.318-31.635l-37.256-7.784Z"
                    transform="translate(-1603.856 -1357.877)"
                    fill="#3f8dac"
                  />
                  <path
                    id="Tracciato_20"
                    data-name="Tracciato 20"
                    d="M1849.907,1855.2s.568,3.321-10.414-.843-14.1,1.521-14.921-9.184-1.387-16.62-2.6-27.481,5.025-10.1,7.013-17.6-3.49-16.615,12.145-22.323,22.917-18.91,39.054-3.679,7.123,19.695,12.066,31.285,5.091,35.643-3.6,41.468-7.1,12.831-19.635,10.434S1849.907,1855.2,1849.907,1855.2Z"
                    transform="translate(-1635.014 -1127.237)"
                    fill="#1d1d1b"
                  />
                  <path
                    id="Tracciato_21"
                    data-name="Tracciato 21"
                    d="M1882.113,1861.44s1.051,24.219,21.8,22.264,24.761-13.26,23.785-31.791-4.709-18.949-4.709-18.949-10.7-.839-12.474-4.981c0,0-9.877,12.781-17.758,12.446S1879.7,1848.893,1882.113,1861.44Z"
                    transform="translate(-1677.885 -1171.033)"
                    fill="#f2be9f"
                  />
                  <path
                    id="Tracciato_22"
                    data-name="Tracciato 22"
                    d="M1895.268,2025.745s9.286-2.722,9.748-14.154l.462-11.433,17.3.679s-4.521,17.356-.758,20.541,11.034,3.578,11.034,3.578a23.553,23.553,0,0,1-13.842,11.424C1908.34,2039.528,1907.9,2033.037,1895.268,2025.745Z"
                    transform="translate(-1687.761 -1294.685)"
                    fill="#f2be9f"
                  />
                  <ellipse
                    id="Ellisse_1"
                    data-name="Ellisse 1"
                    cx="1.341"
                    cy="2.069"
                    rx="1.341"
                    ry="2.069"
                    transform="translate(217.588 678.028) rotate(-5.382)"
                    fill="#273237"
                  />
                  <ellipse
                    id="Ellisse_2"
                    data-name="Ellisse 2"
                    cx="1.302"
                    cy="1.992"
                    rx="1.302"
                    ry="1.992"
                    transform="translate(235.648 678.019) rotate(-5.382)"
                    fill="#273237"
                  />
                  <path
                    id="Tracciato_23"
                    data-name="Tracciato 23"
                    d="M1931.009,1963.036s9.758,13.764,20.411.2C1951.42,1963.238,1938.452,1964.713,1931.009,1963.036Z"
                    transform="translate(-1713.429 -1268.025)"
                    fill="#fff"
                  />
                  <path
                    id="Tracciato_24"
                    data-name="Tracciato 24"
                    d="M1928.188,1887.985s-3.644-2.187-8.548,1.13"
                    transform="translate(-1705.264 -1213.617)"
                    fill="none"
                    stroke="#283237"
                    stroke-miterlimit="10"
                    stroke-width="1.451"
                  />
                  <path
                    id="Tracciato_25"
                    data-name="Tracciato 25"
                    d="M1987.205,1885.073s4.9-3.073,8.548.729"
                    transform="translate(-1753.788 -1211.192)"
                    fill="none"
                    stroke="#283237"
                    stroke-miterlimit="10"
                    stroke-width="1.451"
                  />
                  <path
                    id="Tracciato_26"
                    data-name="Tracciato 26"
                    d="M1831.668,2106.691a58.827,58.827,0,0,1-112.781,0h-17.7a76,76,0,0,0,148.191,0Z"
                    transform="translate(-1548.381 -1371.194)"
                    fill="#39b1d9"
                  />
                  <g
                    id="Raggruppa_9"
                    data-name="Raggruppa 9"
                    transform="translate(201.057 727.178)"
                  >
                    <g
                      id="Raggruppa_8"
                      data-name="Raggruppa 8"
                      transform="translate(2.93 0)"
                    >
                      <g id="Raggruppa_7" data-name="Raggruppa 7">
                        <path
                          id="Tracciato_27"
                          data-name="Tracciato 27"
                          d="M1886.394,2086.069c-4.44,2.117-7.983,22.061,9.712,41.19"
                          transform="translate(-1882.781 -2086.069)"
                          fill="rgba(0,0,0,0)"
                          stroke="#273237"
                          stroke-miterlimit="10"
                          stroke-width="2"
                        />
                        <g
                          id="Raggruppa_6"
                          data-name="Raggruppa 6"
                          transform="translate(39.513 1.051)"
                        >
                          <path
                            id="Tracciato_28"
                            data-name="Tracciato 28"
                            d="M2036.838,2141.666l-1.5-.345c.09-.394,8.342-39.619-11.8-49.953l-.55-1.57c10.708,3.862,15.416,15.17,15.845,30.317A97.125,97.125,0,0,1,2036.838,2141.666Z"
                            transform="translate(-2022.984 -2089.798)"
                            fill="#273237"
                            stroke="rgba(0,0,0,0)"
                            stroke-width="2"
                          />
                        </g>
                        <ellipse
                          id="Ellisse_3"
                          data-name="Ellisse 3"
                          cx="7.704"
                          cy="7.704"
                          rx="7.704"
                          ry="7.704"
                          transform="translate(44.912 45.042)"
                          fill="#273237"
                          stroke="rgba(0,0,0,0)"
                          stroke-width="2"
                        />
                        <ellipse
                          id="Ellisse_4"
                          data-name="Ellisse 4"
                          cx="2.341"
                          cy="2.341"
                          rx="2.341"
                          ry="2.341"
                          transform="translate(14.836 78.139)"
                          fill="#273237"
                          stroke="rgba(0,0,0,0)"
                          stroke-width="2"
                        />
                        <ellipse
                          id="Ellisse_5"
                          data-name="Ellisse 5"
                          cx="2.341"
                          cy="2.341"
                          rx="2.341"
                          ry="2.341"
                          transform="translate(39.489 58.109)"
                          fill="#273237"
                          stroke="rgba(0,0,0,0)"
                          stroke-width="2"
                        />
                        <path
                          id="Tracciato_29"
                          data-name="Tracciato 29"
                          d="M1911.806,2268.248s1.55,2.664-8.306-11.211,5.069-28.027,5.069-28.027,15.408-7.7,26.555,14.975l2.325,4"
                          transform="translate(-1895.244 -2187.82)"
                          fill="rgba(0,0,0,0)"
                          stroke="#273237"
                          stroke-miterlimit="10"
                          stroke-width="2"
                        />
                      </g>
                    </g>
                  </g>
                  <path
                    id="Tracciato_30"
                    data-name="Tracciato 30"
                    d="M1931.009,2021.306s5.875,3.419,10.832,2.8,5.476-3.351,5.476-3.351S1935.667,2023.773,1931.009,2021.306Z"
                    transform="translate(-1713.429 -1309.477)"
                    fill="#e3b699"
                  />
                </g>
              </svg>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SignUpProfessionista;
