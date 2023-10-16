import React, { useState } from 'react'
import HeaderNoLogin from '../../../components/Cliente/HeaderNoLogin'
import Footer from '../../../components/General/Footer'
import { Rating, styled } from '@mui/material'
import Textarea from '@mui/joy/Textarea';

const ContainerRecensioneStile = styled('div')`
    display:flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    padding:2rem;
    gap:3rem;
`

const TitoloRecensioneStile = styled('p')`
    font-style: 'Roboto';
    font-weight: 700;
    font-size:43px;
    color:black;
`
const SezioneVoto = styled('div')`
display:flex;
flex-direction:row;
width:600px;
align-items:center;
align-content:center;
justify-content:space-between;
`
const ButtonVotazione = styled('button')
`
border:none;
background: #39b1d9;
border-radius:40px;
color:white;
width:308px;
height:45px;
font-style: 'Roboto';
font-weight: 700;
`
const TestiVotazione = styled('p')`
    font-style: 'Roboto';
    font-weight: 700;
    font-size:24px;
    color:black;`



const LasciaRecensioni = () => {
    const [pagina,setPagina]=useState(1)

    const inviaRecensione = () => {
        console.log('recensione')
    }
    return(
        <>
              <HeaderNoLogin />
              {pagina===1 && <ContainerRecensioneStile >
              <TitoloRecensioneStile>Dedicaci due minuti per valutare<br/> la tua esperienza
            e</TitoloRecensioneStile>
            <TitoloRecensioneStile style={{color:"#39b1d9", fontSize:"32px"}}>Come reputi la tua esperienza con Fastcura?</TitoloRecensioneStile>
            <Rating sx={{ "& .MuiRating-iconFilled": {
      color: "#39b1d9"
    },
    "& .MuiRating-iconHover": {
      color: "#39b1d9"
    }}}></Rating>

            <ButtonVotazione onClick={()=>setPagina(2)}>Continua</ButtonVotazione>
            </ContainerRecensioneStile>}
            {pagina===2 && <ContainerRecensioneStile>
              <TitoloRecensioneStile>Dedicaci due minuti per valutare<br/> la tua esperienza
            e</TitoloRecensioneStile>
            <TitoloRecensioneStile style={{color:"#39b1d9", fontSize:"32px"}}>Come è andata con il professionista?</TitoloRecensioneStile>
            <div style={{display:'flex', flexDirection:'column', gap:'0.5rem'}}>
            <SezioneVoto><TestiVotazione>Professionalità</TestiVotazione> <Rating sx={{ "& .MuiRating-iconFilled": {
      color: "#39b1d9"
    },
    "& .MuiRating-iconHover": {
      color: "#39b1d9"
    }}}></Rating></SezioneVoto>
            <SezioneVoto><TestiVotazione>Puntualità</TestiVotazione><Rating sx={{ "& .MuiRating-iconFilled": {
      color: "#39b1d9"
    },
    "& .MuiRating-iconHover": {
      color: "#39b1d9"
    }}}></Rating></SezioneVoto>
            <SezioneVoto><TestiVotazione>Prezzo</TestiVotazione><Rating sx={{ "& .MuiRating-iconFilled": {
      color: "#39b1d9"
    },
    "& .MuiRating-iconHover": {
      color: "#39b1d9"
    }}}></Rating></SezioneVoto>
</div>

            <ButtonVotazione onClick={()=>setPagina(3)}>Continua</ButtonVotazione>
            </ContainerRecensioneStile>}
            {pagina===3 && <ContainerRecensioneStile>
              <TitoloRecensioneStile>Dedicaci due minuti per valutare<br/> la tua esperienza
            e</TitoloRecensioneStile>
            <TitoloRecensioneStile style={{color:"#39b1d9", fontSize:"32px"}}>Scrivi una recensione del professionista</TitoloRecensioneStile>
           
            <Textarea minRows={10} size="lg" sx={{width:'600px'}}placeholder="Scrivi qui.." />

            <ButtonVotazione onClick={()=>inviaRecensione()}>Fine</ButtonVotazione>
            </ContainerRecensioneStile>}
          
          

            <Footer />
        </>
        
    )
}

export default LasciaRecensioni