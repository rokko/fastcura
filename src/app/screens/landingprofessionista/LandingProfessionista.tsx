import React from "react";
import Header from "../../components/TrovaIlTuoProfessionista/Header";
import PrimaImmagine from "../../media/landingprofessionista.png";
import EntraNelTeam from "../../components/HomepageComponent/EntraNelTeam";
import Target from "../../components/HomepageComponent/Target";
import DecidiTu from "../../components/HomepageComponent/DecidiTu";
import FaiTuPrezzo from "../../media/faiprezzo.png";
import ServizioMessagistica from "../../components/HomepageComponent/ServizioMessagistica";
import ServizioInnovativo from "../../components/HomepageComponent/ServizioInnovativo";
import ProvaloGratis from "../../components/HomepageComponent/ProvaloGratis";
import Footer from "../../components/General/Footer";
import Messaggistica from "../../media/messagistica.png";
import Visibilita from "../../media/visibilita.png";
import DiciTu from "../../media/dicitu.png";
import Ricavi from "../../media/ricavi.png";
import Servizio from "../../media/servizio.png";
import Money from "../../media/money.png";
import Car from "../../media/car.png";
import {
  BoxInfo,
  ButtonFirstContainer,
  ButtonSection,
  ContainerFirstImage,
  ContainerOther,
  FinalButton,
  Immagini,
  SpanTitle,
  TextFinal,
  TextSection,
  TitleFinal,
  TitleFirstContainer,
  TitleSection,
  BoxDescription2,
  ImmagineMoney,
} from "./LandingProfessionistaStyled";
import {
  BoxDescription,
  ButtonTwo,
} from "../trovaprofessionista/TrovaProfessionistaStyled";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const LandingProfessionista = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  if (!isMobile)
    return (
      <>
        {" "}
        <div style={{ backgroundColor: "rgb(246, 246, 246)" }}>
          <Header />
          <ContainerFirstImage>
            <TitleFirstContainer>
              Iscriviti a <SpanTitle>Fastcura</SpanTitle>
            </TitleFirstContainer>
            <Link
              to="/signup-professionista"
              style={{ textDecoration: "none" }}
            >
              <ButtonFirstContainer>
                Inizia la prova gratuita
              </ButtonFirstContainer>
            </Link>
            <Immagini
              src={PrimaImmagine}
              width={"830px"}
              alt={"prima immagine"}
            />
          </ContainerFirstImage>
          <ContainerOther>
            <BoxInfo>
              <Immagini src={Visibilita} alt={"visibilita"} />
              <BoxDescription>
                <TitleSection>Visibilità</TitleSection>
                <TextSection>
                  Fastcura ha l'obiettivo di darti visibilità sul tuo
                  territorio, allargando la tua rete di clienti
                </TextSection>
                <Link
                  to="/signup-professionista"
                  style={{ textDecoration: "none" }}
                >
                  <ButtonSection>Scopri di più</ButtonSection>
                </Link>
              </BoxDescription>
            </BoxInfo>
            <BoxInfo>
              <BoxDescription>
                <TitleSection>
                  Per Infermieri, Caregiver e Fisioterapisti
                </TitleSection>
              </BoxDescription>
              <Immagini src={Car} alt={"car driver"} />
            </BoxInfo>
            <BoxInfo>
              <Immagini src={DiciTu} alt={"dici tu"} />
              <BoxDescription>
                <TitleSection>Decidi tu quando!</TitleSection>
                <TextSection>
                  Decidi tu quando e come lavorare. Tu ci metti le competenze,
                  Fastcura ti trova i clienti
                </TextSection>
              </BoxDescription>
            </BoxInfo>
            <BoxInfo>
              <BoxDescription>
                <TitleSection>Fai tu il prezzo</TitleSection>
                <TextSection>
                  Potrai recensire e vederele recensioni degli altri.
                </TextSection>
              </BoxDescription>
              <img width={"322px"} src={FaiTuPrezzo} alt={"fai prezzo"} />
            </BoxInfo>
            <BoxInfo>
              <img src={Messaggistica} alt={"messaggistica"} />
              <BoxDescription>
                <TitleSection>
                  Servizio di messaggistica diretto con il cliente
                </TitleSection>
                <TextSection>
                  La persona trova i professionisti più vicini a lui e ne valuta
                  le competenze e la qualità dei servizi erogati attraverso le
                  recensioni lasciate da altri utenti
                </TextSection>
              </BoxDescription>
            </BoxInfo>
            <BoxInfo>
              <BoxDescription>
                <TitleSection>Ricavi</TitleSection>
                <TextSection>
                  Accordato con il cliente il prezzo, lui potrà pagare nella più
                  completa sicurezza sul sito o in contanti a prestazione
                  ultimata
                </TextSection>
              </BoxDescription>
              <Immagini src={Ricavi} alt={"ricavi"} />
            </BoxInfo>
            <BoxInfo>
              <Immagini src={Servizio} alt={"servizio"} />
              <BoxDescription>
                <TitleSection>Un servizio innovativo</TitleSection>
                <TextSection>
                  Fastcura è un servizio unico nel suo genere. Al centro di
                  tutto vi è la tutela del professionista.
                </TextSection>
              </BoxDescription>
            </BoxInfo>
            <BoxInfo>
              <BoxDescription>
                <TitleSection>Quanto costa?</TitleSection>
                <TextSection>
                  La piattaforma è gratuita per i clienti,per sempre.
                </TextSection>
                <TextSection>
                  Per i professionisti l’abbonamento costa{" "}
                  <span style={{ fontWeight: "bold" }}>19,90 </span>al mese ma
                  ti invitiamo a provare prima il nostro servizio gratuitamente
                  per 30 giorni.
                </TextSection>
              </BoxDescription>
              <ImmagineMoney src={Money} width={"300px"} alt={"money"} />
            </BoxInfo>

            <Link
              to="/signup-professionista"
              style={{ textDecoration: "none" }}
            >
              <TitleFinal>Provalo gratis!</TitleFinal>
            </Link>
            <TextFinal>
              Inizia la prova gratuita di 60 giorni. Potrai disdire quando vuoi.
              <br />
              Fastcura ha l'obiettivo di darti visibilità sul tuo territorio,
              allargando la tua rete di clienti
            </TextFinal>
            <Link
              to="/signup-professionista"
              style={{ textDecoration: "none" }}
            >
              <FinalButton>Inizia ora la prova gratuita</FinalButton>
            </Link>
          </ContainerOther>
          <Footer />
        </div>
      </>
    );
  else
    return (
      <>
        <div style={{ backgroundColor: "rgb(246, 246, 246)" }}>
          <Header />
          <ContainerFirstImage>
            <TitleFirstContainer>
              Iscriviti a <SpanTitle>Fastcura</SpanTitle>
            </TitleFirstContainer>
            <Link
              to="/signup-professionista"
              style={{ textDecoration: "none" }}
            ></Link>
            <img src={PrimaImmagine} width={"100%"} alt={"prima immagine"} />
            <ButtonFirstContainer>
              Inizia la prova gratuita
            </ButtonFirstContainer>
          </ContainerFirstImage>
          <ContainerOther>
            <BoxInfo>
              <img width={"236px"} src={Visibilita} alt={"visibilita"} />
              <BoxDescription>
                <TitleSection>Visibilità</TitleSection>
                <TextSection>
                  Fastcura ha l'obiettivo di darti visibilità sul tuo
                  territorio, allargando la tua rete di clienti
                </TextSection>
                <Link
                  to="/signup-professionista"
                  style={{ textDecoration: "none" }}
                >
                  <ButtonSection>Scopri di più</ButtonSection>
                </Link>
              </BoxDescription>
            </BoxInfo>
            <BoxInfo>
              <img width={"290px"} src={Car} alt={"car driver"} />

              <BoxDescription>
                <TitleSection>
                  Per Infermieri, Caregiver e Fisioterapisti
                </TitleSection>
              </BoxDescription>
            </BoxInfo>
            <BoxInfo>
              <img width={"248px"} src={DiciTu} alt={"dici tu"} />
              <BoxDescription>
                <TitleSection>Decidi tu quando!</TitleSection>
                <TextSection>
                  Decidi tu quando e come lavorare. Tu ci metti le competenze,
                  Fastcura ti trova i clienti
                </TextSection>
              </BoxDescription>
            </BoxInfo>
            <BoxInfo>
              <img width={"280px"} src={FaiTuPrezzo} alt={"fai prezzo"} />

              <BoxDescription>
                <TitleSection>Fai tu il prezzo</TitleSection>
                <TextSection>
                  Potrai recensire e vederele recensioni degli altri.
                </TextSection>
              </BoxDescription>
            </BoxInfo>
            <BoxInfo>
              <img
                width={"220px"}
                src={Messaggistica}
                alt={"messaggistica"}
                style={{ marginTop: "1.5rem" }}
              />
              <BoxDescription>
                <TitleSection>
                  Servizio di messaggistica diretto con il cliente
                </TitleSection>
                <TextSection>
                  La persona trova i professionisti più vicini a lui e ne valuta
                  le competenze e la qualità dei servizi erogati attraverso le
                  recensioni lasciate da altri utenti
                </TextSection>
              </BoxDescription>
            </BoxInfo>
            <BoxInfo>
              <img width={"276px"} src={Ricavi} alt={"ricavi"} />

              <BoxDescription>
                <TitleSection>Ricavi</TitleSection>
                <TextSection>
                  Accordato con il cliente il prezzo, lui potrà pagare nella più
                  completa sicurezza sul sito o in contanti a prestazione
                  ultimata
                </TextSection>
              </BoxDescription>
            </BoxInfo>
            <BoxInfo>
              <img
                width={"240px"}
                src={Servizio}
                alt={"servizio"}
                style={{ marginTop: "3rem" }}
              />
              <BoxDescription>
                <TitleSection>Un servizio innovativo</TitleSection>
                <TextSection>
                  Fastcura è un servizio unico nel suo genere. Al centro di
                  tutto vi è la tutela del professionista.
                </TextSection>
              </BoxDescription>
            </BoxInfo>
            <BoxInfo>
              <img
                width={"200px"}
                src={Money}
                alt={"servizio"}
                style={{ marginTop: "3rem", borderRadius: "10px" }}
              />
              <BoxDescription>
                <TitleSection>Quanto costa?</TitleSection>
                <TextSection>
                  La piattaforma è gratuita per i clienti,per sempre. Per i
                  professionisti l’abbonamento costa 19,90 al mese ma ti
                  invitiamo a provare prima il nostro servizio gratuitamente per
                  30 giorni.
                </TextSection>
              </BoxDescription>
            </BoxInfo>
            <div>
              <Link
                to="/signup-professionista"
                style={{ textDecoration: "none" }}
              >
                <TitleFinal>Provalo gratis!</TitleFinal>
              </Link>
              <TextFinal>
                Inizia la prova gratuita di 30 giorni. Potrai disdire quando
                vuoi.
              </TextFinal>
              <TextFinal>
                Fastcura ha l'obiettivo di darti visibilità sul tuo territorio,
                allargando la tua rete di clienti
              </TextFinal>
              <Link
                to="/signup-professionista"
                style={{ textDecoration: "none" }}
              >
                {" "}
                <FinalButton>Inizia ora la prova gratuita</FinalButton>
              </Link>
            </div>
          </ContainerOther>
          <Footer />
        </div>
      </>
    );
};

export default LandingProfessionista;
