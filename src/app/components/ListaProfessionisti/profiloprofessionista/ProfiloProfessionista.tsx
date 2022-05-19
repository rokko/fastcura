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

const ProfiloProfessionista = () => {
  const location = useLocation();

  const [risposta, setRisposta] = useState<IRisposta>();
  const [avatar, setAvatar] = useState("");
  const [feedback, setFeedback] = useState(0);
  const [voto, setVoto] = useState();
  const [voti, setVoti] = useState<IFeedback[]>();

  let ValoriParametri = location.state as any;
  const professio: IDettagliProfessionista = {
    nome: ValoriParametri.nome,
    cognome: ValoriParametri.cognome,
    citta: ValoriParametri.citta,
    professione: ValoriParametri.professione,
    eta: ValoriParametri.eta,
  };

  const sendFeedback = (value: any) => {
    const prof = {
      id_professionista: ValoriParametri._id,
      voto: value,
    };
    axios
      .post(
        "https://fastcuradev.herokuapp.com/cliente/inserisci-feedback",
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
      .post("https://fastcuradev.herokuapp.com/cliente/ottieni-feedback", prof)
      .then((response: any) => {
        setVoti(response.data);
      });
  };

  const totaleFeedback = useMemo(() => {
    var mediaVoti: number = 0;
    const totaleVoti: number | undefined = voti?.length;
    voti?.map((voto) => {
      console.log(voto);
      mediaVoti = voto.voto + mediaVoti;
    });
    if (totaleVoti !== undefined) {
      return (mediaVoti / totaleVoti) | 0;
    }
  }, [voti]);

  useEffect(() => {
    const prof = {
      id_professionista: ValoriParametri._id,
    };
    axios
      .post(
        "https://fastcuradev.herokuapp.com/professionista/recupera-avatar",
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
    const valore = {
      idprofessionista: ValoriParametri._id,
    };

    axios
      .post("https://fastcuradev.herokuapp.com/cliente/infocurriculum", valore)
      .then((res) => setRisposta(res.data));
  };
  useEffect(() => {
    recuperaCurriculum();
  }, []);

  return (
    <>
      <HeaderNoLogin />
      <TotalContainer>
        <SecondContainer>
          {avatar === "" && <DivCentraleStyle></DivCentraleStyle>}
          {avatar !== "" && <AvatarStyle src={avatar} alt="avatar" />}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextNomeStyle>{professio.nome}</TextNomeStyle>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Rating
                value={!!totaleFeedback ? totaleFeedback : 0}
                precision={0.5}
                readOnly
              />
            </div>
            <Link
              to="/chat"
              state={{ professionista: ValoriParametri }}
              style={{ textDecoration: "none" }}
            >
              <ButtonContattaStyle>
                <TextContatta>Contatta</TextContatta>
              </ButtonContattaStyle>
            </Link>
          </div>
        </SecondContainer>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            padding: "30px",
          }}
        >
          <p>
            Professione : {professio.professione}
            <br />
            Luogo: {professio.citta}
            <br />
            Curriculum
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
                }}
              >
                <TextField
                  sx={{ width: "90%", marginTop: "10px" }}
                  id="standard-basic"
                  label="Titolo di studio"
                  variant="standard"
                  disabled={true}
                ></TextField>
                <TextField
                  sx={{ width: "90%", marginTop: "10px" }}
                  id="standard-basic"
                  label="Master/Specializzazioni"
                  variant="standard"
                  disabled={true}
                ></TextField>
                <TextField
                  sx={{ width: "90%", marginTop: "10px" }}
                  id="standard-basic"
                  label="Numero ordine/albo"
                  variant="standard"
                  disabled={true}
                ></TextField>
                <TextField
                  sx={{ width: "90%", marginTop: "10px" }}
                  id="standard-basic"
                  label="Esperienze"
                  variant="standard"
                  disabled={true}
                ></TextField>
                <TextField
                  multiline
                  rows={5}
                  sx={{ width: "90%" }}
                  id="standard-basic"
                  label="Altro"
                  variant="standard"
                  disabled={true}
                ></TextField>
              </Box>
            </>
          )}
        </Box>
      </TotalContainer>
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
    </>
  );
};

export default ProfiloProfessionista;
