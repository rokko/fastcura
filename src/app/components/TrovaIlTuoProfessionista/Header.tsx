import React, {useEffect, useState} from "react";
import { Alert, Container, makeStyles, Snackbar } from "@mui/material";
import ButtonIscriviti from "./ButtonIscriviti";
import { Link } from "react-router-dom";
import BoxLogin from "../General/Login/BoxLogin";
import ModalLogin from "../General/ModalLogin";
import { useMediaQuery } from "react-responsive";
import VerticalMenu from "../Professionista/VerticalMenu";
import axios from "axios";

const Header = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
const [utente,setUtente] = useState<any>()
  const [pip, setPip] = useState(false);
  const [oklog, setOklog] = useState(false);
  const [kolog, setKolog] = useState(false);
  const [open, setOpen] = useState(false);
  const [pop, setPop] = useState(false)
  const [token, setToken] = useState('')
    const takeToken = async () => {
        const tokenTest = await localStorage.getItem("tokenaccess");
        if (!!tokenTest) setToken(tokenTest);
    };

  const takeUtente =async () => {
      if (token!=='') {
          const config = {
              headers: { Authorization: `Bearer ${token}` },
          };

          axios
              .get(
                  "https://fastcuradev.herokuapp.com/professionista/info",
                  config
              )
              .then((response:any) => {
                  setUtente(response.data);
              })
              .catch((e:any) => console.error(e));
      }
      if (!!token) {
          const config = {
              headers: { Authorization: `Bearer ${token}` },
          };

          axios
              .post(
                  "https://fastcuradev.herokuapp.com/cliente/infocliente",
                  "",
                  config
              )
              .then((response) => {
                  setUtente(response.data);
              })
              .catch((e) => console.error(e));
      }
  }

  useEffect(()=>{
      takeToken()
      takeUtente()
  },[token])
  return (
      <>
    <div
      style={
         isMobile
          ? {
             width:'100%',
             overflow:'hidden',
              position: "fixed",
              top: 0,
             display:'flex',
             alignItems:'center',
             alignContent:'center',
             justifyContent:'space-evenly',
              background: "white",
              zIndex: "1000001",
             borderBottom:'3px solid rgb(57, 177, 217)',
             flexDirection:'row',
             height:'50px',
             gap:'10%'
            }
          : {
              position: "fixed",
              width: "100%",
              zIndex: "1000001",
              top: 0,
              background: "white",
                 borderBottom:'3px solid rgb(57, 177, 217)',
             display:'flex',
              height:'50px',
                 justifyContent:'space-evenly',

             }

      }
    >

        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100.439"
            height="22.814"
            viewBox="0 0 123.439 22.814"
          >
            <g
              id="Raggruppa_138"
              data-name="Raggruppa 138"
              transform="translate(-13.558 -24.093)"
            >
              <path
                id="Tracciato_31"
                data-name="Tracciato 31"
                d="M278.57,125.341h3.055v-5.86h7.259v-2.829h-7.259v-3.4h8.184v-2.829H278.57Z"
                transform="translate(-226.655 -82.406)"
                fill="#e93323"
              />
              <path
                id="Tracciato_32"
                data-name="Tracciato 32"
                d="M341.743,126.828a10.124,10.124,0,0,0-4.2.907l-.217.1.824,2.445.259-.107a7.94,7.94,0,0,1,3-.658c1.625,0,2.4.64,2.431,2.014a9.727,9.727,0,0,0-2.657-.36,5.622,5.622,0,0,0-3.385.915,3.363,3.363,0,0,0-1.361,2.884,3.289,3.289,0,0,0,1.25,2.693h0a4.473,4.473,0,0,0,2.857.921,4.71,4.71,0,0,0,3.274-1.2v.969h2.952v-6.7a4.717,4.717,0,0,0-1.246-3.534A5.066,5.066,0,0,0,341.743,126.828Zm-.493,9.418a2.245,2.245,0,0,1-1.341-.378,1.225,1.225,0,0,1-.514-1.046c0-.664.237-1.547,2.287-1.547a6.64,6.64,0,0,1,2.2.352v.558a1.767,1.767,0,0,1-.721,1.479A3.051,3.051,0,0,1,341.249,136.246Z"
                transform="translate(-272.56 -95.42)"
                fill="#e93323"
              />
              <path
                id="Tracciato_33"
                data-name="Tracciato 33"
                d="M399.288,131.27l-1.08-.37a5.183,5.183,0,0,1-.584-.229c-.4-.223-.606-.457-.606-.736,0-.376.143-.807,1.259-.807a5.88,5.88,0,0,1,2.929.99l.233.14,1.238-2.219-.2-.135a7.412,7.412,0,0,0-4.134-1.277,4.417,4.417,0,0,0-2.9.944,3.274,3.274,0,0,0-1.228,2.671,2.846,2.846,0,0,0,1.2,2.411,7.228,7.228,0,0,0,2.382,1.027q.654.205,1.074.348a3.625,3.625,0,0,1,.573.234c.6.3.6.593.6.731,0,.249,0,.91-1.423.91a5.836,5.836,0,0,1-3.4-1.286l-.223-.163-1.394,2.119.189.149a7.531,7.531,0,0,0,4.769,1.681,4.815,4.815,0,0,0,3.021-.9,3.381,3.381,0,0,0,1.272-2.817C402.838,133.152,401.641,132,399.288,131.27Z"
                transform="translate(-317.887 -95.262)"
                fill="#e93323"
              />
              <path
                id="Tracciato_34"
                data-name="Tracciato 34"
                d="M447.334,113.105H444.32v2.982h-1.377v2.664h1.377v5.454c0,2.257,1.172,3.45,3.389,3.45a4.769,4.769,0,0,0,2.37-.589l.134-.075v-2.615l-.38.191a3.158,3.158,0,0,1-1.425.342c-.742,0-1.074-.337-1.074-1.094v-5.063h2.92v-2.664h-2.92Z"
                transform="translate(-357.037 -84.535)"
                fill="#e93323"
              />
              <path
                id="Tracciato_35"
                data-name="Tracciato 35"
                d="M492.237,134.324a3.642,3.642,0,0,1-2.629,1.257,2.765,2.765,0,0,1-2.147-.918,3.354,3.354,0,0,1-.84-2.335,3.3,3.3,0,0,1,.84-2.274,2.578,2.578,0,0,1,2.043-.918,3.6,3.6,0,0,1,2.607,1.276l.192.2,1.921-2.047-.166-.179a5.933,5.933,0,0,0-4.532-1.957,5.674,5.674,0,0,0-4.238,1.764,6.051,6.051,0,0,0,0,8.368,5.648,5.648,0,0,0,4.2,1.724,5.994,5.994,0,0,0,4.638-2.124l.166-.186-1.868-1.843Z"
                transform="translate(-389.292 -95.104)"
                fill="#39b1d9"
              />
              <path
                id="Tracciato_36"
                data-name="Tracciato 36"
                d="M549.935,134.016a2.486,2.486,0,0,1-.6,1.791,2.081,2.081,0,0,1-1.579.619c-1.406,0-2.061-.753-2.061-2.369v-6.432h-3.014V134.8a4.643,4.643,0,0,0,1.075,3.21l0,0a3.991,3.991,0,0,0,3.05,1.2,4.073,4.073,0,0,0,3.13-1.4V139h3.014V127.625h-3.014Z"
                transform="translate(-436.145 -96.052)"
                fill="#39b1d9"
              />
              <path
                id="Tracciato_37"
                data-name="Tracciato 37"
                d="M607.94,128.349v-1.632h-3.014V138.1h3.014v-4.4a4.452,4.452,0,0,1,.958-3.05,3.185,3.185,0,0,1,2.481-.985h.406v-3.146l-.25-.012A3.813,3.813,0,0,0,607.94,128.349Z"
                transform="translate(-485.522 -95.164)"
                fill="#39b1d9"
              />
              <path
                id="Tracciato_38"
                data-name="Tracciato 38"
                d="M649.114,128.121a5.066,5.066,0,0,0-3.788-1.293,10.122,10.122,0,0,0-4.2.907l-.217.1.824,2.445.259-.107a7.941,7.941,0,0,1,3.005-.658c1.624,0,2.4.64,2.431,2.014a9.728,9.728,0,0,0-2.657-.36,5.622,5.622,0,0,0-3.385.915,3.363,3.363,0,0,0-1.361,2.884,3.289,3.289,0,0,0,1.25,2.693h0a4.473,4.473,0,0,0,2.857.921,4.71,4.71,0,0,0,3.275-1.2v.969h2.952v-6.7A4.716,4.716,0,0,0,649.114,128.121Zm-4.281,8.125a2.245,2.245,0,0,1-1.341-.378,1.225,1.225,0,0,1-.514-1.046c0-.664.237-1.547,2.287-1.547a6.638,6.638,0,0,1,2.2.352v.558a1.767,1.767,0,0,1-.72,1.479A3.051,3.051,0,0,1,644.833,136.246Z"
                transform="translate(-513.363 -95.42)"
                fill="#39b1d9"
              />
              <path
                id="Tracciato_39"
                data-name="Tracciato 39"
                d="M112.848,132.389q.033-.424.1-.839h-5.3v0h-1.972v2.431h1.881v-.011h5.27A11.643,11.643,0,0,1,112.848,132.389Z"
                transform="translate(-89.517 -99.166)"
                fill="#39b1d9"
              />
              <path
                id="Tracciato_40"
                data-name="Tracciato 40"
                d="M238.767,175.136l-4.584-3.785a11,11,0,0,1-1.911,2.15l4.629,3.868a1.175,1.175,0,0,0,1.655-.148l.359-.43A1.175,1.175,0,0,0,238.767,175.136Z"
                transform="translate(-189.932 -130.736)"
                fill="#39b1d9"
              />
              <g
                id="Raggruppa_10"
                data-name="Raggruppa 10"
                transform="translate(24.733 24.093)"
              >
                <path
                  id="Tracciato_41"
                  data-name="Tracciato 41"
                  d="M157.975,111.481a10.03,10.03,0,1,1,9.18-9.177A10.04,10.04,0,0,1,157.975,111.481Zm-.021-17.717a7.761,7.761,0,1,0,6.925,6.925A7.769,7.769,0,0,0,157.954,93.764Z"
                  transform="translate(-147.13 -91.455)"
                  fill="#39b1d9"
                />
              </g>
              <path
                id="Tracciato_42"
                data-name="Tracciato 42"
                d="M179.768,116.762h-3.855v-3.855h-3.475v3.855h-3.855v3.475h3.855v3.855h3.475v-3.855h3.855Z"
                transform="translate(-139.413 -84.378)"
                fill="#e93323"
              />
              <path
                id="Tracciato_43"
                data-name="Tracciato 43"
                d="M123.2,155.546h-4.966v2.344h5.943A12.2,12.2,0,0,1,123.2,155.546Z"
                transform="translate(-99.476 -118.199)"
                fill="#39b1d9"
              />
              <path
                id="Tracciato_44"
                data-name="Tracciato 44"
                d="M105.039,107.458H93.093v2.423h10.581A11.42,11.42,0,0,1,105.039,107.458Z"
                transform="translate(-79.535 -80.056)"
                fill="#39b1d9"
              />
            </g>
          </svg>
        </Link>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
            }}
          >

            <ButtonIscriviti />
              <div
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                      if (!utente?.email) {
                          setPop(true);
                      } else {
                          setOpen(!open);
                      }
                  }}
              >
                  {!!utente && (
                      <div
                          style={{
                              width: "50px",
                              height: "50px",
                              marginLeft:'10px',
                              backgroundColor: "rgb(57, 177, 217)",
                              borderRadius: "100%",
                              display: "flex",
                              alignContent: "center",
                              alignItems: "center",
                              justifyContent: "center",
                          }}
                      >
                          <p
                              style={{
                                  color: "white",
                                  fontSize: "20px",
                                  marginRight: "5px",
                              }}
                          >
                              {utente?.nome.charAt(0)}
                              {utente?.cognome.charAt(0)}
                          </p>
                      </div>
                  )}
                  {utente =='' && <svg
                      id="person"
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      >
                      <path
                      id="Tracciato_130"
                      data-name="Tracciato 130"
                      d="M0,0H34V34H0Z"
                      fill="none"
                      />
                      <path
                      id="Tracciato_131"
                      data-name="Tracciato 131"
                      d="M15.333,15.333A5.667,5.667,0,1,0,9.667,9.667,5.665,5.665,0,0,0,15.333,15.333Zm0,2.833C11.551,18.167,4,20.065,4,23.833v2.833H26.667V23.833C26.667,20.065,19.116,18.167,15.333,18.167Z"
                      transform="translate(1.667 1.667)"
                      fill="#39b1d9"
                      />
                      </svg>}
              </div>


            <ModalLogin
              open={pip}
              chiudi={setPip}
              setsnack={setOklog}
              setsnack2={setKolog}
            />
            <Snackbar
              open={oklog}
              autoHideDuration={6000}
              onClose={() => setOklog(false)}
            >
              <Alert
                severity="success"
                sx={{
                  width: "100%",
                  backgroundColor: "rgb(57, 177, 217)",
                  color: "white",
                  "& .MuiAlert-icon": {
                    color: "white",
                  },
                }}
              >
                Login Effettuato
              </Alert>
            </Snackbar>
            <Snackbar
              open={kolog}
              autoHideDuration={6000}
              onClose={() => setKolog(false)}
            >
              <Alert
                severity="error"
                sx={{
                  width: "100%",
                  backgroundColor: "rgb(57, 177, 217)",
                  color: "white",
                }}
              >
                Errore Login
              </Alert>
            </Snackbar>
          </div>




    </div>
    <VerticalMenu open={open} />
      </>
  );
};

export default Header;
