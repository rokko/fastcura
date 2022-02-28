import {   Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {useMediaQuery} from "react-responsive";

const Ricavi = () => {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

    return (<>
            {(!!isMobile)&&<>
      <div style={{display:'flex', marginTop:'50px',flexDirection:'row', justifyContent:"space-around", width:'100%', maxWidth:'100%'}}>
        <div style={{display:'flex', flexDirection:'column', justifyContent:"space-around",alignContent:'center', alignItems:'center' }}>

        <Typography  fontWeight={'900'} color="#000000" fontFamily={'Charter'} fontSize={25}>
          Ricavi
        </Typography>


        <p style={{fontSize:(isMobile)?'14px':'24px'}}>          Accordato con il cliente il prezzo, lui potrà pagare nella più
          completa sicurezza sul sito o in contanti a prestazione ultimata{" "}
        </p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="121.179"
        height="156.289"
        viewBox="0 0 121.179 156.289"
      >
        <g
          id="Raggruppa_102"
          data-name="Raggruppa 102"
          transform="translate(-160.209 -41.432)"
        >
          <rect
            id="Rettangolo_110"
            data-name="Rettangolo 110"
            width="22.072"
            height="76.25"
            transform="translate(170.525 121.22)"
            fill="#39b1d9"
          />
          <rect
            id="Rettangolo_111"
            data-name="Rettangolo 111"
            width="23.076"
            height="96.316"
            transform="translate(215.171 101.154)"
            fill="#39b1d9"
          />
          <rect
            id="Rettangolo_112"
            data-name="Rettangolo 112"
            width="21.822"
            height="114.626"
            transform="translate(259.567 83.095)"
            fill="#39b1d9"
          />
          <path
            id="Tracciato_652"
            data-name="Tracciato 652"
            d="M163,122.109S195.105,118.1,241.257,89"
            transform="translate(0 -22.46)"
            fill="none"
            stroke="#39b1d9"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="5"
          />
          <path
            id="Tracciato_653"
            data-name="Tracciato 653"
            d="M296.339,56.472l37.4-12.54L317.464,75.293"
            transform="translate(-66.45)"
            fill="none"
            stroke="#39b1d9"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="5"
          />
        </g>
      </svg>
      <Link to = '/signup-professionista'>

      <button style={{width:120, height:35, backgroundColor:'#FF3617', fontWeight:'bold', border:'none',fontSize:'1rem',marginTop:30, borderRadius:20, color:'#ffffff'}}>Inizia Ora</button>
      </Link>

    </div>
    </div>
            </> }
            {(!isMobile)&&<>
                <div style={{display:'flex',flexDirection:'row', justifyContent:"space-around", width:'100%', maxWidth:'100%', backgroundColor:'#ffffff', padding:'30px'}}>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:"space-around",alignContent:'center', alignItems:'center' }}>
<div style={{display:'flex', flexDirection:'column', alignContent:'center', alignItems:'center'}}>
                        <Typography fontWeight="900" fontSize={'48px'} color={'#000000'} fontFamily={'Charter'}>
                            Ricavi
                        </Typography>


                        <Typography fontSize={'24px'} fontWeight="bold"  fontFamily={'Charter'} color="#6D6D6D" marginBottom={10}>
                            Accordato con il cliente il prezzo, lui potrà pagare nella più
                            completa sicurezza sul sito o in contanti a prestazione ultimata{" "}
                        </Typography>
</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="121.179"
                            height="156.289"
                            viewBox="0 0 121.179 156.289"
                        >
                            <g
                                id="Raggruppa_102"
                                data-name="Raggruppa 102"
                                transform="translate(-160.209 -41.432)"
                            >
                                <rect
                                    id="Rettangolo_110"
                                    data-name="Rettangolo 110"
                                    width="22.072"
                                    height="76.25"
                                    transform="translate(170.525 121.22)"
                                    fill="#39b1d9"
                                />
                                <rect
                                    id="Rettangolo_111"
                                    data-name="Rettangolo 111"
                                    width="23.076"
                                    height="96.316"
                                    transform="translate(215.171 101.154)"
                                    fill="#39b1d9"
                                />
                                <rect
                                    id="Rettangolo_112"
                                    data-name="Rettangolo 112"
                                    width="21.822"
                                    height="114.626"
                                    transform="translate(259.567 83.095)"
                                    fill="#39b1d9"
                                />
                                <path
                                    id="Tracciato_652"
                                    data-name="Tracciato 652"
                                    d="M163,122.109S195.105,118.1,241.257,89"
                                    transform="translate(0 -22.46)"
                                    fill="none"
                                    stroke="#39b1d9"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    stroke-width="5"
                                />
                                <path
                                    id="Tracciato_653"
                                    data-name="Tracciato 653"
                                    d="M296.339,56.472l37.4-12.54L317.464,75.293"
                                    transform="translate(-66.45)"
                                    fill="none"
                                    stroke="#39b1d9"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="10"
                                    stroke-width="5"
                                />
                            </g>
                        </svg>
                        <Link to = '/signup-professionista'>

                            <button style={{width:220, height:50, backgroundColor:'#FF3617', fontWeight:'bold', border:'none',fontSize:'30px',marginTop:30, borderRadius:20, color:'#ffffff'}}>Inizia Ora</button>
                        </Link>

                    </div>
                </div>

            </>}


        </>
        );
};

export default Ricavi;
