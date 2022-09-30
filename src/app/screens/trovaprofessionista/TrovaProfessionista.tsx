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

const TrovaProfessionista = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    takeToken();
  }, []);
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
            <ContainerProfessionista>
              <ContainerTitleProfessionista>
                <TitleOne>Sei un professionista?</TitleOne>
                <Link
                  to="/signup-professionista"
                  style={{ textDecoration: "none" }}
                >
                  <ButtonTwo>Inizia ora la prova di 60 giorni</ButtonTwo>
                </Link>
              </ContainerTitleProfessionista>
              <img width={"670px"} src={Professi} alt={"professionista"} />
            </ContainerProfessionista>
            <BoxInfo2>
              <Login />
              <SeiNuovo />
            </BoxInfo2>
            <div
              style={{
                position: "fixed",
                bottom: "5rem",
                right: "5rem",
                width: "200px",
                height: "150px",
                backgroundColor: "white",
                zIndex: "1000000",
                borderRadius: "30px",
              }}
            >
              <p>Hai bisogno di aiuto? Contattaci su whatsapp </p>
              <a href={`whatsapp://3533973981`}>
                <img src="data:image/png;base64,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" />
              </a>
            </div>
          </ContainerTrova>
          <div style={{ gap: "1rem" }}>
            <a href="http://www.instagram.com">
              <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" />
            </a>
            <a href="http://www.facebook.com">
              <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
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
          <div
            style={{
              padding: "1rem",
              position: "fixed",
              bottom: "10rem",
              right: "2rem",
              width: "150px",
              height: "80px",
              backgroundColor: "white",
              zIndex: "1000000",
              borderRadius: "30px",
            }}
          >
            <p style={{ fontSize: "12px" }}>
              Hai bisogno di aiuto? Contattaci su whatsapp{" "}
            </p>
            <a href={`whatsapp://3533973981`}>
              <img
                width={"30px"}
                src="data:image/png;base64,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"
              />
            </a>
          </div>
          <div style={{ gap: "1rem" }}>
            <a href="http://www.instagram.com">
              <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" />
            </a>
            <a href="http://www.facebook.com">
              <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
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
