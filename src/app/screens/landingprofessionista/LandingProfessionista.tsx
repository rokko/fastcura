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
          <ContainerFirstImage style={{ marginTop: "5rem" }}>
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
                  Infermieri, Fisioterapisti, O.S.S., Badanti
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
                <ButtonFirstContainer>
                  Inizia la prova gratuita
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
                <ButtonFirstContainer>
                  Inizia la prova gratuita
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

            <Link
              to="/signup-professionista"
              style={{ textDecoration: "none" }}
            >
              <TitleFinal>Provalo gratis!</TitleFinal>
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
                  Inizia la prova gratuita
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
                  Inizia la prova gratuita
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
            <div>
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
                <img
                  width={"30px"}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAJh0lEQVRoge1Za2wc1RX+7szs295dex17/Ur8jh3jBCfmIUiakDSkaSOXRinQKDwKiQpqUFRQRREVVd8C1FblUagISaENSDyiQAsttGRLoVBeiW0w3thO1sbYazu2433P7Mzc2x+OZ+2dsb1+tKrUfL/mnj3n3PPNnHPvuXeBC7iA/2+QpXDCGOPaurouoUzYInDYxIBaypiHMVgAgBBIHCGjAOmiqupjDMe7aivfu5YQdbFzL4pAy6lTxYSYDoDhVsHEW1wOu8VhswoWsxlmQQDHTbinlCGpKJCSMmIJUQ3H4qKsKDLAnpJl/LKpvvKz/yqB9va+XNWkPMhAd3tcTsHjcgpWi3lePsSkjLFQWB0dD8uM4HkV6l1rq6vPzjeWeRNo8XddC457Is/ltBd4cgSB5+frYhpUSjE4ck4ZHQ+JlOG2xtrKI/Oxz5iAz+cTcotWPC4I3O6yIq/NbrXodILiEFpCn6AzegZBcQgxNQ4GIIu3w2vNR5WjHI3ui1BsLdTZJiQJPf2DCZnSF+TQ2K1NTU3ykhHwBQJWj8xetlstG8qKvVae47TfGBiOn30bLw68go5IZybuUJNViWbvNlydvxEmzqTJKaXoGRiSYgnxvWTYur2pqSi+aAI+n0/wFK94Nctu21hWVGAmJGXy0XgbftvzNLqiZzIKPB1eaz72l9+CKz2XajLGGD4LDifDsfi7yfDY1rm+xJwEWrvOPOGwWPZUlBRaJ4OnYHiy5wie+fzoggJPxw7vVtxRsRfm81+DMYZA/6AUFcXn1lRX3Dib7awETvjP7DKbuKdqy0rtk2kjqiJ+fOpXeGfsgyUJfhIXuy7CT1d9D3beDmAinfw9fWJSVvfOVtgzEmhr681hViVQVVrsmixYCob7Ou7HP0ffX9LgJ7HGVY8H6u/TvkRCktDV2x+RoVQ0rVw5YmTDGQkBADb1/lyn0zF1tXmy58h/LHgAaA214+EzB1MhWCzwuF02E2f6xUw2hgQ+/LSnkDF2gzcvR5iUvX/upC7nOcLh5uXX4bE19+NHdXfDztsWTeJPg3+d9pK8nhyBMFz7cXd3acYETLx6h8fl1DYphal46PRBnd5tZTfhpuXXoTa7Ghs8l6G5cNuiCQDAI4FDkOnE4sPzHDxup4lScmdGBBhjBITszXU5tbd//Oxb6BeD0/RKbEXYVbxjmqzZuw1kCfrDQXEYrw+/qY1zXU4eIDc/x5hu29cRaOvobhR43m6b0tu8HHxNN8kXPJfrgi20FuDSnMbFRX8efxxMzWk1m2ASeFOVv/vSdD0dAcqRLdlZdi36YWkEnxrssF5rvuHES5VGp6KnERSHtLHT4bAQQjan6+kICBy3Mctq1fb3k6GPwcB0E4TliOHEClUWGLIeJ8Y/1p4dNovAC9ymdB19DYDUWcyp/qQ7GjB03hXTtw9jyXE8Gji8sGgNcDrWoz1bzGYwhup0HQMC1GMStPpFUBo2dP7O2IcIyeFpst8EDmNYMtxvFoSglEohk8ADFHnpOgarEKw8lyrOmGLcEMpUxtN9z0+TbS/YsiSrkNHcPMeBMqrr4XUECMCmZjxPZt6sjwX/DH+0Wxuvc69esiKeiCX1MvRVOAE9AUJiqkq1cbaQPeMElFH8/NSvIaqiJttfcQsuybl4AeHq4RDsqbkoBUeImK6jf72EjCtq6rIg3+KZdZLPEv34WedD2kolEAE/qbsHW5ZtMNT/auGXsK9sD/LMuXMSKLJ6tWdZUUAI0RWYQX6wkwlJ0kZ12brC1+Gt0X/hUO+z2tjMmfD9ld/BXVW3I1vI0uSb8q7Agcp92F2yE880PYa7qm6fFmQ6qhxl2rMoySCEnJqTgKqyt+OipJ2CGpx1GRXmH/pewJG+F6fJdni34tmmx7GvbA+25m/E3dX7NV8mzoQd3q34/bpHcE3hdp0/AoK17tXaOC6KiqpSX7qekC7gKHsjFI3LpQUwAYDHnItGdwNOjLfNSeJg7xGcTY7ijopbwZOJtsUh2LG7ZOeMNhzhUGor0snrnSuRb0mtmqFoTFIZ+5vOPl2wZlXVJ4yq5+JiKo2+UvDFOYOfxEvBv2B/6z3ojfdlbNMe0WUGmr2p1SwhSVBUNbG2tvJEup7hGklBDo+EwloabVp2JSqn5ONc8Ee7sffknXig61F8nhiYVffD8Va8OfLuNNlyWzE2L1uvjUdDEYUwHCSE6FZTw+Rub+/LlU3Jz+vKltvMJkGb6Luf/DBjElNRl12DLcvWo8m9BsvtJSAgGE2O4ejAq3iu/yUoLLXqERA8eNEPsO58/iuKivZAb4JSuWptba3ubehqAADq60vHWjtPHzsXiX6jINcNACgxuIzKFB2RTu3OyMpbIRAeUSVmqHtD6S4teAAYGB2TCbjfGQU/IwEA4MCtsk85E3ww3rKw6NMwddNLx3rPZbhpxfXaOJYQMR6OxmSe3TNznAbw+/3ZKqN1DlvqjPvReOuCAs4UGzyX496aA+DOZ7VKKQIDQwnK6DebKitDM9kZfoE4+KuyrBaZ44gZmGgZpvbmSwkCgutLrsHesj1a8BMXW0FRVemhxpVVx2azNyTAE77ZleXQGhF/tBsRJQoAsHAWNDjrsM7dgDyLB8/0HUUgvrDr/RX2Ehyo2IdGd4MmY4yhZ2AomZAkX2dNxYG5fBgSIARfznbYtRVqRBrFjaVfx1r3aqzKrpl2Ibt52Qb8Y+QdvBx8DS2hdsPT2zTfIGhw1aHZuw1X5V0Jbkq3q6oUgf6gmEhKPhvo1zL5B0e3jLb6/eWEN7c3VJXP+5JnNHkObeFP0Rk9jUFxGOHzX83O21BkLUCloxzr3KvhMefobGMJEYGBoQRj9JC/qvzAgv9+auno/lZP/6DIZgGllEXjCZaUldnUMkJSVlhvcDjZ2nlm7IS/q3m+8epSiBe4nc4su+7kI0pJROIJhGPxeCye4EFIEIx53dlZXF6Oy2z0h8dsiIsSRkMReSwcVjhCnkwQ9d7La6vDc1vOQsDn8wkqY+uz7XYkZQXReALhWEyMxBMMQIgBrzNVfUUh9HhTzcqR9zo6POci0W+HorHbCEdcriyHyW61mGwWCwSeB89P5DelFLKiQpSSiImiHI7FZarSCAWeIBx7eHVVpfHBOwNMq4GTgYCbJOmQwPGyylSFEPImVdlLlJI31q6q6J3N0UednXUc5a/meXIFARoZQy5jzDExCxE5ghEAHSpV/07Bv9FYU95m1NssGm0dpxta2rvql9zxBVzA/yb+DUF2LapIafb7AAAAAElFTkSuQmCC"
                />
              </a>
            </div>
          </ContainerOther>

          <Footer />
        </div>
      </>
    );
};

export default LandingProfessionista;
