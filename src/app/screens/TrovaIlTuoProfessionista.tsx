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
import { Fade } from "react-awesome-reveal";

const TrovaIlTuoProfessionista = () => {
 const isMobile = useMediaQuery({ query: `(max-width: 760px)` })
 if (!isMobile) return(
     <>
     <Header/>
         <div style={{backgroundColor:'#F9F9F9', marginTop:'100px'}}>
         <div style={{margin:'auto',display:"flex",backgroundColor:'#ffffff', flexDirection:"column",justifyContent:'center', alignContent:'center',alignItems:'center', width:'80%' }}>
             <Fade direction={'right'}>
             <div style={{marginTop:'50px', width:'100%'}}>
                 <BoxSearch/>
             </div>
             </Fade>
             <Fade direction={'left'} >
             <div style={{marginTop:'50px', width:'100%'}}>

             <HaiBisognoDiCure/>
             </div>
                 </Fade>
            <Fade direction={'right'} >
             <div style={{marginTop:'50px', width:'100%'}}>

             <ProblemaRisolto/>
             </div>
            </Fade>
             <Fade direction={'left'} >
             <div style={{marginTop:'50px', width:'100%'}}>

             <ChattaDirettamente/>
             </div>
             </Fade>
             <Fade direction={'right'} >

             <div style={{marginTop:'50px', width:'100%'}}>
             <SeiUnProfessionista />
             </div>
             </Fade>
            <div style={{width:'100%',marginTop:'100px', border: '1px solid #39B1D9', display:'inline-block'}}/>
             <Fade direction={'up'}>
             <div style={{marginTop:'50px', width:'100%'}}>
             <div style={{display:"flex", flexDirection:'row', justifyContent:'space-around'}}>

                 <Login/>
                 <SeiNuovo/>
             </div>
             </div>
             </Fade>

         </div>
         </div>
     </>
 )
 else
return(
    <>
    <Header/>
    <div style={{display: 'flex', alignItems: 'center' , alignContent:'center', textAlign:'center',justifyContent:'center', flexDirection:'column', width:'100%', marginTop:'100px'}}>
        <Fade direction={'right'}>
        <BoxSearch />
        </Fade>
        <Fade direction={'left'} >
    <Lavagna />
        </Fade>
        <Fade direction={'right'} >

        <HaiBisognoDiCure />
        </Fade>
        <Fade direction={'left'}>
    <ProblemaRisolto/>
        </Fade>
        <Fade direction={'right'}>

        <ChattaDirettamente/>
        </Fade>
        <Fade direction={'left'}>
    <FeedBack/>
        </Fade>
        <Fade direction={'right'}>
    <SeiUnProfessionista/>
        </Fade>
        <Fade direction={'left'}>
    <Login/>
        </Fade>
        <Fade direction={'right'}>
    <SeiNuovo/>
        </Fade>


    </div>
    
    </>
)
}

export default TrovaIlTuoProfessionista