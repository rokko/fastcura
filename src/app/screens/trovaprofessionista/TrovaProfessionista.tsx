import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Header from "../../components/TrovaIlTuoProfessionista/Header";
import BoxSearch from "../../components/TrovaIlTuoProfessionista/BoxSearch";
import HaiBisognoDiCure from "../../components/TrovaIlTuoProfessionista/HaiBisognoDiCure";
import SeiUnProfessionista from "../../components/TrovaIlTuoProfessionista/SeiUnProfessionista";
import Login from "../../components/General/Login/Login";
import SeiNuovo from "../../components/TrovaIlTuoProfessionista/SeiNuovo";
import Footer from "../../components/General/Footer";
import Lavagna from "../../components/TrovaIlTuoProfessionista/Lavagna";
import FeedBack from "../../components/TrovaIlTuoProfessionista/FeedBack";
import HaiBisogno from "../../media/haibisogno.png";
import ProblemaRisolto from "../../media/problemarisolto.png";
import ChattaDirettamente from "../../media/chattadirettam.png";
import Professi from "../../media/seiunprofessionista.png";
import Feedback from "../../media/feedback.png";
import FirstPng from "../../media/first.png";
import PrimaImmagine from "../../media/landingprofessionista.png";
import { ReactComponent as Chat } from "../../media/chat.svg";
import { ReactComponent as Primo } from "../../media/primomessaggio.svg";
import { ReactComponent as Icona } from "../../media/iconaswhat.svg";
import Fade from "react-reveal/Fade";
import {
  BoxDescription,
  BoxInfo,
  BoxInfo2,
  ButtonTwo,
  CercaContainter,
  ContainerProfessionista,
  ContainerTitleProfessionista,
  ContainerTrova,
  Immagini,
  Left,
  Right,
  SpanTop,
  TextSection,
  TitleOne,
  TitleSection,
  TitleTop,
} from "./TrovaProfessionistaStyled";
import { Title } from "react-head";
import { Link } from "react-router-dom";
import axios from "axios";

const xml2js = require("xml2js");

