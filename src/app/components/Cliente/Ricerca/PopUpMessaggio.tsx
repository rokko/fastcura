import { Checkbox, FormControlLabel, FormGroup, Modal, styled } from '@mui/material'
import React from 'react'

const ContainerModalePopUpMessaggio = styled('div')`
    display:flex;
    flex-direction: column;
    padding:2rem;
    width:350px;
    height:847px;
    border-radius:30px;
    background-color:white;
    color:black!important;
`
const TestoModalePopUpMessaggio=styled('p')`
    font-style: 'Roboto';
    font-weight: 400; 
    font-size: 16px; 
    color:#000000;`

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
   padding-left:20px

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

const PopUpMessaggio = ({open, setOpen}) => {
    const [nomecogn, setNomeCogn]=React.useState("")
    const [mail, setMail]=React.useState("")
    const [numero, setNumero]=React.useState("")
    const [messaggio, setMessaggio]=React.useState("")
const [handleCheck, setHandleCheck]=React.useState(false)
const [handleCheck2, setHandleCheck2]=React.useState(false)

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
                    <InputTesto placeholder="Messaggio" onChange={(e)=>setMessaggio(e.target.value)}></InputTesto>
                    <FormGroup>
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
            </FormGroup>
                    <ButtonInvia onClick={() => setOpen(false)}>Invia</ButtonInvia>
                    <p style={{fontSize:'10px', fontWeight:'400', fontFamily:'Helvetica', color:'black'}}>Cliccando invia verrai indirizzato direttamente su WhatsApp </p>
                </ContainerModalePopUpMessaggio>
        </Modal>

    )
}

export default PopUpMessaggio