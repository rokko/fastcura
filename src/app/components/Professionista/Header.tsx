import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VerticalMenu from "./VerticalMenu";
import axios from "axios";
import { AppContext } from "../../context/Context";
import { ReactComponent as LogoMessaggi } from "../../media/messaggiPresenti.svg";

interface IUtente {
  nome: string;
  cognome: string;
  greenpass: string;
  codicepostale: string;
  datadinascita: Date;
  email: string;
  password: string;
  referenze: string;
  sesso: string;
  __v: number;
  _id: string;
}
const Header = () => {
  const statte = useContext(AppContext);

  const [open, setOpen] = useState(false);
  const [token, setToken] = useState("");
  const [utente, setUtente] = useState<IUtente>();

  const takeToken = async () => {
    const tokenTest = await localStorage.getItem("tokenaccess");
    if (!!tokenTest) setToken(tokenTest);
  };

  const requestinfo = async () => {
    if (!!token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .post(
          "https://fastcuradev.herokuapp.com/professionista/info2",
          {},
          config
        )
        .then((response) => {
          setUtente(response.data);
        })
        .catch((e) => console.error(e));
    }
  };

  useEffect(() => {
    takeToken();
    requestinfo();
  }, [token]);

  return (
    <div style={{ position: "relative" }}>
      <Box
        style={{
          width: "100%",
          height: "70px",
          backgroundColor: "#39B1D9",
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            marginLeft: "1rem",
          }}
        >
          <Link to="/">
            <svg
              style={{ marginLeft: "20px" }}
              id="Raggruppa_16"
              data-name="Raggruppa 16"
              xmlns="http://www.w3.org/2000/svg"
              width="55.393"
              height="35.4"
              viewBox="0 0 55.393 35.4"
            >
              <path
                id="Tracciato_39"
                data-name="Tracciato 39"
                d="M116.8,132.852q.052-.658.154-1.3h-8.219v0h-3.061v3.773H108.6v-.016h8.178A18.068,18.068,0,0,1,116.8,132.852Z"
                transform="translate(-101.64 -118.684)"
                fill="#fff"
              />
              <path
                id="Tracciato_40"
                data-name="Tracciato 40"
                d="M242.35,177.224l-7.113-5.873a17.071,17.071,0,0,1-2.965,3.336l7.183,6a1.823,1.823,0,0,0,2.568-.23l.557-.667A1.823,1.823,0,0,0,242.35,177.224Z"
                transform="translate(-187.612 -145.714)"
                fill="#fff"
              />
              <g
                id="Raggruppa_10"
                data-name="Raggruppa 10"
                transform="translate(17.34 0)"
              >
                <path
                  id="Tracciato_41"
                  data-name="Tracciato 41"
                  d="M163.958,122.529a15.563,15.563,0,1,1,14.245-14.24A15.579,15.579,0,0,1,163.958,122.529Zm-.032-27.491a12.043,12.043,0,1,0,10.745,10.746A12.055,12.055,0,0,0,163.926,95.038Z"
                  transform="translate(-147.13 -91.455)"
                  fill="#fff"
                />
              </g>
              <path
                id="Tracciato_42"
                data-name="Tracciato 42"
                d="M185.939,118.889h-5.982v-5.982h-5.392v5.982h-5.982v5.392h5.982v5.982h5.392v-5.982h5.982Z"
                transform="translate(-144.359 -106.023)"
                fill="#fff"
              />
              <path
                id="Tracciato_43"
                data-name="Tracciato 43"
                d="M125.939,155.546h-7.706v3.638h9.222A18.924,18.924,0,0,1,125.939,155.546Z"
                transform="translate(-110.166 -134.98)"
                fill="#fff"
              />
              <path
                id="Tracciato_44"
                data-name="Tracciato 44"
                d="M111.629,107.458H93.093v3.76h16.419A17.722,17.722,0,0,1,111.629,107.458Z"
                transform="translate(-93.093 -102.323)"
                fill="#fff"
              />
            </svg>
          </Link>
          <div>
            <div style={{ marginLeft: "20px" }} onClick={() => history.back()}>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA0ElEQVRIic3VoQ3CUBCA4eYFUQkWgUOAqATDCCh8EwQOHLrdARwzgIENYAUWQFQRSBAEA+FHcOJSRZq7hBvg+5vX9l0U/fMAdWDshcfAnu/MrfEAbAQvgJZ1YCn4BehY47ngD2BgjU8EfwEja3wIPCUwtcb7wF3wzBrvAlfBV9Z4EzgJvgVqlngDOAp+AOIqTjB7oipTOqKd6RGpSBs4u7xkFempzzT3iugfbeYVSYG3y1WhIpnbZaciC4ncgMQjEIC128KRiN/KVBG/pf/rfABRjDDifKboQgAAAABJRU5ErkJggg=="></img>
            </div>
          </div>
        </div>
        <div
          style={{
            marginRight: "20px",
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/chatprofessionista">
            {!!statte?.noti && <LogoMessaggi />}
            {!statte?.noti && (
              <svg
                style={{ marginRight: "10px" }}
                id="Icon_ionic-md-chatbubbles"
                data-name="Icon ionic-md-chatbubbles"
                xmlns="http://www.w3.org/2000/svg"
                width="28.056"
                height="28.056"
                viewBox="0 0 28.056 28.056"
              >
                <path
                  id="Tracciato_100"
                  data-name="Tracciato 100"
                  d="M9.094,25.278a3.52,3.52,0,0,1-3.021-3.021V11.25H5.425a2.058,2.058,0,0,0-2.05,2.05V31.752L7.32,27.841H21.827a2.083,2.083,0,0,0,2.05-2.084v-.479Z"
                  transform="translate(-3.375 -3.697)"
                  fill="#fff"
                />
                <path
                  id="Tracciato_101"
                  data-name="Tracciato 101"
                  d="M29.269,3.375H10.44A2.36,2.36,0,0,0,8.086,5.729V20.977a2.366,2.366,0,0,0,2.354,2.36H26.5l5.119,3.574V5.729A2.36,2.36,0,0,0,29.269,3.375Z"
                  transform="translate(-3.567 -3.375)"
                  fill="#fff"
                />
              </svg>
            )}
          </Link>
          <div onClick={() => setOpen(!open)}>
            {!!utente && (
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "white",
                  borderRadius: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    color: "rgb(57, 177, 217)",
                    fontSize: "16px",
                    marginRight: "5px",
                  }}
                >
                  {utente?.nome.charAt(0).toUpperCase()}{" "}
                  {utente?.cognome.charAt(0).toUpperCase()}
                </p>
              </div>
            )}
            {open && <VerticalMenu open={open} />}
            {!utente && (
              <svg
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
                  fill="#fff"
                />
              </svg>
            )}
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Header;
