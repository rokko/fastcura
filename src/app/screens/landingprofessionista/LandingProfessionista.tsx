import React from "react";
import Header from "../../components/TrovaIlTuoProfessionista/Header";
import PrimaImmagine from "../../media/landingprofessionista.png";
import EntraNelTeam from "../../components/HomepageComponent/EntraNelTeam";
import Visibilita from "../../components/HomepageComponent/Visibilita";
import Target from "../../components/HomepageComponent/Target";
import DecidiTu from "../../components/HomepageComponent/DecidiTu";
import FaiTuPrezzo from "../../components/HomepageComponent/FaiTuPrezzo";
import ServizioMessagistica from "../../components/HomepageComponent/ServizioMessagistica";
import Ricavi from "../../components/HomepageComponent/Ricavi";
import ServizioInnovativo from "../../components/HomepageComponent/ServizioInnovativo";
import ProvaloGratis from "../../components/HomepageComponent/ProvaloGratis";
import Footer from "../../components/General/Footer";
import {
  BoxInfo,
  ButtonFirstContainer,
  ContainerFirstImage,
  ContainerOther,
  SpanTitle,
  TextSection,
  TitleFirstContainer,
  TitleSection,
} from "./LandingProfessionistaStyled";
import { BoxDescription } from "../trovaprofessionista/TrovaProfessionistaStyled";

const LandingProfessionista = () => {
  return (
    <>
      <Header />
      <ContainerFirstImage>
        <TitleFirstContainer>
          Iscriviti a <SpanTitle>Fastcura</SpanTitle>
        </TitleFirstContainer>
        <ButtonFirstContainer>Inizia la prova gratuita</ButtonFirstContainer>
        <img src={PrimaImmagine} width={"830px"} alt={"prima immagine"} />
      </ContainerFirstImage>
      <ContainerOther>
        <BoxInfo>
          <BoxDescription>
            <TitleSection>Visibilità</TitleSection>
            <TextSection></TextSection>
          </BoxDescription>
        </BoxInfo>
        <BoxInfo>
          <TitleSection>
            Per Infermieri, Caregiver e Fisioterapisti
          </TitleSection>
          <TextSection></TextSection>
        </BoxInfo>
        <BoxInfo>
          <TitleSection>Decidi tu quando!</TitleSection>
          <TextSection></TextSection>
        </BoxInfo>
        <BoxInfo>
          <TitleSection>
            Servizio di messaggistica diretto con il cliente
          </TitleSection>
          <TextSection></TextSection>
        </BoxInfo>
        <BoxInfo>
          <TitleSection>Ricavi</TitleSection>
          <TextSection></TextSection>
        </BoxInfo>
        <BoxInfo>
          <TitleSection>Un servizio innovativo</TitleSection>
          <TextSection></TextSection>
        </BoxInfo>
        <BoxInfo>
          <TitleSection>Fai tu il prezzo</TitleSection>
          <TextSection></TextSection>
        </BoxInfo>
      </ContainerOther>
    </>
  );
};

export default LandingProfessionista;
