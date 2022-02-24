import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import {useMediaQuery} from "react-responsive";


const ProvaloGratis = () => {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

    return(<>
        {(!!isMobile) && <>
        <div style={{display:'flex', marginTop:'50px',flexDirection:'row', justifyContent:"space-around", width:'100%', maxWidth:'100%', marginBottom:'30px'}}>
            <div style={{display:'flex', flexDirection:'column', justifyContent:"space-around",alignContent:'center', alignItems:'center' }}>


            <Typography fontWeight="bold" fontSize={25}>Provalo gratis!</Typography>


            <Typography fontSize={15} color="#6D6D6D" >Inizia la prova gratuita di 30 giorni. Potrai disdire quando vuoi.</Typography>

            <Typography fontSize={15} color="#6D6D6D" marginBottom={8}>Fastcura ha l'obiettivo di darti visibilità sul tuo territorio, allargando la tua rete di clienti</Typography>

            <Link to = '/signup-professionista'>

                <button style={{width:210, height:35,backgroundColor:'#39B1D9',fontSize:'1rem', borderRadius:20,border:'none',fontWeight:'bold', color:'#ffffff', fontStyle:'Charter'}}>Inizia la prova gratuita</button>
            </Link>
            </div>
        </div>
        </>}
            {(!isMobile)&&<>
                <div style={{display:'flex', marginTop:'50px',flexDirection:'row', justifyContent:"space-around", width:'100%', maxWidth:'100%', marginBottom:'30px'}}>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:"space-around",alignContent:'center', alignItems:'center' }}>


                        <Typography fontWeight="bold" fontFamily={'Charter'} color={'#000000'} fontSize={'48px'}>Provalo gratis!</Typography>


                        <Typography fontSize={'24px'} fontFamily={'Charter'} color="#6D6D6D" >Inizia la prova gratuita di 30 giorni. Potrai disdire quando vuoi.</Typography>

                        <Typography fontSize={'24px'} fontFamily={'Charter'} color="#6D6D6D" marginBottom={8}>Fastcura ha l'obiettivo di darti visibilità sul tuo territorio, allargando la tua rete di clienti</Typography>

                        <Link to = '/signup-professionista'>

                            <button style={{width:210, height:35,backgroundColor:'#39B1D9',fontSize:'1rem', borderRadius:20,border:'none',fontWeight:'bold', color:'#ffffff', fontStyle:'Charter'}}>Inizia la prova gratuita</button>
                        </Link>
                    </div>
                </div>

            </>}
            </>


)

}

export default ProvaloGratis