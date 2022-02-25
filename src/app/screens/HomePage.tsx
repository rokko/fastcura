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

const HomePage = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

  return (
    <>  
    <Header />
      {(!!isMobile)&&      <div style={{width:'100%', display:'flex', alignItems:'center', alignContent:'center',justifyContent:'center'}}>
        <div style={{display: 'flex', alignItems: 'center' , alignContent:'center', textAlign:'center',justifyContent:'center', flexDirection:'column', width:'100%'}}>


          <Fade direction={'right'}>
          <EntraNelTeam />
          </Fade>
          <Fade direction={'left'}>

          <Visibilita />
          </Fade>
          <Fade direction={'right'}>

          <Target />
          </Fade>
          <Fade direction={'left'}>

          <DecidiTu />
          </Fade>
          <Fade direction={'right'}>

          <FaiTuPrezzo />
          </Fade>
          <Fade direction={'left'}>

          <ServizioMessagistica />
          </Fade>
          <Fade direction={'right'}>

          <Ricavi />
          </Fade>
          <ServizioInnovativo />
          <Fade direction={'right'}>
          <ProvaloGratis />
          </Fade>

        </div>
      </div>
      }
      {(!isMobile)&&        <div style={{width:'100%', display:'flex', alignItems:'center', alignContent:'center',justifyContent:'center', backgroundColor:'rgb(249, 249, 249)'}}>
        <div style={{display: 'flex', alignItems: 'center' , alignContent:'center', textAlign:'center',justifyContent:'center', flexDirection:'column', width:'100%'}}>


        <div style={{width: '80%'}}>
          <Fade direction={'left'}>
          <EntraNelTeam />
          </Fade>
          <Fade direction={'right'}>
            <Visibilita /></Fade>
          <Fade direction={'left'}>
          <Target />
          </Fade>
          <Fade direction={'right'}>

          <DecidiTu />
          </Fade>

          <Fade direction={'left'}>
          <FaiTuPrezzo />
          </Fade>
          <Fade direction={'right'}>

          <ServizioMessagistica />
          </Fade>

          <Fade direction={'left'}>
          <Ricavi />
          </Fade>
          <Fade direction={'right'}>

          <ServizioInnovativo />
          </Fade>

          <Fade direction={'left'}>
          <ProvaloGratis />
          </Fade>

        </div>
      </div>
      </div>
      }
    </>
  );
};

export default HomePage;
