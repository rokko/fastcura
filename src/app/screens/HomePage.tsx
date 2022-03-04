import React from "react";
import EntraNelTeam from "../components/HomepageComponent/EntraNelTeam";
import Visibilita from "../components/HomepageComponent/Visibilita";
import Target from "../components/HomepageComponent/Target";
import DecidiTu from "../components/HomepageComponent/DecidiTu";
import FaiTuPrezzo from "../components/HomepageComponent/FaiTuPrezzo";
import ServizioMessagistica from "../components/HomepageComponent/ServizioMessagistica";
import Ricavi from "../components/HomepageComponent/Ricavi";
import ServizioInnovativo from "../components/HomepageComponent/ServizioInnovativo";
import ProvaloGratis from "../components/HomepageComponent/ProvaloGratis";
import Header from "../components/TrovaIlTuoProfessionista/Header";
import {useMediaQuery} from "react-responsive";
import { Fade } from "react-awesome-reveal";
import Footer from '../components/General/Footer'

const HomePage = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

  return (
    <>  
    <Header />
      {(!!isMobile)&&      <div style={{width:'100%', display:'flex', alignItems:'center', alignContent:'center',justifyContent:'center'}}>
        <div style={{display: 'flex', alignItems: 'center' , alignContent:'center', textAlign:'center',justifyContent:'center', flexDirection:'column', width:'100%', marginTop:'100px'}}>
          <EntraNelTeam />
          <Visibilita />
          <Target />
          <DecidiTu />
          <FaiTuPrezzo />
          <ServizioMessagistica />
          <Ricavi />
          <ServizioInnovativo />
          <ProvaloGratis />
        </div>
      </div>
      }
      {(!isMobile)&&
          <>
            <div style={{width:'100%', display:'flex', alignItems:'center', alignContent:'center',justifyContent:'center', backgroundColor:'rgb(249, 249, 249)'}}>
        <div style={{display: 'flex', alignItems: 'center' , alignContent:'center', textAlign:'center',justifyContent:'center', flexDirection:'column', width:'100%'}}>


        <div style={{width: '80%'}}>
          <EntraNelTeam />

         
          <Visibilita />
          <Target />
        

          <DecidiTu />
       
          <FaiTuPrezzo />
          

          <ServizioMessagistica />
          
          <Ricavi />
          

          <ServizioInnovativo />
         
          <ProvaloGratis />
          

        </div>
      </div>

      </div>

            </>
      }
      <Footer />
    </>
  );
};

export default HomePage;
