import { Checkbox, FormControlLabel, FormGroup, Modal, styled } from '@mui/material'
import { useMediaQuery } from "react-responsive";

import axios from 'axios'
import React from 'react'

const ContainerModalePopUpMessaggio = styled('div')`
    display:flex;
    flex-direction: column;
    padding:2rem;
    width:350px;
    height:700px;
    border-radius:30px;
    background-color:white;
    color:black!important;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 768px) {
      width:300px;
      height:600px
    }
`
const TestoModalePopUpMessaggio=styled('p')`
    font-style: 'Roboto';
    font-weight: 400; 
    font-size: 16px; 
    color:#000000;
    @media (max-width: 768px) {
      margin-top:-20px;
    }`

const Titolo = styled('p')`
    font-style: 'Roboto';
    font-weight: 900;
    font-size: 30px;
    color:#000000;
   `
const TitoliInput = styled('p')`
font-family:'Roboto';
font-weight:700;
font-size:14px;
color:#39B1D9;
`

const InputCampi = styled('input')`
   width:308px;
   height:47px;
   border-radius:10px;
   border:none;
   background-color:#E5E5E5;
   padding-left:20px
`
const InputTesto = styled('textarea')`
   width:308px;
   height:102px;
   border-radius:10px;
   border:none;
   background-color:#E5E5E5;
   padding:20px
   font-style:'Roboto';

`

const ButtonInvia = styled('button')`
margin-top:20px;
width:308px;
height:47px;
background-color:#39B1D9;
font-family:'Roboto';
font-weight:500;
font-size:18px;
color:#FFFFFF;
border:none;
border-radius:40px;
`

const PopUpMessaggio = ({number,open, setOpen}) => {
const [nomecogn, setNomeCogn]=React.useState("")
const [mail, setMail]=React.useState("")
const [numero, setNumero]=React.useState("")
const [messaggio, setMessaggio]=React.useState("")
const [controllo, setControllo]=React.useState(false)

const isMobile=useMediaQuery({ query: `(max-width: 760px)` });

const [handleCheck, setHandleCheck]=React.useState(false)
const [handleCheck2, setHandleCheck2]=React.useState(false)
let numberProf = number.replace(/[^\w\s]/gi, "").replace(/ /g, "")
const messaggioDainviare  = encodeURI('Ciao, ti contatto da Fastcura. Avrei bisogno del tuo aiuto professionale, quando saresti disponibile?')
const urlWhatsapp = 'https://api.whatsapp.com/send/?phone=39'+numberProf+'&text='+messaggioDainviare+'&app_absent=0' 


const handleChange =()=>{
  const controlloCheck =  nomecogn!='' && mail!='' && numero!=''  
  setControllo(controlloCheck)
  console.log(urlWhatsapp)
}

const inviaMessaggioWhatsApp = () => {
    axios
      .post(
        "https://careful-pear-cockatoo.cyclic.app/cliente/signup",
        {nomecognome:nomecogn, email:mail, cellulare:numero}
      )
      .then(function (response) {
       
        // Appending the phone number to the URL
    
    // Open our newly created URL in a new tab to send the message
    setOpen(false)
      })
      .catch(function (error) {
        console.log(error);
      });

}
    console.log('ciao')
    

    return(
        <Modal open={open}>
         
                <ContainerModalePopUpMessaggio>
                <div
            onClick={() => {
              setOpen(false);
            }}
            style={{
              position: "absolute",
              right: "0%",
              top: "-20px",
              width: "50px",
              height: "50px",
              borderRadius: "50px",
              display: "flex",
              backgroundColor: "#39B1D9",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA1UlEQVRIie3UsQ6CQAzGceLqJo+jBNCHcPH9E51QcP472OE8Fe56PVjoREL6/VqiLYq1lixgO3sWUAFX4GiAHiTrNDkdcONdA1AnoLVkIJnjm8uUD2l4ajaXjN7JaGMaVbgaTcGTUQ1uho4EfuHmaAgeMpg5nh118Mb5bw7ec5MFdXB3S/WmmxzDmRefZ3CeT73Ij+vHIWm9d/Y4sP+HZsNDUHM8BjXDNWgy7qFDDKrGgRLopKEHqljUyXLP6x0opxrOgicfBNm8Ay6hDbtUNEfWWqp6Ae770o+mwnJ+AAAAAElFTkSuQmCC" />
          </div>
                    <Titolo>Ci prendiamo <br/>cura di te.</Titolo>
                    <TestoModalePopUpMessaggio>Compila i dati per registrarti ed inviare <br/>direttamente il messaggio al<br/> professionista</TestoModalePopUpMessaggio>
                    <TitoliInput >Nome e Cognome</TitoliInput>
                    <InputCampi placeholder="Nome e Cognome" onChange={(e)=>{ 
                      setNomeCogn(e.target.value) ;handleChange()}}  ></InputCampi>
                    <TitoliInput >Mail</TitoliInput>
                    <InputCampi placeholder="Mail" type='email' value={mail}onChange={(e)=>{
        let x = e.target.value.replace(/\s/g, '');
      setMail(x); handleChange()} }></InputCampi>
                    <TitoliInput>Numero di telefono</TitoliInput>
                    <InputCampi placeholder="Numero di telefono" onKeyPress="return event.charCode != 32" min={9} type='number' onChange={(e)=>{setNumero(e.target.value); handleChange()}}></InputCampi>
                    <TitoliInput>Messaggio</TitoliInput>
                    <InputTesto placeholder="Ciao, ti contatto da Fastcura. Avrei bisogno del tuo aiuto professionale, quando saresti disponibile?" onChange={(e)=>setMessaggio(e.target.value)}></InputTesto>
                    {/* <FormGroup>
             <FormControlLabel
               style={{color:'#273237', fontSize:'12px', fontFamily:'Helvetica'}}
                control={
                  <Checkbox onChange={(x) => setHandleCheck2(!handleCheck2)} />
                }
                label="Ho letto l'informativa privacy e acconsento alla memorizzazione dei miei dati nel vostro archivio secondo quanto stabilito dal regolamento europeo per la protezione dei dati personali n. 679/2016, GDPR."
              />
              <FormControlLabel style={{color:'#273237', fontSize:'12px', fontFamily:'Helvetica'}}
                control={
                  <Checkbox onChange={(x) => setHandleCheck(!handleCheck)} >Accetto termini e condizioni</Checkbox>
                }
                label="Accetto termini e condizioni"
              />{" "}
            </FormGroup>*/}
            {!controllo ? <p style={{fontSize:'14px',color:'red'}}>Attenzione non hai compilato tutti i campi</p> :(
              <div>
             <a role="link" target='_blank' href={urlWhatsapp}>
                    <ButtonInvia onClick={() => inviaMessaggioWhatsApp()}>Invia</ButtonInvia>
                  </a>
                    <p style={{fontSize:'10px', fontWeight:'400', fontFamily:'Helvetica', color:'black'}}>Cliccando invia verrai indirizzato direttamente su WhatsApp </p>
                    </div>
            )}
                </ContainerModalePopUpMessaggio>
        </Modal>

    )
}

export default PopUpMessaggio