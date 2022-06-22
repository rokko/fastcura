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
            <BoxInfo>
              <Immagini src={HaiBisogno} alt={"hai bisogno"} />
              <BoxDescription>
                <TitleSection>Hai bisogno di cure?</TitleSection>
                <TextSection>
                  Con Fastcura troverai infermieri, Caregiver, Fisioterapisti,
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
                  <ButtonTwo>Inizia ora la prova di 30 giorni</ButtonTwo>
                </Link>
              </ContainerTitleProfessionista>
              <img width={"670px"} src={Professi} alt={"professionista"} />
            </ContainerProfessionista>
            <BoxInfo2>
              <Login />
              <SeiNuovo />
            </BoxInfo2>
          </ContainerTrova>
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
                <ButtonTwo>Inizia ora la prova di 30 giorni</ButtonTwo>
              </Link>
            </ContainerProfessionista>
            <BoxInfo2>
              <Login />
            </BoxInfo2>
            <BoxInfo2>
              <SeiNuovo />
            </BoxInfo2>
          </ContainerTrova>
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
