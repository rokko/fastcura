import { Modal, styled } from "@mui/material";
import axios from "axios";
import React, { useMemo } from "react";

const ContainerSegnalazione = styled("div")`
    display: flex;
    flex-direction:column;
    width:350px;
    height: 328px;
    border-radius:25px;
    background-color:white;
    align-items:center;
    border:none;
    gap:2rem;
    padding:1rem;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const InputSegnalazione = styled("input")`
padding-left:10px;
background-color:#E5E5E5;
border: 1px solid #39B1D9;
width:328px;
height: 47px;
border-radius:40px
`
const ButtonFatto = styled("button")`
width:125px;
height:35px;
border-radius:40px;
border:none;
color:white;
background-color:#39B1D9
`

const SegnalazioneMancanzaProfessionista = ({cittaprofessione, apri, chiudi}) => {
    
    const [email, setEmail] = React.useState<string>("");
    const inviaSegnalazione = () => {
        chiudi(false)
        console.log('EMAIL', email)
        console.log('CITTA e PROFESSIONE', cittaprofessione)
        axios.post("https://careful-pear-cockatoo.cyclic.app/professionista/inviaSegnalazione", {email, citta : cittaprofessione.citta , professione: cittaprofessione.professione})
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const validationEmail = useMemo(() => {
        let check =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email?.match(check)) {
          return true;
        } else {
          return false;
        }
      }, [email]);

    return (
        <div>
            <Modal
                open={apri}>
             <ContainerSegnalazione>
             <div
            onClick={() => {
              chiudi(false);
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
                <p style={{fontSize:'18px', fontWeight:'400', fontFamily:'Helvetica', color:'black'}}>Inserisci la tua email se vuoi essere<br/> contattato quando verrà inserito<br/>
il professionista che stavi cercando</p>
                     <InputSegnalazione placeholder="      Indirizzo email" onChange={(e) => setEmail(e.target.value)}/>
                     <ButtonFatto onClick={()=>inviaSegnalazione()} disabled={!validationEmail}>Fatto</ButtonFatto>
             </ContainerSegnalazione>
           </Modal>
        </div>
    );
};

export default SegnalazioneMancanzaProfessionista;
