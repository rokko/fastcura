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

import immagineRegistrazione from "../media/imgregistrazione.png";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import { object, ref, string } from "yup";
import * as yup from "yup";

const RegistrazioneProfessionista = () => {
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

      <ContainerMeta style={{ backgroundColor: "#39b1d9" }}>
        <img
          src={immagineRegistrazione}
          style={{
            width: "40vw",
            position: "absolute",
            bottom: "0px",
            right: "55vw",
          }}
        />
      </ContainerMeta>
      {route === "iniziale" && (
        <ContainerMeta
          style={{
            paddingLeft: "3rem",
            paddingRight: "3rem",
            background: " #F9F9F9",
          }}
        >
          <TitleRegistrazione>
            Ci prenderemo <br />
            cura di te.
          </TitleRegistrazione>
          <TestoSotto>
            Ci sei quasi! compila i dati per confermare la registrazione
          </TestoSotto>
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
          }}
        >
          <TitleRegistrazione>
            Bene, ora imposta <br />
            la tua password
          </TitleRegistrazione>
          <TestoSotto style={{ fontSize: "14px" }}>
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
            paddingLeft: "3rem",
            paddingRight: "3rem",
            background: " #F9F9F9",
          }}
        >
          <TitleRegistrazione>
            Infine, dicci di più
            <br /> su di te
          </TitleRegistrazione>

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
                  <TestoLabel>Come ci hai conosciuto? (opzionale) </TestoLabel>
                  <InputSelect name="sesso" id="sesso">
                    <option value="uomo">Social</option>
                    <option value="donna">Passaparola</option>
                    <option value="donna">Google</option>
                  </InputSelect>
                </ContenitoreSezione>
                <ContenitoreSezione>
                  <TestoLabel>Professione</TestoLabel>
                  <InputVariabile
                    name="professione"
                    placeholder="Professione"
                  />
                </ContenitoreSezione>{" "}
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
                      quanto stabilito dal regolamento europeo per la protezione
                      dei dati personali n. 679/2016, GDPR.
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
    </ContainerGenerale>
  );
};

export default RegistrazioneProfessionista;
