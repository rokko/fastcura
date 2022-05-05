import React, {useState} from "react";
import axios from 'axios'
import {useNavigate} from "react-router-dom";
import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Autocomplete,
} from "@mui/material";
import Header from "../../../TrovaIlTuoProfessionista/Header";
import {useMediaQuery} from "react-responsive";


interface IToken {
  accessToken : string;
  messagge: number;

}
const SignUpClient = () => {
  const navigate = useNavigate()
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })
  const [cognome  , setCognome] = useState <String>()
  const [nome, setNome] = useState<String>()
  const [email, setEmail] = useState<String>()
  const [password,setPassword] = useState<String>()
  const [ data, setData] = useState<String>()
  const [sesso, setSesso] = useState<String|null>();
  const [cap, setCap] = useState<String>()
  const [cellulare, setCellulare] = useState<String>()
  const [handleCheck, setHandleCheck] = useState<boolean>(true)
  const [handleCheck2, setHandleCheck2] = useState<boolean>(true)

  const sess = ['Uomo','Donna']

  const nuovoCliente = {
    cognome : cognome,
    nome : nome,
    email : email,
    password : password,
    data : data,
    sesso : sesso,
    cap : cap,
    cellulare : cellulare 
  }

  const loginUser = (userlogin : any)=>{

    axios.post('https://fastcuradev.herokuapp.com/login',userlogin)
        .then(function (response) {
          const token : IToken = response.data;
          if (!!token.accessToken) {
            localStorage.setItem('tokenaccess', token.accessToken);
            localStorage.setItem("type", token.messagge.toString());
          }
        })
        .catch(function (error) {
          console.log(error);
        });

  }
  const sendRegister = () => {
    const datinuovoCliente = JSON.stringify(nuovoCliente)
    axios.post('https://fastcuradev.herokuapp.com/cliente/signup',nuovoCliente)
.then(function (response) {
 loginUser({email: response.data.email , password : response.data.password})
  navigate(-1)
})
.catch(function (error) {
  console.log(error);
});
  }
  return (
    <>
      <Header />
      <p className="registertitle">Compila i dati per iscriverti!</p>
      {(!!isMobile) && <>
          <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
          >

            <TextField
                onChange={(x: React.ChangeEvent<HTMLInputElement>) => setCognome(x.target.value)}
                style={{width: 310, marginTop: 10}}
                id="outlined-size-small"
                label="Cognome"
            ></TextField>
            <TextField
                onChange={(x: React.ChangeEvent<HTMLInputElement>) => setNome(x.target.value)}

                style={{width: 310, marginTop: 10}}
                id="outlined-size-small"
                label="Nome"
            ></TextField>
            <TextField
                onChange={(x: React.ChangeEvent<HTMLInputElement>) => setEmail(x.target.value)}

                style={{width: 310, marginTop: 10}}
                id="outlined-size-small"
                label="Indirizzo email"
            ></TextField>
            <TextField
                onChange={(x: React.ChangeEvent<HTMLInputElement>) => setPassword(x.target.value)}

                style={{width: 310, marginTop: 10}}
                id="outlined-size-small"
                label="Password"
                type={'password'}
            ></TextField>
            <TextField
                onChange={(x: React.ChangeEvent<HTMLInputElement>) => setData(x.target.value)}

                style={{width: 310, marginTop: 10}}
                id="outlined-size-small"
                type={'date'}
            ></TextField>
            <TextField
                onChange={(x: React.ChangeEvent<HTMLInputElement>) => setSesso(x.target.value)}

                style={{width: 310, marginTop: 10}}
                id="outlined-size-small"
                label="Sesso"
            ></TextField>
            <TextField
                onChange={(x: React.ChangeEvent<HTMLInputElement>) => setCap(x.target.value)}

                style={{width: 310, marginTop: 10}}
                id="outlined-size-small"
                label="Codice postale"
            ></TextField>
            <TextField
                onChange={(x: React.ChangeEvent<HTMLInputElement>) => setCellulare(x.target.value)}

                style={{width: 310, marginTop: 10}}
                id="outlined-size-small"
                label="Cellulare"
            ></TextField>
            <FormGroup>
              <FormControlLabel
                  control={<Checkbox checked={handleCheck2} onChange={(x) => setHandleCheck2(!handleCheck2)}/>}
                  label="Acconsento all'utilizzo dei dati personali"
              />
              <FormControlLabel
                  control={<Checkbox checked={handleCheck} onChange={(x) => setHandleCheck(!handleCheck)}/>}

                  label="Accetto termini e condizioni"
              />{" "}
            </FormGroup>
          </div>


        <button
        disabled={(!!cognome && !!nome && !!email && !!password && !!data && !!sesso && !!cap && !!cellulare && !!handleCheck && !!handleCheck2 ) ? false : true}
        style={{
        backgroundColor: "#39B1D9",
        width: 220,
        height: 37,
        borderRadius: 20,
        border: "none",
        color: "white",
        marginTop: 10,
          fontSize:'30px',
          fontWeight:'700'
      }}
        onClick={()=> sendRegister()}
        >

        Iscriviti
        </button>

        <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="256.916"
        height="157.015"
        viewBox="0 0 256.916 157.015"
        >
        <g
        id="Raggruppa_141"
        data-name="Raggruppa 141"
        transform="translate(-59.042 -638.047)"
        >
        <path
        id="Tracciato_108"
        data-name="Tracciato 108"
        d="M.346,24.135c4.875,3.172,13.724,7.546,19.46,5.606S65.542,18.606,69.4,18.266s9.332.311,12.554-3.507S76.538-1.007,59.958.068-4.528,20.963.346,24.135Z"
        transform="translate(289.354 780.405) rotate(180)"
        fill="#f4df40"
        />
        <path
        id="Tracciato_15"
        data-name="Tracciato 15"
        d="M1475.352,2019.012q.136-3.5.535-6.943l-43.621,1.776v.024l-16.244.662.815,20.023,15.5-.631,0-.087,43.4-1.767A96.387,96.387,0,0,1,1475.352,2019.012Z"
        transform="translate(-1333.875 -1307.733)"
        fill="#39b1d9"
        />
        <g
        id="Raggruppa_5"
        data-name="Raggruppa 5"
        transform="translate(157.827 638.047)"
        >
        <g
        id="Raggruppa_4"
        data-name="Raggruppa 4"
        transform="translate(2.103 2.153)"
        >
        <g id="Raggruppa_3" data-name="Raggruppa 3">
        <path
        id="Tracciato_16"
        data-name="Tracciato 16"
        d="M1776.1,1930.872c-46.193,3.644-84.609-34.485-80.935-80.328,2.892-36.081,32.338-65.313,68.69-68.2,46.208-3.665,84.648,34.484,80.958,80.348C1841.913,1898.778,1812.458,1928,1776.1,1930.872Zm-.157-131.615c-36.687-3.641-67.407,26.844-63.738,63.256,2.716,26.954,24.682,48.753,51.841,51.448,36.688,3.64,67.4-26.844,63.731-63.256C1825.063,1823.752,1803.1,1801.952,1775.944,1799.257Z"
        transform="translate(-1694.923 -1782.104)"
        fill="#39b1d9"
        />
        </g>
        </g>
        </g>
        <path
        id="Tracciato_17"
        data-name="Tracciato 17"
        d="M1539.554,2158.253l-40.9,1.666.786,19.307,48.944-1.993C1545.083,2171.3,1541.609,2164.964,1539.554,2158.253Z"
        transform="translate(-1393.459 -1413.148)"
        fill="#39b1d9"
        />
        <path
        id="Tracciato_18"
        data-name="Tracciato 18"
        d="M1431.555,1862.454l-98.38,4.005.812,19.955,21.382-.87,34.644-1.41,31.12-1.267A94.13,94.13,0,0,1,1431.555,1862.454Z"
        transform="translate(-1274.133 -1199.845)"
        fill="#39b1d9"
        />
        <path
        id="Tracciato_103"
        data-name="Tracciato 103"
        d="M55.435,2.167S36.275,11.2,39.022,22.357c0,0,35.305-5.379,32.285,36.647,0,0,.959,29.807-8.849,23.441s-37.863-2.7-37.863-2.7L0,67.182S20.369,35.6,6.167,13.284C6.167,13.284,32.32-6.42,55.435,2.167Z"
        transform="translate(276.03 764.218) rotate(180)"
        fill="#f4c0a0"
        />
        <path
        id="Tracciato_104"
        data-name="Tracciato 104"
        d="M0,.281S5.455,2.775,8.042,0"
        transform="translate(235.724 696.042) rotate(180)"
        fill="none"
        stroke="#283237"
        stroke-miterlimit="10"
        stroke-width="0.798"
        />
        <path
        id="Tracciato_106"
        data-name="Tracciato 106"
        d="M20.9,5S4.8-8.05,0,8.009C0,8.009,15.386,3.761,20.9,5Z"
        transform="translate(234.751 729.25) rotate(180)"
        fill="#fff"
        />
        <path
        id="Tracciato_105"
        data-name="Tracciato 105"
        d="M0,.282S2.822,4.208,8.043,0"
        transform="translate(216.312 697.392) rotate(180)"
        fill="none"
        stroke="#283237"
        stroke-miterlimit="10"
        stroke-width="0.798"
        />
        <ellipse
        id="Ellisse_20"
        data-name="Ellisse 20"
        cx="2.012"
        cy="2.682"
        rx="2.012"
        ry="2.682"
        transform="translate(210.444 702.012) rotate(-2)"
        fill="#283237"
        />
        <ellipse
        id="Ellisse_19"
        data-name="Ellisse 19"
        cx="2.012"
        cy="2.682"
        rx="2.012"
        ry="2.682"
        transform="translate(227.87 701.403) rotate(-2)"
        fill="#283237"
        />
        <path
        id="Tracciato_107"
        data-name="Tracciato 107"
        d="M11.782,0S2.493,3.008,0,8.464"
        transform="translate(249.099 741.335) rotate(180)"
        fill="none"
        stroke="#e3b699"
        stroke-miterlimit="10"
        stroke-width="1.596"
        />
        <path
        id="Tracciato_102"
        data-name="Tracciato 102"
        d="M12.9,0a48.491,48.491,0,0,1,6.534,33.323s-12.983,12.532-1.978,20.2c0,0,6.843,3.787,9.289-3.009,0,0,12.2,3.6,7.264,15.85,0,0,38.422-3.952,51.217,6.262,9.664,7.715,11.238,14.369,11.238,14.369s-6.8-2.446-13.4.47c0,0,1.387,1.293,7.077,10.488,0,0-4.116-2.54-14.839-2.165s-42.33,17.585-60.365.769S-.794,68.923,1.653,62.127s2.212-13.5,8.539-24.456S12.9,0,12.9,0Z"
        transform="translate(282.763 750.933) rotate(180)"
        fill="#273237"
        />
        </g>
        </svg>
      </>
      }
      {(!isMobile) && <>
        <div style={{display:'flex', flexDirection:'row', alignContent:'center', alignItems:'center', justifyContent:'space-evenly'}}>
        <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
        >

          <TextField
              onChange={(x: React.ChangeEvent<HTMLInputElement>) => setCognome(x.target.value)}
              style={{width: 310, marginTop: 10}}
              id="outlined-size-small"
              label="Cognome"
          ></TextField>
          <TextField
              onChange={(x: React.ChangeEvent<HTMLInputElement>) => setNome(x.target.value)}

              style={{width: 310, marginTop: 10}}
              id="outlined-size-small"
              label="Nome"
          ></TextField>
          <TextField
              onChange={(x: React.ChangeEvent<HTMLInputElement>) => setEmail(x.target.value)}

              style={{width: 310, marginTop: 10}}
              id="outlined-size-small"
              label="Indirizzo email"
          ></TextField>
          <TextField
              onChange={(x: React.ChangeEvent<HTMLInputElement>) => setPassword(x.target.value)}

              style={{width: 310, marginTop: 10}}
              id="outlined-size-small"
              label="Password"
              type={'password'}
          ></TextField>
          <TextField
              onChange={(x: React.ChangeEvent<HTMLInputElement>) => setData(x.target.value)}

              style={{width: 310, marginTop: 10}}
              id="outlined-size-small"
              type={'date'}
          ></TextField>
          <Autocomplete
              disablePortal
              id="lista-sesso"
              options={sess}
              sx={{ width: 310, marginTop:1.5 }}
              style={{ backgroundColor: "#ffffff", borderRadius: "30px" }}
              renderInput={(params) => (
                <TextField {...params} label="Sesso" />
              )}
              onChange={(x, value) => setSesso(value)}
            />
          <TextField
              onChange={(x: React.ChangeEvent<HTMLInputElement>) => setCap(x.target.value)}

              style={{width: 310, marginTop: 10}}
              id="outlined-size-small"
              label="Codice postale"
          ></TextField>
          <TextField
              onChange={(x: React.ChangeEvent<HTMLInputElement>) => setCellulare(x.target.value)}

              style={{width: 310, marginTop: 10}}
              id="outlined-size-small"
              label="Cellulare"
          ></TextField>
          <FormGroup>
            <FormControlLabel
                control={<Checkbox checked={handleCheck2} onChange={(x) => setHandleCheck2(!handleCheck2)}/>}
                label="Acconsento all'utilizzo dei dati personali"
            />
            <FormControlLabel
                control={<Checkbox checked={handleCheck} onChange={(x) => setHandleCheck(!handleCheck)}/>}

                label="Accetto termini e condizioni"
            />{" "}
          </FormGroup>
        </div>

<div style={{display:'flex', flexDirection:'column'}}>
        <button
            disabled={(!!cognome && !!nome && !!email && !!password && !!data && !!sesso && !!cap && !!cellulare && !!handleCheck && !!handleCheck2 ) ? false : true}
            style={{
              backgroundColor: "#39B1D9",
              width: 220,
              height: 37,
              borderRadius: 20,
              border: "none",
              color: "white",
              marginTop: 10,
              marginBottom:30,
              fontSize:'30px',
              fontWeight:'700'
            }}
            onClick={()=> sendRegister()}
        >
          Iscriviti
        </button>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="256.916"
            height="157.015"
            viewBox="0 0 256.916 157.015"
        >
          <g
              id="Raggruppa_141"
              data-name="Raggruppa 141"
              transform="translate(-59.042 -638.047)"
          >
            <path
                id="Tracciato_108"
                data-name="Tracciato 108"
                d="M.346,24.135c4.875,3.172,13.724,7.546,19.46,5.606S65.542,18.606,69.4,18.266s9.332.311,12.554-3.507S76.538-1.007,59.958.068-4.528,20.963.346,24.135Z"
                transform="translate(289.354 780.405) rotate(180)"
                fill="#f4df40"
            />
            <path
                id="Tracciato_15"
                data-name="Tracciato 15"
                d="M1475.352,2019.012q.136-3.5.535-6.943l-43.621,1.776v.024l-16.244.662.815,20.023,15.5-.631,0-.087,43.4-1.767A96.387,96.387,0,0,1,1475.352,2019.012Z"
                transform="translate(-1333.875 -1307.733)"
                fill="#39b1d9"
            />
            <g
                id="Raggruppa_5"
                data-name="Raggruppa 5"
                transform="translate(157.827 638.047)"
            >
              <g
                  id="Raggruppa_4"
                  data-name="Raggruppa 4"
                  transform="translate(2.103 2.153)"
              >
                <g id="Raggruppa_3" data-name="Raggruppa 3">
                  <path
                      id="Tracciato_16"
                      data-name="Tracciato 16"
                      d="M1776.1,1930.872c-46.193,3.644-84.609-34.485-80.935-80.328,2.892-36.081,32.338-65.313,68.69-68.2,46.208-3.665,84.648,34.484,80.958,80.348C1841.913,1898.778,1812.458,1928,1776.1,1930.872Zm-.157-131.615c-36.687-3.641-67.407,26.844-63.738,63.256,2.716,26.954,24.682,48.753,51.841,51.448,36.688,3.64,67.4-26.844,63.731-63.256C1825.063,1823.752,1803.1,1801.952,1775.944,1799.257Z"
                      transform="translate(-1694.923 -1782.104)"
                      fill="#39b1d9"
                  />
                </g>
              </g>
            </g>
            <path
                id="Tracciato_17"
                data-name="Tracciato 17"
                d="M1539.554,2158.253l-40.9,1.666.786,19.307,48.944-1.993C1545.083,2171.3,1541.609,2164.964,1539.554,2158.253Z"
                transform="translate(-1393.459 -1413.148)"
                fill="#39b1d9"
            />
            <path
                id="Tracciato_18"
                data-name="Tracciato 18"
                d="M1431.555,1862.454l-98.38,4.005.812,19.955,21.382-.87,34.644-1.41,31.12-1.267A94.13,94.13,0,0,1,1431.555,1862.454Z"
                transform="translate(-1274.133 -1199.845)"
                fill="#39b1d9"
            />
            <path
                id="Tracciato_103"
                data-name="Tracciato 103"
                d="M55.435,2.167S36.275,11.2,39.022,22.357c0,0,35.305-5.379,32.285,36.647,0,0,.959,29.807-8.849,23.441s-37.863-2.7-37.863-2.7L0,67.182S20.369,35.6,6.167,13.284C6.167,13.284,32.32-6.42,55.435,2.167Z"
                transform="translate(276.03 764.218) rotate(180)"
                fill="#f4c0a0"
            />
            <path
                id="Tracciato_104"
                data-name="Tracciato 104"
                d="M0,.281S5.455,2.775,8.042,0"
                transform="translate(235.724 696.042) rotate(180)"
                fill="none"
                stroke="#283237"
                stroke-miterlimit="10"
                stroke-width="0.798"
            />
            <path
                id="Tracciato_106"
                data-name="Tracciato 106"
                d="M20.9,5S4.8-8.05,0,8.009C0,8.009,15.386,3.761,20.9,5Z"
                transform="translate(234.751 729.25) rotate(180)"
                fill="#fff"
            />
            <path
                id="Tracciato_105"
                data-name="Tracciato 105"
                d="M0,.282S2.822,4.208,8.043,0"
                transform="translate(216.312 697.392) rotate(180)"
                fill="none"
                stroke="#283237"
                stroke-miterlimit="10"
                stroke-width="0.798"
            />
            <ellipse
                id="Ellisse_20"
                data-name="Ellisse 20"
                cx="2.012"
                cy="2.682"
                rx="2.012"
                ry="2.682"
                transform="translate(210.444 702.012) rotate(-2)"
                fill="#283237"
            />
            <ellipse
                id="Ellisse_19"
                data-name="Ellisse 19"
                cx="2.012"
                cy="2.682"
                rx="2.012"
                ry="2.682"
                transform="translate(227.87 701.403) rotate(-2)"
                fill="#283237"
            />
            <path
                id="Tracciato_107"
                data-name="Tracciato 107"
                d="M11.782,0S2.493,3.008,0,8.464"
                transform="translate(249.099 741.335) rotate(180)"
                fill="none"
                stroke="#e3b699"
                stroke-miterlimit="10"
                stroke-width="1.596"
            />
            <path
                id="Tracciato_102"
                data-name="Tracciato 102"
                d="M12.9,0a48.491,48.491,0,0,1,6.534,33.323s-12.983,12.532-1.978,20.2c0,0,6.843,3.787,9.289-3.009,0,0,12.2,3.6,7.264,15.85,0,0,38.422-3.952,51.217,6.262,9.664,7.715,11.238,14.369,11.238,14.369s-6.8-2.446-13.4.47c0,0,1.387,1.293,7.077,10.488,0,0-4.116-2.54-14.839-2.165s-42.33,17.585-60.365.769S-.794,68.923,1.653,62.127s2.212-13.5,8.539-24.456S12.9,0,12.9,0Z"
                transform="translate(282.763 750.933) rotate(180)"
                fill="#273237"
            />
          </g>
        </svg>
</div>
        </div>
      </>
      }
    </>
  );
};

export default SignUpClient;