const TrovaProfessionista = () => {
  const [what, setWhat] = useState(false);
  const [token, setToken] = useState("");
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    takeToken();
  }, []);
  const [attivo, setAttivo] = useState(false);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      (document.body.scrollTop > 400 &&
        document.documentElement.scrollTop < 5800) ||
      (document.documentElement.scrollTop > 400 &&
        document.documentElement.scrollTop < 5800)
    ) {
      setAttivo(true);
    } else {
      setAttivo(false);
    }
  }

  useEffect(() => {
    axios.get("https://fastcura-blog.it/feed/").then((response) =>
      xml2js.parseString(response.data, (err: any, result: any) => {
        if (err) {
          throw err;
        }

        // `result` is a JavaScript object
        // convert it to a JSON string

        // log JSON string
        setBlog(result.rss.channel[0].item);
      })
    );
  });

  const takeToken = async () => {
    const tokenTest = await localStorage.getItem("tokenaccess");
    if (!!tokenTest) setToken(tokenTest);
  };
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  if (!isMobile)
    return (
      <>
        <div style={{ backgroundColor: "rgb(246, 246, 246)" }}>
          <Header />
          <CercaContainter>
            <Immagini
              style={{ position: "absolute", bottom: "0px" }}
              src={FirstPng}
              alt={"first"}
            />
            <Left>
              <TitleTop>
                L'<SpanTop>assistenza domiciliare</SpanTop> a portata di click!
              </TitleTop>
            </Left>

            <BoxSearch />
          </CercaContainter>
          <ContainerTrova>
            <BoxInfo style={{}}>
              <Immagini
                src={PrimaImmagine}
                alt={"hai bisogno"}
                style={{ width: "500px" }}
              />
              <BoxDescription>
                <TitleSection>Sei un professionista?</TitleSection>

                <Link
                  to="/signup-professionista"
                  style={{ textDecoration: "none" }}
                >
                  <ButtonTwo
                    style={{
                      background: "#e2f4fc",

                      textTransform: "none",
                      color: "rgb(57, 177, 217)",
                      borderRadius: 10,
                      fontWeight: "bold",
                    }}
                  >
                    Inizia ora la prova di 60 giorni
                  </ButtonTwo>
                </Link>
              </BoxDescription>
            </BoxInfo>
            <BoxInfo>
              <Immagini src={HaiBisogno} alt={"hai bisogno"} />
              <BoxDescription>
                <TitleSection>Hai bisogno di cure?</TitleSection>
                <TextSection>
                  Con Fastcura troverai infermieri, Caregiver , Fisioterapisti,
                  pronti a darti una mano.
                </TextSection>
              </BoxDescription>
            </BoxInfo>
            <BoxInfo>
              <BoxDescription>
                <TitleSection>
                  Il tuo problema risolto con un click!
                </TitleSection>
                <TextSection>
                  L’assistenza domiciliare non è mai stata così veloce!
                </TextSection>
              </BoxDescription>
              <Immagini src={ProblemaRisolto} alt={"problema risolto"} />
            </BoxInfo>
            <BoxInfo>
              <img
                width={"250px"}
                src={ChattaDirettamente}
                alt={"chatta direttamente"}
              />
              <BoxDescription>
                <TitleSection>
                  Chatta direttamente con il professionista
                </TitleSection>
                <TextSection>
                  In pochi passaggi potrai contattare l’infermiere, il
                  fisioterapista, il caregiver ed esporre il tuo problema.
                </TextSection>
              </BoxDescription>
            </BoxInfo>
            <BoxInfo>
              <BoxDescription>
                <TitleSection>FeedBack</TitleSection>
                <TextSection>
                  Potrai recensire e vedere le recensioni degli altri.
                </TextSection>
              </BoxDescription>
              <Immagini src={Feedback} alt={"feedback"} />
            </BoxInfo>
            <TitleSection>Gli ultimi articoli</TitleSection>

            <ContainerProfessionista
              style={{ display: "flex", gap: "0.50rem", flexDirection: "row" }}
            >
              {blog?.map((articolo: any, index) => {
                if (index <= 3) {
                  return (
                    <BoxInfo
                      style={{
                        height: "400px",
                        width: "25%",
                        alignItems: "flex-start",
                        flexDirection: "column",
                      }}
                    >
                      <a
                        style={{ textDecoration: "none" }}
                        href={`${articolo.link}`}
                      >
                        <p style={{ color: "#39b1d9", fontSize: "29px" }}>
                          {articolo.title}
                        </p>
                      </a>
                    </BoxInfo>
                  );
                }
              })}
            </ContainerProfessionista>
            <BoxInfo>
              <img width={"670px"} src={Professi} alt={"professionista"} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <TitleOne>Sei un professionista?</TitleOne>
                <Link
                  to="/signup-professionista"
                  style={{ textDecoration: "none" }}
                >
                  <ButtonTwo
                    style={{
                      background: "#e2f4fc",

                      textTransform: "none",
                      color: "rgb(57, 177, 217)",
                      borderRadius: 10,
                      fontWeight: "bold",
                    }}
                  >
                    Inizia ora la prova di 60 giorni
                  </ButtonTwo>
                </Link>
              </div>
            </BoxInfo>

            <BoxInfo2>
              <Login />
              <SeiNuovo />
            </BoxInfo2>
            {!what && (
              <Chat
                style={{
                  position: "fixed",
                  backgroundColor: "white",
                  bottom: "5rem",
                  right: "1rem",
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  zIndex: "1000000",
                  display: attivo ? "flex" : "none",
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => {
                  setWhat(!what);
                }}
              />
            )}
            {what && (
              <>
                <div
                  style={{
                    position: "fixed",
                    backgroundColor: "white",
                    bottom: "5rem",
                    right: "1rem",
                    width: "300px",
                    height: "200px",
                    zIndex: "1000000",
                    borderRadius: "20px",
                    display: attivo ? "flex" : "none",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    boxShadow: "1px 2px 19px 8px rgba(0, 0, 0, 0.24)",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "280px",
                      height: "75px",
                      width: "100%",
                      backgroundColor: "#39b1d9",
                      display: "flex",
                      flexDirection: "row",
                      borderRadius: "20px",
                      gap: "0.50rem",
                      alignContent: "center",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onClick={() => {
                      setWhat(!what);
                    }}
                  >
                    <Primo style={{ width: "60px" }} />
                    <p
                      style={{
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "normal",
                      }}
                    >
                      Assistenza Fastcura
                    </p>
                  </div>
                  <Fade bottom>
                    <div
                      style={{
                        maxWidth: "250px",
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignContent: "center",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <a
                        href="https://wa.me/393533973981"
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          flexDirection: "row",
                          alignContent: "center",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <p
                          style={{
                            fontWeight: "normal",
                            fontSize: "18px",
                            color: "black",
                          }}
                        >
                          Hai bisogno di{" "}
                          <span style={{ fontWeight: "bold" }}> aiuto?</span>{" "}
                          <br />
                          Scrivici su{" "}
                          <span style={{ fontWeight: "bold" }}>Whatsapp</span>
                        </p>
                        <Icona style={{ width: "65px" }} />
                      </a>
                    </div>
                  </Fade>
                </div>
              </>
            )}
          </ContainerTrova>
          <div
            style={{
              gap: "1rem",
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              style={{ textDecoration: "none" }}
              href="https://www.instagram.com/fastcura/"
            >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFLklEQVRoge2YS2xUVRjHf9+90xkETC2kgy4EGlOKYACtoDOUxMCCR6G1LpAQFujCR3xEdySEhEQMK1iwIiFl5SskAlNLxUQMCVAK0qQ0KdgWA2iCgao8BGzvzD2fi87jzvR1WsuCZH6r8839Hv/v3DPnnnuhSJEiRYoUeYyRiQStaOktT3lmLSIvgc4FyoEoyMxBDy0BpheE3QPx09dvCfQp9AlcVZELrtN//PT6RbcfaQOxQ10zJBzao8IWIDTeYmPgCdLol8i2c+sq79kGWTcQO9Q1g0ioFaiakDx7Ok2Js8K2CetZlHBoj+aLP6zQFHLoUKN9/0wZuNu5evEDm1yLfrg47cn+SKkaJ2ocXSxQDzRkLotndgMfWOmycVrR0lueSpobpBtW0Tfb6uYfsom1JZ7o3qTwddociJjw0ycbKu6MFefYJE95Zi0Z8arfTrZ4gNb6qm+ARNqM9Iu32ibOqgF1tDpriHw3bnXDEGvq3h1LdN+PH+3+PFCpKVeHpTZ5rP4DYmR2ZrE5Ri6O5V/T3FlmUuFVRmQ2ijro72GN/Ji3JJQPgWkqfARsB1DH7RBj0vplzqQ1gBDNDh1zayS3+OErUeP6u3yfrQglMhiLIgyIl4w1/XIwFHJ3nFpX2SfKPhU+FtF92Z48bklWkc6avAYgm8wMTBv2YRNvvvQCvt8i8OwIOUpQeTflmTXLm3prz9RVbic98xn+nf7w9rT+KRkzOiTDMFj9BxDKMkPv9s3UEPGHr0TVd45pULzqWYG9AnsV2gK55hhjjq1o6S0vzOPfDSVzbsy0kWZ3B5SSzLD9j2q/8LJx/V2CzE6bd1TY3FY///ugTzzRU6vol0ApwpxUyv8MeC/o03VpQSr2Yk+6ZK7maNjdgWCjO8UEL9Q0d5YJbM3YKmxuq6vKEw/QWj/vGCJbyDm+9dqRq0/lOeXntprc8TdQgEmFV5GeLYW24cRnOFs3rxnhfNoM9zvJlaPUfER3oBDJ2+7OWOTK+jhoxYRqBrBtYNIQRTNjQ248UWwbGLLz5BTJtexQNT5WIhVqcv5cnVDNAP+7gbBfcgIY3P5EYsuPdq8byTfW1LMeZVna9Dwv9NPIJfURNbBT82JONlTcQfRgxjbCV/FET21hgleP9m5A9YuMLUhj+8bn7uY55eWWJBbYHiWSmdVa/Uy72w55W2ko5O5IeWYNwhygVNHmWKL7HEIrKgK6HEzwcHYt5fs7CsssXHAplJEkmbs6BnZ3QMkeH8Jls4Y0fWpdZZ/jOLUo1wM/v4LyKegnkHeyvGbUqT3/xvN/FeZxS1PZrVMRq/dj2yV0MxsQeVA2nMOZusouz+Vl0P2AN4yLB7rfc1h67vXKS8PleOL+1EBuHfHQGMT2KHErc5xW40SBG8O5tW+o+hN4v/rQr9vC4dRKhbkAiFxPDrgnhqz5AiRMNLA4J68BdfQ30cEOjMsSoGM0/7TQIza5g4jxl+TecuX6qM5prJaQg1zIFlGtG68wWwSnPmsoP9vEWDXghpzj5LbShniie9O41Y1B7GjPZiU7OUm85HGbOPvvQomeRtC3Az8lQJvUcTsEc9OVgYe2X9ZqmjvLfI1MVZxZYvwlglMfEI/Cgbb6qncmtYGa5s4y34+0AvNtYyaEcDnih+M2n1RgHIe50+sX3XbdgTjQiOVDZpwkFQ6MRzxM8OPussOXZzqurBGRagwVCOUC5YqkXxPVAUoLwu7C4AuLoH0KfSh9OFzFyAW85PGzGxf+PRE9RYoUKVKkyGPLf1/l3GkBTGX/AAAAAElFTkSuQmCC" />{" "}
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.facebook.com/fastcura"
            >
              <img
                width={41}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEnElEQVRoge2YbWhbZRTH/+cmWTLa1NUO0dZCHabN2mGdTNq1QzZa1A826RSrQgVlOhSZiCKCqCDo18JwDNSJIIoffMGs9YP40qFb0250o2OGZJ3KxmxXaKdNY5M0997jh6aDNM9zc1+ygZIf5Mt5zuvNuc/z3ANUqFDhPw2Vy9Gu4US7qqOHQJ0AtwDUCHB1PkyKwZcIdJ6Zo24Xfjre1zJVjriOCuiOxP0M2s+EfWBstWgeY+AjX1b94NhAW8puDrYK2D066s4s1h8gBW+AcbPd4HkWQPyO1z976NiePapVY8sF7BxOBKHjcwB3W7UtwRkF/MSJcDBhxUixotwZiYeg4xTKnzwAbNdBpzq/me6zYmS6gK6jiScJ9BWAasupmcdPpH/dFYkPmjUw1UKdkXgon7zbdmrWUEG0NxpqHimlWLKAjuFYQNFdkwD8TjLyugibfW74PS6kVR05nfHXioa0qstMUlBwb7SvJW7k17CA3aOj7myy3nbPE4CeBj8eadqEtlof3EpxuNdOzuCXK7JdlE97a2Y7jHYnw5bILNYfILKXvFshvLX9VvQ2OPnj6J5s8rYXAByUaUhf4ru+m6pSCK/bDb0/WOcw+TXoze5IXOpIWkB1xvccA5vthKzzufHYllo7pkJ3GuhZ2aK0hfLXA1v01PvhEfR7Kqfjyz/+xlw6d002vZgt6Y+AfQCGRGvCAnYNJ9o13fLd5hrban1C+asTf2LqatqOy9aukdi2sYdaz61fELaQrqPXTpQ1btlY/Fx+S2btJg8AYE3pEcmFBTCow3YkANWeYrcXkqVbxQgi2imSS15iDjoJ5qLi/k/mpAeWKZjRIpLLdqF6R9GEGTgzJ+B2kVxWQDk28LLCkpwcX86eaanDo1s2Fciq3K4ivf6mm/BgY3EOzx+/jN+X7L8fsgKWANSZceB1KfB7ihNej0cheJRCPQYws7xiJgxoNaciZC00Y8qrQ+bSOWQ0cy8HA5dFckkBZHiFLReXUrnSSnmIIPzUlJwDPG4zJ0tcXDLXPgAAncZEYuE7wOAfyOT3/pHEPD6Zvloou68RjVUbCmSRi4s4HJsvkGU182cDKfSjSC78BybCwbNgKrp3iMhqjKWcVvDTBW29ItBbESmKiZ0IBX41XQAAMPHHZr1fb5hxRLYmLWDZl3mfgHnZ+g1kwbeifihblBZw9oH2f5j43euTk3mY6G2j0aPhXMjrnz0E4EzZszIJEU02ZgKHjXQMC1idBrgGACTLmpk5Ukw8+MUAaUZKJSdz0fCdF5iVQQCWB68OUAn0eKmZEGBytDjeHxgm8NO4MUWoDH5qLNz8rRll07PRsXDwUxDtheRSVSaSBOofDwc/M2tgaTodDTWPaJq+A+DT1nMzhogmdUXbYfbJr2GpAAA4+fDW896a2Q6AXwKwYNV+PQTMM9GLDZlAx0Rf67RVe8sFAKu7UzQcPOjNqk0MvAJAeMwbwnSOGS9vyKp3jIea3yu128hw9EWWP2CGAAx1H51u01nrBajrSjp3/0aXUlOzQVEAYCmn68uqNkeEn5k5qrPr+4n+QMxJ7AoVKvxP+BeubY3axB0JtgAAAABJRU5ErkJggg=="
              />{" "}
            </a>
          </div>
          <Footer />
        </div>
      </>
    );
  else
    return (
      <>
        <div style={{ backgroundColor: "rgb(246, 246, 246)" }}>
          <Header />
          <CercaContainter>
            <img
              width={"324px"}
              style={{ position: "absolute", top: "14.25rem" }}
              src={FirstPng}
              alt={"first"}
            />
            <TitleTop>
              L'<SpanTop>assistenza domiciliare</SpanTop> a portata di click!
            </TitleTop>

            <BoxSearch />
          </CercaContainter>
          <ContainerTrova>
            <BoxInfo style={{}}>
              <Immagini
                src={PrimaImmagine}
                alt={"hai bisogno"}
                style={{ width: "300px" }}
              />
              <BoxDescription>
                <TitleSection>Sei un professionista?</TitleSection>

                <Link
                  to="/signup-professionista"
                  style={{ textDecoration: "none" }}
                >
                  <ButtonTwo
                    style={{
                      background: "#e2f4fc",

                      textTransform: "none",
                      color: "rgb(57, 177, 217)",
                      borderRadius: 10,
                      fontWeight: "bold",
                    }}
                  >
                    Inizia ora la prova di 60 giorni
                  </ButtonTwo>
                </Link>
              </BoxDescription>
            </BoxInfo>
            <BoxInfo>
              <img width={"290px"} src={HaiBisogno} alt={"hai bisogno"} />
              <BoxDescription>
                <TitleSection>Hai bisogno di cure?</TitleSection>
                <TextSection>
                  Con Fastcura troverai infermieri, Caregiver, Fisioterapisti,
                  pronti a darti una mano.
                </TextSection>
              </BoxDescription>
            </BoxInfo>
            <BoxInfo>
              <img
                width={"230px"}
                src={ProblemaRisolto}
                alt={"problema risolto"}
              />

              <BoxDescription>
                <TitleSection>
                  Il tuo problema risolto con un click!
                </TitleSection>
                <TextSection>
                  L’assistenza domiciliare non è mai stata così veloce!
                </TextSection>
              </BoxDescription>
            </BoxInfo>
            <BoxInfo>
              <img
                width={"146px"}
                src={ChattaDirettamente}
                alt={"chatta direttamente"}
              />
              <BoxDescription>
                <TitleSection>
                  Chatta direttamente con il professionista
                </TitleSection>
                <TextSection>
                  In pochi passaggi potrai contattare l’infermiere, il
                  fisioterapista, il caregiver ed esporre il tuo problema.
                </TextSection>
              </BoxDescription>
            </BoxInfo>
            <BoxInfo>
              <img width={"292px"} src={Feedback} alt={"feedback"} />

              <BoxDescription>
                <TitleSection>FeedBack</TitleSection>
                <TextSection>
                  Potrai recensire e vedere le recensioni degli altri.
                </TextSection>
              </BoxDescription>
            </BoxInfo>
            <ContainerProfessionista>
              <ContainerTitleProfessionista>
                <TitleOne>Sei un professionista?</TitleOne>
              </ContainerTitleProfessionista>
              <img src={Professi} alt={"professionista"} width={"390px"} />

              <Link
                to="/signup-professionista"
                style={{ textDecoration: "none" }}
              >
                <ButtonTwo>Inizia ora la prova di 60 giorni</ButtonTwo>
              </Link>
            </ContainerProfessionista>
            <BoxInfo2>
              <Login />
            </BoxInfo2>
            <BoxInfo2>
              <SeiNuovo />
            </BoxInfo2>
          </ContainerTrova>
          {!what && (
            <Chat
              style={{
                position: "fixed",
                backgroundColor: "white",
                bottom: "5rem",
                right: "1rem",
                borderRadius: "50%",
                width: "70px",
                height: "70px",
                zIndex: "1000000",
                display: attivo ? "flex" : "none",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => {
                setWhat(!what);
              }}
            />
          )}
          {what && (
            <>
              <div
                style={{
                  position: "fixed",
                  backgroundColor: "white",
                  bottom: "5rem",
                  right: "1rem",
                  width: "300px",
                  height: "200px",
                  zIndex: "1000000",
                  borderRadius: "20px",
                  display: attivo ? "flex" : "none",
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  boxShadow: "1px 2px 19px 8px rgba(0, 0, 0, 0.24)",
                }}
              >
                <div
                  style={{
                    maxWidth: "280px",
                    height: "75px",
                    width: "100%",
                    backgroundColor: "#39b1d9",
                    display: "flex",
                    flexDirection: "row",
                    borderRadius: "20px",
                    gap: "0.50rem",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() => {
                    setWhat(!what);
                  }}
                >
                  <Primo style={{ width: "60px" }} />
                  <p
                    style={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "normal",
                    }}
                  >
                    Assistenza Fastcura
                  </p>
                </div>
                <Fade bottom>
                  <div
                    style={{
                      maxWidth: "250px",
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      alignContent: "center",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <a
                      href="https://wa.me/393533973981"
                      style={{
                        textDecoration: "none",
                        display: "flex",
                        flexDirection: "row",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.25rem",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: "normal",
                          fontSize: "18px",
                          color: "black",
                        }}
                      >
                        Hai bisogno di{" "}
                        <span style={{ fontWeight: "bold" }}> aiuto?</span>{" "}
                        <br />
                        Scrivici su{" "}
                        <span style={{ fontWeight: "bold" }}>Whatsapp</span>
                      </p>
                      <Icona style={{ width: "65px" }} />
                    </a>
                  </div>
                </Fade>
              </div>
            </>
          )}
          <div
            style={{
              gap: "1rem",
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="https://www.instagram.com/fastcura/">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFLklEQVRoge2YS2xUVRjHf9+90xkETC2kgy4EGlOKYACtoDOUxMCCR6G1LpAQFujCR3xEdySEhEQMK1iwIiFl5SskAlNLxUQMCVAK0qQ0KdgWA2iCgao8BGzvzD2fi87jzvR1WsuCZH6r8839Hv/v3DPnnnuhSJEiRYoUeYyRiQStaOktT3lmLSIvgc4FyoEoyMxBDy0BpheE3QPx09dvCfQp9AlcVZELrtN//PT6RbcfaQOxQ10zJBzao8IWIDTeYmPgCdLol8i2c+sq79kGWTcQO9Q1g0ioFaiakDx7Ok2Js8K2CetZlHBoj+aLP6zQFHLoUKN9/0wZuNu5evEDm1yLfrg47cn+SKkaJ2ocXSxQDzRkLotndgMfWOmycVrR0lueSpobpBtW0Tfb6uYfsom1JZ7o3qTwddociJjw0ycbKu6MFefYJE95Zi0Z8arfTrZ4gNb6qm+ARNqM9Iu32ibOqgF1tDpriHw3bnXDEGvq3h1LdN+PH+3+PFCpKVeHpTZ5rP4DYmR2ZrE5Ri6O5V/T3FlmUuFVRmQ2ijro72GN/Ji3JJQPgWkqfARsB1DH7RBj0vplzqQ1gBDNDh1zayS3+OErUeP6u3yfrQglMhiLIgyIl4w1/XIwFHJ3nFpX2SfKPhU+FtF92Z48bklWkc6avAYgm8wMTBv2YRNvvvQCvt8i8OwIOUpQeTflmTXLm3prz9RVbic98xn+nf7w9rT+KRkzOiTDMFj9BxDKMkPv9s3UEPGHr0TVd45pULzqWYG9AnsV2gK55hhjjq1o6S0vzOPfDSVzbsy0kWZ3B5SSzLD9j2q/8LJx/V2CzE6bd1TY3FY///ugTzzRU6vol0ApwpxUyv8MeC/o03VpQSr2Yk+6ZK7maNjdgWCjO8UEL9Q0d5YJbM3YKmxuq6vKEw/QWj/vGCJbyDm+9dqRq0/lOeXntprc8TdQgEmFV5GeLYW24cRnOFs3rxnhfNoM9zvJlaPUfER3oBDJ2+7OWOTK+jhoxYRqBrBtYNIQRTNjQ248UWwbGLLz5BTJtexQNT5WIhVqcv5cnVDNAP+7gbBfcgIY3P5EYsuPdq8byTfW1LMeZVna9Dwv9NPIJfURNbBT82JONlTcQfRgxjbCV/FET21hgleP9m5A9YuMLUhj+8bn7uY55eWWJBbYHiWSmdVa/Uy72w55W2ko5O5IeWYNwhygVNHmWKL7HEIrKgK6HEzwcHYt5fs7CsssXHAplJEkmbs6BnZ3QMkeH8Jls4Y0fWpdZZ/jOLUo1wM/v4LyKegnkHeyvGbUqT3/xvN/FeZxS1PZrVMRq/dj2yV0MxsQeVA2nMOZusouz+Vl0P2AN4yLB7rfc1h67vXKS8PleOL+1EBuHfHQGMT2KHErc5xW40SBG8O5tW+o+hN4v/rQr9vC4dRKhbkAiFxPDrgnhqz5AiRMNLA4J68BdfQ30cEOjMsSoGM0/7TQIza5g4jxl+TecuX6qM5prJaQg1zIFlGtG68wWwSnPmsoP9vEWDXghpzj5LbShniie9O41Y1B7GjPZiU7OUm85HGbOPvvQomeRtC3Az8lQJvUcTsEc9OVgYe2X9ZqmjvLfI1MVZxZYvwlglMfEI/Cgbb6qncmtYGa5s4y34+0AvNtYyaEcDnih+M2n1RgHIe50+sX3XbdgTjQiOVDZpwkFQ6MRzxM8OPussOXZzqurBGRagwVCOUC5YqkXxPVAUoLwu7C4AuLoH0KfSh9OFzFyAW85PGzGxf+PRE9RYoUKVKkyGPLf1/l3GkBTGX/AAAAAElFTkSuQmCC" />
            </a>
            <a href="https://www.facebook.com/fastcura">
              <img
                width={41}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEnElEQVRoge2YbWhbZRTH/+cmWTLa1NUO0dZCHabN2mGdTNq1QzZa1A826RSrQgVlOhSZiCKCqCDo18JwDNSJIIoffMGs9YP40qFb0250o2OGZJ3KxmxXaKdNY5M0997jh6aDNM9zc1+ygZIf5Mt5zuvNuc/z3ANUqFDhPw2Vy9Gu4US7qqOHQJ0AtwDUCHB1PkyKwZcIdJ6Zo24Xfjre1zJVjriOCuiOxP0M2s+EfWBstWgeY+AjX1b94NhAW8puDrYK2D066s4s1h8gBW+AcbPd4HkWQPyO1z976NiePapVY8sF7BxOBKHjcwB3W7UtwRkF/MSJcDBhxUixotwZiYeg4xTKnzwAbNdBpzq/me6zYmS6gK6jiScJ9BWAasupmcdPpH/dFYkPmjUw1UKdkXgon7zbdmrWUEG0NxpqHimlWLKAjuFYQNFdkwD8TjLyugibfW74PS6kVR05nfHXioa0qstMUlBwb7SvJW7k17CA3aOj7myy3nbPE4CeBj8eadqEtlof3EpxuNdOzuCXK7JdlE97a2Y7jHYnw5bILNYfILKXvFshvLX9VvQ2OPnj6J5s8rYXAByUaUhf4ru+m6pSCK/bDb0/WOcw+TXoze5IXOpIWkB1xvccA5vthKzzufHYllo7pkJ3GuhZ2aK0hfLXA1v01PvhEfR7Kqfjyz/+xlw6d002vZgt6Y+AfQCGRGvCAnYNJ9o13fLd5hrban1C+asTf2LqatqOy9aukdi2sYdaz61fELaQrqPXTpQ1btlY/Fx+S2btJg8AYE3pEcmFBTCow3YkANWeYrcXkqVbxQgi2imSS15iDjoJ5qLi/k/mpAeWKZjRIpLLdqF6R9GEGTgzJ+B2kVxWQDk28LLCkpwcX86eaanDo1s2Fciq3K4ivf6mm/BgY3EOzx+/jN+X7L8fsgKWANSZceB1KfB7ihNej0cheJRCPQYws7xiJgxoNaciZC00Y8qrQ+bSOWQ0cy8HA5dFckkBZHiFLReXUrnSSnmIIPzUlJwDPG4zJ0tcXDLXPgAAncZEYuE7wOAfyOT3/pHEPD6Zvloou68RjVUbCmSRi4s4HJsvkGU182cDKfSjSC78BybCwbNgKrp3iMhqjKWcVvDTBW29ItBbESmKiZ0IBX41XQAAMPHHZr1fb5hxRLYmLWDZl3mfgHnZ+g1kwbeifihblBZw9oH2f5j43euTk3mY6G2j0aPhXMjrnz0E4EzZszIJEU02ZgKHjXQMC1idBrgGACTLmpk5Ukw8+MUAaUZKJSdz0fCdF5iVQQCWB68OUAn0eKmZEGBytDjeHxgm8NO4MUWoDH5qLNz8rRll07PRsXDwUxDtheRSVSaSBOofDwc/M2tgaTodDTWPaJq+A+DT1nMzhogmdUXbYfbJr2GpAAA4+fDW896a2Q6AXwKwYNV+PQTMM9GLDZlAx0Rf67RVe8sFAKu7UzQcPOjNqk0MvAJAeMwbwnSOGS9vyKp3jIea3yu128hw9EWWP2CGAAx1H51u01nrBajrSjp3/0aXUlOzQVEAYCmn68uqNkeEn5k5qrPr+4n+QMxJ7AoVKvxP+BeubY3axB0JtgAAAABJRU5ErkJggg=="
              />{" "}
            </a>
          </div>
          <Footer />
        </div>
      </>
    );
};

export default TrovaProfessionista;

/*  <div style={{ width: "100%" }}>
          <div style={{ backgroundColor: "#F9F9F9", marginTop: "100px" }}>
            <div
              style={{
                margin: "auto",
                display: "flex",
                backgroundColor: "#ffffff",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                width: "80%",
              }}
            >
              <div style={{ marginTop: "50px", width: "100%" }}>
                <BoxSearch />
              </div>

              <div style={{ marginTop: "50px", width: "100%" }}>
                <HaiBisognoDiCure />
              </div>

              <div style={{ marginTop: "50px", width: "100%" }}>
                <ProblemaRisolto />
              </div>

              <div style={{ marginTop: "50px", width: "100%" }}>
                <ChattaDirettamente />
              </div>

              <div style={{ marginTop: "50px", width: "100%" }}>
                <SeiUnProfessionista />
              </div>

              <div
                style={{
                  width: "100%",
                  marginTop: "100px",
                  border: "1px solid #39B1D9",
                  display: "inline-block",
                }}
              />
              <div style={{ marginTop: "50px", width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  {token === "" && <Login />}
                  <SeiNuovo />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  else
    return (
      <>
        <div style={{ width: "100%" }}>
          <Header />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              textAlign: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: "100%",
              marginTop: "100px",
            }}
          >


            <Lavagna />

            <HaiBisognoDiCure />

            <ProblemaRisolto />

            <ChattaDirettamente />

            <FeedBack />

            <SeiUnProfessionista />

            {token === "" && <Login />}

            <SeiNuovo />
          </div>
          <Footer />
        </div>*/
