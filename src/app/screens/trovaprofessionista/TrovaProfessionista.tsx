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
  const [what, setWhat] = useState(false);
  const [token, setToken] = useState("");
  useEffect(() => {
    takeToken();
  }, []);
  const [attivo, setAttivo] = useState(false);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      setAttivo(true);
    } else {
      setAttivo(false);
    }
  }

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
            {!what && (
              <div
                style={{
                  position: "fixed",
                  backgroundColor: "white",
                  bottom: "5rem",
                  right: "5rem",
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  zIndex: "1000000",
                  display: attivo ? "flex" : "none",
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  onClick={() => {
                    setWhat(!what);
                  }}
                  style={{ width: "32px" }}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADG0lEQVR4nO2bTUhUURTH/+fNG4fUBIswKsEKP0paaJk+aVFgixZ+IDkF0TZCgig3QYtsEdGitQRCEAWlUfNyWWRu/MpAKHGmCWthixZh2OfovHta5GIctfEy8+4V3vttBu69h/ebP3POvAczgI+Pj5chy4491y2hExNAk24JnRi6BXTj+QDM9AUiPBKCPumQcRvD4DJmnEpdWxGAENQ72lbxQp2WOhoi75uIeFkAnm8BPwDdArrxA9AtoBs/AN0CuvED0C2gmxV3gpmwBmJVEPzADZmsMejMSHNlVKZEOgCRFAWGYdTK1qlAJEWBbI3nW8DzAUi3AIzQLNHCFRdcsscIzcqWSAcw1rrnC4BbsnUbFc+3gB+AbgHdeD4A6SFY3TeVV5wf3OWGTLbM/VqcnQpXL8jUSAdQGDQOOA5PyNapoDBoHALwRqbG8y3gB6BbQDfSM+DHonhbnB/Y64ZMtswnhPu3wktTdka2bqPi+RbwA9AtoBs/AN0CuvED0C2gG88HsPJGiER5/dPpuVxfiBmfxtv3fV3P2cNPprcSoSzXDiBRDtDyJcuOcc4vtDqv5xPJI5me1w/emQjmlRQOgchSIaWyBeqK8gI3Mh0Kbt98U9WbB1TPAKKuBjvastZ2w7PYCQIuq1RSPQSJQL3WQGxn+ka9PVNCjLtIb1KXMQOBxBY3L5B0QlcJ6EpZ2gam+x193NQfJgcAOvo4MEvxh2CUpNYycNsMJDK2TTa4nvbRwUEzMb9jCEBj6joD3aOtldcBoNGOdTNwLa10XUMzW5R83OoiH0pNw5kEI/XTJoj4ONhIMvglgEDK3jeHuHa8peqj227K+q0xEj3JRP1py5+XXpfNBGLuGG6reqzCS+nAsexoD0Dn/3eGQD3DrRWdqpyUfguEikKXAEyueYDpHSc2da257wJKA3h1bPcfYThhAN9X2f7JAuGRcOlvlU7KH4bGmvfHieli+joTXRhtr5hW7aN0BqRiRWL3QDgL/PuTxnBL5WkdHvI/kckRoYVkZyJk1gEwHdM4p8tDK5Ydr7HseI1uDx8fH+/yF2Tnywdli5JKAAAAAElFTkSuQmCC"
                />{" "}
              </div>
            )}
            {what && (
              <div
                style={{
                  position: "fixed",
                  backgroundColor: "white",
                  bottom: "5rem",
                  right: "5rem",

                  width: "200px",
                  height: "120px",
                  zIndex: "1000000",
                  borderRadius: "20px",
                  display: attivo ? "flex" : "none",
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    maxWidth: "200px",
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
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFQElEQVRoge2aa4hVVRiGvx3NmOM4ERSko0Q0lmg2OpR3Cwr6GXQVNYmEQohCiYLoX2BBkZdJs8uPsqCQwX6ooWYkRU0UFuUFCwyyaYZoHHG8zE1nnn6sd3NWu33O2bcTEn1wWGft/b7ft9699lrrW+ucwHIYcLmZtZnZYjNrNbMWM7vOzBrMrMnMAjPrN7NhM+sysxNmdtTMvjWzziAITueJn9uAecAbQB/ZbRjYC6wE6v9tAYuBA5EGHQE2A48CC8OLHie024HVwBbgS2DUu9cDPKkerqmAJuBtYEyB/wReAKbFYGOFxOAmA2uA7yIPpbVWIqYDPynQOeB5oKECPpEQ734ALAV+FXQQWFm0iFZK4+BgXA/EcFIJ8XDjgbcEHwOeyNv+0HGLXiGAz4CJCXmZhHj4ZzV+RoH7s7TddzYBOKQ2fAxckYKbS4g4a0U7C9yQhht1tNEbfI0pubmFiPeeqJ8DQVq+AW3ARWAEmJWBX5SQK4E/RH8wLd+AXSK/nJpsxQkR92nRD6XqFeBmzRhngaszBi9SSIPXK3dWwl4Wqa8ylx9tC4LgZJbgRVoQBANmtlXVBxKRcAtTt9TfmjV4kT0i/iy56AGiDz6W0CrCb1mDyk+hQuTjuNwsKIfxFS5RuT9P0BrZHpXzygF8IW0qD9asOdntR5WzywF8IWEe9XPWaMBM7/sgMOjVZ2T1a2aHVVbPjClln7ekjQKMw+1J/D1G1EaBdmBcBv+N4o9QLXEFzijglAwiPhV3EJfezMXlaxNwu8lNwJAw+8iwIwTeF39nNeAFAcenDLA5nO2okNJoVuwStj1NDPEn4xZqgLsrAc8LVHbTFMOZpS4fDEUAU4AO9fAZYEf4OkjMEC6Xm1nZe2y859TGo5TbFgMnBJqawnHYGxs8EXEHEn1AszDtOXplHKU15alyoO8FKDvFxXCOiXOb6h2q7wKa9dmta9uFmRc+1bRCxL9H/FPE5YPARwIsT+F0QJxG1cMJo9nDTNW106pPVP18FiHysVc+Xg+v+etIp8pFKXxejMZQmSTlzpO2rDWzC2b2ONEJBpgvlYdjqXEtcYMOYK7qO1TfrfEyBbdVBuiIxDmSQ4gB6+Xng+iNOuCkbiY6WwI2CL9J9Rs9H771AS3CvOZzcgi5SX5+ibv5qm5uSehsJm4qHQrF4wb4dqBfnw5PxGzcUekoOVIWYAZuYQXYFweYjtsh9gPXJHQaTqddlXpSIn4XdlsOAR9SSoV6gTnlwDsFejOh8zpgvzhDEjYflx81Agv0Og17r9oQ7vyq+kapFMcXMIBLha6tRJhGafVtKwv8O6deAi5GB4dnYxL0itegL4DrE8YIbSMwKan6l0T6ihSnF7gxsx44jMuLzuHOxjbhjQngDkrZdj+wKqmQpG0JSY2U9u8PpyInj9EEvOs96a9xM163HmR9BJ9eiIgrxO0C6gpT8M849wGnY17FFyO4zEIC4AfxHyqs5fGxwvR+IbBI37sjmIpCys4aQRBgpTOl1cU0uayF7fDHo38SE94fy+RdY+UMbsZprs7IZt7k4ts67/4kXevJEyRcV5YV0ur4GPUS041bNNf5gx24V204kCfIM3KytTq6NgbsURvW5HGyRE46q6OLN2CZ4vcCV+Vx1CJHxwtsX9LYy3HnAQCPVMIm+V27V2WiJDKNAUvN/TPilD4DZtZoZnPM7DEzu0vQdUEQZEo0owGzLUYJ/Vawk8CKJL5q+0+D5PaNuR6vM7MRMztmZp+Y2TtBEJwrLEqte6QIX4n3A5e6/S/kUrP/jJC/AACEd6xSRPTDAAAAAElFTkSuQmCC"
                  ></img>
                  <p style={{ color: "white" }}>Assistenza Fastcura</p>
                </div>
                <div
                  style={{
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
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src="data:image/png;base64,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"
                    ></img>
                    <p>
                      Hai bisogno di aiuto? <br />
                      Scrivici su Whatsapp
                    </p>
                  </a>
                </div>
              </div>
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
            <div
              style={{
                position: "fixed",
                backgroundColor: "white",
                bottom: "5rem",
                right: "5rem",
                borderRadius: "50%",
                width: "70px",
                height: "70px",
                zIndex: "1000000",
                display: attivo ? "flex" : "none",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                onClick={() => {
                  setWhat(!what);
                }}
                style={{ width: "32px" }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADG0lEQVR4nO2bTUhUURTH/+fNG4fUBIswKsEKP0paaJk+aVFgixZ+IDkF0TZCgig3QYtsEdGitQRCEAWlUfNyWWRu/MpAKHGmCWthixZh2OfovHta5GIctfEy8+4V3vttBu69h/ebP3POvAczgI+Pj5chy4491y2hExNAk24JnRi6BXTj+QDM9AUiPBKCPumQcRvD4DJmnEpdWxGAENQ72lbxQp2WOhoi75uIeFkAnm8BPwDdArrxA9AtoBs/AN0CuvED0C2gmxV3gpmwBmJVEPzADZmsMejMSHNlVKZEOgCRFAWGYdTK1qlAJEWBbI3nW8DzAUi3AIzQLNHCFRdcsscIzcqWSAcw1rrnC4BbsnUbFc+3gB+AbgHdeD4A6SFY3TeVV5wf3OWGTLbM/VqcnQpXL8jUSAdQGDQOOA5PyNapoDBoHALwRqbG8y3gB6BbQDfSM+DHonhbnB/Y64ZMtswnhPu3wktTdka2bqPi+RbwA9AtoBs/AN0CuvED0C2gG88HsPJGiER5/dPpuVxfiBmfxtv3fV3P2cNPprcSoSzXDiBRDtDyJcuOcc4vtDqv5xPJI5me1w/emQjmlRQOgchSIaWyBeqK8gI3Mh0Kbt98U9WbB1TPAKKuBjvastZ2w7PYCQIuq1RSPQSJQL3WQGxn+ka9PVNCjLtIb1KXMQOBxBY3L5B0QlcJ6EpZ2gam+x193NQfJgcAOvo4MEvxh2CUpNYycNsMJDK2TTa4nvbRwUEzMb9jCEBj6joD3aOtldcBoNGOdTNwLa10XUMzW5R83OoiH0pNw5kEI/XTJoj4ONhIMvglgEDK3jeHuHa8peqj227K+q0xEj3JRP1py5+XXpfNBGLuGG6reqzCS+nAsexoD0Dn/3eGQD3DrRWdqpyUfguEikKXAEyueYDpHSc2da257wJKA3h1bPcfYThhAN9X2f7JAuGRcOlvlU7KH4bGmvfHieli+joTXRhtr5hW7aN0BqRiRWL3QDgL/PuTxnBL5WkdHvI/kckRoYVkZyJk1gEwHdM4p8tDK5Ydr7HseI1uDx8fH+/yF2Tnywdli5JKAAAAAElFTkSuQmCC"
              />{" "}
            </div>
          )}
          {what && (
            <div
              style={{
                position: "fixed",
                backgroundColor: "white",
                bottom: "5rem",
                right: "5rem",

                width: "200px",
                height: "120px",
                zIndex: "1000000",
                borderRadius: "20px",
                display: attivo ? "flex" : "none",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  maxWidth: "200px",
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
                <img
                  style={{ width: "30px", height: "30px" }}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFQElEQVRoge2aa4hVVRiGvx3NmOM4ERSko0Q0lmg2OpR3Cwr6GXQVNYmEQohCiYLoX2BBkZdJs8uPsqCQwX6ooWYkRU0UFuUFCwyyaYZoHHG8zE1nnn6sd3NWu33O2bcTEn1wWGft/b7ft9699lrrW+ucwHIYcLmZtZnZYjNrNbMWM7vOzBrMrMnMAjPrN7NhM+sysxNmdtTMvjWzziAITueJn9uAecAbQB/ZbRjYC6wE6v9tAYuBA5EGHQE2A48CC8OLHie024HVwBbgS2DUu9cDPKkerqmAJuBtYEyB/wReAKbFYGOFxOAmA2uA7yIPpbVWIqYDPynQOeB5oKECPpEQ734ALAV+FXQQWFm0iFZK4+BgXA/EcFIJ8XDjgbcEHwOeyNv+0HGLXiGAz4CJCXmZhHj4ZzV+RoH7s7TddzYBOKQ2fAxckYKbS4g4a0U7C9yQhht1tNEbfI0pubmFiPeeqJ8DQVq+AW3ARWAEmJWBX5SQK4E/RH8wLd+AXSK/nJpsxQkR92nRD6XqFeBmzRhngaszBi9SSIPXK3dWwl4Wqa8ylx9tC4LgZJbgRVoQBANmtlXVBxKRcAtTt9TfmjV4kT0i/iy56AGiDz6W0CrCb1mDyk+hQuTjuNwsKIfxFS5RuT9P0BrZHpXzygF8IW0qD9asOdntR5WzywF8IWEe9XPWaMBM7/sgMOjVZ2T1a2aHVVbPjClln7ekjQKMw+1J/D1G1EaBdmBcBv+N4o9QLXEFzijglAwiPhV3EJfezMXlaxNwu8lNwJAw+8iwIwTeF39nNeAFAcenDLA5nO2okNJoVuwStj1NDPEn4xZqgLsrAc8LVHbTFMOZpS4fDEUAU4AO9fAZYEf4OkjMEC6Xm1nZe2y859TGo5TbFgMnBJqawnHYGxs8EXEHEn1AszDtOXplHKU15alyoO8FKDvFxXCOiXOb6h2q7wKa9dmta9uFmRc+1bRCxL9H/FPE5YPARwIsT+F0QJxG1cMJo9nDTNW106pPVP18FiHysVc+Xg+v+etIp8pFKXxejMZQmSTlzpO2rDWzC2b2ONEJBpgvlYdjqXEtcYMOYK7qO1TfrfEyBbdVBuiIxDmSQ4gB6+Xng+iNOuCkbiY6WwI2CL9J9Rs9H771AS3CvOZzcgi5SX5+ibv5qm5uSehsJm4qHQrF4wb4dqBfnw5PxGzcUekoOVIWYAZuYQXYFweYjtsh9gPXJHQaTqddlXpSIn4XdlsOAR9SSoV6gTnlwDsFejOh8zpgvzhDEjYflx81Agv0Og17r9oQ7vyq+kapFMcXMIBLha6tRJhGafVtKwv8O6deAi5GB4dnYxL0itegL4DrE8YIbSMwKan6l0T6ihSnF7gxsx44jMuLzuHOxjbhjQngDkrZdj+wKqmQpG0JSY2U9u8PpyInj9EEvOs96a9xM163HmR9BJ9eiIgrxO0C6gpT8M849wGnY17FFyO4zEIC4AfxHyqs5fGxwvR+IbBI37sjmIpCys4aQRBgpTOl1cU0uayF7fDHo38SE94fy+RdY+UMbsZprs7IZt7k4ts67/4kXevJEyRcV5YV0ur4GPUS041bNNf5gx24V204kCfIM3KytTq6NgbsURvW5HGyRE46q6OLN2CZ4vcCV+Vx1CJHxwtsX9LYy3HnAQCPVMIm+V27V2WiJDKNAUvN/TPilD4DZtZoZnPM7DEzu0vQdUEQZEo0owGzLUYJ/Vawk8CKJL5q+0+D5PaNuR6vM7MRMztmZp+Y2TtBEJwrLEqte6QIX4n3A5e6/S/kUrP/jJC/AACEd6xSRPTDAAAAAElFTkSuQmCC"
                ></img>
                <p style={{ color: "white" }}>Assistenza Fastcura</p>
              </div>
              <div
                style={{
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
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src="data:image/png;base64,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"
                  ></img>
                  <p>
                    Hai bisogno di aiuto? <br />
                    Scrivici su Whatsapp
                  </p>
                </a>
              </div>
            </div>
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
