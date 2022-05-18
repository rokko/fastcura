import { Typography } from "@mui/material";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Fade } from "react-awesome-reveal";

const Visibilita = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <>
      {!!isMobile && (
        <div
          style={{
            display: "flex",
            marginTop: "50px",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "110%",
            maxWidth: "100%",
            backgroundColor: "rgb(242, 252, 255)",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              fontSize={"25px"}
              fontWeight={"900"}
              color={"#000000"}
              fontFamily={"Charter"}
            >
              Visibilità
            </Typography>
            <div>
              <Fade direction={"up"}>
                <p style={{ fontSize: isMobile ? "16px" : "26px" }}>
                  {" "}
                  Fastcura ha l'obiettivo di darti visibilità sul tuo
                  territorio, allargando la tua rete di clienti
                </p>
              </Fade>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="276.75"
              height="296.939"
              viewBox="0 0 276.75 296.939"
            >
              <g
                id="flare"
                transform="matrix(-0.208, -0.978, 0.978, -0.208, 40.326, 321.287)"
              >
                <path
                  id="Tracciato_479"
                  data-name="Tracciato 479"
                  d="M0,0H209.64V205.122H0Z"
                  transform="translate(23.165 9.744)"
                  fill="none"
                />
                <path
                  id="Tracciato_480"
                  data-name="Tracciato 480"
                  d="M53.748,91.365.372,91.693.265,109.848l53.376-.327ZM73.226,61.836,54.48,42.708,41.861,55.584,60.607,74.712ZM107.659.264,89.867.374l-.321,54.464,17.792-.109ZM155.018,54.89,142.55,42.168l-18.973,19.36L136.045,74.25Zm-12.31,35.93-.107,18.155,53.376-.327.107-18.155ZM98.335,72.938c-14.767.091-26.76,12.327-26.849,27.4A26.541,26.541,0,0,0,98.014,127.4c14.767-.091,26.76-12.327,26.849-27.4A26.541,26.541,0,0,0,98.335,72.938ZM123.123,138.5l18.746,19.128,12.619-12.876-18.746-19.128L123.123,138.5ZM41.331,145.45,53.8,158.172l18.973-19.36L60.3,126.09,41.331,145.45Zm47.359,54.626,17.792-.109L106.8,145.5l-17.792.109Z"
                  transform="translate(167.711 -5.957) rotate(48)"
                  fill="#f4efaf"
                />
              </g>
              <g
                id="Raggruppa_70"
                data-name="Raggruppa 70"
                transform="translate(96.433 71.925)"
              >
                <path
                  id="Tracciato_264"
                  data-name="Tracciato 264"
                  d="M534.639,2197.7s12.05,1.209,12.876,2.134,5.576,6.99,10.934,8.523-.092,4.737-1.639,4.122-17.613-2.226-20.91-2.94-4.532-.607-4.638-1.843S534.639,2197.7,534.639,2197.7Z"
                  transform="translate(-507.502 -1987.544)"
                  fill="#a7ddea"
                />
                <path
                  id="Tracciato_265"
                  data-name="Tracciato 265"
                  d="M400.768,2196.112s12.533.777,13.425,1.7,6.053,7.021,11.665,8.4.091,4.912-1.535,4.336-18.336-1.612-21.78-2.221-4.72-.451-4.878-1.727S400.768,2196.112,400.768,2196.112Z"
                  transform="translate(-346.866 -1986.29)"
                  fill="#a7ddea"
                />
                <path
                  id="Tracciato_268"
                  data-name="Tracciato 268"
                  d="M445.675,1687.655l.712,4.817a27.385,27.385,0,0,0-4.506,6.151c-1.3,2.529,1.407,5.28,1.225,7.349-.313,3.521,5.875,2.242,6.9,1.86s3.125-2.636,3.38-5.434c.855-9.359-.865-21.463-.865-21.463Z"
                  transform="translate(-381.435 -1579.848)"
                  fill="#f2be9f"
                />
                <path
                  id="Tracciato_269"
                  data-name="Tracciato 269"
                  d="M489.174,1746.936l-13.095-99.056L475,1627.332l22.46,6.3,1.845,113.308Z"
                  transform="translate(-434.178 -1537.559)"
                  fill="#3f8dac"
                />
                <path
                  id="Tracciato_270"
                  data-name="Tracciato 270"
                  d="M578.341,1736.585l-3.275-57.52-.871-64.853,20.568,7.075-.7,22.93-2.959,38.916-3.9,52.608Z"
                  transform="translate(-550.572 -1527.208)"
                  fill="#3f8dac"
                />
                <path
                  id="Tracciato_271"
                  data-name="Tracciato 271"
                  d="M691.2,1383.73s-3.442-.822-5.859,6.41c-2.967,8.88-13.021,22.344-12.555,27.248,1.428,14.982,9.449,3.175,16.107-5.5l6.169-9.121Z"
                  transform="translate(-671.676 -1345.351)"
                  fill="#e8c5ac"
                />
                <path
                  id="Tracciato_272"
                  data-name="Tracciato 272"
                  d="M444.39,1381.276s3.3-.154,5.045,5.853c.916,3.167,2.545,21.407,3.123,26.925,1.19,11.361-.26,33.348-1.527,37.847-.17.613-9.018-1.808-10.548-5.964-1.248-3.389-3.41-42.434-3.41-42.434Z"
                  transform="translate(-379.867 -1343.437)"
                  fill="#f2be9f"
                />
                <g
                  id="Raggruppa_43"
                  data-name="Raggruppa 43"
                  transform="translate(8.183 38.327)"
                >
                  <path
                    id="Tracciato_273"
                    data-name="Tracciato 273"
                    d="M689.64,1405.428l-2.869-21.814s-4.433-.8-6.852,6.436A69.42,69.42,0,0,1,674.9,1400.6a18.977,18.977,0,0,0,1.947,9,20.866,20.866,0,0,0,6.155,6.688C683.4,1415.582,689.64,1405.428,689.64,1405.428Z"
                    transform="translate(-674.884 -1383.588)"
                    fill="#39b1d9"
                  />
                </g>
                <path
                  id="Tracciato_274"
                  data-name="Tracciato 274"
                  d="M449.751,1411.557c-.69-6.971-2.1-22.132-2.927-24.992-1.743-6.008-5.046-5.854-5.046-5.854l-7.318,22.228s.221,3.984.561,9.515C439.794,1413.182,445.992,1412.279,449.751,1411.557Z"
                  transform="translate(-376.067 -1342.991)"
                  fill="#39b1d9"
                />
                <path
                  id="Tracciato_275"
                  data-name="Tracciato 275"
                  d="M511.908,1378.858c.8-8.234-1-8.528-1-8.528a59.519,59.519,0,0,0-14.74-2.814c-3.8-.176-11.9-.352-15.855-.148-5.987.309-16.026,3.149-16.981,3.3-2.416.365-2.308,7.929-2.308,7.929l4.358,33.394s-1.134,32.91-.759,33.727c1.294,2.813,16.849,1.886,23.619,1.633,13.434-.5,22.185-1.42,22.237-2.066.045-.529-2.364-31.047-1.771-36.593C509.182,1404.253,511.406,1384.088,511.908,1378.858Z"
                  transform="translate(-444.034 -1332.393)"
                  fill="#39b1d9"
                />
                <path
                  id="Tracciato_276"
                  data-name="Tracciato 276"
                  d="M530.729,1385.2s11.629-13.1,11.772-18.1c.059-2.081-3.21-2.948-5.62-3.3-3.061-.445-18.1-1.457-17.685,3.6C519.767,1374.335,530.729,1385.2,530.729,1385.2Z"
                  transform="translate(-486.701 -1329.338)"
                  fill="#3f8dac"
                />
                <path
                  id="Tracciato_277"
                  data-name="Tracciato 277"
                  d="M533.62,1323.119c-.391-.734-1.286-3.416-.892-4.161.535-1.011,1.431-.809,1.443-1.308l.318-13.981,14.053.427.211,13.317c.01.6,1.453.891,1.631,2.259a6.214,6.214,0,0,1-.89,3.27c-1.789,3.426-8.022,11.99-8.022,11.99S535.278,1326.227,533.62,1323.119Z"
                  transform="translate(-497.439 -1282.21)"
                  fill="#f2be9f"
                />
                <path
                  id="Tracciato_278"
                  data-name="Tracciato 278"
                  d="M519.98,1266.5l.713.07c1.069.333,1.679,1.246,1.357,2.879-.3,1.482-.735,2.936-.885,3.668-.521,2.606-3.078,1.688-3.078,1.688Z"
                  transform="translate(-466.102 -1252.885)"
                  fill="#f2be9f"
                />
                <path
                  id="Tracciato_279"
                  data-name="Tracciato 279"
                  d="M619.154,1263.526l-.714.021a2.761,2.761,0,0,0-.626.231,2.513,2.513,0,0,0-1.452,2.664,16.215,16.215,0,0,0,1.351,4.109c.661,1.685,1.727,1.241,1.727,1.241Z"
                  transform="translate(-584.145 -1250.54)"
                  fill="#f2be9f"
                />
                <path
                  id="Tracciato_280"
                  data-name="Tracciato 280"
                  d="M554.353,1344s.422,2.744-1.688,4.01-8.358,2.67-10.828-2.78Z"
                  transform="translate(-503.367 -1314.029)"
                  fill="#142635"
                  opacity="0.07"
                />
                <path
                  id="Tracciato_281"
                  data-name="Tracciato 281"
                  d="M525.413,1232.336l.258,17.839a10.4,10.4,0,0,0,1.614,5.135s3.654,4.157,4.909,4.2l2.162.07,2.083.068c1.246.042,5.127-3.746,5.127-3.746a10.111,10.111,0,0,0,2.448-5.285l1.01-18.277Z"
                  transform="translate(-490.537 -1225.933)"
                  fill="#f2be9f"
                />
                <path
                  id="Tracciato_282"
                  data-name="Tracciato 282"
                  d="M711.214,1540.571l-8.323-18.549s-4.459-13.555-8.471-7.045c-2.644,4.287-3.464,8.649-1.4,12.634,3.382,6.518,16.38,21.432,16.38,21.432Z"
                  transform="translate(-691.858 -1447.523)"
                  fill="#f2be9f"
                />
                <path
                  id="Tracciato_283"
                  data-name="Tracciato 283"
                  d="M652.123,1641.662c.955-5.6.949-6.57,3.8-7.866,2.276-1.035,6.687.612,6.687.612a1.372,1.372,0,0,1-1.021,2.546l-1.617-.305c-1.728.082-1,1.559-.345,1.642l1.077.335c1.3.164,2.623-.022,2.623,1.494,0,1.012-1.827,3.611-1.827,3.611-.912,2.687-3.7,3.379-6.066,2.37C654.095,1645.528,651.686,1644.219,652.123,1641.662Z"
                  transform="translate(-635.664 -1542.39)"
                  fill="#f2be9f"
                />
                <path
                  id="Tracciato_284"
                  data-name="Tracciato 284"
                  d="M519.836,1218.622s-.241-2.849-.936-7.87a5.979,5.979,0,0,1,1.074-4.646c.8-1.013,2.921-3.574,4.489-3.918,2.395-.524,8.519.131,12.082.92,2.223.5,3.559,2.178,4.549,3.893a5.921,5.921,0,0,1,.6,3.875c-.138,1.131-1.333,8.488-1.333,8.488s-1.053.467-1.077-3.623c-.028-5.148-3.132-5.658-3.924-5.653-.132,0,.42,4.09.42,4.09s-6.752-3.13-7.192-3.216-6.664-2.851-7.034.926c-.109,1.1-.347,8.077-.347,8.077S520.24,1220.072,519.836,1218.622Z"
                  transform="translate(-485.897 -1202)"
                  fill="#142635"
                />
                <ellipse
                  id="Ellisse_43"
                  data-name="Ellisse 43"
                  cx="0.588"
                  cy="0.907"
                  rx="0.588"
                  ry="0.907"
                  transform="translate(48.576 19.936) rotate(-174.618)"
                  fill="#273237"
                />
                <ellipse
                  id="Ellisse_44"
                  data-name="Ellisse 44"
                  cx="0.571"
                  cy="0.873"
                  rx="0.571"
                  ry="0.873"
                  transform="translate(40.666 19.866) rotate(-174.618)"
                  fill="#273237"
                />
                <path
                  id="Tracciato_285"
                  data-name="Tracciato 285"
                  d="M561.541,1325.171s-4.277,6.033-8.946.088C552.6,1325.259,558.279,1325.906,561.541,1325.171Z"
                  transform="translate(-512.792 -1299.174)"
                  fill="#fff"
                />
                <path
                  id="Tracciato_286"
                  data-name="Tracciato 286"
                  d="M545.94,1279.143a3.56,3.56,0,0,1,3.747.5"
                  transform="translate(-499.533 -1262.616)"
                  fill="none"
                  stroke="#283237"
                  stroke-miterlimit="10"
                  stroke-width="0.849"
                />
                <path
                  id="Tracciato_287"
                  data-name="Tracciato 287"
                  d="M589.231,1277.37s-2.149-1.347-3.747.32"
                  transform="translate(-547.423 -1261.057)"
                  fill="none"
                  stroke="#283237"
                  stroke-miterlimit="10"
                  stroke-width="0.849"
                />
              </g>
            </svg>

            <button
              style={{
                borderRadius: 20,
                backgroundColor: "#39B1D9",
                border: "none",
                width: 190,
                height: 37,
                color: "#ffffff",
                marginTop: 10,
              }}
            >
              <Typography fontWeight="bold" color={"#ffffff"}>
                Scopri di più
              </Typography>
            </button>
          </div>
        </div>
      )}
      {!isMobile && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            maxWidth: "100%",
            backgroundColor: "rgb(242, 252, 255)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "space-around",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                fontWeight="900"
                fontSize={"48px"}
                alignContent="left"
                color={"#000000"}
                fontFamily={"Charter"}
              >
                Visibilità
              </Typography>
              <Fade direction={"up"}>
                <p
                  style={{
                    fontSize: 24,
                    color: "#6D6D6D",
                    textAlign: "left",
                    fontFamily: "Charter",
                  }}
                >
                  Fastcura ha l'obiettivo di darti visibilità sul tuo
                  territorio, allargando la tua rete di clienti
                </p>
              </Fade>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="350.75"
                height="350.939"
                viewBox="0 0 276.75 296.939"
              >
                <g
                  id="flare"
                  transform="matrix(-0.208, -0.978, 0.978, -0.208, 40.326, 321.287)"
                >
                  <path
                    id="Tracciato_479"
                    data-name="Tracciato 479"
                    d="M0,0H209.64V205.122H0Z"
                    transform="translate(23.165 9.744)"
                    fill="none"
                  />
                  <path
                    id="Tracciato_480"
                    data-name="Tracciato 480"
                    d="M53.748,91.365.372,91.693.265,109.848l53.376-.327ZM73.226,61.836,54.48,42.708,41.861,55.584,60.607,74.712ZM107.659.264,89.867.374l-.321,54.464,17.792-.109ZM155.018,54.89,142.55,42.168l-18.973,19.36L136.045,74.25Zm-12.31,35.93-.107,18.155,53.376-.327.107-18.155ZM98.335,72.938c-14.767.091-26.76,12.327-26.849,27.4A26.541,26.541,0,0,0,98.014,127.4c14.767-.091,26.76-12.327,26.849-27.4A26.541,26.541,0,0,0,98.335,72.938ZM123.123,138.5l18.746,19.128,12.619-12.876-18.746-19.128L123.123,138.5ZM41.331,145.45,53.8,158.172l18.973-19.36L60.3,126.09,41.331,145.45Zm47.359,54.626,17.792-.109L106.8,145.5l-17.792.109Z"
                    transform="translate(167.711 -5.957) rotate(48)"
                    fill="#f4efaf"
                  />
                </g>
                <g
                  id="Raggruppa_70"
                  data-name="Raggruppa 70"
                  transform="translate(96.433 71.925)"
                >
                  <path
                    id="Tracciato_264"
                    data-name="Tracciato 264"
                    d="M534.639,2197.7s12.05,1.209,12.876,2.134,5.576,6.99,10.934,8.523-.092,4.737-1.639,4.122-17.613-2.226-20.91-2.94-4.532-.607-4.638-1.843S534.639,2197.7,534.639,2197.7Z"
                    transform="translate(-507.502 -1987.544)"
                    fill="#a7ddea"
                  />
                  <path
                    id="Tracciato_265"
                    data-name="Tracciato 265"
                    d="M400.768,2196.112s12.533.777,13.425,1.7,6.053,7.021,11.665,8.4.091,4.912-1.535,4.336-18.336-1.612-21.78-2.221-4.72-.451-4.878-1.727S400.768,2196.112,400.768,2196.112Z"
                    transform="translate(-346.866 -1986.29)"
                    fill="#a7ddea"
                  />
                  <path
                    id="Tracciato_268"
                    data-name="Tracciato 268"
                    d="M445.675,1687.655l.712,4.817a27.385,27.385,0,0,0-4.506,6.151c-1.3,2.529,1.407,5.28,1.225,7.349-.313,3.521,5.875,2.242,6.9,1.86s3.125-2.636,3.38-5.434c.855-9.359-.865-21.463-.865-21.463Z"
                    transform="translate(-381.435 -1579.848)"
                    fill="#f2be9f"
                  />
                  <path
                    id="Tracciato_269"
                    data-name="Tracciato 269"
                    d="M489.174,1746.936l-13.095-99.056L475,1627.332l22.46,6.3,1.845,113.308Z"
                    transform="translate(-434.178 -1537.559)"
                    fill="#3f8dac"
                  />
                  <path
                    id="Tracciato_270"
                    data-name="Tracciato 270"
                    d="M578.341,1736.585l-3.275-57.52-.871-64.853,20.568,7.075-.7,22.93-2.959,38.916-3.9,52.608Z"
                    transform="translate(-550.572 -1527.208)"
                    fill="#3f8dac"
                  />
                  <path
                    id="Tracciato_271"
                    data-name="Tracciato 271"
                    d="M691.2,1383.73s-3.442-.822-5.859,6.41c-2.967,8.88-13.021,22.344-12.555,27.248,1.428,14.982,9.449,3.175,16.107-5.5l6.169-9.121Z"
                    transform="translate(-671.676 -1345.351)"
                    fill="#e8c5ac"
                  />
                  <path
                    id="Tracciato_272"
                    data-name="Tracciato 272"
                    d="M444.39,1381.276s3.3-.154,5.045,5.853c.916,3.167,2.545,21.407,3.123,26.925,1.19,11.361-.26,33.348-1.527,37.847-.17.613-9.018-1.808-10.548-5.964-1.248-3.389-3.41-42.434-3.41-42.434Z"
                    transform="translate(-379.867 -1343.437)"
                    fill="#f2be9f"
                  />
                  <g
                    id="Raggruppa_43"
                    data-name="Raggruppa 43"
                    transform="translate(8.183 38.327)"
                  >
                    <path
                      id="Tracciato_273"
                      data-name="Tracciato 273"
                      d="M689.64,1405.428l-2.869-21.814s-4.433-.8-6.852,6.436A69.42,69.42,0,0,1,674.9,1400.6a18.977,18.977,0,0,0,1.947,9,20.866,20.866,0,0,0,6.155,6.688C683.4,1415.582,689.64,1405.428,689.64,1405.428Z"
                      transform="translate(-674.884 -1383.588)"
                      fill="#39b1d9"
                    />
                  </g>
                  <path
                    id="Tracciato_274"
                    data-name="Tracciato 274"
                    d="M449.751,1411.557c-.69-6.971-2.1-22.132-2.927-24.992-1.743-6.008-5.046-5.854-5.046-5.854l-7.318,22.228s.221,3.984.561,9.515C439.794,1413.182,445.992,1412.279,449.751,1411.557Z"
                    transform="translate(-376.067 -1342.991)"
                    fill="#39b1d9"
                  />
                  <path
                    id="Tracciato_275"
                    data-name="Tracciato 275"
                    d="M511.908,1378.858c.8-8.234-1-8.528-1-8.528a59.519,59.519,0,0,0-14.74-2.814c-3.8-.176-11.9-.352-15.855-.148-5.987.309-16.026,3.149-16.981,3.3-2.416.365-2.308,7.929-2.308,7.929l4.358,33.394s-1.134,32.91-.759,33.727c1.294,2.813,16.849,1.886,23.619,1.633,13.434-.5,22.185-1.42,22.237-2.066.045-.529-2.364-31.047-1.771-36.593C509.182,1404.253,511.406,1384.088,511.908,1378.858Z"
                    transform="translate(-444.034 -1332.393)"
                    fill="#39b1d9"
                  />
                  <path
                    id="Tracciato_276"
                    data-name="Tracciato 276"
                    d="M530.729,1385.2s11.629-13.1,11.772-18.1c.059-2.081-3.21-2.948-5.62-3.3-3.061-.445-18.1-1.457-17.685,3.6C519.767,1374.335,530.729,1385.2,530.729,1385.2Z"
                    transform="translate(-486.701 -1329.338)"
                    fill="#3f8dac"
                  />
                  <path
                    id="Tracciato_277"
                    data-name="Tracciato 277"
                    d="M533.62,1323.119c-.391-.734-1.286-3.416-.892-4.161.535-1.011,1.431-.809,1.443-1.308l.318-13.981,14.053.427.211,13.317c.01.6,1.453.891,1.631,2.259a6.214,6.214,0,0,1-.89,3.27c-1.789,3.426-8.022,11.99-8.022,11.99S535.278,1326.227,533.62,1323.119Z"
                    transform="translate(-497.439 -1282.21)"
                    fill="#f2be9f"
                  />
                  <path
                    id="Tracciato_278"
                    data-name="Tracciato 278"
                    d="M519.98,1266.5l.713.07c1.069.333,1.679,1.246,1.357,2.879-.3,1.482-.735,2.936-.885,3.668-.521,2.606-3.078,1.688-3.078,1.688Z"
                    transform="translate(-466.102 -1252.885)"
                    fill="#f2be9f"
                  />
                  <path
                    id="Tracciato_279"
                    data-name="Tracciato 279"
                    d="M619.154,1263.526l-.714.021a2.761,2.761,0,0,0-.626.231,2.513,2.513,0,0,0-1.452,2.664,16.215,16.215,0,0,0,1.351,4.109c.661,1.685,1.727,1.241,1.727,1.241Z"
                    transform="translate(-584.145 -1250.54)"
                    fill="#f2be9f"
                  />
                  <path
                    id="Tracciato_280"
                    data-name="Tracciato 280"
                    d="M554.353,1344s.422,2.744-1.688,4.01-8.358,2.67-10.828-2.78Z"
                    transform="translate(-503.367 -1314.029)"
                    fill="#142635"
                    opacity="0.07"
                  />
                  <path
                    id="Tracciato_281"
                    data-name="Tracciato 281"
                    d="M525.413,1232.336l.258,17.839a10.4,10.4,0,0,0,1.614,5.135s3.654,4.157,4.909,4.2l2.162.07,2.083.068c1.246.042,5.127-3.746,5.127-3.746a10.111,10.111,0,0,0,2.448-5.285l1.01-18.277Z"
                    transform="translate(-490.537 -1225.933)"
                    fill="#f2be9f"
                  />
                  <path
                    id="Tracciato_282"
                    data-name="Tracciato 282"
                    d="M711.214,1540.571l-8.323-18.549s-4.459-13.555-8.471-7.045c-2.644,4.287-3.464,8.649-1.4,12.634,3.382,6.518,16.38,21.432,16.38,21.432Z"
                    transform="translate(-691.858 -1447.523)"
                    fill="#f2be9f"
                  />
                  <path
                    id="Tracciato_283"
                    data-name="Tracciato 283"
                    d="M652.123,1641.662c.955-5.6.949-6.57,3.8-7.866,2.276-1.035,6.687.612,6.687.612a1.372,1.372,0,0,1-1.021,2.546l-1.617-.305c-1.728.082-1,1.559-.345,1.642l1.077.335c1.3.164,2.623-.022,2.623,1.494,0,1.012-1.827,3.611-1.827,3.611-.912,2.687-3.7,3.379-6.066,2.37C654.095,1645.528,651.686,1644.219,652.123,1641.662Z"
                    transform="translate(-635.664 -1542.39)"
                    fill="#f2be9f"
                  />
                  <path
                    id="Tracciato_284"
                    data-name="Tracciato 284"
                    d="M519.836,1218.622s-.241-2.849-.936-7.87a5.979,5.979,0,0,1,1.074-4.646c.8-1.013,2.921-3.574,4.489-3.918,2.395-.524,8.519.131,12.082.92,2.223.5,3.559,2.178,4.549,3.893a5.921,5.921,0,0,1,.6,3.875c-.138,1.131-1.333,8.488-1.333,8.488s-1.053.467-1.077-3.623c-.028-5.148-3.132-5.658-3.924-5.653-.132,0,.42,4.09.42,4.09s-6.752-3.13-7.192-3.216-6.664-2.851-7.034.926c-.109,1.1-.347,8.077-.347,8.077S520.24,1220.072,519.836,1218.622Z"
                    transform="translate(-485.897 -1202)"
                    fill="#142635"
                  />
                  <ellipse
                    id="Ellisse_43"
                    data-name="Ellisse 43"
                    cx="0.588"
                    cy="0.907"
                    rx="0.588"
                    ry="0.907"
                    transform="translate(48.576 19.936) rotate(-174.618)"
                    fill="#273237"
                  />
                  <ellipse
                    id="Ellisse_44"
                    data-name="Ellisse 44"
                    cx="0.571"
                    cy="0.873"
                    rx="0.571"
                    ry="0.873"
                    transform="translate(40.666 19.866) rotate(-174.618)"
                    fill="#273237"
                  />
                  <path
                    id="Tracciato_285"
                    data-name="Tracciato 285"
                    d="M561.541,1325.171s-4.277,6.033-8.946.088C552.6,1325.259,558.279,1325.906,561.541,1325.171Z"
                    transform="translate(-512.792 -1299.174)"
                    fill="#fff"
                  />
                  <path
                    id="Tracciato_286"
                    data-name="Tracciato 286"
                    d="M545.94,1279.143a3.56,3.56,0,0,1,3.747.5"
                    transform="translate(-499.533 -1262.616)"
                    fill="none"
                    stroke="#283237"
                    stroke-miterlimit="10"
                    stroke-width="0.849"
                  />
                  <path
                    id="Tracciato_287"
                    data-name="Tracciato 287"
                    d="M589.231,1277.37s-2.149-1.347-3.747.32"
                    transform="translate(-547.423 -1261.057)"
                    fill="none"
                    stroke="#283237"
                    stroke-miterlimit="10"
                    stroke-width="0.849"
                  />
                </g>
              </svg>

              <button
                onClick={() => window.scrollTo(0, document.body.scrollHeight)}
                style={{
                  borderRadius: 20,
                  backgroundColor: "#39B1D9",
                  border: "none",
                  width: 220,
                  height: 50,
                  color: "#ffffff",
                  marginTop: 10,
                }}
              >
                <Typography
                  fontWeight="bold"
                  color={"#ffffff"}
                  fontSize={"30px"}
                >
                  Scopri di più
                </Typography>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Visibilita;
