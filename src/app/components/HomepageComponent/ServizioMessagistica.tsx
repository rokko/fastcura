import { Typography } from "@mui/material";
import React from "react";
import {useMediaQuery} from "react-responsive";
import {Fade} from "react-awesome-reveal";

const ServizioMessagistica = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

  return (<>
        {(!!isMobile) && <>
      <div style={{display:'flex', marginTop:'50px',flexDirection:'row', justifyContent:"space-around", width:'100%', maxWidth:'100%',height:'500px', backgroundColor:'rgb(242, 252, 255)'}}>
        <div style={{display:'flex', flexDirection:'column', justifyContent:"space-around",alignContent:'center', alignItems:'center' }}>

        <Typography  fontWeight={'900'} color="#000000" fontFamily={'Charter'} fontSize={25} >
          Servizio di messaggistica diretto con il cliente
        </Typography>

        <p style={{fontSize:(isMobile)?'14px':'24px'}}>
          La persona trova i professionisti più vicini a lui e ne valuta le
          competenze e la qualità dei servizi erogati attraverso le recensioni
          lasciate da altri utenti
        </p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="112.104"
        height="207.567"
        viewBox="0 0 112.104 207.567"
      >
        <g
          id="Raggruppa_101"
          data-name="Raggruppa 101"
          transform="translate(-387.324 -290.066)"
        >
          <rect
            id="Rettangolo_108"
            data-name="Rettangolo 108"
            width="112.104"
            height="207.567"
            rx="19"
            transform="translate(387.324 290.066)"
            fill="#39b1d9"
          />
          <path
            id="Tracciato_638"
            data-name="Tracciato 638"
            d="M459.84,432.886l-45.289-.025h-.174l-9.765-.005a1.09,1.09,0,0,0-.943,1.639c1.211,2.077,3.131,5.445,3.131,5.935l-.008,14.474a7.574,7.574,0,0,0,7.569,7.578l45.462.025a7.574,7.574,0,0,0,7.578-7.569l.008-14.474A7.574,7.574,0,0,0,459.84,432.886Z"
            transform="translate(-10.11 -89.134)"
            fill="#fff"
          />
          <path
            id="Tracciato_639"
            data-name="Tracciato 639"
            d="M534.189,347.057s-5.774-2.724-4.946-6.085c0,0,7.72,2.067,9.477-9.562,0,0,.543-10.466-2.413-8.547s-11.411.815-11.411.815l-7.413,3.785s6.139,9.517,1.859,16.244C519.341,343.706,527.222,349.645,534.189,347.057Z"
            transform="translate(-81.25 -20.326)"
            fill="#f4c0a0"
          />
          <path
            id="Tracciato_640"
            data-name="Tracciato 640"
            d="M564.466,524.908a1.09,1.09,0,0,0-.942-1.64l-9.765-.005h-.174l-45.289-.025a7.574,7.574,0,0,0-7.578,7.569l-.008,14.474a7.574,7.574,0,0,0,7.569,7.578l45.462.025a7.574,7.574,0,0,0,7.578-7.569l.008-14.474C561.329,530.349,563.253,526.983,564.466,524.908Z"
            transform="translate(-70.781 -145.554)"
            fill="#fff"
            opacity="0.63"
          />
          <path
            id="Tracciato_641"
            data-name="Tracciato 641"
            d="M564.466,677.992a1.09,1.09,0,0,0-.942-1.641l-9.765-.005h-.174l-45.289-.025a7.574,7.574,0,0,0-7.578,7.569l-.008,14.474a7.574,7.574,0,0,0,7.569,7.578l45.462.025a7.573,7.573,0,0,0,7.578-7.569l.008-14.474C561.329,683.433,563.253,680.068,564.466,677.992Z"
            transform="translate(-70.781 -241.116)"
            fill="#fff"
            opacity="0.63"
          />
          <path
            id="Tracciato_642"
            data-name="Tracciato 642"
            d="M461.631,614.163l-46.847-.026h-1.732l-8.007,0a1.09,1.09,0,0,0-.893,1.717c1.208,1.717,2.882,4.127,2.882,4.3l0,6.654a6.015,6.015,0,0,0,6.012,6.019l48.579.027a6.015,6.015,0,0,0,6.018-6.012l0-6.654A6.015,6.015,0,0,0,461.631,614.163Z"
            transform="translate(-10.379 -202.294)"
            fill="#fff"
          />
          <path
            id="Tracciato_643"
            data-name="Tracciato 643"
            d="M478.547,368.422l-7.86,0,0,4.006,9.371.005A20.4,20.4,0,0,1,478.547,368.422Z"
            transform="translate(-52.037 -48.91)"
            fill="#fff"
          />
          <path
            id="Tracciato_644"
            data-name="Tracciato 644"
            d="M469.509,347.74a17.109,17.109,0,0,1,.269-1.888l-9.185-.005v0l-3.371,0,0,4.155,3.215,0v-.018l9.039.005A17.963,17.963,0,0,1,469.509,347.74Z"
            transform="translate(-43.632 -34.821)"
            fill="#fff"
          />
          <path
            id="Tracciato_645"
            data-name="Tracciato 645"
            d="M465.813,323.189l-20.414-.011,0,4.14,4.437,0,7.189,0,6.457,0A19.5,19.5,0,0,1,465.813,323.189Z"
            transform="translate(-36.251 -20.67)"
            fill="#fff"
          />
          <rect
            id="Rettangolo_109"
            data-name="Rettangolo 109"
            width="98.433"
            height="16.405"
            rx="8.203"
            transform="translate(395.264 472.577)"
            fill="#fff"
          />
          <g
            id="Raggruppa_100"
            data-name="Raggruppa 100"
            transform="translate(430.13 294.927)"
          >
            <path
              id="Tracciato_646"
              data-name="Tracciato 646"
              d="M520.369,338.339a17.7,17.7,0,1,1,16.208-16.184A17.716,17.716,0,0,1,520.369,338.339Zm-.02-31.262A13.694,13.694,0,1,0,532.562,319.3,13.709,13.709,0,0,0,520.349,307.078Z"
              transform="translate(-501.242 -303.003)"
              fill="#fff"
            />
          </g>
          <path
            id="Tracciato_647"
            data-name="Tracciato 647"
            d="M515.97,326.7a14.615,14.615,0,0,0,1.969-10.043s-3.913-3.777-.6-6.088c0,0,2.062-1.142,2.8.907a3.4,3.4,0,0,0,2.19-4.777s11.579,1.191,15.436-1.887c2.913-2.325,3.387-4.331,3.387-4.331a5.989,5.989,0,0,1-4.04-.141,22.3,22.3,0,0,0,2.133-3.161s-1.24.765-4.472.652-12.758-5.3-18.193-.231-4.74,8.328-4,10.376.667,4.068,2.574,7.371S515.97,326.7,515.97,326.7Z"
            transform="translate(-77.879 -3.315)"
            fill="#273237"
          />
          <path
            id="Tracciato_648"
            data-name="Tracciato 648"
            d="M543.81,333.957s1.644-.751,2.424.085"
            transform="translate(-97.685 -27.205)"
            fill="none"
            stroke="#283237"
            stroke-miterlimit="10"
            stroke-width="0.538"
          />
          <path
            id="Tracciato_649"
            data-name="Tracciato 649"
            d="M553.5,356.067s-3.034,4.074-6.362-.054A38.558,38.558,0,0,0,553.5,356.067Z"
            transform="translate(-99.764 -41.167)"
            fill="#fff"
          />
          <path
            id="Tracciato_650"
            data-name="Tracciato 650"
            d="M559.38,334.721s.85-1.184,2.424.085"
            transform="translate(-107.404 -27.562)"
            fill="none"
            stroke="#283237"
            stroke-miterlimit="10"
            stroke-width="0.538"
          />
          <ellipse
            id="Ellisse_74"
            data-name="Ellisse 74"
            cx="0.808"
            cy="0.606"
            rx="0.808"
            ry="0.606"
            transform="translate(447.224 310.027) rotate(-87.997)"
            fill="#283237"
          />
          <ellipse
            id="Ellisse_75"
            data-name="Ellisse 75"
            cx="0.808"
            cy="0.606"
            rx="0.808"
            ry="0.606"
            transform="translate(452.476 310.21) rotate(-87.997)"
            fill="#283237"
          />
          <path
            id="Tracciato_651"
            data-name="Tracciato 651"
            d="M542.632,366.788s-2.8-.907-3.551-2.551"
            transform="translate(-94.733 -46.3)"
            fill="none"
            stroke="#e3b699"
            stroke-miterlimit="10"
            stroke-width="1.076"
          />
        </g>
      </svg>
        </div>
      </div>
     </>
        }
        {(!isMobile) && <>
            <div style={{display:'flex',flexDirection:'row', justifyContent:"space-around", width:'100%', maxWidth:'100%', backgroundColor:'rgb(242, 252, 255)', padding:'30px'}}>
            <div style={{display:'flex', flexDirection:'row-reverse', justifyContent:"space-around",alignContent:'center', alignItems:'center' }}>
<div style={{display:'flex',flexDirection:'column', alignContent:'center', alignItems:'center', width:'60%'}}>

              <Typography fontWeight="900" fontSize={'48px'} fontFamily={'Charter'} color={'#000000'} textAlign={'left'}>
                Servizio di messaggistica diretto con il cliente
              </Typography>
    <Fade direction={'up'}>
              <Typography fontSize={'24px'} fontWeight="bold"  fontFamily={'Charter'} color="#6D6D6D" textAlign={'left'} marginBottom={10}>
                La persona trova i professionisti più vicini a lui e ne valuta le
                competenze e la qualità dei servizi erogati attraverso le recensioni
                lasciate da altri utenti
              </Typography>
    </Fade>
</div>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="300.104"
                  height="300.567"
                  viewBox="0 0 112.104 207.567"
              >
                <g
                    id="Raggruppa_101"
                    data-name="Raggruppa 101"
                    transform="translate(-387.324 -290.066)"
                >
                  <rect
                      id="Rettangolo_108"
                      data-name="Rettangolo 108"
                      width="112.104"
                      height="207.567"
                      rx="19"
                      transform="translate(387.324 290.066)"
                      fill="#39b1d9"
                  />
                  <path
                      id="Tracciato_638"
                      data-name="Tracciato 638"
                      d="M459.84,432.886l-45.289-.025h-.174l-9.765-.005a1.09,1.09,0,0,0-.943,1.639c1.211,2.077,3.131,5.445,3.131,5.935l-.008,14.474a7.574,7.574,0,0,0,7.569,7.578l45.462.025a7.574,7.574,0,0,0,7.578-7.569l.008-14.474A7.574,7.574,0,0,0,459.84,432.886Z"
                      transform="translate(-10.11 -89.134)"
                      fill="#fff"
                  />
                  <path
                      id="Tracciato_639"
                      data-name="Tracciato 639"
                      d="M534.189,347.057s-5.774-2.724-4.946-6.085c0,0,7.72,2.067,9.477-9.562,0,0,.543-10.466-2.413-8.547s-11.411.815-11.411.815l-7.413,3.785s6.139,9.517,1.859,16.244C519.341,343.706,527.222,349.645,534.189,347.057Z"
                      transform="translate(-81.25 -20.326)"
                      fill="#f4c0a0"
                  />
                  <path
                      id="Tracciato_640"
                      data-name="Tracciato 640"
                      d="M564.466,524.908a1.09,1.09,0,0,0-.942-1.64l-9.765-.005h-.174l-45.289-.025a7.574,7.574,0,0,0-7.578,7.569l-.008,14.474a7.574,7.574,0,0,0,7.569,7.578l45.462.025a7.574,7.574,0,0,0,7.578-7.569l.008-14.474C561.329,530.349,563.253,526.983,564.466,524.908Z"
                      transform="translate(-70.781 -145.554)"
                      fill="#fff"
                      opacity="0.63"
                  />
                  <path
                      id="Tracciato_641"
                      data-name="Tracciato 641"
                      d="M564.466,677.992a1.09,1.09,0,0,0-.942-1.641l-9.765-.005h-.174l-45.289-.025a7.574,7.574,0,0,0-7.578,7.569l-.008,14.474a7.574,7.574,0,0,0,7.569,7.578l45.462.025a7.573,7.573,0,0,0,7.578-7.569l.008-14.474C561.329,683.433,563.253,680.068,564.466,677.992Z"
                      transform="translate(-70.781 -241.116)"
                      fill="#fff"
                      opacity="0.63"
                  />
                  <path
                      id="Tracciato_642"
                      data-name="Tracciato 642"
                      d="M461.631,614.163l-46.847-.026h-1.732l-8.007,0a1.09,1.09,0,0,0-.893,1.717c1.208,1.717,2.882,4.127,2.882,4.3l0,6.654a6.015,6.015,0,0,0,6.012,6.019l48.579.027a6.015,6.015,0,0,0,6.018-6.012l0-6.654A6.015,6.015,0,0,0,461.631,614.163Z"
                      transform="translate(-10.379 -202.294)"
                      fill="#fff"
                  />
                  <path
                      id="Tracciato_643"
                      data-name="Tracciato 643"
                      d="M478.547,368.422l-7.86,0,0,4.006,9.371.005A20.4,20.4,0,0,1,478.547,368.422Z"
                      transform="translate(-52.037 -48.91)"
                      fill="#fff"
                  />
                  <path
                      id="Tracciato_644"
                      data-name="Tracciato 644"
                      d="M469.509,347.74a17.109,17.109,0,0,1,.269-1.888l-9.185-.005v0l-3.371,0,0,4.155,3.215,0v-.018l9.039.005A17.963,17.963,0,0,1,469.509,347.74Z"
                      transform="translate(-43.632 -34.821)"
                      fill="#fff"
                  />
                  <path
                      id="Tracciato_645"
                      data-name="Tracciato 645"
                      d="M465.813,323.189l-20.414-.011,0,4.14,4.437,0,7.189,0,6.457,0A19.5,19.5,0,0,1,465.813,323.189Z"
                      transform="translate(-36.251 -20.67)"
                      fill="#fff"
                  />
                  <rect
                      id="Rettangolo_109"
                      data-name="Rettangolo 109"
                      width="98.433"
                      height="16.405"
                      rx="8.203"
                      transform="translate(395.264 472.577)"
                      fill="#fff"
                  />
                  <g
                      id="Raggruppa_100"
                      data-name="Raggruppa 100"
                      transform="translate(430.13 294.927)"
                  >
                    <path
                        id="Tracciato_646"
                        data-name="Tracciato 646"
                        d="M520.369,338.339a17.7,17.7,0,1,1,16.208-16.184A17.716,17.716,0,0,1,520.369,338.339Zm-.02-31.262A13.694,13.694,0,1,0,532.562,319.3,13.709,13.709,0,0,0,520.349,307.078Z"
                        transform="translate(-501.242 -303.003)"
                        fill="#fff"
                    />
                  </g>
                  <path
                      id="Tracciato_647"
                      data-name="Tracciato 647"
                      d="M515.97,326.7a14.615,14.615,0,0,0,1.969-10.043s-3.913-3.777-.6-6.088c0,0,2.062-1.142,2.8.907a3.4,3.4,0,0,0,2.19-4.777s11.579,1.191,15.436-1.887c2.913-2.325,3.387-4.331,3.387-4.331a5.989,5.989,0,0,1-4.04-.141,22.3,22.3,0,0,0,2.133-3.161s-1.24.765-4.472.652-12.758-5.3-18.193-.231-4.74,8.328-4,10.376.667,4.068,2.574,7.371S515.97,326.7,515.97,326.7Z"
                      transform="translate(-77.879 -3.315)"
                      fill="#273237"
                  />
                  <path
                      id="Tracciato_648"
                      data-name="Tracciato 648"
                      d="M543.81,333.957s1.644-.751,2.424.085"
                      transform="translate(-97.685 -27.205)"
                      fill="none"
                      stroke="#283237"
                      stroke-miterlimit="10"
                      stroke-width="0.538"
                  />
                  <path
                      id="Tracciato_649"
                      data-name="Tracciato 649"
                      d="M553.5,356.067s-3.034,4.074-6.362-.054A38.558,38.558,0,0,0,553.5,356.067Z"
                      transform="translate(-99.764 -41.167)"
                      fill="#fff"
                  />
                  <path
                      id="Tracciato_650"
                      data-name="Tracciato 650"
                      d="M559.38,334.721s.85-1.184,2.424.085"
                      transform="translate(-107.404 -27.562)"
                      fill="none"
                      stroke="#283237"
                      stroke-miterlimit="10"
                      stroke-width="0.538"
                  />
                  <ellipse
                      id="Ellisse_74"
                      data-name="Ellisse 74"
                      cx="0.808"
                      cy="0.606"
                      rx="0.808"
                      ry="0.606"
                      transform="translate(447.224 310.027) rotate(-87.997)"
                      fill="#283237"
                  />
                  <ellipse
                      id="Ellisse_75"
                      data-name="Ellisse 75"
                      cx="0.808"
                      cy="0.606"
                      rx="0.808"
                      ry="0.606"
                      transform="translate(452.476 310.21) rotate(-87.997)"
                      fill="#283237"
                  />
                  <path
                      id="Tracciato_651"
                      data-name="Tracciato 651"
                      d="M542.632,366.788s-2.8-.907-3.551-2.551"
                      transform="translate(-94.733 -46.3)"
                      fill="none"
                      stroke="#e3b699"
                      stroke-miterlimit="10"
                      stroke-width="1.076"
                  />
                </g>
              </svg>
            </div>
          </div>

        </>}
      </>
  );
};

export default ServizioMessagistica;
