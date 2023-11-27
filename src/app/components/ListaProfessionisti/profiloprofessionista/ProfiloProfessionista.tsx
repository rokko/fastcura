import { Box, Button, Stack, Rating, TextField } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import HeaderNoLogin from "../../Cliente/HeaderNoLogin";
import axios from "axios";
import { IDettagliProfessionista, IRisposta, IFeedback } from "./type";
import {
  AvatarStyle,
  ButtonContattaStyle,
  DivCentraleStyle,
  RatingDivStyle,
  SecondContainer,
  TextContatta,
  TextNomeStyle,
  TotalContainer,
} from "./styled";
import { useMemo } from "react";
import { Loader } from "../../../loader";
import PopUpMessaggio from "../../Cliente/Ricerca/PopUpMessaggio";
import avatarNew from "../../../media/avatarNew.png";
interface Icurriculum {
  altro: string | undefined;
  codiceProfessionista: string | undefined;
  esperienze: string | undefined;
  master: string | undefined;
  numeroiscrizione: string | undefined;
  titolodistudio: string | undefined;
}
const ProfiloProfessionista = () => {

  

  const location = useLocation();
  const [aperto , setAperto] = useState(false)
  const [risposta, setRisposta] = useState<IRisposta>();
  const [avatar, setAvatar] = useState("");
  const [feedback, setFeedback] = useState(0);
  const [voto, setVoto] = useState();
  const [curriculum, setCurriculum] = useState<Icurriculum>();
  const [voti, setVoti] = useState<IFeedback[]>();
  const [load, setLoad] = useState(false);
  const [token, setToken] = useState<String | null>();
  let ValoriParametri = location.state as any;

  const takeToken = async () => {
    const tokenTest = await localStorage.getItem("tokenaccess");
    if (!!tokenTest) setToken(tokenTest);
  };
  const professio: IDettagliProfessionista = {
    nome: ValoriParametri.nome,
    cognome: ValoriParametri.cognome,
    citta: ValoriParametri.citta,
    professione: ValoriParametri.professione,
    eta: ValoriParametri.eta,
  };


  let numberProf = ValoriParametri.number.replace(/[^\w\s]/gi, "").replace(/ /g, "")
  const messaggioDainviare =encodeURI('Ciao, ti contatto da Fastcura. Avrei bisogno del tuo aiuto professionale, quando saresti disponibile?')
  const urlWhatsapp = 'https://api.whatsapp.com/send/?phone=39'+numberProf+'&text='+messaggioDainviare+'&app_absent=0' 

  const sendFeedback = (value: any) => {
    const prof = {
      id_professionista: ValoriParametri._id,
      voto: value,
    };
    axios
      .post(
        "https://careful-pear-cockatoo.cyclic.app/cliente/inserisci-feedback",
        prof
      )
      .then((response: any) => {
        if (response.data.message === 1) {
          setAvatar(response.data.avatar.posizione);
        } else {
          setAvatar("");
        }
      });
  };
  const recuperaFeedback = async () => {
    const prof = {
      id_professionista: ValoriParametri._id,
    };
    axios
      .post(
        "https://careful-pear-cockatoo.cyclic.app/cliente/ottieni-feedback",
        prof
      )
      .then((response: any) => {
        setVoti(response.data);
      });
  };

  const totaleFeedback = useMemo(() => {
    var mediaVoti: number = 0;
    const totaleVoti: number | undefined = voti?.length;
    voti?.map((voto) => {
      mediaVoti = voto.voto + mediaVoti;
    });
    if (totaleVoti !== undefined) {
      return (mediaVoti / totaleVoti) | 0;
    }
  }, [voti]);

  useEffect(() => {
    takeToken();
    const prof = {
      id_professionista: ValoriParametri._id,
    };
    axios
      .post(
        "https://careful-pear-cockatoo.cyclic.app/professionista/recupera-avatar",
        prof
      )
      .then((response: any) => {
        if (response.data.message === 1) {
          setAvatar(response.data.avatar.posizione);
        } else {
          setAvatar("");
        }
      });
  }, []);
  useEffect(() => {
    recuperaFeedback();
  }, []);
  const recuperaCurriculum = () => {
    setLoad(true);
    const valore = {
      idprofessionista: ValoriParametri._id,
    };

    axios
      .post(
        "https://careful-pear-cockatoo.cyclic.app/cliente/infocurriculum",
        valore
      )
      .then((res) => {
        console.log(res.data);
        setLoad(false);
        setRisposta(res.data);
        setCurriculum(res.data.RicercaCurriculum);
      });
  };
  useEffect(() => {
    recuperaCurriculum();
  }, []);

  return (
    <>
      <Loader isLoading={load} />
      <HeaderNoLogin />
      <TotalContainer>
        <SecondContainer>
          {avatar === "" && <img src={avatarNew} alt='avatar new' style={{width:'80px', height:'80px', marginRight:'30px'}}/>}
          {avatar !== "" && <AvatarStyle src={avatar} alt="avatar" />}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextNomeStyle>{professio.nome}</TextNomeStyle>
            <br/>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Rating
                value={!!totaleFeedback ? totaleFeedback : 0}
                precision={0.5}
                readOnly
              />
            </div>
            {token ? (
           <a href={urlWhatsapp} target="_blank" rel="noreferrer">
              <ButtonContattaStyle>
                <TextContatta>Contatta</TextContatta>
              </ButtonContattaStyle>
            </a>
            )
            : ( 
              <ButtonContattaStyle onClick={()=> setAperto(true)}>
              <TextContatta>Contatta</TextContatta>
            </ButtonContattaStyle>
              
            )
}
          </div>
        </SecondContainer>
        <PopUpMessaggio open={aperto} setOpen={setAperto} number={ValoriParametri.number}/>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            padding: "30px",
          }}
        >
          <p style={{ fontStyle: 'Roboto',
    fontWeight: 400,
  
    fontSize: '18px', color:'black'}} >
             <span style={{fontWeight:'900'}}>Professione</span>: {professio.professione}
            <br />
            <span style={{fontWeight:'900'}}>Luogo:</span> {professio.citta}
            <br />
           
          </p>
          {risposta?.ris === 2 && (
            <>
              <Box
                style={{
                  border: "1px solid #39B1D9",
                  backgroundColor: "#F4F4F4",
                  width: "300px",
                  padding: "15px",
                  height: "400px",
                  borderRadius: "30px",
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  alignItems: "center",
                  fontStyle: 'Roboto',
    fontWeight: 400,
  
                }}
              >
                <p>L'utente non ha ancora caricato un curriculum</p>
              </Box>
            </>
          )}
          {risposta?.ris === 1 && (
            <>
              <Box
                style={{
                  border: "1px solid #39B1D9",
                  backgroundColor: "#F4F4F4",
                  width: "300px",
                  padding: "15px",
                  height: "400px",
                  borderRadius: "30px",
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  alignItems: "center",
                  fontStyle: 'Roboto',
                  fontWeight: 400,
                
                }}
              >
                <TextField
                  InputLabelProps={{ shrink: true }}
                  sx={{ width: "90%", marginTop: "10px" }}
                  id="standard-basic"
                  label="Titolo di studio"
                  variant="standard"
                  disabled={true}
                  value={curriculum?.titolodistudio}
                ></TextField>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  sx={{ width: "90%", marginTop: "10px" }}
                  id="standard-basic"
                  label="Master/Specializzazioni"
                  variant="standard"
                  disabled={true}
                  value={curriculum?.master}
                ></TextField>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  sx={{ width: "90%", marginTop: "10px" }}
                  id="standard-basic"
                  label="Numero ordine/albo"
                  variant="standard"
                  disabled={true}
                  value={curriculum?.numeroiscrizione}
                ></TextField>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  sx={{ width: "90%", marginTop: "10px" }}
                  id="standard-basic"
                  label="Esperienze"
                  variant="standard"
                  multiline
                  maxRows={5}
                  rows={3}
                  disabled={true}
                  value={curriculum?.esperienze}
                ></TextField>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  multiline
                  rows={5}
                  sx={{ width: "90%" }}
                  id="standard-basic"
                  label="Altro"
                  variant="standard"
                  disabled={true}
                  value={curriculum?.altro}
                ></TextField>
              </Box>
            </>
          )}
        </Box>
      </TotalContainer>
      {!!token && (
        <RatingDivStyle>
          <p>Lascia un feedback con un voto da 1 a 5</p>
          <Stack>
            <Rating
              value={voto}
              onChange={(e, value) => sendFeedback(value)}
              precision={0.5}
              size={"large"}
            />
          </Stack>
        </RatingDivStyle>
      )}
    </>
  );
};

export default ProfiloProfessionista;
