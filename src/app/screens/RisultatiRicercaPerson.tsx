import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
//import Header from '../components/Cliente/Header'
import HeaderNoLogin from "../components/Cliente/HeaderNoLogin";
import BoxRisultato from "../components/Cliente/Ricerca/BoxRisultato";
import axios from "axios";
import Footer from "../components/General/Footer";
import { Loader } from "../loader";
import { Immagini, TitleTop } from "./trovaprofessionista/TrovaProfessionistaStyled";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";

import SegnalazioneMancanzaProfessionista from "./segnalazioneMancanzaProfessionista/SegnalazioneMancanzaProfessionista";
import FirstPng from "../media/first.png";
import { useMediaQuery } from "react-responsive";

interface IPropsRicerca {
  citta: string;
  professione: string;
}

const ButtonAiutaciAMigliorare = styled('button')`
  background-color: #39b1d9; 
  color: #ffffff;
  width:308px;
  height:47px;
  border:none;
  border-radius:40px;
  font-size:18px;
  font-family:'Roboto'
  font-weight:500
  `
  

const RisultatiRicercaPers = ({parametri}) => {
  const [token, setToken] = useState("");
  const [log, setLog] = useState(false);
  const isMobile=useMediaQuery({ query: `(max-width: 760px)` });


  const [listaProfessionisti, setListaProfessionisti] = useState([]);
  const [load, setLoad] = useState(false);
  const [apri, setApri] = useState(false)


  useEffect(() => {
  
    setLoad(true);
    console.log(parametri)

    axios
      .post(
        "https://careful-pear-cockatoo.cyclic.app/professionista/ricerca",
        parametri
      )
      .then(async function (response) {
        setListaProfessionisti(response.data.professionisti);
        setLoad(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [parametri]);
  return (
    <div>
      <Loader isLoading={load} />
      <HeaderNoLogin />
      <TitleTop style={{ color: "black", textAlign: "center", fontWeight:'400', fontSize:'43px' }}>
        <span style={{ fontWeight: "bold" }}>
          {" "}
          {parametri.professione}, {parametri.citta}
        </span>
      </TitleTop>
      {listaProfessionisti.length < 1 && (
        <div style={{display:'flex', flexDirection:'column', alignContent:'center', alignItems:'center',gap:'4rem'}}>
          {!isMobile && <Immagini
              style={{ position: "absolute", bottom: "150px", left: "0px" }}
              src={FirstPng}
              alt={"first"}
            />
          }
          {!isMobile && <div  style={{ position: "absolute", bottom: "120px", right: "121px" }}>
                      <svg width="383" height="279" viewBox="0 0 383 279" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M369.509 243.767C369.482 241.37 369.253 238.98 368.824 236.623C366.647 224.802 360.526 214.948 357.65 203.458C357.016 200.91 356.574 198.318 356.329 195.703C356.149 185.261 358.326 174.912 362.7 165.427C363.571 163.51 371.984 143.336 375.196 137.182C381.081 126.154 384.224 113.945 382.554 102.523C378.926 76.5287 361.744 56.8355 337.157 51.3218C318.2 46.9893 298.707 51.7184 281.638 44.2327C269.366 38.7183 260.068 30.0539 248.848 22.1763C232.58 11.5427 213.349 9.17947 194.426 7.21021C155.131 3.27171 114.521 8.78549 75.8891 26.1161C55.432 35.1724 27.5236 50.9284 28.8684 77.7107C28.9345 82.4371 30.5609 86.3757 31.7114 91.1015C34.356 103.311 45.1833 108.825 50.8931 119.853C54.6703 126.548 54.6062 134.819 50.3053 142.303C37.2632 164.723 19.415 168.395 5.1028 187.989C-2.34786 198.773 -0.921068 215.989 4.77222 230.745C6.23372 234.879 8.17445 238.828 10.5548 242.511C12.8535 246.374 15.6717 249.903 18.9304 253H369.448C369.786 249.932 369.807 246.838 369.509 243.767Z" fill="#DCEAF9"/>
          <path opacity="0.28" d="M259.808 80.6418H260.665C260.846 80.6418 261.02 80.7108 261.151 80.8347C261.282 80.9586 261.361 81.1281 261.372 81.3084L262.01 92.4264L261.098 91.9888C261.098 91.9888 260.642 81.6484 260.432 81.2226C260.297 80.9628 260.077 80.7577 259.808 80.6418Z" fill="#E93323"/>
          <path d="M261.272 90.8446L260.606 81.2226C260.595 81.065 260.524 80.9175 260.409 80.8097C260.293 80.7019 260.141 80.6419 259.983 80.6418H254.969C254.883 80.6419 254.799 80.6594 254.721 80.6932C254.643 80.7269 254.573 80.7763 254.515 80.8382C254.456 80.9001 254.411 80.9732 254.382 81.0531C254.353 81.133 254.341 81.218 254.346 81.3029L254.947 91.4162L261.272 90.8446Z" fill="#E93323"/>
          <path opacity="0.06" d="M307.713 236.95C307.713 236.95 322.792 239.183 330.889 242.255C338.987 245.327 332.006 243.93 322.792 246.444C313.578 248.957 267.254 246.696 263.037 246.444C258.561 246.176 259.182 241.96 264.208 240.005C269.235 238.05 291.797 233.881 307.713 236.95Z" fill="#273237"/>
          <path d="M310.428 232.992V234.235L303.386 235.478V232.211L310.428 232.992Z" fill="#F4C0A0"/>
          <path d="M291.372 229.679V230.955L283.394 231.31L283.501 229.676L285.987 226.362L291.372 229.679Z" fill="#F4C0A0"/>
          <path d="M290.272 85.4661C290.272 85.4661 296.19 82.6752 295.342 79.2297C295.342 79.2297 284.437 80.8909 285.37 67.911C285.37 67.911 285.073 58.7022 288.105 60.6707C291.136 62.6392 299.799 61.5059 299.799 61.5059L307.396 65.3855C307.396 65.3855 301.105 75.1413 305.491 82.0324C305.489 82.0324 297.411 88.1184 290.272 85.4661Z" fill="#F4C0A0"/>
          <path d="M305.49 82.0316C303.599 78.9562 302.882 75.3012 303.472 71.7395C303.472 71.7395 307.484 67.8692 304.083 65.5004C304.083 65.5004 301.97 64.3305 301.214 66.4294C300.716 66.2984 300.253 66.0584 299.858 65.7269C299.464 65.3954 299.148 64.9805 298.934 64.5122C298.719 64.0439 298.611 63.5338 298.617 63.0187C298.623 62.5035 298.744 61.9962 298.97 61.5332C298.97 61.5332 287.102 62.7541 283.151 59.5994C280.166 57.217 279.68 55.1609 279.68 55.1609C281.035 55.5939 282.498 55.5427 283.82 55.016C282.999 54.0006 282.267 52.9168 281.632 51.7765C281.632 51.7765 282.903 52.5606 286.215 52.4458C289.528 52.3309 299.29 47.0143 304.861 52.2077C310.432 57.4011 309.719 60.7428 308.964 62.8417C308.209 64.9406 308.28 67.0111 306.326 70.3956C304.372 73.7801 305.49 82.0316 305.49 82.0316Z" fill="#273237"/>
          <path d="M285.845 112.976C285.845 112.976 279.51 121.488 275.298 119.562C271.086 117.637 267.639 114.027 260.272 104.751C252.905 95.4744 253.213 92.5623 253.599 91.7198C253.985 90.8773 258.306 84.0938 260.993 89.8051C263.68 95.5164 262.511 97.628 264.239 99.6403C265.968 101.653 270.986 108.731 276.466 111.441C276.466 111.441 280.22 100.245 281.614 98.6182C283.008 96.9916 285.845 112.976 285.845 112.976Z" fill="#F4C0A0"/>
          <path d="M314.364 134.032C314.364 134.032 317.886 133.154 316.228 160.496C314.57 187.838 310.428 232.993 310.428 232.993H303.386C303.386 232.993 301.332 190.966 298.827 174.167C297.642 166.24 297.17 156.354 297.17 156.354L291.37 229.679H283.085C283.085 229.679 277.286 139.369 284.328 132.74L314.364 134.032Z" fill="#183353"/>
          <path d="M285.846 112.979L285.644 107.183L282.975 110.178C282.975 110.178 283.304 111.41 285.846 112.979Z" fill="#469CD7"/>
          <path d="M294.946 64.9915C294.946 64.9915 293.261 64.221 292.462 65.0826" stroke="#283237" stroke-width="0.798" stroke-miterlimit="10"/>
          <path d="M288.19 73.7882C288.19 73.7882 293.162 77.8201 294.645 72.8601C294.645 72.8601 289.893 74.1739 288.19 73.7882Z" fill="white"/>
          <path d="M288.95 65.4072C288.95 65.4072 288.078 64.1946 286.465 65.4984" stroke="#283237" stroke-width="0.798" stroke-miterlimit="10"/>
          <path d="M293.199 68.3687C293.542 68.3567 293.807 67.9762 293.791 67.5187C293.775 67.0613 293.484 66.7001 293.141 66.7122C292.798 66.7242 292.533 67.1047 292.548 67.5622C292.564 68.0196 292.856 68.3807 293.199 68.3687Z" fill="#283237"/>
          <path d="M287.816 68.5565C288.159 68.5445 288.424 68.1639 288.408 67.7065C288.392 67.249 288.101 66.8879 287.758 66.8999C287.414 66.9119 287.149 67.2925 287.165 67.7499C287.181 68.2074 287.472 68.5685 287.816 68.5565Z" fill="#283237"/>
          <path d="M295.437 79.0675C295.437 79.0675 298.306 78.1383 299.076 76.4534" stroke="#E3B699" stroke-width="1.596" stroke-miterlimit="10"/>
          <path d="M311.581 233.835C311.581 233.835 301.57 234.838 300.884 235.607C300.197 236.377 296.252 241.413 291.801 242.687C287.35 243.961 291.877 246.622 293.162 246.112C294.447 245.601 307.794 244.263 310.532 243.67C313.27 243.077 314.297 243.165 314.385 242.139C314.474 241.113 311.581 233.835 311.581 233.835Z" fill="#101F34"/>
          <path d="M292.198 230.392C292.198 230.392 283.172 230.952 282.525 231.619C281.879 232.287 278.164 236.679 274.121 237.671C270.077 238.663 274.055 241.21 275.227 240.794C276.398 240.379 288.439 239.633 290.92 239.194C293.401 238.756 294.321 238.869 294.435 237.95C294.549 237.03 292.198 230.392 292.198 230.392Z" fill="#101F34"/>
          <path d="M297.171 156.353L289.264 228.838L291.371 229.678L297.171 156.353Z" fill="#101F34"/>
          <path d="M322.672 105.061C322.672 105.061 324.341 123.24 324.1 128.22C323.86 133.2 320.271 149.08 319.997 153.234C319.724 157.388 312.391 160.961 311.462 158.092C310.533 155.222 311.263 150.506 313.897 144.742C316.592 138.844 317.515 129.692 316.971 125.98C316.427 122.269 313.792 106.195 313.792 106.195L322.672 105.061Z" fill="#F4C0A0"/>
          <path d="M280.573 104.458C279.557 99.1051 284.076 86.0969 290.258 85.0511C293.772 84.4576 294.129 89.0629 305.475 81.6174C305.475 81.6174 318.368 82.8246 322.1 94.7149C325.946 106.968 325.316 103.722 320.003 105.981C316.201 107.598 315.377 109.322 314.74 109.58L316.639 143.097C312.909 143.907 307.666 149.642 292.197 148.068C292.197 148.068 283.125 147.156 280.598 145.996C280.598 145.996 286.815 117.093 285.842 112.978C285.845 112.978 281.964 111.783 280.573 104.458Z" fill="#F2BF59"/>
          <path d="M314.739 109.481C313.386 107.171 312.325 104.702 311.58 102.13C310.622 98.4333 310.636 98.8482 310.636 98.8482C310.636 98.8482 312.316 111.32 314.922 114.705L314.739 109.481Z" fill="#A98840"/>
          <path d="M286.06 113.179C286.06 113.179 286.998 104.442 286.613 105.284C286.228 106.127 284.425 112.123 284.425 112.123L286.06 113.179Z" fill="#A98840"/>
          <path d="M316.412 136.054H322.977C321.823 142.533 320.177 150.475 319.997 153.237C319.724 157.392 312.391 160.964 311.462 158.095C310.533 155.225 311.263 150.509 313.897 144.744C315.09 141.962 315.935 139.044 316.412 136.054Z" fill="#F4C0A0"/>
          <path d="M277.701 116.17C277.701 116.17 277.701 113.269 276.458 111.611C276.458 111.611 278.115 114.096 278.53 114.925" fill="#DDB296"/>
          <path d="M259.184 82.8629C259.528 82.8629 259.807 82.5841 259.807 82.2402C259.807 81.8962 259.528 81.6174 259.184 81.6174C258.84 81.6174 258.562 81.8962 258.562 82.2402C258.562 82.5841 258.84 82.8629 259.184 82.8629Z" fill="#283338"/>
          <g filter="url(#filter0_d_0_1)">
          <path d="M143.522 194.257L219.683 187.085C224.697 186.612 228.378 182.166 227.906 177.152L215.083 40.9891C214.61 35.9757 210.164 32.2944 205.15 32.7665L128.989 39.939C123.976 40.4111 120.295 44.858 120.767 49.8714L133.59 186.035C134.062 191.048 138.509 194.729 143.522 194.257Z" fill="#F5F5F5"/>
          </g>
          <path d="M165.877 80.7513L203.98 77.1617L204.125 77.1481L212.341 76.3741C212.503 76.3586 212.665 76.386 212.813 76.4536C212.96 76.5212 213.087 76.6266 213.181 76.759C213.274 76.8914 213.331 77.0462 213.346 77.2077C213.361 77.3692 213.332 77.5316 213.264 77.6787C212.407 79.3667 211.683 81.119 211.098 82.9196L212.245 95.0971C212.404 96.787 211.885 98.4709 210.803 99.7784C209.72 101.086 208.163 101.91 206.473 102.069L168.225 105.673C167.388 105.752 166.544 105.665 165.741 105.418C164.937 105.17 164.191 104.767 163.543 104.231C162.896 103.695 162.36 103.037 161.967 102.294C161.574 101.551 161.331 100.738 161.252 99.9012L160.105 87.7237C160.027 86.8869 160.113 86.0428 160.361 85.2395C160.608 84.4362 161.011 83.6896 161.547 83.0421C162.083 82.3947 162.741 81.8592 163.484 81.4661C164.227 81.0731 165.04 80.8301 165.877 80.7513Z" fill="#39B1D9"/>
          <path opacity="0.19" d="M131.61 113.22C131.515 113.088 131.457 112.934 131.441 112.773C131.426 112.611 131.453 112.449 131.52 112.301C131.587 112.153 131.692 112.026 131.824 111.932C131.957 111.838 132.111 111.781 132.273 111.766L140.489 110.992L140.635 110.978L178.737 107.389C180.427 107.229 182.111 107.748 183.418 108.831C184.726 109.913 185.55 111.47 185.709 113.16L186.856 125.338C186.935 126.174 186.848 127.018 186.601 127.822C186.353 128.625 185.95 129.372 185.414 130.019C184.878 130.666 184.22 131.202 183.477 131.595C182.734 131.988 181.921 132.231 181.084 132.31L142.836 135.913C141.146 136.072 139.462 135.554 138.154 134.471C136.847 133.389 136.023 131.831 135.863 130.142L134.716 117.964C133.806 116.305 132.767 114.718 131.61 113.22Z" fill="#39B1D9"/>
          <path d="M169.875 137.234L209.289 133.522L210.748 133.384L217.484 132.746C217.652 132.73 217.821 132.76 217.973 132.834C218.125 132.908 218.254 133.022 218.345 133.164C218.437 133.305 218.488 133.47 218.492 133.638C218.497 133.807 218.455 133.974 218.371 134.121C217.49 135.661 216.274 137.82 216.285 137.964L216.812 143.563C216.938 144.905 216.526 146.242 215.667 147.28C214.807 148.319 213.57 148.973 212.228 149.1L171.358 152.95C170.693 153.013 170.023 152.944 169.385 152.747C168.747 152.551 168.154 152.231 167.64 151.805C167.125 151.379 166.7 150.856 166.388 150.266C166.076 149.676 165.883 149.031 165.821 148.366L165.294 142.768C165.168 141.427 165.58 140.09 166.439 139.053C167.298 138.015 168.534 137.361 169.875 137.234Z" fill="#39B1D9"/>
          <path d="M183.623 59.7918L190.236 59.1689L190.553 62.5425L182.669 63.2847C183.109 62.1571 183.428 60.9864 183.623 59.7918Z" fill="#39B1D9"/>
          <path d="M183.635 54.1952C183.54 53.6662 183.415 53.143 183.261 52.6279L190.988 51.8986L193.824 51.6313L194.153 55.127L191.447 55.3824V55.3669L183.842 56.0835C183.813 55.4504 183.744 54.8197 183.635 54.1952Z" fill="#39B1D9"/>
          <path d="M182.312 43.1392L199.487 41.5208L199.816 45.0046L196.083 45.3566L190.035 45.9264L184.603 46.438C183.977 45.2492 183.207 44.1414 182.312 43.1392Z" fill="#39B1D9"/>
          <path d="M145.487 187.109L214.497 180.607C218.309 180.248 221.108 176.867 220.749 173.056C220.39 169.244 217.009 166.446 213.197 166.805L144.187 173.306C140.375 173.665 137.576 177.046 137.935 180.858C138.294 184.669 141.675 187.468 145.487 187.109Z" fill="white"/>
          <path d="M252.698 83.5678C252.698 83.5678 245.768 66.2388 221.505 66.2388" stroke="#1D1D1B" stroke-width="1.112" stroke-miterlimit="10"/>
          <path d="M150.419 58.289C149.884 55.2748 150.287 52.1691 151.574 49.3914C152.861 46.6137 154.97 44.2979 157.615 42.7568C160.26 41.2158 163.314 40.5238 166.365 40.7743C169.416 41.0247 172.317 42.2055 174.675 44.1572C177.034 46.109 178.736 48.7376 179.553 51.6879C180.37 54.6383 180.261 57.7682 179.242 60.6549C178.223 63.5416 176.342 66.0459 173.854 67.8296C171.366 69.6133 168.391 70.5903 165.33 70.6288C161.786 70.6698 158.342 69.4522 155.612 67.1926C152.882 64.933 151.041 61.7781 150.419 58.289ZM153.573 55.5746C153.552 57.9645 154.272 60.3022 155.633 62.2665C156.995 64.2308 158.931 65.7254 161.176 66.545C163.421 67.3646 165.865 67.469 168.171 66.8438C170.478 66.2186 172.535 64.8947 174.059 63.0536C175.583 61.2126 176.499 58.9448 176.682 56.5619C176.866 54.1789 176.307 51.7977 175.082 49.7453C173.857 47.6929 172.027 46.0701 169.843 45.0996C167.659 44.1291 165.228 43.8585 162.885 44.3253C160.276 44.8457 157.927 46.2482 156.231 48.2968C154.535 50.3454 153.596 52.9152 153.572 55.5746H153.573Z" fill="#50AFD7"/>
          <path d="M162.167 61.5603L156.179 64.1624C156.179 64.1624 154.567 72.1376 159.113 71.9534C163.659 71.7692 176.786 76.1557 176.4 70.325C176.17 67.7317 176.088 65.1275 176.153 62.5249L170.74 61.3806L162.167 61.5603Z" fill="#3F8DAC"/>
          <path d="M163.899 60.1006C163.899 60.1006 164.028 60.8546 161.535 59.9091C159.043 58.9636 158.335 60.2547 158.15 57.8248C157.965 55.395 157.835 54.0538 157.561 51.5893C157.286 49.1248 158.701 49.2971 159.152 47.5949C159.603 45.8926 158.361 43.8247 161.908 42.5291C165.456 41.2335 167.105 38.2383 170.77 41.6939C174.434 45.1495 172.386 46.1615 173.505 48.7929C174.624 51.4242 174.66 56.8811 172.684 58.2022C170.709 59.5234 171.073 61.1135 168.229 60.5728C166.807 60.2619 165.355 60.1036 163.899 60.1006Z" fill="#1D1D1B"/>
          <path d="M162.588 52.3359C162.588 52.3359 162.826 57.8312 167.535 57.388C172.243 56.9449 173.153 54.3792 172.931 50.1742C172.71 45.9691 171.863 45.8742 171.863 45.8742C171.863 45.8742 169.435 45.6837 169.036 44.7437C169.036 44.7437 166.795 47.644 165.007 47.5701C163.219 47.4962 162.04 49.4894 162.588 52.3359Z" fill="#F2BE9F"/>
          <path d="M167.621 54.0473C168.089 54.3095 168.626 54.423 169.161 54.3726C169.695 54.3223 170.201 54.1106 170.613 53.7656" stroke="#273237" stroke-width="0.343" stroke-miterlimit="10"/>
          <path d="M162.165 61.5612C162.821 61.3207 163.386 60.8825 163.782 60.3072C164.178 59.7318 164.386 59.0476 164.377 58.3491L164.482 55.7551L168.408 55.9092C168.408 55.9092 167.382 59.8471 168.236 60.5702C168.984 61.0566 169.848 61.3365 170.739 61.3816C170.739 61.3816 171.213 66.2495 169.038 65.8429C166.275 65.3708 163.807 63.8334 162.165 61.5612Z" fill="#F2BE9F"/>
          <path d="M166.052 48.6926C166.299 48.3926 166.612 48.1535 166.966 47.994C167.32 47.8345 167.707 47.7587 168.095 47.7726" stroke="#273237" stroke-width="0.343" stroke-miterlimit="10"/>
          <path d="M170.687 47.1025C171.046 46.9201 171.448 46.8343 171.851 46.8535" stroke="#273237" stroke-width="0.343" stroke-miterlimit="10"/>
          <path d="M167.587 50.4342C167.754 50.4185 167.87 50.1964 167.846 49.9382C167.821 49.68 167.666 49.4835 167.498 49.4993C167.331 49.515 167.215 49.7371 167.239 49.9953C167.264 50.2535 167.419 50.45 167.587 50.4342Z" fill="#273237"/>
          <path d="M171.206 49.4641C171.368 49.4488 171.481 49.2348 171.457 48.9861C171.434 48.7375 171.283 48.5483 171.121 48.5636C170.958 48.5789 170.846 48.7929 170.869 49.0415C170.893 49.2902 171.043 49.4794 171.206 49.4641Z" fill="#273237"/>
          <path d="M167.306 49.6416C167.402 49.4919 167.551 49.3836 167.723 49.338C167.847 49.307 167.965 49.2924 167.954 49.3069C167.888 49.3981 167.44 49.5514 167.631 49.835C167.738 49.9927 167.349 50.0938 167.349 50.0938L167.306 49.6416Z" fill="#273237"/>
          <path d="M170.927 48.7109C171.024 48.5612 171.173 48.453 171.345 48.4072C171.469 48.3762 171.586 48.3617 171.576 48.3763C171.51 48.4675 171.061 48.6206 171.253 48.9042C171.359 49.0619 170.97 49.1632 170.97 49.1632L170.927 48.7109Z" fill="#273237"/>
          <defs>
          <filter id="filter0_d_0_1" x="120.726" y="32.7256" width="121.963" height="176.314" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="8.6" dy="8.6"/>
          <feGaussianBlur stdDeviation="3.071"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.031 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
          </filter>
          </defs>
          </svg>
</div>
}
        <p style={{ fontSize: "22px", fontWeight: "400" , color:'black'}}>
          Al momento non sono disponibili professionisti nella tua zona
        </p>

        {isMobile && (
          <img src={FirstPng} width={'182px'} height={'100px'} style={{marginBottom:'-70px'}}/>
        )}
        <ButtonAiutaciAMigliorare onClick={()=>setApri(true)}>Aiutaci a migliorare</ButtonAiutaciAMigliorare>

        <p style={{fontSize:'16px',fontWeight:'400',fontFamily:'Helvetica', color:'black' ,padding:'1rem'}}>Siamo una realtà giovane che ha bisogno del tuo aiuto per cresce.<br/>
Avvisaci quando non trovi il professionista desiderato, ci attiveremo per migliorare la tua ricerca.</p>
<SegnalazioneMancanzaProfessionista cittaprofessione={parametri} apri={apri} chiudi={setApri}/>
        </div>
      )}
      {!!listaProfessionisti &&
        listaProfessionisti.map((prof) => {
          return <BoxRisultato professionista={prof} />;
        })}
      <div style={{ marginBottom: "200px" }} />

        <div
      style={{
        display: "flex",
      position:'fixed',
        bottom: "0",
        marginTop: "50px",
        flexDirection: "column",
        height: "50px",
        width: "100%",
        zIndex: "100000000",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-evenly",
          backgroundColor: "rgb(57, 177, 217)",
          color: "#ffffff",
        }}
      >
        <p style={{ color: "#ffffff" }}>FastCura Copyright 2022</p>
        <Link style={{ textDecoration: "none" }} to={"/termini-condizioni"}>
          <p style={{ color: "#ffffff" }}>Termini e Condizioni</p>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/cookies">
          <p style={{ color: "#ffffff" }}>Cookies</p>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/privacy">
          <p style={{ color: "#ffffff" }}>Privacy</p>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/consenso-privacy">
          <p style={{ color: "#ffffff" }}>Consenso Privacy</p>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default RisultatiRicercaPers;