import React from 'react'
import { useMediaQuery } from 'react-responsive';
import Header from '../components/TrovaIlTuoProfessionista/Header'
import BoxSearch from '../components/TrovaIlTuoProfessionista/BoxSearch'
import Lavagna from '../components/TrovaIlTuoProfessionista/Lavagna'
import HaiBisognoDiCure from '../components/TrovaIlTuoProfessionista/HaiBisognoDiCure'
import ProblemaRisolto from '../components/TrovaIlTuoProfessionista/ProblemaRisolto'
import ChattaDirettamente from '../components/TrovaIlTuoProfessionista/ChattaDirettamente'
import FeedBack from '../components/TrovaIlTuoProfessionista/FeedBack'
import SeiUnProfessionista from '../components/TrovaIlTuoProfessionista/SeiUnProfessionista'
import Login from '../components/General/Login/Login'
import SeiNuovo from '../components/TrovaIlTuoProfessionista/SeiNuovo'
const TrovaIlTuoProfessionista = () => {
 const isMobile = useMediaQuery({ query: `(max-width: 760px)` })
 if (!isMobile) return(
     <>
     <Header/>
     </>
 )
 else
return(
    <>
    <Header/>
    <div style={{display: 'flex', alignItems: 'center' , alignContent:'center', textAlign:'center',justifyContent:'center', flexDirection:'column', width:'100%'}}>
    <BoxSearch />
   
    <Lavagna />
    <HaiBisognoDiCure />
    <ProblemaRisolto/>
    <ChattaDirettamente/>
    <FeedBack/>
    <SeiUnProfessionista/>
    <Login/>
    <SeiNuovo/>


    </div>
    
    </>
)
}

export default TrovaIlTuoProfessionista