import React, { useRef } from "react";
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
import Whatsapp from "../../media/whatsapp.jpg";
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
  const ref = useRef<any>();

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  if (!isMobile)
    return (
      <>
        {" "}
        <div style={{ backgroundColor: "rgb(246, 246, 246)" }}>
          <Header />
          <ContainerFirstImage style={{ marginTop: "5rem" }}>
            <TitleFirstContainer>
              Iscriviti a <SpanTitle>Fastcura</SpanTitle>
            </TitleFirstContainer>
            <iframe
              width="800"
              height="315"
              src="https://www.youtube.com/embed/QvesamSEZvE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <Link
              to="/signup-professionista"
              style={{ textDecoration: "none" }}
            >
              <ButtonFirstContainer>
                Inizia la prova gratuita
              </ButtonFirstContainer>
            </Link>
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

                <ButtonSection onClick={() => handleClick()}>
                  Scopri di più
                </ButtonSection>
              </BoxDescription>
            </BoxInfo>
            <BoxInfo>
              <BoxDescription>
                <TitleSection>
                  Infermieri, Fisioterapisti, O.S.S., Badanti
                </TitleSection>
              </BoxDescription>
              <Immagini
                src={PrimaImmagine}
                alt={"car driver"}
                style={{ width: "600px" }}
              />
            </BoxInfo>
            <BoxInfo>
              <Immagini src={DiciTu} alt={"dici tu"} />
              <BoxDescription>
                <TitleSection>Decidi tu quando!</TitleSection>
                <TextSection>
                  Decidi tu quando e come lavorare. Tu ci metti le competenze,
                  Fastcura ti trova i clienti
                </TextSection>
                <ButtonFirstContainer>
                  Prova il nostro servizio
                </ButtonFirstContainer>
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
            <BoxInfo ref={ref}>
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
                <ButtonFirstContainer>
                  Iscriviti Gratuitamente
                </ButtonFirstContainer>
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
                <ButtonFirstContainer>
                  Inizia la prova gratuita
                </ButtonFirstContainer>
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
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    19,90 €{" "}
                  </span>
                  al mese ma ti invitiamo a provare prima il nostro servizio
                  gratuitamente per 60 giorni.
                </TextSection>
              </BoxDescription>
              <ImmagineMoney src={Money} width={"300px"} alt={"money"} />
            </BoxInfo>
            <BoxInfo>
              <Immagini
                style={{ width: "300px" }}
                src={Whatsapp}
                alt={"servizio"}
              />
              <BoxDescription>
                <TitleSection>Hai ancora dubbi?</TitleSection>
                <TextSection>Contattaci su whatsapp</TextSection>
              </BoxDescription>
            </BoxInfo>

            <Link
              to="/signup-professionista"
              style={{ textDecoration: "none" }}
            >
              <TitleFinal style={{ fontSize: "45px", marginBottom: "-2rem" }}>
                Provalo gratis!
              </TitleFinal>
            </Link>
            <TextFinal>
              <span style={{ fontWeight: "bold" }}>
                PROMO: solo per questa settimana inizia la prova gratuita di 60
                giorni
                <br />
                Non c'è bisogno di aggiungere nessuna carta
              </span>
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
          <div
            style={{
              position: "fixed",
              bottom: "5rem",
              right: "2rem",
              width: "200px",
              height: "150px",
              zIndex: "1000000",
              borderRadius: "30px",
            }}
          >
            <a href={`whatsapp://3533973981`}>
              <img src={Whatsapp} style={{ width: "100px" }} />
            </a>
          </div>
          <div style={{ gap: "1rem" }}>
            <a href="http://www.instagram.com">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFLklEQVRoge2YS2xUVRjHf9+90xkETC2kgy4EGlOKYACtoDOUxMCCR6G1LpAQFujCR3xEdySEhEQMK1iwIiFl5SskAlNLxUQMCVAK0qQ0KdgWA2iCgao8BGzvzD2fi87jzvR1WsuCZH6r8839Hv/v3DPnnnuhSJEiRYoUeYyRiQStaOktT3lmLSIvgc4FyoEoyMxBDy0BpheE3QPx09dvCfQp9AlcVZELrtN//PT6RbcfaQOxQ10zJBzao8IWIDTeYmPgCdLol8i2c+sq79kGWTcQO9Q1g0ioFaiakDx7Ok2Js8K2CetZlHBoj+aLP6zQFHLoUKN9/0wZuNu5evEDm1yLfrg47cn+SKkaJ2ocXSxQDzRkLotndgMfWOmycVrR0lueSpobpBtW0Tfb6uYfsom1JZ7o3qTwddociJjw0ycbKu6MFefYJE95Zi0Z8arfTrZ4gNb6qm+ARNqM9Iu32ibOqgF1tDpriHw3bnXDEGvq3h1LdN+PH+3+PFCpKVeHpTZ5rP4DYmR2ZrE5Ri6O5V/T3FlmUuFVRmQ2ijro72GN/Ji3JJQPgWkqfARsB1DH7RBj0vplzqQ1gBDNDh1zayS3+OErUeP6u3yfrQglMhiLIgyIl4w1/XIwFHJ3nFpX2SfKPhU+FtF92Z48bklWkc6avAYgm8wMTBv2YRNvvvQCvt8i8OwIOUpQeTflmTXLm3prz9RVbic98xn+nf7w9rT+KRkzOiTDMFj9BxDKMkPv9s3UEPGHr0TVd45pULzqWYG9AnsV2gK55hhjjq1o6S0vzOPfDSVzbsy0kWZ3B5SSzLD9j2q/8LJx/V2CzE6bd1TY3FY///ugTzzRU6vol0ApwpxUyv8MeC/o03VpQSr2Yk+6ZK7maNjdgWCjO8UEL9Q0d5YJbM3YKmxuq6vKEw/QWj/vGCJbyDm+9dqRq0/lOeXntprc8TdQgEmFV5GeLYW24cRnOFs3rxnhfNoM9zvJlaPUfER3oBDJ2+7OWOTK+jhoxYRqBrBtYNIQRTNjQ248UWwbGLLz5BTJtexQNT5WIhVqcv5cnVDNAP+7gbBfcgIY3P5EYsuPdq8byTfW1LMeZVna9Dwv9NPIJfURNbBT82JONlTcQfRgxjbCV/FET21hgleP9m5A9YuMLUhj+8bn7uY55eWWJBbYHiWSmdVa/Uy72w55W2ko5O5IeWYNwhygVNHmWKL7HEIrKgK6HEzwcHYt5fs7CsssXHAplJEkmbs6BnZ3QMkeH8Jls4Y0fWpdZZ/jOLUo1wM/v4LyKegnkHeyvGbUqT3/xvN/FeZxS1PZrVMRq/dj2yV0MxsQeVA2nMOZusouz+Vl0P2AN4yLB7rfc1h67vXKS8PleOL+1EBuHfHQGMT2KHErc5xW40SBG8O5tW+o+hN4v/rQr9vC4dRKhbkAiFxPDrgnhqz5AiRMNLA4J68BdfQ30cEOjMsSoGM0/7TQIza5g4jxl+TecuX6qM5prJaQg1zIFlGtG68wWwSnPmsoP9vEWDXghpzj5LbShniie9O41Y1B7GjPZiU7OUm85HGbOPvvQomeRtC3Az8lQJvUcTsEc9OVgYe2X9ZqmjvLfI1MVZxZYvwlglMfEI/Cgbb6qncmtYGa5s4y34+0AvNtYyaEcDnih+M2n1RgHIe50+sX3XbdgTjQiOVDZpwkFQ6MRzxM8OPussOXZzqurBGRagwVCOUC5YqkXxPVAUoLwu7C4AuLoH0KfSh9OFzFyAW85PGzGxf+PRE9RYoUKVKkyGPLf1/l3GkBTGX/AAAAAElFTkSuQmCC" />{" "}
            </a>
            <a href="http://www.facebook.com">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEnElEQVRoge2YbWhbZRTH/+cmWTLa1NUO0dZCHabN2mGdTNq1QzZa1A826RSrQgVlOhSZiCKCqCDo18JwDNSJIIoffMGs9YP40qFb0250o2OGZJ3KxmxXaKdNY5M0997jh6aDNM9zc1+ygZIf5Mt5zuvNuc/z3ANUqFDhPw2Vy9Gu4US7qqOHQJ0AtwDUCHB1PkyKwZcIdJ6Zo24Xfjre1zJVjriOCuiOxP0M2s+EfWBstWgeY+AjX1b94NhAW8puDrYK2D066s4s1h8gBW+AcbPd4HkWQPyO1z976NiePapVY8sF7BxOBKHjcwB3W7UtwRkF/MSJcDBhxUixotwZiYeg4xTKnzwAbNdBpzq/me6zYmS6gK6jiScJ9BWAasupmcdPpH/dFYkPmjUw1UKdkXgon7zbdmrWUEG0NxpqHimlWLKAjuFYQNFdkwD8TjLyugibfW74PS6kVR05nfHXioa0qstMUlBwb7SvJW7k17CA3aOj7myy3nbPE4CeBj8eadqEtlof3EpxuNdOzuCXK7JdlE97a2Y7jHYnw5bILNYfILKXvFshvLX9VvQ2OPnj6J5s8rYXAByUaUhf4ru+m6pSCK/bDb0/WOcw+TXoze5IXOpIWkB1xvccA5vthKzzufHYllo7pkJ3GuhZ2aK0hfLXA1v01PvhEfR7Kqfjyz/+xlw6d002vZgt6Y+AfQCGRGvCAnYNJ9o13fLd5hrban1C+asTf2LqatqOy9aukdi2sYdaz61fELaQrqPXTpQ1btlY/Fx+S2btJg8AYE3pEcmFBTCow3YkANWeYrcXkqVbxQgi2imSS15iDjoJ5qLi/k/mpAeWKZjRIpLLdqF6R9GEGTgzJ+B2kVxWQDk28LLCkpwcX86eaanDo1s2Fciq3K4ivf6mm/BgY3EOzx+/jN+X7L8fsgKWANSZceB1KfB7ihNej0cheJRCPQYws7xiJgxoNaciZC00Y8qrQ+bSOWQ0cy8HA5dFckkBZHiFLReXUrnSSnmIIPzUlJwDPG4zJ0tcXDLXPgAAncZEYuE7wOAfyOT3/pHEPD6Zvloou68RjVUbCmSRi4s4HJsvkGU182cDKfSjSC78BybCwbNgKrp3iMhqjKWcVvDTBW29ItBbESmKiZ0IBX41XQAAMPHHZr1fb5hxRLYmLWDZl3mfgHnZ+g1kwbeifihblBZw9oH2f5j43euTk3mY6G2j0aPhXMjrnz0E4EzZszIJEU02ZgKHjXQMC1idBrgGACTLmpk5Ukw8+MUAaUZKJSdz0fCdF5iVQQCWB68OUAn0eKmZEGBytDjeHxgm8NO4MUWoDH5qLNz8rRll07PRsXDwUxDtheRSVSaSBOofDwc/M2tgaTodDTWPaJq+A+DT1nMzhogmdUXbYfbJr2GpAAA4+fDW896a2Q6AXwKwYNV+PQTMM9GLDZlAx0Rf67RVe8sFAKu7UzQcPOjNqk0MvAJAeMwbwnSOGS9vyKp3jIea3yu128hw9EWWP2CGAAx1H51u01nrBajrSjp3/0aXUlOzQVEAYCmn68uqNkeEn5k5qrPr+4n+QMxJ7AoVKvxP+BeubY3axB0JtgAAAABJRU5ErkJggg==" />{" "}
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
          <ContainerFirstImage>
            <TitleFirstContainer>
              Iscriviti a <SpanTitle>Fastcura</SpanTitle>
            </TitleFirstContainer>
            <Link
              to="/signup-professionista"
              style={{ textDecoration: "none" }}
            ></Link>
            <iframe
              width="400"
              height="315"
              src="https://www.youtube.com/embed/QvesamSEZvE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>{" "}
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

                <ButtonSection onClick={() => handleClick()}>
                  Scopri di più
                </ButtonSection>
              </BoxDescription>
            </BoxInfo>
            <BoxInfo>
              <img width={"290px"} src={Car} alt={"car driver"} />

              <BoxDescription>
                <TitleSection>
                  Infermieri, Fisioterapisti, O.S.S., Badanti
                </TitleSection>
              </BoxDescription>
            </BoxInfo>
            <BoxInfo>
              <img width={"228px"} src={DiciTu} alt={"dici tu"} />
              <BoxDescription>
                <TitleSection>Decidi tu quando!</TitleSection>
                <TextSection>
                  Decidi tu quando e come lavorare. Tu ci metti le competenze,
                  Fastcura ti trova i clienti
                </TextSection>
                <ButtonFirstContainer>
                  Prova il nostro servizio
                </ButtonFirstContainer>
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
              <BoxDescription ref={ref}>
                <TitleSection>
                  Servizio di messaggistica diretto con il cliente
                </TitleSection>
                <TextSection>
                  La persona trova i professionisti più vicini a lui e ne valuta
                  le competenze e la qualità dei servizi erogati attraverso le
                  recensioni lasciate da altri utenti
                </TextSection>
                <ButtonFirstContainer>
                  Iscriviti gratuitamente
                </ButtonFirstContainer>
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
                <ButtonFirstContainer>
                  Inizia la prova gratuita
                </ButtonFirstContainer>
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
                  professionisti l’abbonamento costa{" "}
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    19,90 €
                  </span>{" "}
                  al mese ma ti invitiamo a provare prima il nostro servizio
                  gratuitamente per 60 giorni.
                </TextSection>
              </BoxDescription>
            </BoxInfo>
            <BoxInfo>
              <img
                width={"240px"}
                src={Whatsapp}
                alt={"servizio"}
                style={{ marginTop: "3rem" }}
              />
              <BoxDescription ref={ref}>
                <TitleSection>Hai ancora dubbi?</TitleSection>
                <TextSection>Contattaci su whatsapp</TextSection>
              </BoxDescription>
            </BoxInfo>

            <div
              style={{
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Link
                to="/signup-professionista"
                style={{ textDecoration: "none" }}
              >
                <TitleFinal>Provalo gratis!</TitleFinal>
              </Link>
              <TextFinal>
                <span style={{ fontWeight: "bold" }}>
                  PROMO: solo per questa settimana inizia la prova gratuita di
                  60 giorni
                  <br />
                  Non c'è bisogno di aggiungere nessuna carta
                </span>
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
                <img src={Whatsapp} style={{ width: "100px" }} />
              </a>
            </div>
            <div style={{ gap: "1rem" }}>
              <a href="http://www.instagram.com">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFLklEQVRoge2YS2xUVRjHf9+90xkETC2kgy4EGlOKYACtoDOUxMCCR6G1LpAQFujCR3xEdySEhEQMK1iwIiFl5SskAlNLxUQMCVAK0qQ0KdgWA2iCgao8BGzvzD2fi87jzvR1WsuCZH6r8839Hv/v3DPnnnuhSJEiRYoUeYyRiQStaOktT3lmLSIvgc4FyoEoyMxBDy0BpheE3QPx09dvCfQp9AlcVZELrtN//PT6RbcfaQOxQ10zJBzao8IWIDTeYmPgCdLol8i2c+sq79kGWTcQO9Q1g0ioFaiakDx7Ok2Js8K2CetZlHBoj+aLP6zQFHLoUKN9/0wZuNu5evEDm1yLfrg47cn+SKkaJ2ocXSxQDzRkLotndgMfWOmycVrR0lueSpobpBtW0Tfb6uYfsom1JZ7o3qTwddociJjw0ycbKu6MFefYJE95Zi0Z8arfTrZ4gNb6qm+ARNqM9Iu32ibOqgF1tDpriHw3bnXDEGvq3h1LdN+PH+3+PFCpKVeHpTZ5rP4DYmR2ZrE5Ri6O5V/T3FlmUuFVRmQ2ijro72GN/Ji3JJQPgWkqfARsB1DH7RBj0vplzqQ1gBDNDh1zayS3+OErUeP6u3yfrQglMhiLIgyIl4w1/XIwFHJ3nFpX2SfKPhU+FtF92Z48bklWkc6avAYgm8wMTBv2YRNvvvQCvt8i8OwIOUpQeTflmTXLm3prz9RVbic98xn+nf7w9rT+KRkzOiTDMFj9BxDKMkPv9s3UEPGHr0TVd45pULzqWYG9AnsV2gK55hhjjq1o6S0vzOPfDSVzbsy0kWZ3B5SSzLD9j2q/8LJx/V2CzE6bd1TY3FY///ugTzzRU6vol0ApwpxUyv8MeC/o03VpQSr2Yk+6ZK7maNjdgWCjO8UEL9Q0d5YJbM3YKmxuq6vKEw/QWj/vGCJbyDm+9dqRq0/lOeXntprc8TdQgEmFV5GeLYW24cRnOFs3rxnhfNoM9zvJlaPUfER3oBDJ2+7OWOTK+jhoxYRqBrBtYNIQRTNjQ248UWwbGLLz5BTJtexQNT5WIhVqcv5cnVDNAP+7gbBfcgIY3P5EYsuPdq8byTfW1LMeZVna9Dwv9NPIJfURNbBT82JONlTcQfRgxjbCV/FET21hgleP9m5A9YuMLUhj+8bn7uY55eWWJBbYHiWSmdVa/Uy72w55W2ko5O5IeWYNwhygVNHmWKL7HEIrKgK6HEzwcHYt5fs7CsssXHAplJEkmbs6BnZ3QMkeH8Jls4Y0fWpdZZ/jOLUo1wM/v4LyKegnkHeyvGbUqT3/xvN/FeZxS1PZrVMRq/dj2yV0MxsQeVA2nMOZusouz+Vl0P2AN4yLB7rfc1h67vXKS8PleOL+1EBuHfHQGMT2KHErc5xW40SBG8O5tW+o+hN4v/rQr9vC4dRKhbkAiFxPDrgnhqz5AiRMNLA4J68BdfQ30cEOjMsSoGM0/7TQIza5g4jxl+TecuX6qM5prJaQg1zIFlGtG68wWwSnPmsoP9vEWDXghpzj5LbShniie9O41Y1B7GjPZiU7OUm85HGbOPvvQomeRtC3Az8lQJvUcTsEc9OVgYe2X9ZqmjvLfI1MVZxZYvwlglMfEI/Cgbb6qncmtYGa5s4y34+0AvNtYyaEcDnih+M2n1RgHIe50+sX3XbdgTjQiOVDZpwkFQ6MRzxM8OPussOXZzqurBGRagwVCOUC5YqkXxPVAUoLwu7C4AuLoH0KfSh9OFzFyAW85PGzGxf+PRE9RYoUKVKkyGPLf1/l3GkBTGX/AAAAAElFTkSuQmCC" />{" "}
              </a>
              <a href="http://www.facebook.com">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEnElEQVRoge2YbWhbZRTH/+cmWTLa1NUO0dZCHabN2mGdTNq1QzZa1A826RSrQgVlOhSZiCKCqCDo18JwDNSJIIoffMGs9YP40qFb0250o2OGZJ3KxmxXaKdNY5M0997jh6aDNM9zc1+ygZIf5Mt5zuvNuc/z3ANUqFDhPw2Vy9Gu4US7qqOHQJ0AtwDUCHB1PkyKwZcIdJ6Zo24Xfjre1zJVjriOCuiOxP0M2s+EfWBstWgeY+AjX1b94NhAW8puDrYK2D066s4s1h8gBW+AcbPd4HkWQPyO1z976NiePapVY8sF7BxOBKHjcwB3W7UtwRkF/MSJcDBhxUixotwZiYeg4xTKnzwAbNdBpzq/me6zYmS6gK6jiScJ9BWAasupmcdPpH/dFYkPmjUw1UKdkXgon7zbdmrWUEG0NxpqHimlWLKAjuFYQNFdkwD8TjLyugibfW74PS6kVR05nfHXioa0qstMUlBwb7SvJW7k17CA3aOj7myy3nbPE4CeBj8eadqEtlof3EpxuNdOzuCXK7JdlE97a2Y7jHYnw5bILNYfILKXvFshvLX9VvQ2OPnj6J5s8rYXAByUaUhf4ru+m6pSCK/bDb0/WOcw+TXoze5IXOpIWkB1xvccA5vthKzzufHYllo7pkJ3GuhZ2aK0hfLXA1v01PvhEfR7Kqfjyz/+xlw6d002vZgt6Y+AfQCGRGvCAnYNJ9o13fLd5hrban1C+asTf2LqatqOy9aukdi2sYdaz61fELaQrqPXTpQ1btlY/Fx+S2btJg8AYE3pEcmFBTCow3YkANWeYrcXkqVbxQgi2imSS15iDjoJ5qLi/k/mpAeWKZjRIpLLdqF6R9GEGTgzJ+B2kVxWQDk28LLCkpwcX86eaanDo1s2Fciq3K4ivf6mm/BgY3EOzx+/jN+X7L8fsgKWANSZceB1KfB7ihNej0cheJRCPQYws7xiJgxoNaciZC00Y8qrQ+bSOWQ0cy8HA5dFckkBZHiFLReXUrnSSnmIIPzUlJwDPG4zJ0tcXDLXPgAAncZEYuE7wOAfyOT3/pHEPD6Zvloou68RjVUbCmSRi4s4HJsvkGU182cDKfSjSC78BybCwbNgKrp3iMhqjKWcVvDTBW29ItBbESmKiZ0IBX41XQAAMPHHZr1fb5hxRLYmLWDZl3mfgHnZ+g1kwbeifihblBZw9oH2f5j43euTk3mY6G2j0aPhXMjrnz0E4EzZszIJEU02ZgKHjXQMC1idBrgGACTLmpk5Ukw8+MUAaUZKJSdz0fCdF5iVQQCWB68OUAn0eKmZEGBytDjeHxgm8NO4MUWoDH5qLNz8rRll07PRsXDwUxDtheRSVSaSBOofDwc/M2tgaTodDTWPaJq+A+DT1nMzhogmdUXbYfbJr2GpAAA4+fDW896a2Q6AXwKwYNV+PQTMM9GLDZlAx0Rf67RVe8sFAKu7UzQcPOjNqk0MvAJAeMwbwnSOGS9vyKp3jIea3yu128hw9EWWP2CGAAx1H51u01nrBajrSjp3/0aXUlOzQVEAYCmn68uqNkeEn5k5qrPr+4n+QMxJ7AoVKvxP+BeubY3axB0JtgAAAABJRU5ErkJggg==" />{" "}
              </a>
            </div>
          </ContainerOther>

          <Footer />
        </div>
      </>
    );
};

export default LandingProfessionista;
