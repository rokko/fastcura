import React, { useState } from "react";
import { Field, Form, Formik, yupToFormErrors } from "formik";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  ButtonContinuaReg,
  ContainerGenerale,
  ContainerMeta,
  ContenitoreSezione,
  InputSelect,
  InputVariabile,
  LabelCheck,
  TestoErrore,
  TestoLabel,
  TestoSotto,
  TitleRegistrazione,
} from "./RegistrazioneProfessionistaStyled";
import Header from "../components/TrovaIlTuoProfessionista/Header";
import { ReactComponent as Indietro } from "../media/back.svg";
import prim from "../media/prim.png";
import second from "../media/sec.png";
import terz from "../media/ult.png";

import immagineRegistrazione from "../media/imgregistrazione.png";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import { object, ref, string } from "yup";
import * as yup from "yup";
import axios from "axios";
import { useMediaQuery } from "react-responsive";

const RegistrazioneProfessionista = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [valori, setValori] = useState({
    nome: "",
    cognome: "",
    sesso: "",
    mail: "",
    password: "",
    data: "",
    citta: "",
    conosciuto: "",
    privacy1: false,
    privacy2: false,
  });

  enum Risultato {
    ok,
  }
  const initialValues = {
    nome: "",
    cognome: "",
    sesso: "",
    mail: "",
  };
  const initialValues2 = {
    password: "",
    ripetipassword: "",
  };

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
  const initialValues3 = {
    data: "",
    citta: "",
    conosciuto: "",
    privacy1: false,
    privacy2: false,
  };
  const sess = ["Uomo", "Donna"];
  const [route, setRoute] = useState("iniziale");

  return (
    <ContainerGenerale>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          width: "100%",
        }}
      >
        <ContainerMeta
          style={{ backgroundColor: "#aecfff", width: isMobile ? "100vw" : "" }}
        >
          <img src={immagineRegistrazione} />
        </ContainerMeta>
        {route === "iniziale" && (
          <ContainerMeta
            style={{
              paddingLeft: "3rem",
              paddingRight: "3rem",
              background: " #F9F9F9",
              width: isMobile ? "100%" : "",
            }}
          >
            <TitleRegistrazione>
              Benvenuto in <br />
              Fastcura.
            </TitleRegistrazione>
            <TestoSotto>
              Ci sei quasi! compila i dati per confermare la registrazione
            </TestoSotto>
            <img
              src={prim}
              alt="prim"
              width={"200px"}
              style={{ margin: "0.5rem" }}
            />
            <Formik
              initialValues={initialValues}
              onSubmit={(values, formikHelper) => {
                setValori({
                  ...valori,
                  nome: values.nome,
                  cognome: values.cognome,
                  sesso: values.sesso,
                  mail: values.mail,
                });
                console.log(valori);
                setRoute("secondo");
                formikHelper.resetForm();
              }}
              validationSchema={object({
                cognome: string()
                  .required("Inserisci il tuo Cognome")
                  .min(2, "Cognome troppo corto"),
                nome: string()
                  .required("Inserisci il tuo nome")
                  .min(2, "Nome troppo corto"),
                mail: string()
                  .required("Inserisci la tua mail")
                  .email("Email non valida"),
              })}
            >
              {({ errors, isValid, touched, dirty }) => (
                <Form style={{ display: "flex", flexDirection: "column" }}>
                  <ContenitoreSezione>
                    <TestoLabel>Cognome</TestoLabel>
                    <InputVariabile
                      name="cognome"
                      style={{
                        border:
                          errors.cognome && touched.cognome
                            ? "2px solid #E93323"
                            : "none",
                      }}
                    />
                    {errors.cognome && touched.cognome && (
                      <TestoErrore>{errors.cognome}</TestoErrore>
                    )}
                  </ContenitoreSezione>
                  <ContenitoreSezione>
                    <TestoLabel>Nome:</TestoLabel>
                    <InputVariabile
                      name="nome"
                      placeholder="Francesco"
                      style={{
                        border:
                          errors.nome && touched.nome
                            ? "2px solid #E93323"
                            : "none",
                      }}
                    />
                    {errors.nome && touched.nome && (
                      <TestoErrore>{errors.nome}</TestoErrore>
                    )}
                  </ContenitoreSezione>{" "}
                  <ContenitoreSezione>
                    <TestoLabel>Sesso: </TestoLabel>
                    <InputSelect name="sesso" id="sesso">
                      <option value="uomo">Uomo</option>
                      <option value="donna">Donna</option>
                    </InputSelect>
                  </ContenitoreSezione>
                  <ContenitoreSezione>
                    <TestoLabel>Mail:</TestoLabel>
                    <InputVariabile
                      type={"email"}
                      name="mail"
                      placeholder="tuamail@email.com"
                      autoComplete="on"
                      style={{
                        border:
                          errors.mail && touched.mail
                            ? "2px solid #E93323"
                            : "none",
                      }}
                    />
                    {errors.mail && touched.mail && (
                      <TestoErrore>{errors.mail}</TestoErrore>
                    )}
                  </ContenitoreSezione>
                  <ButtonContinuaReg disabled={!dirty && !isValid}>
                    Continua
                  </ButtonContinuaReg>
                </Form>
              )}
            </Formik>
          </ContainerMeta>
        )}
        {route === "secondo" && (
          <ContainerMeta
            style={{
              paddingLeft: "3rem",
              paddingRight: "3rem",
              background: " #F9F9F9",
              width: isMobile ? "100%" : "",
            }}
          >
            <Indietro onClick={() => setRoute("iniziale")} />
            <TitleRegistrazione>
              Bene, ora imposta <br />
              la tua password
            </TitleRegistrazione>
            <img
              src={second}
              alt="prim"
              width={"200px"}
              style={{ margin: "0.5rem" }}
            />
            <TestoSotto style={{ fontSize: "14px", marginTop: "0.5rem" }}>
              La password deve essere lunga 8 caratteri, contenere almeno una
              lettera maiuscola un numero e un carattere speciale ( es. ; . ! ?)
            </TestoSotto>
            <Formik
              initialValues={initialValues2}
              onSubmit={(values, formikHelper) => {
                console.log(valori);
                setValori({ ...valori, password: values.password });
                setRoute("terzo");
                formikHelper.resetForm();
              }}
              validationSchema={object({
                password: string()
                  .required("Inserisci la password")
                  .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,100})/,
                    "Deve contenere almeno 8 caratteri, una maiuscola, un numero e un carattere speciale"
                  ),
                ripetipassword: string()
                  .required("Riscrivi la tua password")
                  .oneOf([ref("password")], "Le password non combaciano."),
              })}
            >
              {({ errors, isValid, touched, dirty, values }) => (
                <Form style={{ display: "flex", flexDirection: "column" }}>
                  <ContenitoreSezione>
                    <TestoLabel>Password</TestoLabel>
                    <InputVariabile
                      type="password"
                      name="password"
                      style={{
                        border:
                          errors.password && touched.password
                            ? "2px solid #E93323"
                            : "none",
                      }}
                    />
                    {errors.password && touched.password && (
                      <TestoErrore>{errors.password}</TestoErrore>
                    )}
                  </ContenitoreSezione>
                  <ContenitoreSezione>
                    <TestoLabel>Ripeti password</TestoLabel>
                    <InputVariabile
                      name="ripetipassword"
                      placeholder="Ripeti Password"
                      type="password"
                      style={{
                        border:
                          errors.ripetipassword && touched.ripetipassword
                            ? "2px solid #E93323"
                            : "none",
                      }}
                    />
                    {console.log(errors, values)}
                    {errors.ripetipassword && touched.ripetipassword && (
                      <TestoErrore>{errors.ripetipassword}</TestoErrore>
                    )}
                  </ContenitoreSezione>{" "}
                  <ButtonContinuaReg disabled={!dirty && !isValid}>
                    Continua
                  </ButtonContinuaReg>
                </Form>
              )}
            </Formik>
          </ContainerMeta>
        )}
        {route === "terzo" && (
          <ContainerMeta
            style={{
              width: isMobile ? "100%" : "",
              paddingLeft: "3rem",
              paddingRight: "3rem",
              background: " #F9F9F9",
            }}
          >
            <Indietro onClick={() => setRoute("secondo")} />
            <TitleRegistrazione>
              Infine, dicci di più
              <br /> su di te
            </TitleRegistrazione>
            <img
              src={terz}
              alt="prim"
              width={"200px"}
              style={{ margin: "0.5rem" }}
            />

            <Formik
              initialValues={initialValues3}
              onSubmit={(values, formikHelper) => {
                setValori({
                  ...valori,
                  data: values.data,
                  citta: values.citta,
                  conosciuto: values.conosciuto,
                  privacy1: values.privacy1,
                  privacy2: values.privacy2,
                });

                const nuovoProfessionista = {
                  cognome: valori.cognome,
                  nome: valori.nome,
                  email: valori.mail,
                  password: valori.password,
                  data: valori.data,
                  sesso: valori.sesso,
                  cap: "00000",
                  cellulare: "33333333333",
                  citta: valori.citta,

                  professione: null,
                  greenpass: null,
                  referenze: null,
                  anni: null,
                  anniEsperienza: null,
                  terminelavoro: null,
                  livelloItaliano: null,
                  titoloStudio: null,
                  dichiarazione: null,
                  numeroiscrizione: null,
                  assicurazione: null,
                  precedente: null,
                };

                axios
                  .post(
                    "https://careful-pear-cockatoo.cyclic.app/professionista/signup",
                    nuovoProfessionista
                  )
                  .then(function (response) {
                    setRoute("quattro");
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
                formikHelper.resetForm();
              }}
              validationSchema={object({
                privacy: yup
                  .bool()
                  .required("Must Accept Terms and Conditions")
                  .oneOf([true], "E' necessario accettare per proseguire"),

                privacy2: yup
                  .bool()
                  .required("Must Accept Terms and Conditions")
                  .oneOf([true], "E' necessario accettare per proseguire"),
              })}
            >
              {({ errors, isValid, touched, dirty, values }) => (
                <Form style={{ display: "flex", flexDirection: "column" }}>
                  <ContenitoreSezione>
                    <TestoLabel>Data di nascita (opzionale)</TestoLabel>
                    <InputVariabile type={"date"} name="datadinascita" />
                  </ContenitoreSezione>
                  <ContenitoreSezione>
                    <TestoLabel>Citta</TestoLabel>
                    <InputSelect name="citta" id="citta">
                      {citt.map((x) => {
                        return <option value={x}>{x}</option>;
                      })}
                    </InputSelect>
                  </ContenitoreSezione>{" "}
                  <ContenitoreSezione>
                    <TestoLabel>
                      Come ci hai conosciuto? (opzionale){" "}
                    </TestoLabel>
                    <InputSelect name="conosciuto" id="conosciuto">
                      <option value="social">Social</option>
                      <option value="passaparola">Passaparola</option>
                      <option value="google">Google</option>
                    </InputSelect>
                  </ContenitoreSezione>
                  <ContenitoreSezione>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <InputVariabile
                        type="checkbox"
                        name="privacy"
                        style={{
                          height: "30px",
                          border: "1px solid #E93323",
                        }}
                      ></InputVariabile>
                      <LabelCheck>
                        Ho letto l'informativa privacy e acconsento alla
                        memorizzazione dei miei dati nel vostro archivio secondo
                        quanto stabilito dal regolamento europeo per la
                        protezione dei dati personali n. 679/2016, GDPR.
                      </LabelCheck>
                    </div>
                  </ContenitoreSezione>
                  <ContenitoreSezione>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <InputVariabile
                        style={{
                          height: "30px",
                          border:
                            errors.privacy2 && touched.privacy2
                              ? "2px solid #E93323"
                              : "none",
                        }}
                        type="checkbox"
                        name="privacy2"
                      ></InputVariabile>{" "}
                      <LabelCheck>Accetto termini e condizioni</LabelCheck>
                    </div>
                  </ContenitoreSezione>
                  <ButtonContinuaReg disabled={!dirty && !isValid}>
                    Termina
                  </ButtonContinuaReg>
                </Form>
              )}
            </Formik>
          </ContainerMeta>
        )}
        {route === "quattro" && (
          <ContainerMeta
            style={{
              paddingLeft: "3rem",
              paddingRight: "3rem",
              background: " #F9F9F9",
              width: isMobile ? "100%" : "",
            }}
          >
            <TitleRegistrazione>
              Grazie per esserti registrato
            </TitleRegistrazione>
            <img
              src={terz}
              alt="prim"
              width={"200px"}
              style={{ margin: "0.5rem" }}
            />
            <TestoSotto style={{ fontSize: "14px", marginTop: "0.5rem" }}>
              Benvenuto in Fastcura, effettua una ricerca per trovare il
              professionista più adatto alle tue esigenze
            </TestoSotto>
          </ContainerMeta>
        )}
      </div>
    </ContainerGenerale>
  );
};

export default RegistrazioneProfessionista;
