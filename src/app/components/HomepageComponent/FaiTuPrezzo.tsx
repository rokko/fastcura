import { Typography } from "@mui/material";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Fade } from "react-awesome-reveal";

const FaiTuPrezzo = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <>
      {!!isMobile && (
        <>
          <div
            style={{
              display: "flex",
              marginTop: "50px",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
              maxWidth: "100%",
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
                fontWeight={"900"}
                color="#000000"
                fontFamily={"Charter"}
                fontSize={25}
              >
                Fai tu il prezzo
              </Typography>

              <Fade direction={"up"}>
                <p style={{ fontSize: isMobile ? "16px" : "26px" }}>
                  Non ci saranno prezzi standard. Deciderai tu quanto farti
                  pagare.{" "}
                </p>
              </Fade>
              <div style={{ position: "relative", left: "-20%" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="228.746"
                  height="183.138"
                  viewBox="0 0 228.746 183.138"
                >
                  <g
                    id="Raggruppa_99"
                    data-name="Raggruppa 99"
                    transform="translate(0 -63)"
                  >
                    <path
                      id="Tracciato_621"
                      data-name="Tracciato 621"
                      d="M739.836,717.9l-8.7-8.562-8.535-8.4a1.544,1.544,0,0,1-.36-1.491c.439-1.566,3.094-3.122,4.645-4.429l.156-.133a4.872,4.872,0,0,1,6.846.581l10.435,12.369h0l3.094,3.669a4.871,4.871,0,0,1-.581,6.845l-.156.133A4.873,4.873,0,0,1,739.836,717.9Z"
                      transform="translate(-546.243 -477.082)"
                      fill="#f4c0a0"
                    />
                    <path
                      id="Tracciato_622"
                      data-name="Tracciato 622"
                      d="M445.307,487.708a3.975,3.975,0,0,1-3.545,3.11,36.952,36.952,0,0,1-18.473-2.193c-8.5.04-14.524-3.056-16.347-1.453-.067.058-.048.185.047.365,1.668,3.235,27.469,24.747,27.845,27.134.4,2.52-47.995,14.378-47.995,14.378s-7.15-4.457-15.155-10.307c-4.06-2.963-8.338-6.284-12.016-9.564-3.709-3.3-6.811-6.568-8.468-9.382l-.009-.019a11.477,11.477,0,0,1-.643-1.234c-.029-.063-.056-.12-.077-.173a23.66,23.66,0,0,0-6.01-8,54.048,54.048,0,0,0-15.021-9.151l35.533-18.961s32.627,3.834,37.847,7c7.608,4.619,23.538,8.006,26.6,9.8,2.276,1.327,14.265,5.632,15.14,6.017A3.015,3.015,0,0,1,445.307,487.708Z"
                      transform="translate(-249.183 -301.992)"
                      fill="#f4c0a0"
                    />
                    <path
                      id="Tracciato_623"
                      data-name="Tracciato 623"
                      d="M168.949,310.7c-.144,1.069-21.034,19.866-26.185,22.9l-.613,4.629c-.3.173-80.167-47.2-80.151-47.506C63.207,267.586,78.378,269.6,98.3,261,108.88,267.327,168.949,310.7,168.949,310.7Z"
                      transform="translate(-46.896 -149.763)"
                      fill="#f4c0a0"
                    />
                    <path
                      id="Tracciato_624"
                      data-name="Tracciato 624"
                      d="M403.142,541.967a.412.412,0,0,1,.041.093c3.339,21.111,15.6,17.629,15.6,17.629l-.461,17.354c-4.06-2.963-8.338-6.284-12.016-9.564-3.709-3.3-6.811-6.568-8.468-9.382l-.009-.019c-.289-.523-.506-.941-.643-1.234-.029-.063-.056-.12-.077-.173a23.66,23.66,0,0,0-6.01-8c1.305-2.229,2.83-4.763,4.336-7.243A4.344,4.344,0,0,1,403.142,541.967Z"
                      transform="translate(-295.819 -360.291)"
                      fill="#f4c0a0"
                    />
                    <rect
                      id="Rettangolo_105"
                      data-name="Rettangolo 105"
                      width="105.304"
                      height="48.374"
                      transform="matrix(0.962, -0.274, 0.274, 0.962, 110.915, 199.62)"
                      fill="#ffa2a2"
                    />
                    <path
                      id="Tracciato_625"
                      data-name="Tracciato 625"
                      d="M824.033,508.853l12.593,46.706-6.8,1.841-12.172-46.836Z"
                      transform="translate(-618.461 -337.234)"
                      fill="#fff"
                    />
                    <rect
                      id="Rettangolo_106"
                      data-name="Rettangolo 106"
                      width="105.304"
                      height="48.374"
                      transform="translate(116.415 196.726) rotate(-10.449)"
                      fill="#9ad7ec"
                    />
                    <rect
                      id="Rettangolo_107"
                      data-name="Rettangolo 107"
                      width="11.52"
                      height="7.558"
                      transform="translate(120.322 198.896) rotate(-10.449)"
                      fill="#183353"
                    />
                    <g
                      id="Raggruppa_98"
                      data-name="Raggruppa 98"
                      transform="translate(150.256 227.287)"
                    >
                      <g
                        id="Raggruppa_95"
                        data-name="Raggruppa 95"
                        transform="translate(7.938 0.417)"
                      >
                        <path
                          id="Tracciato_626"
                          data-name="Tracciato 626"
                          d="M652.588,753.443l-.381-1.029L649.64,745.5a4.407,4.407,0,0,1-.151-.49,4.711,4.711,0,0,1,2.921-5.547l.266-.1a4.711,4.711,0,0,1,6.038,2.769l2.393,6.448.174.469.382,1.029a4.71,4.71,0,0,1-2.769,6.037l-.266.1A4.712,4.712,0,0,1,652.588,753.443Z"
                          transform="translate(-649.348 -739.069)"
                          fill="#f4c0a0"
                        />
                        <path
                          id="Tracciato_627"
                          data-name="Tracciato 627"
                          d="M658.01,753.662a27.523,27.523,0,0,1-1.337-4.36,1.837,1.837,0,0,1,.731-1.433,4.257,4.257,0,0,1,1.571-.855,4.967,4.967,0,0,1,1-.228,4.207,4.207,0,0,1,1.187.047,1.186,1.186,0,0,1,.842.665s0,0,0,.005a27.218,27.218,0,0,1,1.607,4.2,1.817,1.817,0,0,1-1.025,2.246l-.4.142-2.033.724A1.736,1.736,0,0,1,658.01,753.662Z"
                          transform="translate(-654.885 -744.89)"
                          fill="#f4c0a0"
                        />
                        <path
                          id="Tracciato_628"
                          data-name="Tracciato 628"
                          d="M658.01,755.826a27.521,27.521,0,0,1-1.337-4.36,1.837,1.837,0,0,1,.731-1.433c.135-.057.278-.109.431-.158a4.961,4.961,0,0,1,1-.228,4.215,4.215,0,0,1,1.187.047,1.186,1.186,0,0,1,.842.665s0,0,0,.005a27.2,27.2,0,0,1,1.607,4.2,1.983,1.983,0,0,1-.282,1.691l-2.033.724A1.736,1.736,0,0,1,658.01,755.826Z"
                          transform="translate(-654.885 -747.054)"
                          fill="#f4c0a0"
                        />
                      </g>
                      <g
                        id="Raggruppa_96"
                        data-name="Raggruppa 96"
                        transform="translate(0 2.275)"
                      >
                        <path
                          id="Tracciato_629"
                          data-name="Tracciato 629"
                          d="M618.271,756.007l-1.406-5.33a3.054,3.054,0,0,1,2.167-3.722l.6-.159a3.054,3.054,0,0,1,3.721,2.167l1.407,5.33a3.054,3.054,0,0,1-2.167,3.722l-.6.159A3.054,3.054,0,0,1,618.271,756.007Z"
                          transform="translate(-616.764 -746.696)"
                          fill="#f4c0a0"
                        />
                        <path
                          id="Tracciato_630"
                          data-name="Tracciato 630"
                          d="M621.8,756.057a24.012,24.012,0,0,1-.743-3.674,1.793,1.793,0,0,1,1.162-1.442,4.028,4.028,0,0,1,1.535-.379,3.042,3.042,0,0,1,.909.126.941.941,0,0,1,.6.606s0,0,0,.005a23.773,23.773,0,0,1,.963,3.56,1.506,1.506,0,0,1-.933,1.768l-.48.133-1.442.4A1.349,1.349,0,0,1,621.8,756.057Z"
                          transform="translate(-620.014 -749.619)"
                          fill="#f4c0a0"
                        />
                        <path
                          id="Tracciato_631"
                          data-name="Tracciato 631"
                          d="M621.8,756.918a24.011,24.011,0,0,1-.743-3.675,1.793,1.793,0,0,1,1.162-1.442,3.4,3.4,0,0,1,.734-.1,3.054,3.054,0,0,1,.909.125.945.945,0,0,1,.6.606s0,0,0,.005a23.6,23.6,0,0,1,.962,3.56,1.606,1.606,0,0,1-.611,1.624l-1.442.4A1.349,1.349,0,0,1,621.8,756.918Z"
                          transform="translate(-620.014 -750.481)"
                          fill="#f4c0a0"
                        />
                      </g>
                      <g
                        id="Raggruppa_97"
                        data-name="Raggruppa 97"
                        transform="translate(19.414)"
                      >
                        <path
                          id="Tracciato_632"
                          data-name="Tracciato 632"
                          d="M698.413,752.061c-.014-.038-.026-.076-.038-.115l-1.736-6.987a5.764,5.764,0,0,1,3.741-7.017l1.445-.4a5.345,5.345,0,0,1,6.416,3.793l.573,2.306,1.163,4.68a5.764,5.764,0,0,1-3.741,7.017l-1.445.4A5.335,5.335,0,0,1,698.413,752.061Z"
                          transform="translate(-696.455 -737.358)"
                          fill="#f4c0a0"
                        />
                        <path
                          id="Tracciato_633"
                          data-name="Tracciato 633"
                          d="M707.591,764.478l-1.5-3.4c0-.005,0-.011,0-.021a3.7,3.7,0,0,1-.081-.41c-.008-.057-.014-.115-.02-.172a.47.47,0,0,1,0-.072.539.539,0,0,1,.765-.462,3.37,3.37,0,0,0,2.3.21l.3-.078.009,0,.964-.255a3.607,3.607,0,0,0,1.882-1.213c.057-.069.111-.14.162-.213a.973.973,0,0,1,1.73.3c0,.008,0,.014.006.022l.533,3.722a1.769,1.769,0,0,1-1.393,2.044l-1.1.29-2.341.617C708.872,765.625,707.834,765.4,707.591,764.478Z"
                          transform="translate(-703.662 -752.956)"
                          fill="#f4c0a0"
                        />
                        <path
                          id="Tracciato_634"
                          data-name="Tracciato 634"
                          d="M707.594,766.412l-1.5-3.4c0-.005,0-.011,0-.021-.015-.079-.054-.328-.1-.654a.539.539,0,0,1,.765-.462,3.37,3.37,0,0,0,2.3.21l.3-.078.009,0,.964-.255a3.607,3.607,0,0,0,1.882-1.213.947.947,0,0,1,.375.536c0,.006,0,.014.006.021l.533,3.722a1.691,1.691,0,0,1-.974,1.883l-2.341.617C708.875,767.559,707.837,767.333,707.594,766.412Z"
                          transform="translate(-703.665 -754.89)"
                          fill="#f4c0a0"
                        />
                      </g>
                    </g>
                    <path
                      id="Tracciato_635"
                      data-name="Tracciato 635"
                      d="M615.416,499.689s-1.712-13.365,3.508-10.2c7.607,4.62,23.536,8,26.6,9.793,2.275,1.327,14.264,5.632,15.139,6.02a2.676,2.676,0,0,1,.4,3.077,7.4,7.4,0,0,1-3.754,3.607c-7.45,2.9-17.6-3.136-17.922-3.134-8.5.041-16.767-.909-19.169-.566C619.386,508.41,615.416,499.689,615.416,499.689Z"
                      transform="translate(-465.285 -322.223)"
                      fill="#f4c0a0"
                    />
                    <text
                      id="_"
                      data-name="€"
                      transform="translate(129.124 236.27) rotate(-11.677)"
                      fill="#183353"
                      font-size="14"
                      font-family="MuktaMahee-Regular, Mukta Mahee"
                    >
                      <tspan x="0" y="0">
                        €
                      </tspan>
                    </text>
                    <path
                      id="Tracciato_636"
                      data-name="Tracciato 636"
                      d="M851.243,539.336l8.834,47.56-6.92,1.294-8.4-47.657Z"
                      transform="translate(-638.954 -360.291)"
                      fill="#fff"
                    />
                    <line
                      id="Linea_10"
                      data-name="Linea 10"
                      x1="4.942"
                      y2="2.181"
                      transform="translate(215.513 180.242)"
                      fill="none"
                      stroke="#183353"
                      stroke-miterlimit="10"
                      stroke-width="0.891"
                    />
                    <line
                      id="Linea_11"
                      data-name="Linea 11"
                      x1="4.942"
                      y2="2.181"
                      transform="translate(215.73 182.195)"
                      fill="none"
                      stroke="#183353"
                      stroke-miterlimit="10"
                      stroke-width="0.891"
                    />
                    <line
                      id="Linea_12"
                      data-name="Linea 12"
                      x1="4.942"
                      y2="2.181"
                      transform="translate(216.164 184.149)"
                      fill="none"
                      stroke="#183353"
                      stroke-miterlimit="10"
                      stroke-width="0.891"
                    />
                    <line
                      id="Linea_13"
                      data-name="Linea 13"
                      x1="4.942"
                      y2="2.181"
                      transform="translate(216.599 186.102)"
                      fill="none"
                      stroke="#183353"
                      stroke-miterlimit="10"
                      stroke-width="0.891"
                    />
                    <line
                      id="Linea_14"
                      data-name="Linea 14"
                      x1="4.942"
                      y2="2.181"
                      transform="translate(216.816 188.056)"
                      fill="none"
                      stroke="#183353"
                      stroke-miterlimit="10"
                      stroke-width="0.891"
                    />
                    <line
                      id="Linea_15"
                      data-name="Linea 15"
                      x1="4.942"
                      y2="2.181"
                      transform="translate(217.25 190.01)"
                      fill="none"
                      stroke="#183353"
                      stroke-miterlimit="10"
                      stroke-width="0.891"
                    />
                    <line
                      id="Linea_16"
                      data-name="Linea 16"
                      x1="4.942"
                      y2="2.181"
                      transform="translate(217.684 191.963)"
                      fill="none"
                      stroke="#183353"
                      stroke-miterlimit="10"
                      stroke-width="0.891"
                    />
                    <line
                      id="Linea_17"
                      data-name="Linea 17"
                      x1="4.942"
                      y2="2.181"
                      transform="translate(217.901 193.917)"
                      fill="none"
                      stroke="#183353"
                      stroke-miterlimit="10"
                      stroke-width="0.891"
                    />
                    <path
                      id="Tracciato_637"
                      data-name="Tracciato 637"
                      d="M15.1,140.958c1.09,4-15.1-6.334-15.1-6.334V63l58.225,48.724S11.45,127.559,15.1,140.958Z"
                      fill="#39b1d9"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </>
      )}
      {!isMobile && (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
              maxWidth: "100%",
              backgroundColor: "#ffffff",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <Typography
                  fontWeight="900"
                  fontSize={"48px"}
                  fontFamily={"Charter"}
                  color={"#000000"}
                >
                  Fai tu il prezzo
                </Typography>
                <Fade direction={"up"}>
                  <Typography
                    fontSize={"26px"}
                    fontWeight="bold"
                    color="#6D6D6D"
                    fontFamily={"Charter"}
                    textAlign={"left"}
                    marginBottom={8}
                  >
                    Non ci saranno prezzi standard. Deciderai tu quanto farti
                    pagare.{" "}
                  </Typography>
                </Fade>
              </div>
              <div style={{ marginLeft: 0 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="300.746"
                  height="300.138"
                  viewBox="0 0 228.746 183.138"
                >
                  <g
                    id="Raggruppa_99"
                    data-name="Raggruppa 99"
                    transform="translate(0 -63)"
                  >
                    <path
                      id="Tracciato_621"
                      data-name="Tracciato 621"
                      d="M739.836,717.9l-8.7-8.562-8.535-8.4a1.544,1.544,0,0,1-.36-1.491c.439-1.566,3.094-3.122,4.645-4.429l.156-.133a4.872,4.872,0,0,1,6.846.581l10.435,12.369h0l3.094,3.669a4.871,4.871,0,0,1-.581,6.845l-.156.133A4.873,4.873,0,0,1,739.836,717.9Z"
                      transform="translate(-546.243 -477.082)"
                      fill="#f4c0a0"
                    />
                    <path
                      id="Tracciato_622"
                      data-name="Tracciato 622"
                      d="M445.307,487.708a3.975,3.975,0,0,1-3.545,3.11,36.952,36.952,0,0,1-18.473-2.193c-8.5.04-14.524-3.056-16.347-1.453-.067.058-.048.185.047.365,1.668,3.235,27.469,24.747,27.845,27.134.4,2.52-47.995,14.378-47.995,14.378s-7.15-4.457-15.155-10.307c-4.06-2.963-8.338-6.284-12.016-9.564-3.709-3.3-6.811-6.568-8.468-9.382l-.009-.019a11.477,11.477,0,0,1-.643-1.234c-.029-.063-.056-.12-.077-.173a23.66,23.66,0,0,0-6.01-8,54.048,54.048,0,0,0-15.021-9.151l35.533-18.961s32.627,3.834,37.847,7c7.608,4.619,23.538,8.006,26.6,9.8,2.276,1.327,14.265,5.632,15.14,6.017A3.015,3.015,0,0,1,445.307,487.708Z"
                      transform="translate(-249.183 -301.992)"
                      fill="#f4c0a0"
                    />
                    <path
                      id="Tracciato_623"
                      data-name="Tracciato 623"
                      d="M168.949,310.7c-.144,1.069-21.034,19.866-26.185,22.9l-.613,4.629c-.3.173-80.167-47.2-80.151-47.506C63.207,267.586,78.378,269.6,98.3,261,108.88,267.327,168.949,310.7,168.949,310.7Z"
                      transform="translate(-46.896 -149.763)"
                      fill="#f4c0a0"
                    />
                    <path
                      id="Tracciato_624"
                      data-name="Tracciato 624"
                      d="M403.142,541.967a.412.412,0,0,1,.041.093c3.339,21.111,15.6,17.629,15.6,17.629l-.461,17.354c-4.06-2.963-8.338-6.284-12.016-9.564-3.709-3.3-6.811-6.568-8.468-9.382l-.009-.019c-.289-.523-.506-.941-.643-1.234-.029-.063-.056-.12-.077-.173a23.66,23.66,0,0,0-6.01-8c1.305-2.229,2.83-4.763,4.336-7.243A4.344,4.344,0,0,1,403.142,541.967Z"
                      transform="translate(-295.819 -360.291)"
                      fill="#f4c0a0"
                    />
                    <rect
                      id="Rettangolo_105"
                      data-name="Rettangolo 105"
                      width="105.304"
                      height="48.374"
                      transform="matrix(0.962, -0.274, 0.274, 0.962, 110.915, 199.62)"
                      fill="#ffa2a2"
                    />
                    <path
                      id="Tracciato_625"
                      data-name="Tracciato 625"
                      d="M824.033,508.853l12.593,46.706-6.8,1.841-12.172-46.836Z"
                      transform="translate(-618.461 -337.234)"
                      fill="#fff"
                    />
                    <rect
                      id="Rettangolo_106"
                      data-name="Rettangolo 106"
                      width="105.304"
                      height="48.374"
                      transform="translate(116.415 196.726) rotate(-10.449)"
                      fill="#9ad7ec"
                    />
                    <rect
                      id="Rettangolo_107"
                      data-name="Rettangolo 107"
                      width="11.52"
                      height="7.558"
                      transform="translate(120.322 198.896) rotate(-10.449)"
                      fill="#183353"
                    />
                    <g
                      id="Raggruppa_98"
                      data-name="Raggruppa 98"
                      transform="translate(150.256 227.287)"
                    >
                      <g
                        id="Raggruppa_95"
                        data-name="Raggruppa 95"
                        transform="translate(7.938 0.417)"
                      >
                        <path
                          id="Tracciato_626"
                          data-name="Tracciato 626"
                          d="M652.588,753.443l-.381-1.029L649.64,745.5a4.407,4.407,0,0,1-.151-.49,4.711,4.711,0,0,1,2.921-5.547l.266-.1a4.711,4.711,0,0,1,6.038,2.769l2.393,6.448.174.469.382,1.029a4.71,4.71,0,0,1-2.769,6.037l-.266.1A4.712,4.712,0,0,1,652.588,753.443Z"
                          transform="translate(-649.348 -739.069)"
                          fill="#f4c0a0"
                        />
                        <path
                          id="Tracciato_627"
                          data-name="Tracciato 627"
                          d="M658.01,753.662a27.523,27.523,0,0,1-1.337-4.36,1.837,1.837,0,0,1,.731-1.433,4.257,4.257,0,0,1,1.571-.855,4.967,4.967,0,0,1,1-.228,4.207,4.207,0,0,1,1.187.047,1.186,1.186,0,0,1,.842.665s0,0,0,.005a27.218,27.218,0,0,1,1.607,4.2,1.817,1.817,0,0,1-1.025,2.246l-.4.142-2.033.724A1.736,1.736,0,0,1,658.01,753.662Z"
                          transform="translate(-654.885 -744.89)"
                          fill="#f4c0a0"
                        />
                        <path
                          id="Tracciato_628"
                          data-name="Tracciato 628"
                          d="M658.01,755.826a27.521,27.521,0,0,1-1.337-4.36,1.837,1.837,0,0,1,.731-1.433c.135-.057.278-.109.431-.158a4.961,4.961,0,0,1,1-.228,4.215,4.215,0,0,1,1.187.047,1.186,1.186,0,0,1,.842.665s0,0,0,.005a27.2,27.2,0,0,1,1.607,4.2,1.983,1.983,0,0,1-.282,1.691l-2.033.724A1.736,1.736,0,0,1,658.01,755.826Z"
                          transform="translate(-654.885 -747.054)"
                          fill="#f4c0a0"
                        />
                      </g>
                      <g
                        id="Raggruppa_96"
                        data-name="Raggruppa 96"
                        transform="translate(0 2.275)"
                      >
                        <path
                          id="Tracciato_629"
                          data-name="Tracciato 629"
                          d="M618.271,756.007l-1.406-5.33a3.054,3.054,0,0,1,2.167-3.722l.6-.159a3.054,3.054,0,0,1,3.721,2.167l1.407,5.33a3.054,3.054,0,0,1-2.167,3.722l-.6.159A3.054,3.054,0,0,1,618.271,756.007Z"
                          transform="translate(-616.764 -746.696)"
                          fill="#f4c0a0"
                        />
                        <path
                          id="Tracciato_630"
                          data-name="Tracciato 630"
                          d="M621.8,756.057a24.012,24.012,0,0,1-.743-3.674,1.793,1.793,0,0,1,1.162-1.442,4.028,4.028,0,0,1,1.535-.379,3.042,3.042,0,0,1,.909.126.941.941,0,0,1,.6.606s0,0,0,.005a23.773,23.773,0,0,1,.963,3.56,1.506,1.506,0,0,1-.933,1.768l-.48.133-1.442.4A1.349,1.349,0,0,1,621.8,756.057Z"
                          transform="translate(-620.014 -749.619)"
                          fill="#f4c0a0"
                        />
                        <path
                          id="Tracciato_631"
                          data-name="Tracciato 631"
                          d="M621.8,756.918a24.011,24.011,0,0,1-.743-3.675,1.793,1.793,0,0,1,1.162-1.442,3.4,3.4,0,0,1,.734-.1,3.054,3.054,0,0,1,.909.125.945.945,0,0,1,.6.606s0,0,0,.005a23.6,23.6,0,0,1,.962,3.56,1.606,1.606,0,0,1-.611,1.624l-1.442.4A1.349,1.349,0,0,1,621.8,756.918Z"
                          transform="translate(-620.014 -750.481)"
                          fill="#f4c0a0"
                        />
                      </g>
                      <g
                        id="Raggruppa_97"
                        data-name="Raggruppa 97"
                        transform="translate(19.414)"
                      >
                        <path
                          id="Tracciato_632"
                          data-name="Tracciato 632"
                          d="M698.413,752.061c-.014-.038-.026-.076-.038-.115l-1.736-6.987a5.764,5.764,0,0,1,3.741-7.017l1.445-.4a5.345,5.345,0,0,1,6.416,3.793l.573,2.306,1.163,4.68a5.764,5.764,0,0,1-3.741,7.017l-1.445.4A5.335,5.335,0,0,1,698.413,752.061Z"
                          transform="translate(-696.455 -737.358)"
                          fill="#f4c0a0"
                        />
                        <path
                          id="Tracciato_633"
                          data-name="Tracciato 633"
                          d="M707.591,764.478l-1.5-3.4c0-.005,0-.011,0-.021a3.7,3.7,0,0,1-.081-.41c-.008-.057-.014-.115-.02-.172a.47.47,0,0,1,0-.072.539.539,0,0,1,.765-.462,3.37,3.37,0,0,0,2.3.21l.3-.078.009,0,.964-.255a3.607,3.607,0,0,0,1.882-1.213c.057-.069.111-.14.162-.213a.973.973,0,0,1,1.73.3c0,.008,0,.014.006.022l.533,3.722a1.769,1.769,0,0,1-1.393,2.044l-1.1.29-2.341.617C708.872,765.625,707.834,765.4,707.591,764.478Z"
                          transform="translate(-703.662 -752.956)"
                          fill="#f4c0a0"
                        />
                        <path
                          id="Tracciato_634"
                          data-name="Tracciato 634"
                          d="M707.594,766.412l-1.5-3.4c0-.005,0-.011,0-.021-.015-.079-.054-.328-.1-.654a.539.539,0,0,1,.765-.462,3.37,3.37,0,0,0,2.3.21l.3-.078.009,0,.964-.255a3.607,3.607,0,0,0,1.882-1.213.947.947,0,0,1,.375.536c0,.006,0,.014.006.021l.533,3.722a1.691,1.691,0,0,1-.974,1.883l-2.341.617C708.875,767.559,707.837,767.333,707.594,766.412Z"
                          transform="translate(-703.665 -754.89)"
                          fill="#f4c0a0"
                        />
                      </g>
                    </g>
                    <path
                      id="Tracciato_635"
                      data-name="Tracciato 635"
                      d="M615.416,499.689s-1.712-13.365,3.508-10.2c7.607,4.62,23.536,8,26.6,9.793,2.275,1.327,14.264,5.632,15.139,6.02a2.676,2.676,0,0,1,.4,3.077,7.4,7.4,0,0,1-3.754,3.607c-7.45,2.9-17.6-3.136-17.922-3.134-8.5.041-16.767-.909-19.169-.566C619.386,508.41,615.416,499.689,615.416,499.689Z"
                      transform="translate(-465.285 -322.223)"
                      fill="#f4c0a0"
                    />
                    <text
                      id="_"
                      data-name="€"
                      transform="translate(129.124 236.27) rotate(-11.677)"
                      fill="#183353"
                      font-size="14"
                      font-family="MuktaMahee-Regular, Mukta Mahee"
                    >
                      <tspan x="0" y="0">
                        €
                      </tspan>
                    </text>
                    <path
                      id="Tracciato_636"
                      data-name="Tracciato 636"
                      d="M851.243,539.336l8.834,47.56-6.92,1.294-8.4-47.657Z"
                      transform="translate(-638.954 -360.291)"
                      fill="#fff"
                    />
                    <line
                      id="Linea_10"
                      data-name="Linea 10"
                      x1="4.942"
                      y2="2.181"
                      transform="translate(215.513 180.242)"
                      fill="none"
                      stroke="#183353"
                      stroke-miterlimit="10"
                      stroke-width="0.891"
                    />
                    <line
                      id="Linea_11"
                      data-name="Linea 11"
                      x1="4.942"
                      y2="2.181"
                      transform="translate(215.73 182.195)"
                      fill="none"
                      stroke="#183353"
                      stroke-miterlimit="10"
                      stroke-width="0.891"
                    />
                    <line
                      id="Linea_12"
                      data-name="Linea 12"
                      x1="4.942"
                      y2="2.181"
                      transform="translate(216.164 184.149)"
                      fill="none"
                      stroke="#183353"
                      stroke-miterlimit="10"
                      stroke-width="0.891"
                    />
                    <line
                      id="Linea_13"
                      data-name="Linea 13"
                      x1="4.942"
                      y2="2.181"
                      transform="translate(216.599 186.102)"
                      fill="none"
                      stroke="#183353"
                      stroke-miterlimit="10"
                      stroke-width="0.891"
                    />
                    <line
                      id="Linea_14"
                      data-name="Linea 14"
                      x1="4.942"
                      y2="2.181"
                      transform="translate(216.816 188.056)"
                      fill="none"
                      stroke="#183353"
                      stroke-miterlimit="10"
                      stroke-width="0.891"
                    />
                    <line
                      id="Linea_15"
                      data-name="Linea 15"
                      x1="4.942"
                      y2="2.181"
                      transform="translate(217.25 190.01)"
                      fill="none"
                      stroke="#183353"
                      stroke-miterlimit="10"
                      stroke-width="0.891"
                    />
                    <line
                      id="Linea_16"
                      data-name="Linea 16"
                      x1="4.942"
                      y2="2.181"
                      transform="translate(217.684 191.963)"
                      fill="none"
                      stroke="#183353"
                      stroke-miterlimit="10"
                      stroke-width="0.891"
                    />
                    <line
                      id="Linea_17"
                      data-name="Linea 17"
                      x1="4.942"
                      y2="2.181"
                      transform="translate(217.901 193.917)"
                      fill="none"
                      stroke="#183353"
                      stroke-miterlimit="10"
                      stroke-width="0.891"
                    />
                    <path
                      id="Tracciato_637"
                      data-name="Tracciato 637"
                      d="M15.1,140.958c1.09,4-15.1-6.334-15.1-6.334V63l58.225,48.724S11.45,127.559,15.1,140.958Z"
                      fill="#39b1d9"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FaiTuPrezzo;
