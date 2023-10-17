import { Checkbox, FormControlLabel, FormGroup, Modal, styled } from '@mui/material'
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
    position: absolute;
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
const [handleCheck, setHandleCheck]=React.useState(false)
const [handleCheck2, setHandleCheck2]=React.useState(false)
const inviaMessaggioWhatsApp = () => {
    axios
      .post(
        "https://careful-pear-cockatoo.cyclic.app/cliente/signup",
        {nomecognome:nomecogn, email:mail, cellulare:numero}
      )
      .then(function (response) {
        let numberProf = number.replace(/[^\w\s]/gi, "").replace(/ /g, "")
        // Appending the phone number to the URL
        let url = `https://wa.me/send?phone=${numberProf}`;
    
    // Appending the message to the URL by encoding it
    url += `&text=${encodeURI('Ciao, ti contatto da Fastcura. Avrei bisogno del tuo aiuto professionale, quando saresti disponibile?'
    )}&app_absent=0`;
    
    // Open our newly created URL in a new tab to send the message
    window.open(url)
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
                    <Titolo>Ci prendiamo <br/>cura di te.</Titolo>
                    <TestoModalePopUpMessaggio>Compila i dati per registrarti ed inviare <br/>direttamente il messaggio al<br/> professionista</TestoModalePopUpMessaggio>
                    <TitoliInput >Nome e Cognome</TitoliInput>
                    <InputCampi placeholder="Nome e Cognome" onChange={(e)=>setNomeCogn(e.target.value)}></InputCampi>
                    <TitoliInput >Mail</TitoliInput>
                    <InputCampi placeholder="Mail" onChange={(e)=>setMail(e.target.value)}></InputCampi>
                    <TitoliInput>Numero di telefono</TitoliInput>
                    <InputCampi placeholder="Numero di telefono" onChange={(e)=>setNumero(e.target.value)}></InputCampi>
                    <TitoliInput>Messaggio</TitoliInput>
                    <InputTesto placeholder="'Ciao, ti contatto da Fastcura. Avrei bisogno del tuo aiuto professionale, quando saresti disponibile?'" onChange={(e)=>setMessaggio(e.target.value)}></InputTesto>
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
                    <ButtonInvia onClick={() => inviaMessaggioWhatsApp()}>Invia</ButtonInvia>
                    <p style={{fontSize:'10px', fontWeight:'400', fontFamily:'Helvetica', color:'black'}}>Cliccando invia verrai indirizzato direttamente su WhatsApp </p>
                </ContainerModalePopUpMessaggio>
        </Modal>

    )
}

export default PopUpMessaggio