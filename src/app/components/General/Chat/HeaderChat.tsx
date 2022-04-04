import React from "react";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const HeaderChat = (nomeProfessionista: any, cognomeProfessionista: any) => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        style={{
          width: "100%",
          height: "70px",
          backgroundColor: "#39B1D9",
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
          justifyContent:'space-between'
        }}
      >
        <div style={{display:'flex', flexDirection:'row', alignContent:'center', alignItems:'center'}}>
         <div style={{marginLeft:'20px'}} onClick={() => navigate("/chatprofessionista")}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA0ElEQVRIic3VoQ3CUBCA4eYFUQkWgUOAqATDCCh8EwQOHLrdARwzgIENYAUWQFQRSBAEA+FHcOJSRZq7hBvg+5vX9l0U/fMAdWDshcfAnu/MrfEAbAQvgJZ1YCn4BehY47ngD2BgjU8EfwEja3wIPCUwtcb7wF3wzBrvAlfBV9Z4EzgJvgVqlngDOAp+AOIqTjB7oipTOqKd6RGpSBs4u7xkFempzzT3iugfbeYVSYG3y1WhIpnbZaciC4ncgMQjEIC128KRiN/KVBG/pf/rfABRjDDifKboQgAAAABJRU5ErkJggg=="></img>
        </div>
        <div>
          <Box
            style={{
              position:'relative',
              top:'20px',
              left:'40px',
              borderRadius: 100,
              border: "10px solid rgb(57, 177, 217)",
              width: "65px",
              height: "65px",
              backgroundColor: "#ffffff",
            }}
          ></Box>
          <p style={{ color: "#ffffff", fontSize: "21px" }}>
            {nomeProfessionista.nomeProfessionista}
          </p>
          <p style={{ color: "#ffffff" }}>
            {cognomeProfessionista.cognomeProfessionista}
          </p>
        </div>
        </div>
        <Link to="/professionista">
          <svg
          style={{marginRight:'30px'}}
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
       
      </Box>
    </>
  );
};

export default HeaderChat;
