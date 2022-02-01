import React from "react";
import { Link } from "react-router-dom";
const SeiNuovo = () => {
  return (
    <>
      <p className="titleAll" style={{ marginTop: "100px" }}>
        Sei nuovo?
      </p>

      <div style={{  display: "flex", flexDirection: "row" ,padding:40, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
        <div style={{  height:'300px',display:'flex' ,margin:20,alignContent:'center', alignItems:'center', flexDirection:'column'}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="107.054"
            height="106.299"
            viewBox="0 0 107.054 106.299"
          >
            <g
              id="Raggruppa_130"
              data-name="Raggruppa 130"
              transform="translate(-51.362 -2590.551)"
            >
              <path
                id="Tracciato_108"
                data-name="Tracciato 108"
                d="M.235,16.339c3.3,2.147,9.291,5.109,13.174,3.795S44.372,12.6,46.984,12.366s6.318.21,8.5-2.374S51.816-.682,40.591.046-3.066,14.192.235,16.339Z"
                transform="translate(140.405 2686.927) rotate(180)"
                fill="#f4df40"
              />
              <g
                id="Raggruppa_5"
                data-name="Raggruppa 5"
                transform="translate(51.362 2590.551)"
              >
                <g
                  id="Raggruppa_4"
                  data-name="Raggruppa 4"
                  transform="translate(1.424 1.458)"
                >
                  <g id="Raggruppa_3" data-name="Raggruppa 3">
                    <path
                      id="Tracciato_16"
                      data-name="Tracciato 16"
                      d="M1749.88,1882.82c-31.273,2.467-57.28-23.347-54.792-54.382,1.958-24.427,21.892-44.217,46.5-46.169,31.283-2.481,57.306,23.346,54.809,54.4C1794.435,1861.092,1774.493,1880.879,1749.88,1882.82Zm-.106-89.1a39.036,39.036,0,1,0,35.091,34.83A39.222,39.222,0,0,0,1749.774,1793.717Z"
                      transform="translate(-1694.923 -1782.104)"
                      fill="#39b1d9"
                    />
                  </g>
                </g>
              </g>
              <path
                id="Tracciato_103"
                data-name="Tracciato 103"
                d="M37.529,1.467S24.558,7.585,26.418,15.136c0,0,23.9-3.641,21.857,24.81,0,0,.649,20.179-5.991,15.869s-25.633-1.829-25.633-1.829L0,45.482S13.79,24.1,4.175,8.993C4.175,8.993,21.88-4.346,37.529,1.467Z"
                transform="translate(131.385 2675.968) rotate(180)"
                fill="#f4c0a0"
              />
              <path
                id="Tracciato_104"
                data-name="Tracciato 104"
                d="M0,.19S3.693,1.879,5.445,0"
                transform="translate(104.098 2629.813) rotate(180)"
                fill="none"
                stroke="#283237"
                stroke-miterlimit="10"
                stroke-width="0.798"
              />
              <path
                id="Tracciato_106"
                data-name="Tracciato 106"
                d="M14.147,3.388S3.25-5.45,0,5.422C0,5.422,10.416,2.546,14.147,3.388Z"
                transform="translate(103.439 2652.294) rotate(180)"
                fill="#fff"
              />
              <path
                id="Tracciato_105"
                data-name="Tracciato 105"
                d="M0,.191S1.91,2.849,5.445,0"
                transform="translate(90.956 2630.727) rotate(180)"
                fill="none"
                stroke="#283237"
                stroke-miterlimit="10"
                stroke-width="0.798"
              />
              <ellipse
                id="Ellisse_20"
                data-name="Ellisse 20"
                cx="1.362"
                cy="1.816"
                rx="1.362"
                ry="1.816"
                transform="translate(86.984 2633.855) rotate(-2)"
                fill="#283237"
              />
              <ellipse
                id="Ellisse_19"
                data-name="Ellisse 19"
                cx="1.362"
                cy="1.816"
                rx="1.362"
                ry="1.816"
                transform="translate(98.78 2633.443) rotate(-2)"
                fill="#283237"
              />
              <path
                id="Tracciato_107"
                data-name="Tracciato 107"
                d="M7.976,0S1.688,2.037,0,5.73"
                transform="translate(113.153 2660.476) rotate(180)"
                fill="none"
                stroke="#e3b699"
                stroke-miterlimit="10"
                stroke-width="1.596"
              />
              <path
                id="Tracciato_102"
                data-name="Tracciato 102"
                d="M8.734,0a32.828,32.828,0,0,1,4.423,22.559s-8.789,8.484-1.339,13.675c0,0,4.633,2.564,6.289-2.037,0,0,8.262,2.437,4.918,10.731,0,0,26.012-2.676,34.674,4.239,6.543,5.223,7.608,9.728,7.608,9.728a13.455,13.455,0,0,0-9.074.318s.939.876,4.791,7.1c0,0-2.786-1.72-10.046-1.466s-28.658,11.9-40.867.521S-.537,46.661,1.119,42.06,2.617,32.922,6.9,25.5,8.734,0,8.734,0Z"
                transform="translate(135.943 2666.974) rotate(180)"
                fill="#273237"
              />
            </g>
          </svg>
          <Link style={{textDecoration:'none'}} to="/signup-cliente">
          <button
            style={{
              display:'flex',
              alignContent:'center',
              alignItems:'center',
              justifyContent:'center',
              width: '130px',
              height: 30,
              backgroundColor: "#FF3617",
              fontWeight: "bold",
              border: "none",
              marginTop: 19,
              borderRadius: 20,
              color: "#ffffff",
            }}
          >
            <p style={{fontSize:'10px', color:'white'}}>Ho bisogno di cure</p>
          </button>
          </Link>
        </div>
        <div style={{  height:'300px', display:'flex' ,margin:20, alignContent:'center', alignItems:'center', flexDirection:'column'}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="107.054"
            height="115.05"
            viewBox="0 0 107.054 115.05"
          >
            <g
              id="Raggruppa_131"
              data-name="Raggruppa 131"
              transform="translate(-219.984 -2589.847)"
            >
              <g
                id="Raggruppa_23"
                data-name="Raggruppa 23"
                transform="translate(219.984 2589.847)"
              >
                <g
                  id="Raggruppa_21"
                  data-name="Raggruppa 21"
                  transform="translate(0 1.394)"
                >
                  <g
                    id="Raggruppa_4"
                    data-name="Raggruppa 4"
                    transform="translate(1.424 1.458)"
                  >
                    <g id="Raggruppa_3" data-name="Raggruppa 3">
                      <path
                        id="Tracciato_16"
                        data-name="Tracciato 16"
                        d="M1749.88,1882.82c-31.273,2.467-57.281-23.347-54.793-54.382,1.958-24.427,21.893-44.217,46.5-46.169,31.282-2.481,57.307,23.346,54.809,54.4C1794.435,1861.092,1774.494,1880.878,1749.88,1882.82Zm-.106-89.1a39.036,39.036,0,1,0,35.091,34.83A39.222,39.222,0,0,0,1749.774,1793.717Z"
                        transform="translate(-1694.923 -1782.104)"
                        fill="#39b1d9"
                      />
                    </g>
                  </g>
                </g>
                <path
                  id="Tracciato_141"
                  data-name="Tracciato 141"
                  d="M1800.5,2088.677l-22.058,9.485s-.38,21.745,13.043,21.2,41.226,9.386,51.037-4.808c8.252-11.937,8.252-21.194,8.252-21.194l-24.96-5.215Z"
                  transform="translate(-1761.245 -2027.513)"
                  fill="#3f8dac"
                />
                <path
                  id="Tracciato_140"
                  data-name="Tracciato 140"
                  d="M1840.637,1826.091s.381,2.225-6.977-.565-9.449,1.019-10-6.153-.929-11.135-1.739-18.411,3.366-6.767,4.7-11.794-2.338-11.131,8.136-14.956,15.353-12.668,26.164-2.465,4.772,13.195,8.084,20.959,3.41,23.879-2.413,27.781-4.758,8.6-13.154,6.99S1840.637,1826.091,1840.637,1826.091Z"
                  transform="translate(-1796.439 -1767)"
                  fill="#1d1d1b"
                />
                <path
                  id="Tracciato_142"
                  data-name="Tracciato 142"
                  d="M1881.915,1850.4s.7,16.225,14.6,14.916,16.589-8.884,15.935-21.3-3.155-12.695-3.155-12.695-7.167-.562-8.357-3.337c0,0-6.617,8.563-11.9,8.338S1880.3,1841.991,1881.915,1850.4Z"
                  transform="translate(-1844.862 -1816.469)"
                  fill="#f2be9f"
                />
                <path
                  id="Tracciato_143"
                  data-name="Tracciato 143"
                  d="M1895.268,2017.3s6.221-1.823,6.531-9.482l.31-7.66,11.591.455s-3.029,11.627-.508,13.761,7.392,2.4,7.392,2.4a15.779,15.779,0,0,1-9.273,7.654C1904.026,2026.534,1903.729,2022.185,1895.268,2017.3Z"
                  transform="translate(-1856.017 -1956.136)"
                  fill="#f2be9f"
                />
                <ellipse
                  id="Ellisse_36"
                  data-name="Ellisse 36"
                  cx="0.898"
                  cy="1.386"
                  rx="0.898"
                  ry="1.386"
                  transform="translate(46.005 25.636) rotate(-5.382)"
                  fill="#273237"
                />
                <ellipse
                  id="Ellisse_37"
                  data-name="Ellisse 37"
                  cx="0.873"
                  cy="1.335"
                  rx="0.873"
                  ry="1.335"
                  transform="translate(58.104 25.63) rotate(-5.382)"
                  fill="#273237"
                />
                <path
                  id="Tracciato_144"
                  data-name="Tracciato 144"
                  d="M1931.009,1963.036s6.537,9.221,13.674.135C1944.683,1963.171,1936,1964.159,1931.009,1963.036Z"
                  transform="translate(-1885.01 -1926.023)"
                  fill="#fff"
                />
                <path
                  id="Tracciato_145"
                  data-name="Tracciato 145"
                  d="M1925.366,1887.751s-2.442-1.465-5.727.757"
                  transform="translate(-1875.787 -1864.568)"
                  fill="none"
                  stroke="#283237"
                  stroke-miterlimit="10"
                  stroke-width="1.451"
                />
                <path
                  id="Tracciato_149"
                  data-name="Tracciato 149"
                  d="M1987.205,1884.686s3.285-2.059,5.727.488"
                  transform="translate(-1930.596 -1861.829)"
                  fill="none"
                  stroke="#283237"
                  stroke-miterlimit="10"
                  stroke-width="1.451"
                />
                <path
                  id="Tracciato_146"
                  data-name="Tracciato 146"
                  d="M1788.6,2106.691a39.411,39.411,0,0,1-75.557,0h-11.855a50.913,50.913,0,0,0,99.281,0Z"
                  transform="translate(-1698.585 -2042.555)"
                  fill="#39b1d9"
                />
                <g
                  id="Raggruppa_22"
                  data-name="Raggruppa 22"
                  transform="translate(36.893 58.563)"
                >
                  <g
                    id="Raggruppa_8"
                    data-name="Raggruppa 8"
                    transform="translate(0 0)"
                  >
                    <g id="Raggruppa_7" data-name="Raggruppa 7">
                      <path
                        id="Tracciato_27"
                        data-name="Tracciato 27"
                        d="M1885.2,2086.07c-2.975,1.418-5.348,14.78,6.507,27.595"
                        transform="translate(-1882.78 -2086.07)"
                        fill="rgba(0,0,0,0)"
                        stroke="#273237"
                        stroke-miterlimit="10"
                        stroke-width="2"
                      />
                      <g
                        id="Raggruppa_6"
                        data-name="Raggruppa 6"
                        transform="translate(26.472 0.704)"
                      >
                        <path
                          id="Tracciato_28"
                          data-name="Tracciato 28"
                          d="M2032.265,2124.547l-1.006-.231c.061-.264,5.589-26.543-7.907-33.466l-.368-1.052c7.174,2.588,10.328,10.163,10.615,20.311A65.053,65.053,0,0,1,2032.265,2124.547Z"
                          transform="translate(-2022.984 -2089.798)"
                          fill="#273237"
                          stroke="rgba(0,0,0,0)"
                          stroke-width="2"
                        />
                      </g>
                      <ellipse
                        id="Ellisse_3"
                        data-name="Ellisse 3"
                        cx="5.161"
                        cy="5.161"
                        rx="5.161"
                        ry="5.161"
                        transform="translate(30.089 30.176)"
                        fill="#273237"
                        stroke="rgba(0,0,0,0)"
                        stroke-width="2"
                      />
                      <ellipse
                        id="Ellisse_4"
                        data-name="Ellisse 4"
                        cx="1.569"
                        cy="1.569"
                        rx="1.569"
                        ry="1.569"
                        transform="translate(9.939 52.349)"
                        fill="#273237"
                        stroke="rgba(0,0,0,0)"
                        stroke-width="2"
                      />
                      <ellipse
                        id="Ellisse_5"
                        data-name="Ellisse 5"
                        cx="1.569"
                        cy="1.569"
                        rx="1.569"
                        ry="1.569"
                        transform="translate(26.455 38.93)"
                        fill="#273237"
                        stroke="rgba(0,0,0,0)"
                        stroke-width="2"
                      />
                      <path
                        id="Tracciato_29"
                        data-name="Tracciato 29"
                        d="M1907.953,2254.881s1.038,1.784-5.564-7.511,3.4-18.777,3.4-18.777,10.322-5.161,17.79,10.032l1.558,2.677"
                        transform="translate(-1896.858 -2200.999)"
                        fill="rgba(0,0,0,0)"
                        stroke="#273237"
                        stroke-miterlimit="10"
                        stroke-width="2"
                      />
                    </g>
                  </g>
                </g>
                <path
                  id="Tracciato_147"
                  data-name="Tracciato 147"
                  d="M1931.009,2021.124s3.936,2.291,7.257,1.876,3.668-2.245,3.668-2.245S1934.129,2022.777,1931.009,2021.124Z"
                  transform="translate(-1885.01 -1972.844)"
                  fill="#e3b699"
                />
              </g>
            </g>
          </svg>
            <Link style={{textDecoration:'none'}} to="/signup-professionista">
          <button
            style={{ 
              display:'flex',
            alignContent:'center',
            alignItems:'center',
            justifyContent:'center',
            width: '130px',
              height: 30,
              backgroundColor: "#FF3617",
              fontWeight: "bold",
              border: "none",
              marginTop: 10,
              borderRadius: 20,
              color: "#ffffff",
            }}
          ><p style={{fontSize:'10px', color:'white'}}>
           
            Sono un professionista
            </p>
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SeiNuovo;
