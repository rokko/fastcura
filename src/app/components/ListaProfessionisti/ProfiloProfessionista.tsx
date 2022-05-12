import {Box, Button, TextField} from "@mui/material";
import {Link, useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
//import Header from "../Cliente/Header";
import HeaderNoLogin from "../Cliente/HeaderNoLogin";
import axios from "axios";

interface IDettagliProfessionista {
    nome: string;
    cognome: string;
    citta: string;
    professione: string;
    eta: number;
}

interface IRisposta {
    ris: number;
}

const ProfiloProfessionista = () => {
    const location = useLocation();
    const [risposta, setRisposta] = useState<IRisposta>();
    const [avatar, setAvatar] = useState("");
    const [voto, setVoto] = useState('')
    const sendFeedback= () => {

        const prof = {
            id_professionista: ValoriParametri._id,
            voto : Number(voto),
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

    }
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

    let ValoriParametri = location.state as any;
    const professio: IDettagliProfessionista = {
        nome: ValoriParametri.nome,
        cognome: ValoriParametri.cognome,
        citta: ValoriParametri.citta,
        professione: ValoriParametri.professione,
        eta: ValoriParametri.eta,
    };

    return (
        <>
            <HeaderNoLogin/>
            <Box
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {avatar === "" && (
                        <div
                            style={{
                                marginRight: "20px",
                                width: "50px",
                                height: "50px",
                                backgroundColor: "grey",
                                borderRadius: "50%",
                            }}
                        ></div>
                    )}
                    {avatar !== "" && (
                        <img
                            src={avatar}
                            alt="avatar"
                            height={"50px"}
                            width={"50px"}
                            style={{borderRadius: "100%"}}
                        />
                    )}
                    <p></p>

                    <div style={{display: "flex", flexDirection: "column"}}>
                        <p style={{fontSize: "14px", alignSelf: "flex-start"}}>
                            {professio.nome}
                        </p>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24.001"
                                height="22.358"
                                viewBox="0 0 24.001 22.358"
                            >
                                <path
                                    id="Icon_ionic-ios-star"
                                    data-name="Icon ionic-ios-star"
                                    d="M24.378,10.768H16.826L14.531,3.919a.832.832,0,0,0-1.561,0l-2.295,6.849h-7.6a.824.824,0,0,0-.821.821.6.6,0,0,0,.015.139.789.789,0,0,0,.344.58l6.207,4.374L6.434,23.608a.824.824,0,0,0,.282.924.794.794,0,0,0,.462.2,1.006,1.006,0,0,0,.513-.185L13.75,20.23l6.058,4.318a.962.962,0,0,0,.513.185.738.738,0,0,0,.457-.2.814.814,0,0,0,.282-.924l-2.382-6.926,6.156-4.415.149-.128a.861.861,0,0,0,.267-.549A.869.869,0,0,0,24.378,10.768Z"
                                    transform="translate(-1.75 -2.875)"
                                    fill="#eadd45"
                                    stroke="#eadd45"
                                    stroke-width="1"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24.001"
                                height="22.358"
                                viewBox="0 0 24.001 22.358"
                            >
                                <path
                                    id="Icon_ionic-ios-star"
                                    data-name="Icon ionic-ios-star"
                                    d="M24.378,10.768H16.826L14.531,3.919a.832.832,0,0,0-1.561,0l-2.295,6.849h-7.6a.824.824,0,0,0-.821.821.6.6,0,0,0,.015.139.789.789,0,0,0,.344.58l6.207,4.374L6.434,23.608a.824.824,0,0,0,.282.924.794.794,0,0,0,.462.2,1.006,1.006,0,0,0,.513-.185L13.75,20.23l6.058,4.318a.962.962,0,0,0,.513.185.738.738,0,0,0,.457-.2.814.814,0,0,0,.282-.924l-2.382-6.926,6.156-4.415.149-.128a.861.861,0,0,0,.267-.549A.869.869,0,0,0,24.378,10.768Z"
                                    transform="translate(-1.75 -2.875)"
                                    fill="#eadd45"
                                    stroke="#eadd45"
                                    stroke-width="1"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24.001"
                                height="22.358"
                                viewBox="0 0 24.001 22.358"
                            >
                                <path
                                    id="Icon_ionic-ios-star"
                                    data-name="Icon ionic-ios-star"
                                    d="M24.378,10.768H16.826L14.531,3.919a.832.832,0,0,0-1.561,0l-2.295,6.849h-7.6a.824.824,0,0,0-.821.821.6.6,0,0,0,.015.139.789.789,0,0,0,.344.58l6.207,4.374L6.434,23.608a.824.824,0,0,0,.282.924.794.794,0,0,0,.462.2,1.006,1.006,0,0,0,.513-.185L13.75,20.23l6.058,4.318a.962.962,0,0,0,.513.185.738.738,0,0,0,.457-.2.814.814,0,0,0,.282-.924l-2.382-6.926,6.156-4.415.149-.128a.861.861,0,0,0,.267-.549A.869.869,0,0,0,24.378,10.768Z"
                                    transform="translate(-1.75 -2.875)"
                                    fill="#eadd45"
                                    stroke="#eadd45"
                                    stroke-width="1"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24.001"
                                height="22.358"
                                viewBox="0 0 24.001 22.358"
                            >
                                <path
                                    id="Icon_ionic-ios-star"
                                    data-name="Icon ionic-ios-star"
                                    d="M24.378,10.768H16.826L14.531,3.919a.832.832,0,0,0-1.561,0l-2.295,6.849h-7.6a.824.824,0,0,0-.821.821.6.6,0,0,0,.015.139.789.789,0,0,0,.344.58l6.207,4.374L6.434,23.608a.824.824,0,0,0,.282.924.794.794,0,0,0,.462.2,1.006,1.006,0,0,0,.513-.185L13.75,20.23l6.058,4.318a.962.962,0,0,0,.513.185.738.738,0,0,0,.457-.2.814.814,0,0,0,.282-.924l-2.382-6.926,6.156-4.415.149-.128a.861.861,0,0,0,.267-.549A.869.869,0,0,0,24.378,10.768Z"
                                    transform="translate(-1.75 -2.875)"
                                    fill="#eadd45"
                                    stroke="#eadd45"
                                    stroke-width="1"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24.001"
                                height="22.358"
                                viewBox="0 0 24.001 22.358"
                            >
                                <path
                                    id="Icon_ionic-ios-star"
                                    data-name="Icon ionic-ios-star"
                                    d="M24.378,10.768H16.826L14.531,3.919a.832.832,0,0,0-1.561,0l-2.295,6.849h-7.6a.824.824,0,0,0-.821.821.6.6,0,0,0,.015.139.789.789,0,0,0,.344.58l6.207,4.374L6.434,23.608a.824.824,0,0,0,.282.924.794.794,0,0,0,.462.2,1.006,1.006,0,0,0,.513-.185L13.75,20.23l6.058,4.318a.962.962,0,0,0,.513.185.738.738,0,0,0,.457-.2.814.814,0,0,0,.282-.924l-2.382-6.926,6.156-4.415.149-.128a.861.861,0,0,0,.267-.549A.869.869,0,0,0,24.378,10.768Z"
                                    transform="translate(-1.75 -2.875)"
                                    fill="#eadd45"
                                    stroke="#eadd45"
                                    stroke-width="1"
                                />
                            </svg>
                        </div>
                        <Link
                            to="/chat"
                            state={{professionista: ValoriParametri}}
                            style={{textDecoration: "none"}}
                        >
                            <Button
                                style={{
                                    backgroundColor: "#39B1D9",
                                    width: "110px",
                                    height: "30px",
                                    marginTop: "20px",
                                    textTransform: "none",
                                    borderRadius: "30px",
                                    textDecoration: "none",
                                }}
                            >
                                <p style={{color: "#ffffff", textDecoration: "none"}}>
                                    Contatta
                                </p>
                            </Button>
                        </Link>
                    </div>
                </div>
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
                        <br/>
                        Luogo: {professio.citta}
                        <br/>
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
                                    sx={{width: "90%", marginTop: "10px"}}
                                    id="standard-basic"
                                    label="Titolo di studio"
                                    variant="standard"
                                    disabled={true}
                                ></TextField>
                                <TextField
                                    sx={{width: "90%", marginTop: "10px"}}
                                    id="standard-basic"
                                    label="Master/Specializzazioni"
                                    variant="standard"
                                    disabled={true}
                                ></TextField>
                                <TextField
                                    sx={{width: "90%", marginTop: "10px"}}
                                    id="standard-basic"
                                    label="Numero ordine/albo"
                                    variant="standard"
                                    disabled={true}
                                ></TextField>
                                <TextField
                                    sx={{width: "90%", marginTop: "10px"}}
                                    id="standard-basic"
                                    label="Esperienze"
                                    variant="standard"
                                    disabled={true}
                                ></TextField>
                                <TextField
                                    multiline
                                    rows={5}
                                    sx={{width: "90%"}}
                                    id="standard-basic"
                                    label="Altro"
                                    variant="standard"
                                    disabled={true}
                                ></TextField>
                            </Box>
                        </>
                    )}
                </Box>
            </Box>
            <div style={{display: 'flex', flexDirection: 'column', alignContent:'center', alignItems:'center'}}>
                <p>Lascia un feedback con un voto da 1 a 5</p>
                <TextField  sx={{borderRadius:'20px', height:'30px',width:'100px', marginBottom:'30px'}} type={'number'} onChange={(e) => setVoto(e.target.value)} ></TextField>
                <button style = {{
                    width: '150px',
                    height: '30px',
                    borderRadius:'20px',
                    border:'none',
                    backgroundColor: 'rgb(57, 177, 217)',
                    display:'flex',
                    alignItems:'center',
                    alignContent:'center',
                    justifyContent:'center'
                }}
                        onClick={() =>sendFeedback()}><p style={{color:'white', fontWeight:'bold'}}>Invia</p></button>
            </div>
        </>
    );
};

export default ProfiloProfessionista;
