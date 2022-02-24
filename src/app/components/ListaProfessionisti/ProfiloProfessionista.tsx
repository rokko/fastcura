import { Box, Button } from "@mui/material";
import { Link,  useLocation } from "react-router-dom";
import React from "react";
//import Header from "../Cliente/Header";
import HeaderNoLogin from '../Cliente/HeaderNoLogin'


 interface IDettagliProfessionista{
   nome : string,
   cognome : string,
   citta : string ,
   professione: string,
   eta: number,

}
const ProfiloProfessionista = () => {
  const location = useLocation()

  let ValoriParametri = location.state as any
  const professio : IDettagliProfessionista={
    nome: ValoriParametri.nome,
    cognome: ValoriParametri.cognome,
    citta : ValoriParametri.citta,
    professione: ValoriParametri.professione,
    eta : ValoriParametri.eta
  }

  return (
    <>
      <HeaderNoLogin />
 <Box style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            marginRight: "20px",
            width: "50px",
            height: "50px",
            backgroundColor: "grey",
            borderRadius: "50%",
          }}
        >
          <p></p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ fontSize: "14px", alignSelf: "flex-start" }}>{professio.nome}</p>
          <div style={{ display: "flex", flexDirection: "row" }}>
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
          <Link to="/chat" state={{ValoriParametri}} ><Button  style={{backgroundColor:'#39B1D9', width:'110px', height:'30px', marginTop:'20px', textTransform:'none', borderRadius:'30px', textDecoration:'none'}}><p style={{color:'#ffffff', textDecoration:'none'}}>Contatta</p></Button></Link>
        </div>
     
      </div>
      <Box style={{display:'flex', flexDirection:'column', textAlign:'left', padding:'30px'}}>
      <p>Professione : {professio.professione}<br/>
      Luogo: {professio.citta}<br/>
      Curriculum</p>
      <Box style={{backgroundColor:'#F4F4F4', width:'300px', height:'400px', borderRadius:'30px'}}>
        

      </Box>
      </Box>
      </Box>
    </>
  );
};

export default ProfiloProfessionista;
