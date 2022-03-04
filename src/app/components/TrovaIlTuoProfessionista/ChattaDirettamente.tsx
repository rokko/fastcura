import React from "react";
import {useMediaQuery} from "react-responsive";
import {Fade} from "react-awesome-reveal";

const ChattaDirettamente = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

  return (
    <>
    <div style={{backgroundColor:'#F2FCFF', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-around', alignContent:'center', alignItems:'center', height:'400px'}}>
      <div style={{ display: "flex", flexDirection: "row", marginLeft:'20px',justifyContent:'space-around',marginRight:'20px', padding:'30px' }}>
        <div style={{ width: "60%", textAlign:'left', marginLeft:'25px'}}>

          <p className="titleAll" style={{fontSize:(isMobile)?'25px':'48px'}}>Chatta direttamente con il professionista</p>
          <Fade direction={'up'}>
          <p style={{fontSize:(isMobile)?'14px':'24px'}}>
            In pochi passaggi potrai contattare l'infermiere,il fisioterapista,
            il caregiver ed esporre il tuo problema.
          </p>
          </Fade>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={isMobile ? '180':"300.425"}
          height={isMobile ? '180':"300.425"}
          viewBox="0 0 125.516 217.525"
        >
          <g
            id="Raggruppa_44"
            data-name="Raggruppa 44"
            transform="translate(47.602 -1168.377)"
          >
            <path
              id="Tracciato_264"
              data-name="Tracciato 264"
              d="M534.07,2197.7s10.019,1.005,10.706,1.774,4.636,5.812,9.091,7.086-.077,3.938-1.362,3.427-14.644-1.851-17.385-2.444-3.768-.505-3.856-1.532S534.07,2197.7,534.07,2197.7Z"
              transform="translate(-501.315 -824.152)"
              fill="#a7ddea"
            />
            <path
              id="Tracciato_265"
              data-name="Tracciato 265"
              d="M400.244,2196.112s10.42.646,11.162,1.416,5.033,5.838,9.7,6.983.076,4.084-1.276,3.6-15.246-1.34-18.109-1.847-3.924-.375-4.056-1.436S400.244,2196.112,400.244,2196.112Z"
              transform="translate(-345.235 -822.841)"
              fill="#a7ddea"
            />
            <path
              id="Tracciato_266"
              data-name="Tracciato 266"
              d="M180.792,1335l-38.777-3.653-.149-.014-8.361-.788a.937.937,0,0,0-.939,1.328,37.112,37.112,0,0,1,2.2,5.333L133.6,1349.6a6.513,6.513,0,0,0,5.874,7.1l38.925,3.667a6.513,6.513,0,0,0,7.1-5.873l1.167-12.393A6.513,6.513,0,0,0,180.792,1335Z"
              transform="translate(-180.08 -162.164)"
              fill="#39b1d9"
            />
            <path
              id="Tracciato_267"
              data-name="Tracciato 267"
              d="M76.643,1516.224a.937.937,0,0,0-.675-1.48l-8.361-.788-.149-.014-38.777-3.653a6.513,6.513,0,0,0-7.1,5.874l-1.167,12.393a6.513,6.513,0,0,0,5.874,7.1l38.925,3.667a6.513,6.513,0,0,0,7.1-5.874l1.167-12.393A37.111,37.111,0,0,1,76.643,1516.224Z"
              transform="translate(-50.535 -310.344)"
              fill="#39b1d9"
              opacity="0.19"
            />
            <path
              id="Tracciato_268"
              data-name="Tracciato 268"
              d="M444.975,1686.522l.592,4.005a22.768,22.768,0,0,0-3.747,5.114c-1.083,2.1,1.17,4.39,1.019,6.11-.26,2.928,4.885,1.864,5.74,1.546a5.978,5.978,0,0,0,2.811-4.518c.711-7.781-.72-17.846-.72-17.846Z"
              transform="translate(-381.371 -398.072)"
              fill="#f2be9f"
            />
            <path
              id="Tracciato_269"
              data-name="Tracciato 269"
              d="M486.785,1726.777l-10.888-82.36-.9-17.085,18.674,5.235,1.534,94.21Z"
              transform="translate(-430.867 -353.877)"
              fill="#3f8dac"
            />
            <path
              id="Tracciato_270"
              data-name="Tracciato 270"
              d="M577.642,1715.959l-2.723-47.826-.724-53.922,17.1,5.883-.584,19.065-2.46,32.357-3.24,43.741Z"
              transform="translate(-544.362 -343.059)"
              fill="#3f8dac"
            />
            <path
              id="Tracciato_271"
              data-name="Tracciato 271"
              d="M688.094,1383.725s-2.862-.683-4.872,5.33c-2.467,7.383-10.826,18.578-10.439,22.655,1.188,12.457,7.856,2.64,13.392-4.577l5.129-7.584Z"
              transform="translate(-661.669 -153.002)"
              fill="#e8c5ac"
            />
            <path
              id="Tracciato_272"
              data-name="Tracciato 272"
              d="M443.157,1381.276s2.746-.128,4.195,4.867c.761,2.634,2.116,17.8,2.6,22.386.989,9.446-.216,27.727-1.27,31.468-.142.51-7.5-1.5-8.77-4.958-1.038-2.818-2.835-35.282-2.835-35.282Z"
              transform="translate(-379.318 -151.001)"
              fill="#f2be9f"
            />
            <g
              id="Raggruppa_43"
              data-name="Raggruppa 43"
              transform="translate(16.995 1230.68)"
            >
              <path
                id="Tracciato_273"
                data-name="Tracciato 273"
                d="M687.153,1401.746l-2.385-18.137s-3.686-.661-5.7,5.351a57.712,57.712,0,0,1-4.177,8.771,15.779,15.779,0,0,0,1.619,7.479,17.349,17.349,0,0,0,5.117,5.561C681.967,1410.189,687.153,1401.746,687.153,1401.746Z"
                transform="translate(-674.884 -1383.588)"
                fill="#39b1d9"
              />
            </g>
            <path
              id="Tracciato_274"
              data-name="Tracciato 274"
              d="M447.174,1406.358c-.574-5.8-1.746-18.4-2.433-20.78-1.449-5-4.2-4.868-4.2-4.868l-6.085,18.481s.184,3.313.467,7.911C438.895,1407.709,444.048,1406.958,447.174,1406.358Z"
              transform="translate(-375.718 -150.535)"
              fill="#39b1d9"
            />
            <path
              id="Tracciato_275"
              data-name="Tracciato 275"
              d="M503.331,1376.906c.662-6.846-.834-7.091-.834-7.091a49.49,49.49,0,0,0-12.256-2.34c-3.164-.146-9.892-.292-13.183-.123-4.978.257-13.325,2.618-14.119,2.742-2.009.3-1.919,6.593-1.919,6.593l3.624,27.766s-.943,27.363-.631,28.042c1.076,2.339,14.009,1.568,19.638,1.357,11.169-.419,18.446-1.18,18.489-1.718.037-.44-1.965-25.814-1.472-30.426C501.064,1398.021,502.914,1381.255,503.331,1376.906Z"
              transform="translate(-436.705 -139.459)"
              fill="#39b1d9"
            />
            <path
              id="Tracciato_276"
              data-name="Tracciato 276"
              d="M528.784,1381.526s9.669-10.889,9.788-15.052c.049-1.73-2.669-2.452-4.673-2.743-2.545-.37-15.051-1.211-14.7,2.991C519.669,1372.493,528.784,1381.526,528.784,1381.526Z"
              transform="translate(-481.985 -136.267)"
              fill="#3f8dac"
            />
            <path
              id="Tracciato_277"
              data-name="Tracciato 277"
              d="M533.453,1319.841c-.325-.61-1.07-2.84-.742-3.46.445-.84,1.19-.673,1.2-1.087l.265-11.625,11.685.355.176,11.072c.009.5,1.208.741,1.356,1.878a5.167,5.167,0,0,1-.74,2.719c-1.487,2.848-6.67,9.97-6.67,9.97S534.832,1322.425,533.453,1319.841Z"
              transform="translate(-493.179 -87.014)"
              fill="#f2be9f"
            />
            <path
              id="Tracciato_278"
              data-name="Tracciato 278"
              d="M519.66,1266.5l.593.058c.889.277,1.4,1.036,1.128,2.394-.247,1.232-.611,2.441-.736,3.05a1.85,1.85,0,0,1-2.559,1.4Z"
              transform="translate(-464.672 -56.366)"
              fill="#f2be9f"
            />
            <path
              id="Tracciato_279"
              data-name="Tracciato 279"
              d="M618.679,1263.526l-.594.018a2.293,2.293,0,0,0-.521.192,2.09,2.09,0,0,0-1.207,2.215,13.481,13.481,0,0,0,1.123,3.416c.549,1.4,1.436,1.031,1.436,1.031Z"
              transform="translate(-579.379 -53.915)"
              fill="#f2be9f"
            />
            <path
              id="Tracciato_280"
              data-name="Tracciato 280"
              d="M552.243,1344a3.469,3.469,0,0,1-1.4,3.334c-1.755,1.053-6.949,2.22-9-2.312Z"
              transform="translate(-499.659 -120.267)"
              fill="#142635"
              opacity="0.07"
            />
            <path
              id="Tracciato_281"
              data-name="Tracciato 281"
              d="M525.413,1232.336l.214,14.832a8.643,8.643,0,0,0,1.342,4.269s3.038,3.456,4.082,3.489l1.8.059,1.732.057c1.036.035,4.263-3.115,4.263-3.115a8.407,8.407,0,0,0,2.036-4.394l.84-15.2Z"
              transform="translate(-486.224 -28.199)"
              fill="#f2be9f"
            />
            <path
              id="Tracciato_282"
              data-name="Tracciato 282"
              d="M707.952,1535.959l-6.92-15.422s-3.708-11.27-7.043-5.857c-2.2,3.564-2.88,7.191-1.163,10.5,2.812,5.419,13.619,17.819,13.619,17.819Z"
              transform="translate(-681.666 -259.781)"
              fill="#f2be9f"
            />
            <path
              id="Tracciato_283"
              data-name="Tracciato 283"
              d="M652.114,1640.279c.794-4.653.789-5.463,3.16-6.54,1.893-.86,5.56.509,5.56.509a1.141,1.141,0,0,1-.849,2.117l-1.344-.254c-1.437.068-.832,1.3-.287,1.365l.9.278c1.081.136,2.181-.018,2.181,1.242,0,.841-1.519,3-1.519,3-.758,2.234-3.074,2.809-5.043,1.97C653.754,1643.493,651.751,1642.405,652.114,1640.279Z"
              transform="translate(-628.238 -358.925)"
              fill="#f2be9f"
            />
            <path
              id="Tracciato_284"
              data-name="Tracciato 284"
              d="M519.665,1215.82s-.2-2.368-.778-6.543a4.972,4.972,0,0,1,.893-3.862c.664-.842,2.429-2.972,3.732-3.258,1.991-.436,7.083.109,10.046.765a6.02,6.02,0,0,1,3.783,3.237,4.923,4.923,0,0,1,.5,3.222c-.115.94-1.108,7.058-1.108,7.058s-.876.389-.9-3.013c-.023-4.28-2.6-4.7-3.263-4.7-.11,0,.349,3.4.349,3.4s-5.614-2.6-5.98-2.674-5.541-2.37-5.849.77c-.091.915-.288,6.715-.288,6.715S520,1217.026,519.665,1215.82Z"
              transform="translate(-481.255 -3.187)"
              fill="#142635"
            />
            <ellipse
              id="Ellisse_43"
              data-name="Ellisse 43"
              cx="0.489"
              cy="0.754"
              rx="0.489"
              ry="0.754"
              transform="translate(50.58 1215.389) rotate(-174.618)"
              fill="#273237"
            />
            <ellipse
              id="Ellisse_44"
              data-name="Ellisse 44"
              cx="0.475"
              cy="0.726"
              rx="0.475"
              ry="0.726"
              transform="translate(44.004 1215.331) rotate(-174.618)"
              fill="#273237"
            />
            <path
              id="Tracciato_285"
              data-name="Tracciato 285"
              d="M560.033,1325.171s-3.556,5.016-7.438.073A29.322,29.322,0,0,0,560.033,1325.171Z"
              transform="translate(-509.309 -104.742)"
              fill="#fff"
            />
            <path
              id="Tracciato_286"
              data-name="Tracciato 286"
              d="M545.94,1279.091a2.96,2.96,0,0,1,3.115.412"
              transform="translate(-497.163 -66.537)"
              fill="none"
              stroke="#283237"
              stroke-miterlimit="10"
              stroke-width="0.849"
            />
            <path
              id="Tracciato_287"
              data-name="Tracciato 287"
              d="M588.6,1277.283a2.558,2.558,0,0,0-3.115.266"
              transform="translate(-543.646 -64.906)"
              fill="none"
              stroke="#283237"
              stroke-miterlimit="10"
              stroke-width="0.849"
            />
          </g>
        </svg>
      </div>
      </div>
    </>
  );
};

export default ChattaDirettamente;
