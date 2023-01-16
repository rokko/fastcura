import React, { useState } from "react";
import { Field, Form, Formik, yupToFormErrors } from "formik";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ReactComponent as Indietro } from "../media/back.svg";
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
} from "./RegistrazioneClienteStyled";
import Header from "../components/TrovaIlTuoProfessionista/Header";
import prim from "../media/prim.png";
import second from "../media/sec.png";
import terz from "../media/ult.png";
import immagineRegistrazione from "../media/28.png";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import { object, ref, string } from "yup";
import * as yup from "yup";
import { useMediaQuery } from "react-responsive";

const RegistrazioneCliente = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  enum Risultato {
    ok,
  }
  const initialValues = {
    nome: "",
    cognome: "",
    mail: "",
  };
  const initialValues2 = {
    password: "",
    ripetipassword: "",
  };

  const initialValues3 = {
    privacy: false,
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
              Ci prenderemo <br />
              cura di te.
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
                setRoute("secondo");
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
                    <InputVariabile name="citta" placeholder="Milano" />
                  </ContenitoreSezione>{" "}
                  <ContenitoreSezione>
                    <TestoLabel>
                      Come ci hai conosciuto? (opzionale){" "}
                    </TestoLabel>
                    <InputSelect name="sesso" id="sesso">
                      <option value="uomo">Social</option>
                      <option value="donna">Passaparola</option>
                      <option value="donna">Google</option>
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
                      {console.log(values)}
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
                            errors.privacy && touched.privacy
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
      </div>
    </ContainerGenerale>
  );
};

export default RegistrazioneCliente;
