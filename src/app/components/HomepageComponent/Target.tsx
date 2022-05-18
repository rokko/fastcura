import { Typography } from "@mui/material";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Fade } from "react-awesome-reveal";

const Visibilita = () => {
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
                marginBottom={10}
              >
                Per Infermieri, Caregiver e Fisioterapisti
              </Typography>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="185.379"
                height="186.381"
                viewBox="0 0 185.379 186.381"
              >
                <defs>
                  <clipPath id="clip-path">
                    <path
                      id="Tracciato_527"
                      data-name="Tracciato 527"
                      d="M1556.246,258.514c.382,7.716,6.567,15.079,14.223,13.315a14.864,14.864,0,0,0,9.369-8.618c2.828-7.091-4.267-14.42-11.9-14.376C1562.287,248.867,1555.967,252.87,1556.246,258.514Z"
                      transform="translate(-1556.237 -248.834)"
                      fill="none"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Raggruppa_75"
                  data-name="Raggruppa 75"
                  transform="translate(-1151.696 -226.851)"
                >
                  <path
                    id="Tracciato_481"
                    data-name="Tracciato 481"
                    d="M1341.73,353.4h-.741a.611.611,0,0,0-.61.576l-.549,9.606.786-.378s.394-8.935.576-9.3A1.094,1.094,0,0,1,1341.73,353.4Z"
                    transform="translate(-125.535 -84.442)"
                    fill="#e93323"
                    opacity="0.28"
                  />
                  <path
                    id="Tracciato_482"
                    data-name="Tracciato 482"
                    d="M1341.727,362.216l.576-8.313a.539.539,0,0,1,.538-.5h4.336a.539.539,0,0,1,.538.571l-.519,8.739Z"
                    transform="translate(-126.801 -84.442)"
                    fill="#e93323"
                  />
                  <path
                    id="Tracciato_483"
                    data-name="Tracciato 483"
                    d="M1174.8,757.4s-13.028,1.93-20.025,4.584-.965,1.448,7,3.619,47.986.218,51.63,0c3.867-.231,3.331-3.874-1.012-5.563S1188.554,754.746,1174.8,757.4Z"
                    transform="translate(0 -353.386)"
                    fill="#273237"
                    opacity="0.06"
                  />
                  <path
                    id="Tracciato_484"
                    data-name="Tracciato 484"
                    d="M1214.089,747.666v1.074l6.085,1.074v-2.822Z"
                    transform="translate(-41.633 -347.071)"
                    fill="#f4c0a0"
                  />
                  <path
                    id="Tracciato_485"
                    data-name="Tracciato 485"
                    d="M1263.574,734.67v1.1l6.894.307-.093-1.412-2.148-2.864Z"
                    transform="translate(-74.652 -336.939)"
                    fill="#f4c0a0"
                  />
                  <path
                    id="Tracciato_486"
                    data-name="Tracciato 486"
                    d="M1236.762,322.486s-5.114-2.412-4.38-5.388c0,0,9.422,1.435,8.616-9.78,0,0,.256-7.955-2.361-6.255s-10.1.721-10.1.721l-6.564,3.352s5.436,8.428,1.646,14.384C1223.614,319.52,1230.594,324.778,1236.762,322.486Z"
                    transform="translate(-46.89 -49.36)"
                    fill="#f4c0a0"
                  />
                  <path
                    id="Tracciato_487"
                    data-name="Tracciato 487"
                    d="M1220.011,301.4a12.943,12.943,0,0,0,1.744-8.893s-3.465-3.345-.528-5.391c0,0,1.826-1.01,2.479.8a3.009,3.009,0,0,0,1.938-4.23s10.254,1.055,13.668-1.671c2.579-2.059,3-3.835,3-3.835a5.3,5.3,0,0,1-3.577-.125,19.778,19.778,0,0,0,1.889-2.8s-1.1.678-3.96.578-11.3-4.693-16.11-.205-4.2,7.375-3.545,9.188.59,3.6,2.279,6.527S1220.011,301.4,1220.011,301.4Z"
                    transform="translate(-43.287 -31.236)"
                    fill="#273237"
                  />
                  <path
                    id="Tracciato_488"
                    data-name="Tracciato 488"
                    d="M1277.926,393.295s5.473,7.354,9.113,5.691,6.614-4.783,12.983-12.8,6.1-10.531,5.766-11.259-4.068-6.589-6.389-1.656-1.311,6.759-2.8,8.5-5.826,7.855-10.564,10.2c0,0-3.243-9.674-4.448-11.079S1277.926,393.295,1277.926,393.295Z"
                    transform="translate(-84.229 -96.396)"
                    fill="#f4c0a0"
                  />
                  <path
                    id="Tracciato_489"
                    data-name="Tracciato 489"
                    d="M1199.872,489.8s-3.043-.758-1.611,22.866,5.011,62.64,5.011,62.64h6.085s1.775-36.312,3.937-50.828c1.021-6.849,1.432-15.391,1.432-15.391l5.011,63.355h7.159s5.011-78.031-1.074-83.758Z"
                    transform="translate(-30.815 -174.714)"
                    fill="#183353"
                  />
                  <path
                    id="Tracciato_490"
                    data-name="Tracciato 490"
                    d="M1277.926,427.329l.175-5.008,2.305,2.588S1280.122,425.973,1277.926,427.329Z"
                    transform="translate(-84.229 -130.43)"
                    fill="#469cd7"
                  />
                  <path
                    id="Tracciato_491"
                    data-name="Tracciato 491"
                    d="M1254.3,312.208s1.456-.665,2.146.075"
                    transform="translate(-68.461 -56.772)"
                    fill="none"
                    stroke="#283237"
                    stroke-miterlimit="10"
                    stroke-width="0.538"
                  />
                  <path
                    id="Tracciato_492"
                    data-name="Tracciato 492"
                    d="M1260.653,334s-4.3,3.484-5.577-.8C1255.076,333.194,1259.182,334.328,1260.653,334Z"
                    transform="translate(-68.982 -70.959)"
                    fill="#fff"
                  />
                  <path
                    id="Tracciato_493"
                    data-name="Tracciato 493"
                    d="M1269.867,312.951s.753-1.048,2.146.075"
                    transform="translate(-78.851 -57.154)"
                    fill="none"
                    stroke="#283237"
                    stroke-miterlimit="10"
                    stroke-width="0.538"
                  />
                  <ellipse
                    id="Ellisse_61"
                    data-name="Ellisse 61"
                    cx="0.716"
                    cy="0.537"
                    rx="0.716"
                    ry="0.537"
                    transform="translate(1186.808 258.335) rotate(-87.997)"
                    fill="#283237"
                  />
                  <ellipse
                    id="Ellisse_62"
                    data-name="Ellisse 62"
                    cx="0.716"
                    cy="0.537"
                    rx="0.716"
                    ry="0.537"
                    transform="translate(1191.458 258.498) rotate(-87.997)"
                    fill="#283237"
                  />
                  <path
                    id="Tracciato_494"
                    data-name="Tracciato 494"
                    d="M1246.712,344.782s-2.479-.8-3.144-2.259"
                    transform="translate(-61.303 -77.184)"
                    fill="none"
                    stroke="#e3b699"
                    stroke-miterlimit="10"
                    stroke-width="1.076"
                  />
                  <path
                    id="Tracciato_495"
                    data-name="Tracciato 495"
                    d="M1206.235,751.205s8.649.868,9.242,1.532,4,5.017,7.848,6.117-.066,3.4-1.176,2.959-12.642-1.6-15.008-2.11-3.253-.436-3.329-1.323S1206.235,751.205,1206.235,751.205Z"
                    transform="translate(-34.774 -349.883)"
                    fill="#101f34"
                  />
                  <path
                    id="Tracciato_496"
                    data-name="Tracciato 496"
                    d="M1257.547,742.266s7.8.484,8.358,1.06,3.768,4.371,7.262,5.229.057,3.058-.956,2.7-11.416-1-13.559-1.383-2.938-.281-3.037-1.075S1257.547,742.266,1257.547,742.266Z"
                    transform="translate(-69.339 -343.918)"
                    fill="#101f34"
                  />
                  <path
                    id="Tracciato_497"
                    data-name="Tracciato 497"
                    d="M1248.513,550.005l6.832,62.629-1.821.726Z"
                    transform="translate(-64.603 -215.629)"
                    fill="#101f34"
                  />
                  <path
                    id="Tracciato_498"
                    data-name="Tracciato 498"
                    d="M1179.781,416.81s-1.441,15.707-1.234,20.012,3.31,18.024,3.542,21.614,6.572,6.676,7.375,4.2.172-6.555-2.1-11.535c-2.329-5.1-3.127-13-2.656-16.21s2.747-17.1,2.747-17.1Z"
                    transform="translate(-17.903 -126.753)"
                    fill="#f4c0a0"
                  />
                  <path
                    id="Tracciato_499"
                    data-name="Tracciato 499"
                    d="M1215.4,375.67c.878-4.625-3.027-15.865-8.368-16.768-3.036-.513-3.345,3.465-13.148-2.967,0,0-11.139,1.043-14.364,11.317-3.323,10.587-2.779,7.782,1.808,9.733,3.285,1.4,4,2.888,4.547,3.11l-1.641,28.959c3.223.7,7.754,5.656,21.118,4.3,0,0,7.839-.792,10.023-1.79,0,0-5.372-24.976-4.531-28.528C1210.841,383.032,1214.195,382,1215.4,375.67Z"
                    transform="translate(-17.144 -86.133)"
                    fill="#50afd7"
                  />
                  <path
                    id="Tracciato_500"
                    data-name="Tracciato 500"
                    d="M1202.578,409.84a27.977,27.977,0,0,0,2.729-6.352c.828-3.194.816-2.837.816-2.837s-1.451,10.776-3.7,13.7Z"
                    transform="translate(-33.846 -115.963)"
                    fill="#3f8dac"
                  />
                  <path
                    id="Tracciato_501"
                    data-name="Tracciato 501"
                    d="M1226.6,352.892c-1.031.492-1.854,5.125,2.256,9.569"
                    transform="translate(-49.423 -84.103)"
                    fill="none"
                    stroke="#273237"
                    stroke-miterlimit="10"
                    stroke-width="1.076"
                  />
                  <path
                    id="Tracciato_502"
                    data-name="Tracciato 502"
                    d="M1227.183,356.891"
                    transform="translate(-50.37 -86.771)"
                    fill="none"
                    stroke="#273237"
                    stroke-miterlimit="10"
                    stroke-width="1.076"
                  />
                  <path
                    id="Tracciato_503"
                    data-name="Tracciato 503"
                    d="M1254.3,354.279"
                    transform="translate(-68.463 -85.028)"
                    fill="none"
                    stroke="#273237"
                    stroke-miterlimit="10"
                    stroke-width="1.076"
                  />
                  <g
                    id="Raggruppa_71"
                    data-name="Raggruppa 71"
                    transform="translate(1185.52 269.034)"
                  >
                    <path
                      id="Tracciato_504"
                      data-name="Tracciato 504"
                      d="M1256.568,365.675l-.349-.08c.021-.091,1.938-9.2-2.742-11.6l-.128-.365c2.487.9,3.581,3.524,3.681,7.043A22.542,22.542,0,0,1,1256.568,365.675Z"
                      transform="translate(-1253.35 -353.626)"
                      fill="#273237"
                    />
                  </g>
                  <path
                    id="Tracciato_505"
                    data-name="Tracciato 505"
                    d="M1276.25,424.112s-.811-7.55-.478-6.822,1.887,5.908,1.887,5.908Z"
                    transform="translate(-82.738 -127.04)"
                    fill="#3f8dac"
                  />
                  <path
                    id="Tracciato_506"
                    data-name="Tracciato 506"
                    d="M1187.171,497.293H1181.5c1,5.6,2.42,12.46,2.574,14.846.233,3.59,6.572,6.676,7.375,4.2s.172-6.555-2.1-11.535A31.782,31.782,0,0,1,1187.171,497.293Z"
                    transform="translate(-19.885 -180.456)"
                    fill="#f4c0a0"
                  />
                  <circle
                    id="Ellisse_63"
                    data-name="Ellisse 63"
                    cx="1.79"
                    cy="1.79"
                    r="1.79"
                    transform="translate(1186.774 279.253)"
                    fill="#273237"
                  />
                  <circle
                    id="Ellisse_64"
                    data-name="Ellisse 64"
                    cx="0.544"
                    cy="0.544"
                    r="0.544"
                    transform="translate(1179.787 286.942)"
                    fill="#273237"
                  />
                  <circle
                    id="Ellisse_65"
                    data-name="Ellisse 65"
                    cx="0.544"
                    cy="0.544"
                    r="0.544"
                    transform="translate(1185.514 282.289)"
                    fill="#273237"
                  />
                  <path
                    id="Tracciato_507"
                    data-name="Tracciato 507"
                    d="M1231.889,390.178s.36.619-1.929-2.6,1.177-6.511,1.177-6.511,3.579-1.79,6.169,3.479l.54.928"
                    transform="translate(-51.701 -102.704)"
                    fill="none"
                    stroke="#273237"
                    stroke-miterlimit="10"
                    stroke-width="1.076"
                  />
                  <path
                    id="Tracciato_508"
                    data-name="Tracciato 508"
                    d="M1297.638,437.761a7.783,7.783,0,0,1,1.074-3.937s-1.432,2.148-1.79,2.864"
                    transform="translate(-96.904 -138.106)"
                    fill="#ddb296"
                  />
                  <path
                    id="Tracciato_509"
                    data-name="Tracciato 509"
                    d="M1309.052,353.4"
                    transform="translate(-104.998 -84.442)"
                    fill="none"
                  />
                  <circle
                    id="Ellisse_66"
                    data-name="Ellisse 66"
                    cx="0.538"
                    cy="0.538"
                    r="0.538"
                    transform="translate(1216.195 269.802)"
                    fill="#283338"
                  />
                  <rect
                    id="Rettangolo_102"
                    data-name="Rettangolo 102"
                    width="81.853"
                    height="133.926"
                    rx="5"
                    transform="translate(1255.583 226.851) rotate(5.382)"
                    fill="#f5f5f5"
                  />
                  <path
                    id="Tracciato_510"
                    data-name="Tracciato 510"
                    d="M1507.2,346.092l-32.922-3.1-.126-.012-7.1-.669a.8.8,0,0,0-.8,1.128,31.483,31.483,0,0,1,1.872,4.528l-.991,10.522a5.529,5.529,0,0,0,4.987,6.024l33.048,3.113a5.53,5.53,0,0,0,6.024-4.987l.991-10.521A5.53,5.53,0,0,0,1507.2,346.092Z"
                    transform="translate(-209.842 -77.039)"
                    fill="#39b1d9"
                  />
                  <path
                    id="Tracciato_511"
                    data-name="Tracciato 511"
                    d="M1582.661,427.846a.8.8,0,0,0-.573-1.256l-7.1-.669-.126-.012-32.922-3.1a5.53,5.53,0,0,0-6.024,4.987l-.991,10.522a5.529,5.529,0,0,0,4.987,6.024l33.048,3.113a5.53,5.53,0,0,0,6.024-4.987l.991-10.522A31.481,31.481,0,0,1,1582.661,427.846Z"
                    transform="translate(-255.7 -130.738)"
                    fill="#39b1d9"
                    opacity="0.19"
                  />
                  <path
                    id="Tracciato_512"
                    data-name="Tracciato 512"
                    d="M1494.833,492.579l-34.055-3.208-1.259-.119-5.821-.548a.8.8,0,0,0-.766,1.188c.761,1.331,1.814,3.2,1.8,3.321l-.455,4.837a4.391,4.391,0,0,0,3.96,4.784l35.314,3.327a4.392,4.392,0,0,0,4.784-3.961l.456-4.837A4.392,4.392,0,0,0,1494.833,492.579Z"
                    transform="translate(-200.933 -174.722)"
                    fill="#39b1d9"
                  />
                  <path
                    id="Tracciato_513"
                    data-name="Tracciato 513"
                    d="M1531.366,298.179l-5.714-.538-.275,2.912,6.812.642A14.89,14.89,0,0,1,1531.366,298.179Z"
                    transform="translate(-249.345 -47.235)"
                    fill="#39b1d9"
                  />
                  <path
                    id="Tracciato_514"
                    data-name="Tracciato 514"
                    d="M1525.116,280.293a12.48,12.48,0,0,1,.324-1.354l-6.677-.629v0l-2.45-.231-.285,3.02,2.337.22v-.013l6.571.619A13.1,13.1,0,0,1,1525.116,280.293Z"
                    transform="translate(-243.106 -34.185)"
                    fill="#39b1d9"
                  />
                  <path
                    id="Tracciato_515"
                    data-name="Tracciato 515"
                    d="M1523.19,259.954l-14.84-1.4-.284,3.01,3.225.3,5.226.492,4.694.442A14.246,14.246,0,0,1,1523.19,259.954Z"
                    transform="translate(-237.794 -21.155)"
                    fill="#39b1d9"
                  />
                  <rect
                    id="Rettangolo_103"
                    data-name="Rettangolo 103"
                    width="71.871"
                    height="11.978"
                    rx="5.989"
                    transform="translate(1250.505 342.845) rotate(5.382)"
                    fill="#fff"
                  />
                  <path
                    id="Tracciato_516"
                    data-name="Tracciato 516"
                    d="M1364,330.973S1369.989,316,1390.952,316"
                    transform="translate(-141.663 -59.486)"
                    fill="none"
                    stroke="#1d1d1b"
                    stroke-miterlimit="10"
                    stroke-width="0.75"
                  />
                  <g
                    id="Raggruppa_72"
                    data-name="Raggruppa 72"
                    transform="translate(1285.065 234.465)"
                  >
                    <path
                      id="Tracciato_517"
                      data-name="Tracciato 517"
                      d="M1565.283,275.577a12.922,12.922,0,1,1,12.884-10.662A12.935,12.935,0,0,1,1565.283,275.577Zm2.114-22.727a10,10,0,1,0,8.046,9.72A10.01,10.01,0,0,0,1567.4,252.849Z"
                      transform="translate(-1552.522 -249.733)"
                      fill="#50afd7"
                    />
                  </g>
                  <g
                    id="Raggruppa_74"
                    data-name="Raggruppa 74"
                    transform="translate(1286.301 234.166)"
                  >
                    <g
                      id="Raggruppa_73"
                      data-name="Raggruppa 73"
                      transform="translate(0)"
                      clip-path="url(#clip-path)"
                    >
                      <path
                        id="Tracciato_518"
                        data-name="Tracciato 518"
                        d="M1574.418,303.543l5.173,2.249s1.393,6.891-2.535,6.732-15.27,3.631-14.936-1.407a59.406,59.406,0,0,0,.212-6.74l4.677-.989Z"
                        transform="translate(-1560.158 -285.236)"
                        fill="#f2bf59"
                      />
                      <path
                        id="Tracciato_519"
                        data-name="Tracciato 519"
                        d="M1576.606,265.381s-.111.651,2.042-.165,2.765.3,2.925-1.8.272-3.259.509-5.388-.985-1.98-1.375-3.451.684-3.257-2.381-4.377-4.493-3.707-7.657-.721-1.4,3.861-2.365,6.134-1,6.988.706,8.13,1.392,2.515,3.85,2.046A17.678,17.678,0,0,1,1576.606,265.381Z"
                        transform="translate(-1563.844 -248.336)"
                        fill="#1d1d1b"
                      />
                      <path
                        id="Tracciato_520"
                        data-name="Tracciato 520"
                        d="M1580.021,266.745s-.206,4.748-4.274,4.365-4.854-2.6-4.663-6.233.924-3.715.924-3.715,2.1-.164,2.446-.977c0,0,1.937,2.506,3.482,2.44S1580.494,264.285,1580.021,266.745Z"
                        transform="translate(-1566.127 -256.408)"
                        fill="#f2be9f"
                      />
                      <path
                        id="Tracciato_521"
                        data-name="Tracciato 521"
                        d="M1579.743,283.855a2.281,2.281,0,0,1-2.585-.244"
                        transform="translate(-1570.197 -272.04)"
                        fill="none"
                        stroke="#273237"
                        stroke-miterlimit="10"
                        stroke-width="0.232"
                      />
                      <path
                        id="Tracciato_522"
                        data-name="Tracciato 522"
                        d="M1584.162,293.793a2.911,2.911,0,0,1-1.911-2.775l-.09-2.242-3.392.133s.886,3.4.149,4.027a4.376,4.376,0,0,1-2.163.7s-.409,4.206,1.47,3.854A9.248,9.248,0,0,0,1584.162,293.793Z"
                        transform="translate(-1569.902 -275.486)"
                        fill="#f2be9f"
                      />
                      <path
                        id="Tracciato_523"
                        data-name="Tracciato 523"
                        d="M1585.461,268.839a2.186,2.186,0,0,0-1.766-.795"
                        transform="translate(-1574.559 -261.652)"
                        fill="none"
                        stroke="#273237"
                        stroke-miterlimit="10"
                        stroke-width="0.232"
                      />
                      <path
                        id="Tracciato_524"
                        data-name="Tracciato 524"
                        d="M1574.95,265.869a2.01,2.01,0,0,0-1.006-.216"
                        transform="translate(-1568.052 -260.054)"
                        fill="none"
                        stroke="#273237"
                        stroke-miterlimit="10"
                        stroke-width="0.232"
                      />
                      <ellipse
                        id="Ellisse_67"
                        data-name="Ellisse 67"
                        cx="0.406"
                        cy="0.263"
                        rx="0.406"
                        ry="0.263"
                        transform="translate(9.314 8.668) rotate(-84.618)"
                        fill="#273237"
                      />
                      <ellipse
                        id="Ellisse_68"
                        data-name="Ellisse 68"
                        cx="0.391"
                        cy="0.255"
                        rx="0.391"
                        ry="0.255"
                        transform="translate(6.195 7.831) rotate(-84.618)"
                        fill="#273237"
                      />
                      <path
                        id="Tracciato_525"
                        data-name="Tracciato 525"
                        d="M1584.622,272.312a.619.619,0,0,0-.361-.263c-.107-.027-.209-.04-.2-.027.057.077.444.212.279.456-.092.136.244.224.244.224Z"
                        transform="translate(-1574.803 -264.303)"
                        fill="#273237"
                      />
                      <path
                        id="Tracciato_526"
                        data-name="Tracciato 526"
                        d="M1575.222,269.895a.616.616,0,0,0-.36-.263c-.107-.027-.209-.04-.2-.027.057.077.444.212.279.456-.092.136.244.224.244.224Z"
                        transform="translate(-1568.531 -262.691)"
                        fill="#273237"
                      />
                    </g>
                  </g>
                </g>
              </svg>
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
              <Fade direction={"up"}>
                <p
                  style={{
                    fontWeight: "900",
                    color: "#000000",
                    textAlign: "left",
                    fontFamily: "Charter",
                    fontSize: "48px",
                    marginBottom: 10,
                  }}
                >
                  Per Infermieri, Caregiver e Fisioterapisti
                </p>
              </Fade>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="300.379"
                height="300.381"
                viewBox="0 0 185.379 186.381"
              >
                <defs>
                  <clipPath id="clip-path">
                    <path
                      id="Tracciato_527"
                      data-name="Tracciato 527"
                      d="M1556.246,258.514c.382,7.716,6.567,15.079,14.223,13.315a14.864,14.864,0,0,0,9.369-8.618c2.828-7.091-4.267-14.42-11.9-14.376C1562.287,248.867,1555.967,252.87,1556.246,258.514Z"
                      transform="translate(-1556.237 -248.834)"
                      fill="none"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Raggruppa_75"
                  data-name="Raggruppa 75"
                  transform="translate(-1151.696 -226.851)"
                >
                  <path
                    id="Tracciato_481"
                    data-name="Tracciato 481"
                    d="M1341.73,353.4h-.741a.611.611,0,0,0-.61.576l-.549,9.606.786-.378s.394-8.935.576-9.3A1.094,1.094,0,0,1,1341.73,353.4Z"
                    transform="translate(-125.535 -84.442)"
                    fill="#e93323"
                    opacity="0.28"
                  />
                  <path
                    id="Tracciato_482"
                    data-name="Tracciato 482"
                    d="M1341.727,362.216l.576-8.313a.539.539,0,0,1,.538-.5h4.336a.539.539,0,0,1,.538.571l-.519,8.739Z"
                    transform="translate(-126.801 -84.442)"
                    fill="#e93323"
                  />
                  <path
                    id="Tracciato_483"
                    data-name="Tracciato 483"
                    d="M1174.8,757.4s-13.028,1.93-20.025,4.584-.965,1.448,7,3.619,47.986.218,51.63,0c3.867-.231,3.331-3.874-1.012-5.563S1188.554,754.746,1174.8,757.4Z"
                    transform="translate(0 -353.386)"
                    fill="#273237"
                    opacity="0.06"
                  />
                  <path
                    id="Tracciato_484"
                    data-name="Tracciato 484"
                    d="M1214.089,747.666v1.074l6.085,1.074v-2.822Z"
                    transform="translate(-41.633 -347.071)"
                    fill="#f4c0a0"
                  />
                  <path
                    id="Tracciato_485"
                    data-name="Tracciato 485"
                    d="M1263.574,734.67v1.1l6.894.307-.093-1.412-2.148-2.864Z"
                    transform="translate(-74.652 -336.939)"
                    fill="#f4c0a0"
                  />
                  <path
                    id="Tracciato_486"
                    data-name="Tracciato 486"
                    d="M1236.762,322.486s-5.114-2.412-4.38-5.388c0,0,9.422,1.435,8.616-9.78,0,0,.256-7.955-2.361-6.255s-10.1.721-10.1.721l-6.564,3.352s5.436,8.428,1.646,14.384C1223.614,319.52,1230.594,324.778,1236.762,322.486Z"
                    transform="translate(-46.89 -49.36)"
                    fill="#f4c0a0"
                  />
                  <path
                    id="Tracciato_487"
                    data-name="Tracciato 487"
                    d="M1220.011,301.4a12.943,12.943,0,0,0,1.744-8.893s-3.465-3.345-.528-5.391c0,0,1.826-1.01,2.479.8a3.009,3.009,0,0,0,1.938-4.23s10.254,1.055,13.668-1.671c2.579-2.059,3-3.835,3-3.835a5.3,5.3,0,0,1-3.577-.125,19.778,19.778,0,0,0,1.889-2.8s-1.1.678-3.96.578-11.3-4.693-16.11-.205-4.2,7.375-3.545,9.188.59,3.6,2.279,6.527S1220.011,301.4,1220.011,301.4Z"
                    transform="translate(-43.287 -31.236)"
                    fill="#273237"
                  />
                  <path
                    id="Tracciato_488"
                    data-name="Tracciato 488"
                    d="M1277.926,393.295s5.473,7.354,9.113,5.691,6.614-4.783,12.983-12.8,6.1-10.531,5.766-11.259-4.068-6.589-6.389-1.656-1.311,6.759-2.8,8.5-5.826,7.855-10.564,10.2c0,0-3.243-9.674-4.448-11.079S1277.926,393.295,1277.926,393.295Z"
                    transform="translate(-84.229 -96.396)"
                    fill="#f4c0a0"
                  />
                  <path
                    id="Tracciato_489"
                    data-name="Tracciato 489"
                    d="M1199.872,489.8s-3.043-.758-1.611,22.866,5.011,62.64,5.011,62.64h6.085s1.775-36.312,3.937-50.828c1.021-6.849,1.432-15.391,1.432-15.391l5.011,63.355h7.159s5.011-78.031-1.074-83.758Z"
                    transform="translate(-30.815 -174.714)"
                    fill="#183353"
                  />
                  <path
                    id="Tracciato_490"
                    data-name="Tracciato 490"
                    d="M1277.926,427.329l.175-5.008,2.305,2.588S1280.122,425.973,1277.926,427.329Z"
                    transform="translate(-84.229 -130.43)"
                    fill="#469cd7"
                  />
                  <path
                    id="Tracciato_491"
                    data-name="Tracciato 491"
                    d="M1254.3,312.208s1.456-.665,2.146.075"
                    transform="translate(-68.461 -56.772)"
                    fill="none"
                    stroke="#283237"
                    stroke-miterlimit="10"
                    stroke-width="0.538"
                  />
                  <path
                    id="Tracciato_492"
                    data-name="Tracciato 492"
                    d="M1260.653,334s-4.3,3.484-5.577-.8C1255.076,333.194,1259.182,334.328,1260.653,334Z"
                    transform="translate(-68.982 -70.959)"
                    fill="#fff"
                  />
                  <path
                    id="Tracciato_493"
                    data-name="Tracciato 493"
                    d="M1269.867,312.951s.753-1.048,2.146.075"
                    transform="translate(-78.851 -57.154)"
                    fill="none"
                    stroke="#283237"
                    stroke-miterlimit="10"
                    stroke-width="0.538"
                  />
                  <ellipse
                    id="Ellisse_61"
                    data-name="Ellisse 61"
                    cx="0.716"
                    cy="0.537"
                    rx="0.716"
                    ry="0.537"
                    transform="translate(1186.808 258.335) rotate(-87.997)"
                    fill="#283237"
                  />
                  <ellipse
                    id="Ellisse_62"
                    data-name="Ellisse 62"
                    cx="0.716"
                    cy="0.537"
                    rx="0.716"
                    ry="0.537"
                    transform="translate(1191.458 258.498) rotate(-87.997)"
                    fill="#283237"
                  />
                  <path
                    id="Tracciato_494"
                    data-name="Tracciato 494"
                    d="M1246.712,344.782s-2.479-.8-3.144-2.259"
                    transform="translate(-61.303 -77.184)"
                    fill="none"
                    stroke="#e3b699"
                    stroke-miterlimit="10"
                    stroke-width="1.076"
                  />
                  <path
                    id="Tracciato_495"
                    data-name="Tracciato 495"
                    d="M1206.235,751.205s8.649.868,9.242,1.532,4,5.017,7.848,6.117-.066,3.4-1.176,2.959-12.642-1.6-15.008-2.11-3.253-.436-3.329-1.323S1206.235,751.205,1206.235,751.205Z"
                    transform="translate(-34.774 -349.883)"
                    fill="#101f34"
                  />
                  <path
                    id="Tracciato_496"
                    data-name="Tracciato 496"
                    d="M1257.547,742.266s7.8.484,8.358,1.06,3.768,4.371,7.262,5.229.057,3.058-.956,2.7-11.416-1-13.559-1.383-2.938-.281-3.037-1.075S1257.547,742.266,1257.547,742.266Z"
                    transform="translate(-69.339 -343.918)"
                    fill="#101f34"
                  />
                  <path
                    id="Tracciato_497"
                    data-name="Tracciato 497"
                    d="M1248.513,550.005l6.832,62.629-1.821.726Z"
                    transform="translate(-64.603 -215.629)"
                    fill="#101f34"
                  />
                  <path
                    id="Tracciato_498"
                    data-name="Tracciato 498"
                    d="M1179.781,416.81s-1.441,15.707-1.234,20.012,3.31,18.024,3.542,21.614,6.572,6.676,7.375,4.2.172-6.555-2.1-11.535c-2.329-5.1-3.127-13-2.656-16.21s2.747-17.1,2.747-17.1Z"
                    transform="translate(-17.903 -126.753)"
                    fill="#f4c0a0"
                  />
                  <path
                    id="Tracciato_499"
                    data-name="Tracciato 499"
                    d="M1215.4,375.67c.878-4.625-3.027-15.865-8.368-16.768-3.036-.513-3.345,3.465-13.148-2.967,0,0-11.139,1.043-14.364,11.317-3.323,10.587-2.779,7.782,1.808,9.733,3.285,1.4,4,2.888,4.547,3.11l-1.641,28.959c3.223.7,7.754,5.656,21.118,4.3,0,0,7.839-.792,10.023-1.79,0,0-5.372-24.976-4.531-28.528C1210.841,383.032,1214.195,382,1215.4,375.67Z"
                    transform="translate(-17.144 -86.133)"
                    fill="#50afd7"
                  />
                  <path
                    id="Tracciato_500"
                    data-name="Tracciato 500"
                    d="M1202.578,409.84a27.977,27.977,0,0,0,2.729-6.352c.828-3.194.816-2.837.816-2.837s-1.451,10.776-3.7,13.7Z"
                    transform="translate(-33.846 -115.963)"
                    fill="#3f8dac"
                  />
                  <path
                    id="Tracciato_501"
                    data-name="Tracciato 501"
                    d="M1226.6,352.892c-1.031.492-1.854,5.125,2.256,9.569"
                    transform="translate(-49.423 -84.103)"
                    fill="none"
                    stroke="#273237"
                    stroke-miterlimit="10"
                    stroke-width="1.076"
                  />
                  <path
                    id="Tracciato_502"
                    data-name="Tracciato 502"
                    d="M1227.183,356.891"
                    transform="translate(-50.37 -86.771)"
                    fill="none"
                    stroke="#273237"
                    stroke-miterlimit="10"
                    stroke-width="1.076"
                  />
                  <path
                    id="Tracciato_503"
                    data-name="Tracciato 503"
                    d="M1254.3,354.279"
                    transform="translate(-68.463 -85.028)"
                    fill="none"
                    stroke="#273237"
                    stroke-miterlimit="10"
                    stroke-width="1.076"
                  />
                  <g
                    id="Raggruppa_71"
                    data-name="Raggruppa 71"
                    transform="translate(1185.52 269.034)"
                  >
                    <path
                      id="Tracciato_504"
                      data-name="Tracciato 504"
                      d="M1256.568,365.675l-.349-.08c.021-.091,1.938-9.2-2.742-11.6l-.128-.365c2.487.9,3.581,3.524,3.681,7.043A22.542,22.542,0,0,1,1256.568,365.675Z"
                      transform="translate(-1253.35 -353.626)"
                      fill="#273237"
                    />
                  </g>
                  <path
                    id="Tracciato_505"
                    data-name="Tracciato 505"
                    d="M1276.25,424.112s-.811-7.55-.478-6.822,1.887,5.908,1.887,5.908Z"
                    transform="translate(-82.738 -127.04)"
                    fill="#3f8dac"
                  />
                  <path
                    id="Tracciato_506"
                    data-name="Tracciato 506"
                    d="M1187.171,497.293H1181.5c1,5.6,2.42,12.46,2.574,14.846.233,3.59,6.572,6.676,7.375,4.2s.172-6.555-2.1-11.535A31.782,31.782,0,0,1,1187.171,497.293Z"
                    transform="translate(-19.885 -180.456)"
                    fill="#f4c0a0"
                  />
                  <circle
                    id="Ellisse_63"
                    data-name="Ellisse 63"
                    cx="1.79"
                    cy="1.79"
                    r="1.79"
                    transform="translate(1186.774 279.253)"
                    fill="#273237"
                  />
                  <circle
                    id="Ellisse_64"
                    data-name="Ellisse 64"
                    cx="0.544"
                    cy="0.544"
                    r="0.544"
                    transform="translate(1179.787 286.942)"
                    fill="#273237"
                  />
                  <circle
                    id="Ellisse_65"
                    data-name="Ellisse 65"
                    cx="0.544"
                    cy="0.544"
                    r="0.544"
                    transform="translate(1185.514 282.289)"
                    fill="#273237"
                  />
                  <path
                    id="Tracciato_507"
                    data-name="Tracciato 507"
                    d="M1231.889,390.178s.36.619-1.929-2.6,1.177-6.511,1.177-6.511,3.579-1.79,6.169,3.479l.54.928"
                    transform="translate(-51.701 -102.704)"
                    fill="none"
                    stroke="#273237"
                    stroke-miterlimit="10"
                    stroke-width="1.076"
                  />
                  <path
                    id="Tracciato_508"
                    data-name="Tracciato 508"
                    d="M1297.638,437.761a7.783,7.783,0,0,1,1.074-3.937s-1.432,2.148-1.79,2.864"
                    transform="translate(-96.904 -138.106)"
                    fill="#ddb296"
                  />
                  <path
                    id="Tracciato_509"
                    data-name="Tracciato 509"
                    d="M1309.052,353.4"
                    transform="translate(-104.998 -84.442)"
                    fill="none"
                  />
                  <circle
                    id="Ellisse_66"
                    data-name="Ellisse 66"
                    cx="0.538"
                    cy="0.538"
                    r="0.538"
                    transform="translate(1216.195 269.802)"
                    fill="#283338"
                  />
                  <rect
                    id="Rettangolo_102"
                    data-name="Rettangolo 102"
                    width="81.853"
                    height="133.926"
                    rx="5"
                    transform="translate(1255.583 226.851) rotate(5.382)"
                    fill="#f5f5f5"
                  />
                  <path
                    id="Tracciato_510"
                    data-name="Tracciato 510"
                    d="M1507.2,346.092l-32.922-3.1-.126-.012-7.1-.669a.8.8,0,0,0-.8,1.128,31.483,31.483,0,0,1,1.872,4.528l-.991,10.522a5.529,5.529,0,0,0,4.987,6.024l33.048,3.113a5.53,5.53,0,0,0,6.024-4.987l.991-10.521A5.53,5.53,0,0,0,1507.2,346.092Z"
                    transform="translate(-209.842 -77.039)"
                    fill="#39b1d9"
                  />
                  <path
                    id="Tracciato_511"
                    data-name="Tracciato 511"
                    d="M1582.661,427.846a.8.8,0,0,0-.573-1.256l-7.1-.669-.126-.012-32.922-3.1a5.53,5.53,0,0,0-6.024,4.987l-.991,10.522a5.529,5.529,0,0,0,4.987,6.024l33.048,3.113a5.53,5.53,0,0,0,6.024-4.987l.991-10.522A31.481,31.481,0,0,1,1582.661,427.846Z"
                    transform="translate(-255.7 -130.738)"
                    fill="#39b1d9"
                    opacity="0.19"
                  />
                  <path
                    id="Tracciato_512"
                    data-name="Tracciato 512"
                    d="M1494.833,492.579l-34.055-3.208-1.259-.119-5.821-.548a.8.8,0,0,0-.766,1.188c.761,1.331,1.814,3.2,1.8,3.321l-.455,4.837a4.391,4.391,0,0,0,3.96,4.784l35.314,3.327a4.392,4.392,0,0,0,4.784-3.961l.456-4.837A4.392,4.392,0,0,0,1494.833,492.579Z"
                    transform="translate(-200.933 -174.722)"
                    fill="#39b1d9"
                  />
                  <path
                    id="Tracciato_513"
                    data-name="Tracciato 513"
                    d="M1531.366,298.179l-5.714-.538-.275,2.912,6.812.642A14.89,14.89,0,0,1,1531.366,298.179Z"
                    transform="translate(-249.345 -47.235)"
                    fill="#39b1d9"
                  />
                  <path
                    id="Tracciato_514"
                    data-name="Tracciato 514"
                    d="M1525.116,280.293a12.48,12.48,0,0,1,.324-1.354l-6.677-.629v0l-2.45-.231-.285,3.02,2.337.22v-.013l6.571.619A13.1,13.1,0,0,1,1525.116,280.293Z"
                    transform="translate(-243.106 -34.185)"
                    fill="#39b1d9"
                  />
                  <path
                    id="Tracciato_515"
                    data-name="Tracciato 515"
                    d="M1523.19,259.954l-14.84-1.4-.284,3.01,3.225.3,5.226.492,4.694.442A14.246,14.246,0,0,1,1523.19,259.954Z"
                    transform="translate(-237.794 -21.155)"
                    fill="#39b1d9"
                  />
                  <rect
                    id="Rettangolo_103"
                    data-name="Rettangolo 103"
                    width="71.871"
                    height="11.978"
                    rx="5.989"
                    transform="translate(1250.505 342.845) rotate(5.382)"
                    fill="#fff"
                  />
                  <path
                    id="Tracciato_516"
                    data-name="Tracciato 516"
                    d="M1364,330.973S1369.989,316,1390.952,316"
                    transform="translate(-141.663 -59.486)"
                    fill="none"
                    stroke="#1d1d1b"
                    stroke-miterlimit="10"
                    stroke-width="0.75"
                  />
                  <g
                    id="Raggruppa_72"
                    data-name="Raggruppa 72"
                    transform="translate(1285.065 234.465)"
                  >
                    <path
                      id="Tracciato_517"
                      data-name="Tracciato 517"
                      d="M1565.283,275.577a12.922,12.922,0,1,1,12.884-10.662A12.935,12.935,0,0,1,1565.283,275.577Zm2.114-22.727a10,10,0,1,0,8.046,9.72A10.01,10.01,0,0,0,1567.4,252.849Z"
                      transform="translate(-1552.522 -249.733)"
                      fill="#50afd7"
                    />
                  </g>
                  <g
                    id="Raggruppa_74"
                    data-name="Raggruppa 74"
                    transform="translate(1286.301 234.166)"
                  >
                    <g
                      id="Raggruppa_73"
                      data-name="Raggruppa 73"
                      transform="translate(0)"
                      clip-path="url(#clip-path)"
                    >
                      <path
                        id="Tracciato_518"
                        data-name="Tracciato 518"
                        d="M1574.418,303.543l5.173,2.249s1.393,6.891-2.535,6.732-15.27,3.631-14.936-1.407a59.406,59.406,0,0,0,.212-6.74l4.677-.989Z"
                        transform="translate(-1560.158 -285.236)"
                        fill="#f2bf59"
                      />
                      <path
                        id="Tracciato_519"
                        data-name="Tracciato 519"
                        d="M1576.606,265.381s-.111.651,2.042-.165,2.765.3,2.925-1.8.272-3.259.509-5.388-.985-1.98-1.375-3.451.684-3.257-2.381-4.377-4.493-3.707-7.657-.721-1.4,3.861-2.365,6.134-1,6.988.706,8.13,1.392,2.515,3.85,2.046A17.678,17.678,0,0,1,1576.606,265.381Z"
                        transform="translate(-1563.844 -248.336)"
                        fill="#1d1d1b"
                      />
                      <path
                        id="Tracciato_520"
                        data-name="Tracciato 520"
                        d="M1580.021,266.745s-.206,4.748-4.274,4.365-4.854-2.6-4.663-6.233.924-3.715.924-3.715,2.1-.164,2.446-.977c0,0,1.937,2.506,3.482,2.44S1580.494,264.285,1580.021,266.745Z"
                        transform="translate(-1566.127 -256.408)"
                        fill="#f2be9f"
                      />
                      <path
                        id="Tracciato_521"
                        data-name="Tracciato 521"
                        d="M1579.743,283.855a2.281,2.281,0,0,1-2.585-.244"
                        transform="translate(-1570.197 -272.04)"
                        fill="none"
                        stroke="#273237"
                        stroke-miterlimit="10"
                        stroke-width="0.232"
                      />
                      <path
                        id="Tracciato_522"
                        data-name="Tracciato 522"
                        d="M1584.162,293.793a2.911,2.911,0,0,1-1.911-2.775l-.09-2.242-3.392.133s.886,3.4.149,4.027a4.376,4.376,0,0,1-2.163.7s-.409,4.206,1.47,3.854A9.248,9.248,0,0,0,1584.162,293.793Z"
                        transform="translate(-1569.902 -275.486)"
                        fill="#f2be9f"
                      />
                      <path
                        id="Tracciato_523"
                        data-name="Tracciato 523"
                        d="M1585.461,268.839a2.186,2.186,0,0,0-1.766-.795"
                        transform="translate(-1574.559 -261.652)"
                        fill="none"
                        stroke="#273237"
                        stroke-miterlimit="10"
                        stroke-width="0.232"
                      />
                      <path
                        id="Tracciato_524"
                        data-name="Tracciato 524"
                        d="M1574.95,265.869a2.01,2.01,0,0,0-1.006-.216"
                        transform="translate(-1568.052 -260.054)"
                        fill="none"
                        stroke="#273237"
                        stroke-miterlimit="10"
                        stroke-width="0.232"
                      />
                      <ellipse
                        id="Ellisse_67"
                        data-name="Ellisse 67"
                        cx="0.406"
                        cy="0.263"
                        rx="0.406"
                        ry="0.263"
                        transform="translate(9.314 8.668) rotate(-84.618)"
                        fill="#273237"
                      />
                      <ellipse
                        id="Ellisse_68"
                        data-name="Ellisse 68"
                        cx="0.391"
                        cy="0.255"
                        rx="0.391"
                        ry="0.255"
                        transform="translate(6.195 7.831) rotate(-84.618)"
                        fill="#273237"
                      />
                      <path
                        id="Tracciato_525"
                        data-name="Tracciato 525"
                        d="M1584.622,272.312a.619.619,0,0,0-.361-.263c-.107-.027-.209-.04-.2-.027.057.077.444.212.279.456-.092.136.244.224.244.224Z"
                        transform="translate(-1574.803 -264.303)"
                        fill="#273237"
                      />
                      <path
                        id="Tracciato_526"
                        data-name="Tracciato 526"
                        d="M1575.222,269.895a.616.616,0,0,0-.36-.263c-.107-.027-.209-.04-.2-.027.057.077.444.212.279.456-.092.136.244.224.244.224Z"
                        transform="translate(-1568.531 -262.691)"
                        fill="#273237"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Visibilita;
