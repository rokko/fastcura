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
} from "./LandingProfessionistaStyled";
import { BoxDescription } from "../trovaprofessionista/TrovaProfessionistaStyled";
import { useMediaQuery } from "react-responsive";

const LandingProfessionista = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  if (!isMobile)
    return (
      <>
        <Header />
        <ContainerFirstImage>
          <TitleFirstContainer>
            Iscriviti a <SpanTitle>Fastcura</SpanTitle>
          </TitleFirstContainer>
          <ButtonFirstContainer>Inizia la prova gratuita</ButtonFirstContainer>
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
                Fastcura ha l'obiettivo di darti visibilità sul tuo territorio,
                allargando la tua rete di clienti
              </TextSection>
              <ButtonSection>Scopri di più</ButtonSection>
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
            <Immagini src={FaiTuPrezzo} alt={"fai prezzo"} />
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
                completa sicurezza sul sito o in contanti a prestazione ultimata
              </TextSection>
            </BoxDescription>
            <Immagini src={Ricavi} alt={"ricavi"} />
          </BoxInfo>
          <BoxInfo>
            <Immagini src={Servizio} alt={"servizio"} />
            <BoxDescription>
              <TitleSection>Un servizio innovativo</TitleSection>
              <TextSection>
                Fastcura è un servizio unico nel suo genere. Al centro di tutto
                vi è la tutela del professionista.
              </TextSection>
            </BoxDescription>
          </BoxInfo>
          <TitleFinal>Provalo gratis!</TitleFinal>
          <TextFinal>
            Inizia la prova gratuita di 30 giorni. Potrai disdire quando vuoi.
            Fastcura ha l'obiettivo di darti visibilità sul tuo territorio,
            allargando la tua rete di clienti
          </TextFinal>
          <FinalButton>Inizia ora la prova gratuita</FinalButton>
        </ContainerOther>
      </>
    );
  else
    return (
      <>
        <Header />
        <ContainerFirstImage>
          <TitleFirstContainer>
            Iscriviti a <SpanTitle>Fastcura</SpanTitle>
          </TitleFirstContainer>
          <ButtonFirstContainer>Inizia la prova gratuita</ButtonFirstContainer>
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
                Fastcura ha l'obiettivo di darti visibilità sul tuo territorio,
                allargando la tua rete di clienti
              </TextSection>
              <ButtonSection>Scopri di più</ButtonSection>
            </BoxDescription>
          </BoxInfo>
          <BoxInfo>
            <Immagini src={Car} alt={"car driver"} />

            <BoxDescription>
              <TitleSection>
                Per Infermieri, Caregiver e Fisioterapisti
              </TitleSection>
            </BoxDescription>
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
            <Immagini src={FaiTuPrezzo} alt={"fai prezzo"} />

            <BoxDescription>
              <TitleSection>Fai tu il prezzo</TitleSection>
              <TextSection>
                Potrai recensire e vederele recensioni degli altri.
              </TextSection>
            </BoxDescription>
          </BoxInfo>
          <BoxInfo>
            <Immagini src={Messaggistica} alt={"messaggistica"} />
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
            <Immagini src={Ricavi} alt={"ricavi"} />

            <BoxDescription>
              <TitleSection>Ricavi</TitleSection>
              <TextSection>
                Accordato con il cliente il prezzo, lui potrà pagare nella più
                completa sicurezza sul sito o in contanti a prestazione ultimata
              </TextSection>
            </BoxDescription>
          </BoxInfo>
          <BoxInfo>
            <Immagini src={Servizio} alt={"servizio"} />
            <BoxDescription>
              <TitleSection>Un servizio innovativo</TitleSection>
              <TextSection>
                Fastcura è un servizio unico nel suo genere. Al centro di tutto
                vi è la tutela del professionista.
              </TextSection>
            </BoxDescription>
          </BoxInfo>
          <TitleFinal>Provalo gratis!</TitleFinal>
          <TextFinal>
            Inizia la prova gratuita di 30 giorni. Potrai disdire quando vuoi.
            Fastcura ha l'obiettivo di darti visibilità sul tuo territorio,
            allargando la tua rete di clienti
          </TextFinal>
          <FinalButton>Inizia ora la prova gratuita</FinalButton>
        </ContainerOther>
      </>
    );
};

export default LandingProfessionista;
