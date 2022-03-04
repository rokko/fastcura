import {  Typography } from "@mui/material";
import React from "react";
import {useMediaQuery} from "react-responsive";
import {Fade} from "react-awesome-reveal";

const DecidiTu = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

  return (
      <>
    {(!isMobile)&& <>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-around",
        width: '100%',
        maxWidth: '100%',
        height:'300px',
        padding:'30px',
        backgroundColor:'rgb(242, 252, 255)'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          alignContent: 'center',
          alignItems: 'center',
          width:'100%',

        }}>

          <div style={{display:'flex', width:'60%', flexDirection:'column',justifyContent:'center', alignContent:'center',marginLeft:'20px', alignItems:'center', textAlign:'left'}}>

          <p style={{display: 'flex', textAlign: 'left',fontWeight:"900", fontSize:'48px', color:'#000000',fontFamily:'Charter'}}>
            Decidi tu quando!
          </p>
            <Fade direction={'up'}>
          <p style={{ fontSize:'24px', fontFamily:'Charter', fontWeight:"bold",  textAlign:'left',marginBottom:10, color:"#6D6D6D"}}>
            Decidi tu quando e come lavorare. Tu ci metti le competenze, Fastcura
            ti trova i clienti
          </p>
            </Fade>
            </div>

          <svg xmlns="http://www.w3.org/2000/svg" width="300.273" height="300.723" viewBox="0 0 237.273 129.723">
            <g id="Raggruppa_94" data-name="Raggruppa 94" transform="translate(-129.642 -359.071)">
              <path id="Tracciato_528" data-name="Tracciato 528"
                    d="M292.273,767.155s44.524.942,72.123,4.337c3.779.465,7.228,4.047-20.7,5.7-31.483,1.859-189.407.267-203.792,0-15.263-.283-13.147-4.739,3.995-6.8S237.991,763.909,292.273,767.155Z"
                    transform="translate(0 -289.283)" fill="#273237" opacity="0.06"/>
              <path id="Tracciato_529" data-name="Tracciato 529"
                    d="M195.983,383.21,173.711,498.349a3.8,3.8,0,0,0,3.727,4.516h11.746Z"
                    transform="translate(-31.278 -17.16)" fill="#ff3617"/>
              <path id="Tracciato_530" data-name="Tracciato 530"
                    d="M215.415,380.594,200.653,493.643a6.262,6.262,0,0,0,6.209,7.073h21.656l-12.21-120.53Z"
                    transform="translate(-50.443 -15.011)" fill="#39b1d9"/>
              <path id="Tracciato_531" data-name="Tracciato 531"
                    d="M235.564,381.6l-6.608,112.328a7.361,7.361,0,0,0,7.348,7.794h32.3Z"
                    transform="translate(-70.592 -16.014)" fill="#d7e9ff"/>
              <path id="Tracciato_532" data-name="Tracciato 532"
                    d="M250.988,384.77,254.2,496.181a7.361,7.361,0,0,0,7.348,7.794h32.3Z"
                    transform="translate(-86.264 -18.269)" fill="#39b1d9"/>
              <path id="Tracciato_533" data-name="Tracciato 533"
                    d="M408.824,500.511H281.477a6.584,6.584,0,0,1-6.477-5.4l-19.378-105.97a7.834,7.834,0,0,1,7.707-9.244H389.176a6.584,6.584,0,0,1,6.477,5.4L415.3,492.742A6.584,6.584,0,0,1,408.824,500.511Z"
                    transform="translate(-89.466 -14.805)" fill="#d7e9ff"/>
              <path id="Tracciato_534" data-name="Tracciato 534"
                    d="M254.892,402.9H395.71L392.1,382.9a3.646,3.646,0,0,0-3.588-3h-136.4a1.194,1.194,0,0,0-1.174,1.409Z"
                    transform="translate(-86.215 -14.805)" fill="#ff3617"/>
              <g id="Raggruppa_90" data-name="Raggruppa 90" transform="translate(165.865 359.071)">
                <g id="Raggruppa_77" data-name="Raggruppa 77" transform="translate(0 0)">
                  <g id="Raggruppa_76" data-name="Raggruppa 76">
                    <path id="Tracciato_535" data-name="Tracciato 535"
                          d="M261.038,359.071a6.111,6.111,0,0,0-6.105,6.1h1.173a4.933,4.933,0,0,1,9.866,0,4.883,4.883,0,0,1-.254,1.561,4.95,4.95,0,0,1-3.067,3.1,4.877,4.877,0,0,1-1.332.264v1.173a6.023,6.023,0,0,0,1.56-.277,6.1,6.1,0,0,0-1.841-11.925Z"
                          transform="translate(-254.933 -359.071)" fill="#39b1d9"/>
                  </g>
                  <path id="Tracciato_536" data-name="Tracciato 536"
                        d="M276.081,395.849a1.349,1.349,0,0,1-.047.353,1.326,1.326,0,1,1,.047-.353Z"
                        transform="translate(-268.087 -384.276)" fill="#39b1d9"/>
                </g>
                <g id="Raggruppa_79" data-name="Raggruppa 79" transform="translate(21.889 0)">
                  <g id="Raggruppa_78" data-name="Raggruppa 78">
                    <path id="Tracciato_537" data-name="Tracciato 537"
                          d="M336.75,359.071a6.111,6.111,0,0,0-6.105,6.1h1.171a4.933,4.933,0,0,1,9.866,0,4.883,4.883,0,0,1-.254,1.561,4.952,4.952,0,0,1-3.065,3.1,4.89,4.89,0,0,1-1.334.264v1.173a6.023,6.023,0,0,0,1.56-.277,6.1,6.1,0,0,0-1.84-11.925Z"
                          transform="translate(-330.645 -359.071)" fill="#39b1d9"/>
                  </g>
                  <path id="Tracciato_538" data-name="Tracciato 538"
                        d="M351.788,395.849a1.362,1.362,0,0,1-.047.353,1.329,1.329,0,1,1,.047-.353Z"
                        transform="translate(-343.796 -384.276)" fill="#39b1d9"/>
                </g>
                <g id="Raggruppa_81" data-name="Raggruppa 81" transform="translate(43.778 0)">
                  <g id="Raggruppa_80" data-name="Raggruppa 80">
                    <path id="Tracciato_539" data-name="Tracciato 539"
                          d="M412.463,359.071a6.111,6.111,0,0,0-6.105,6.1h1.171a4.933,4.933,0,1,1,6.547,4.662,4.885,4.885,0,0,1-1.333.264v1.173A6.034,6.034,0,0,0,414.3,371a6.1,6.1,0,0,0-1.84-11.925Z"
                          transform="translate(-406.358 -359.071)" fill="#39b1d9"/>
                  </g>
                  <path id="Tracciato_540" data-name="Tracciato 540"
                        d="M427.5,395.849a1.36,1.36,0,0,1-.047.353,1.328,1.328,0,1,1,.047-.353Z"
                        transform="translate(-419.509 -384.276)" fill="#39b1d9"/>
                </g>
                <g id="Raggruppa_83" data-name="Raggruppa 83" transform="translate(65.667 0)">
                  <g id="Raggruppa_82" data-name="Raggruppa 82">
                    <path id="Tracciato_541" data-name="Tracciato 541"
                          d="M488.175,359.071a6.11,6.11,0,0,0-6.1,6.1h1.171a4.933,4.933,0,0,1,9.866,0,4.882,4.882,0,0,1-.254,1.561,4.95,4.95,0,0,1-3.067,3.1,4.875,4.875,0,0,1-1.332.264v1.173a6.036,6.036,0,0,0,1.56-.277,6.1,6.1,0,0,0-1.841-11.925Z"
                          transform="translate(-482.071 -359.071)" fill="#39b1d9"/>
                  </g>
                  <path id="Tracciato_542" data-name="Tracciato 542"
                        d="M503.214,395.849a1.36,1.36,0,0,1-.047.353,1.324,1.324,0,1,1,.047-.353Z"
                        transform="translate(-495.222 -384.276)" fill="#39b1d9"/>
                </g>
                <g id="Raggruppa_85" data-name="Raggruppa 85" transform="translate(87.554 0)">
                  <g id="Raggruppa_84" data-name="Raggruppa 84">
                    <path id="Tracciato_543" data-name="Tracciato 543"
                          d="M563.884,359.071a6.111,6.111,0,0,0-6.105,6.1h1.171a4.933,4.933,0,0,1,9.866,0,4.882,4.882,0,0,1-.254,1.561,4.95,4.95,0,0,1-3.067,3.1,4.867,4.867,0,0,1-1.332.264v1.173a6.023,6.023,0,0,0,1.56-.277,6.1,6.1,0,0,0-1.84-11.925Z"
                          transform="translate(-557.779 -359.071)" fill="#39b1d9"/>
                  </g>
                  <path id="Tracciato_544" data-name="Tracciato 544"
                        d="M578.922,395.849a1.347,1.347,0,0,1-.047.353,1.325,1.325,0,1,1,.047-.353Z"
                        transform="translate(-570.93 -384.276)" fill="#39b1d9"/>
                </g>
                <g id="Raggruppa_87" data-name="Raggruppa 87" transform="translate(109.443 0)">
                  <g id="Raggruppa_86" data-name="Raggruppa 86">
                    <path id="Tracciato_545" data-name="Tracciato 545"
                          d="M639.6,359.071a6.111,6.111,0,0,0-6.105,6.1h1.171a4.933,4.933,0,1,1,6.546,4.662,4.867,4.867,0,0,1-1.332.264v1.173a6.023,6.023,0,0,0,1.56-.277,6.1,6.1,0,0,0-1.84-11.925Z"
                          transform="translate(-633.491 -359.071)" fill="#39b1d9"/>
                  </g>
                  <path id="Tracciato_546" data-name="Tracciato 546"
                        d="M654.635,395.849a1.36,1.36,0,0,1-.047.353,1.325,1.325,0,1,1,.047-.353Z"
                        transform="translate(-646.643 -384.276)" fill="#39b1d9"/>
                </g>
                <g id="Raggruppa_89" data-name="Raggruppa 89" transform="translate(131.332 0)">
                  <g id="Raggruppa_88" data-name="Raggruppa 88">
                    <path id="Tracciato_547" data-name="Tracciato 547"
                          d="M715.308,359.071a6.11,6.11,0,0,0-6.1,6.1h1.171a4.933,4.933,0,1,1,6.546,4.662,4.88,4.88,0,0,1-1.332.264v1.173a6.023,6.023,0,0,0,1.56-.277,6.1,6.1,0,0,0-1.841-11.925Z"
                          transform="translate(-709.204 -359.071)" fill="#39b1d9"/>
                  </g>
                  <path id="Tracciato_548" data-name="Tracciato 548"
                        d="M730.347,395.849a1.36,1.36,0,0,1-.047.353,1.325,1.325,0,1,1,.047-.353Z"
                        transform="translate(-722.355 -384.276)" fill="#39b1d9"/>
                </g>
              </g>
              <path id="Tracciato_549" data-name="Tracciato 549"
                    d="M521,564.621h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.119a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,521,564.621Z"
                    transform="translate(-270.889 -138.937)" fill="#39b1d9" opacity="0.51"/>
              <path id="Tracciato_550" data-name="Tracciato 550"
                    d="M583.133,564.621h-7.119a1.909,1.909,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.119a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,583.133,564.621Z"
                    transform="translate(-315.059 -138.937)" fill="#39b1d9" opacity="0.51"/>
              <path id="Tracciato_551" data-name="Tracciato 551"
                    d="M645.266,564.621h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.118a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,645.266,564.621Z"
                    transform="translate(-359.229 -138.937)" fill="#ff3617" opacity="0.51"/>
              <path id="Tracciato_552" data-name="Tracciato 552"
                    d="M334.6,564.621h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.119a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,334.6,564.621Z"
                    transform="translate(-138.379 -138.937)" fill="#39b1d9" opacity="0.51"/>
              <path id="Tracciato_553" data-name="Tracciato 553"
                    d="M322.063,504.876H319a.82.82,0,0,1-.767-.643l-.59-3.059a.517.517,0,0,1,.519-.643h3.059a.82.82,0,0,1,.767.643l.59,3.059A.517.517,0,0,1,322.063,504.876Z"
                    transform="translate(-133.643 -100.563)" fill="#39b1d9"/>
              <path id="Tracciato_554" data-name="Tracciato 554"
                    d="M396.734,564.621h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.119a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,396.734,564.621Z"
                    transform="translate(-182.549 -138.937)" fill="#39b1d9" opacity="0.51"/>
              <path id="Tracciato_555" data-name="Tracciato 555"
                    d="M458.867,564.621h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.119a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,458.867,564.621Z"
                    transform="translate(-226.719 -138.937)" fill="#39b1d9" opacity="0.51"/>
              <path id="Tracciato_556" data-name="Tracciato 556"
                    d="M707.4,564.621H700.28a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.118a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,707.4,564.621Z"
                    transform="translate(-403.399 -138.937)" fill="#ff3617" opacity="0.51"/>
              <path id="Tracciato_557" data-name="Tracciato 557"
                    d="M510.684,511.142h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.118a1.2,1.2,0,0,1,1.208-1.5h7.119a1.909,1.909,0,0,1,1.785,1.5l1.373,7.118A1.2,1.2,0,0,1,510.684,511.142Z"
                    transform="translate(-263.555 -100.919)" fill="#39b1d9" opacity="0.51"/>
              <path id="Tracciato_558" data-name="Tracciato 558"
                    d="M572.817,511.142H565.7a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.118a1.2,1.2,0,0,1,1.208-1.5h7.119a1.908,1.908,0,0,1,1.785,1.5l1.373,7.118A1.2,1.2,0,0,1,572.817,511.142Z"
                    transform="translate(-307.725 -100.919)" fill="#39b1d9" opacity="0.51"/>
              <path id="Tracciato_559" data-name="Tracciato 559"
                    d="M634.95,511.142h-7.118a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.118a1.2,1.2,0,0,1,1.208-1.5H633a1.908,1.908,0,0,1,1.785,1.5l1.373,7.118A1.2,1.2,0,0,1,634.95,511.142Z"
                    transform="translate(-351.895 -100.919)" fill="#ff3617" opacity="0.51"/>
              <path id="Tracciato_560" data-name="Tracciato 560"
                    d="M697.083,511.142h-7.119a1.909,1.909,0,0,1-1.785-1.5l-1.373-7.118a1.2,1.2,0,0,1,1.208-1.5h7.119a1.908,1.908,0,0,1,1.785,1.5l1.373,7.118A1.2,1.2,0,0,1,697.083,511.142Z"
                    transform="translate(-396.065 -100.919)" fill="#ff3617" opacity="0.51"/>
              <path id="Tracciato_561" data-name="Tracciato 561"
                    d="M531.934,621.3h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.118a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,531.934,621.3Z"
                    transform="translate(-278.662 -179.231)" fill="#39b1d9" opacity="0.51"/>
              <path id="Tracciato_562" data-name="Tracciato 562"
                    d="M594.066,621.3h-7.118a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.118a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,594.066,621.3Z"
                    transform="translate(-322.831 -179.231)" fill="#39b1d9" opacity="0.51"/>
              <path id="Tracciato_563" data-name="Tracciato 563"
                    d="M656.2,621.3H649.08a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.118a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,656.2,621.3Z"
                    transform="translate(-367.001 -179.231)" fill="#ff3617" opacity="0.51"/>
              <path id="Tracciato_564" data-name="Tracciato 564"
                    d="M345.534,621.3h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.118a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,345.534,621.3Z"
                    transform="translate(-146.151 -179.231)" fill="#39b1d9" opacity="0.51"/>
              <path id="Tracciato_565" data-name="Tracciato 565"
                    d="M407.668,621.3h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.118a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,407.668,621.3Z"
                    transform="translate(-190.322 -179.231)" fill="#39b1d9" opacity="0.51"/>
              <path id="Tracciato_566" data-name="Tracciato 566"
                    d="M469.8,621.3h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.119a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,469.8,621.3Z"
                    transform="translate(-234.492 -179.231)" fill="#39b1d9" opacity="0.51"/>
              <path id="Tracciato_567" data-name="Tracciato 567"
                    d="M718.332,621.3h-7.118a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.119a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,718.332,621.3Z"
                    transform="translate(-411.171 -179.231)" fill="#ff3617" opacity="0.51"/>
              <path id="Tracciato_568" data-name="Tracciato 568"
                    d="M542.867,677.984h-7.118a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.118a1.2,1.2,0,0,1,1.208-1.5h7.119a1.908,1.908,0,0,1,1.785,1.5l1.373,7.118A1.2,1.2,0,0,1,542.867,677.984Z"
                    transform="translate(-286.434 -219.526)" fill="#39b1d9" opacity="0.51"/>
              <path id="Tracciato_569" data-name="Tracciato 569"
                    d="M605,677.984h-7.118a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.118a1.2,1.2,0,0,1,1.208-1.5h7.119a1.909,1.909,0,0,1,1.785,1.5l1.373,7.118A1.2,1.2,0,0,1,605,677.984Z"
                    transform="translate(-330.604 -219.526)" fill="#39b1d9" opacity="0.51"/>
              <path id="Tracciato_570" data-name="Tracciato 570"
                    d="M667.133,677.984h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.118a1.2,1.2,0,0,1,1.208-1.5h7.119a1.909,1.909,0,0,1,1.785,1.5l1.373,7.118A1.2,1.2,0,0,1,667.133,677.984Z"
                    transform="translate(-374.774 -219.526)" fill="#ff3617" opacity="0.51"/>
              <path id="Tracciato_571" data-name="Tracciato 571"
                    d="M356.468,677.984h-7.118a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.118a1.2,1.2,0,0,1,1.208-1.5h7.119a1.908,1.908,0,0,1,1.785,1.5l1.373,7.118A1.2,1.2,0,0,1,356.468,677.984Z"
                    transform="translate(-153.924 -219.526)" fill="#39b1d9" opacity="0.51"/>
              <path id="Tracciato_572" data-name="Tracciato 572"
                    d="M418.6,677.984h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.118a1.2,1.2,0,0,1,1.208-1.5h7.119a1.909,1.909,0,0,1,1.785,1.5l1.373,7.118A1.2,1.2,0,0,1,418.6,677.984Z"
                    transform="translate(-198.094 -219.526)" fill="#39b1d9" opacity="0.51"/>
              <path id="Tracciato_573" data-name="Tracciato 573"
                    d="M480.734,677.984h-7.118a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.118a1.2,1.2,0,0,1,1.208-1.5h7.119a1.909,1.909,0,0,1,1.785,1.5l1.373,7.118A1.2,1.2,0,0,1,480.734,677.984Z"
                    transform="translate(-242.264 -219.526)" fill="#39b1d9" opacity="0.51"/>
              <path id="Tracciato_574" data-name="Tracciato 574"
                    d="M729.266,677.984h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.118a1.2,1.2,0,0,1,1.208-1.5h7.119a1.908,1.908,0,0,1,1.785,1.5l1.373,7.118A1.2,1.2,0,0,1,729.266,677.984Z"
                    transform="translate(-418.944 -219.526)" fill="#ff3617" opacity="0.51"/>
              <path id="Tracciato_575" data-name="Tracciato 575"
                    d="M553.183,731.462h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.119a1.909,1.909,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,553.183,731.462Z"
                    transform="translate(-293.767 -257.543)" fill="#39b1d9" opacity="0.51"/>
              <path id="Tracciato_576" data-name="Tracciato 576"
                    d="M615.316,731.462H608.2a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.119a1.909,1.909,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,615.316,731.462Z"
                    transform="translate(-337.938 -257.543)" fill="#39b1d9" opacity="0.51"/>
              <path id="Tracciato_577" data-name="Tracciato 577"
                    d="M677.449,731.462H670.33a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5H675.5a1.909,1.909,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,677.449,731.462Z"
                    transform="translate(-382.108 -257.543)" fill="#ff3617" opacity="0.51"/>
              <path id="Tracciato_578" data-name="Tracciato 578"
                    d="M366.784,731.462h-7.118a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.119a1.909,1.909,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,366.784,731.462Z"
                    transform="translate(-161.257 -257.543)" fill="#39b1d9" opacity="0.51"/>
              <path id="Tracciato_579" data-name="Tracciato 579"
                    d="M428.917,731.462H421.8a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.119a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,428.917,731.462Z"
                    transform="translate(-205.427 -257.543)" fill="#39b1d9" opacity="0.51"/>
              <path id="Tracciato_580" data-name="Tracciato 580"
                    d="M491.05,731.462h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5H489.1a1.909,1.909,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,491.05,731.462Z"
                    transform="translate(-249.597 -257.543)" fill="#39b1d9" opacity="0.51"/>
              <path id="Tracciato_581" data-name="Tracciato 581"
                    d="M359.965,503.359H341.106a.507.507,0,0,1-.505-.506h0a.507.507,0,0,1,.505-.505h18.859a.507.507,0,0,1,.505.505h0A.507.507,0,0,1,359.965,503.359Z"
                    transform="translate(-149.969 -101.855)" fill="#39b1d9"/>
              <path id="Tracciato_582" data-name="Tracciato 582"
                    d="M361.949,511.259H343.09a.507.507,0,0,1-.505-.505h0a.507.507,0,0,1,.505-.505h18.859a.507.507,0,0,1,.505.505h0A.507.507,0,0,1,361.949,511.259Z"
                    transform="translate(-151.38 -107.471)" fill="#39b1d9"/>
              <g id="Raggruppa_91" data-name="Raggruppa 91" transform="translate(182.334 382.568)">
                <path id="Tracciato_583" data-name="Tracciato 583"
                      d="M319.336,442.275h-6.472a.967.967,0,0,1-.964-.964h0a.967.967,0,0,1,.964-.964h6.472a.967.967,0,0,1,.964.964h0A.967.967,0,0,1,319.336,442.275Z"
                      transform="translate(-311.9 -440.347)" fill="#fff"/>
                <path id="Tracciato_584" data-name="Tracciato 584"
                      d="M380.758,442.275h-6.472a.967.967,0,0,1-.964-.964h0a.967.967,0,0,1,.964-.964h6.472a.967.967,0,0,1,.964.964h0A.967.967,0,0,1,380.758,442.275Z"
                      transform="translate(-355.565 -440.347)" fill="#fff"/>
                <path id="Tracciato_585" data-name="Tracciato 585"
                      d="M442.182,442.275H435.71a.967.967,0,0,1-.964-.964h0a.967.967,0,0,1,.964-.964h6.472a.967.967,0,0,1,.964.964h0A.967.967,0,0,1,442.182,442.275Z"
                      transform="translate(-399.231 -440.347)" fill="#fff"/>
                <path id="Tracciato_586" data-name="Tracciato 586"
                      d="M503.6,442.275h-6.472a.967.967,0,0,1-.964-.964h0a.967.967,0,0,1,.964-.964H503.6a.967.967,0,0,1,.964.964h0A.967.967,0,0,1,503.6,442.275Z"
                      transform="translate(-442.896 -440.347)" fill="#fff"/>
                <path id="Tracciato_587" data-name="Tracciato 587"
                      d="M565.027,442.275h-6.472a.967.967,0,0,1-.964-.964h0a.967.967,0,0,1,.964-.964h6.472a.967.967,0,0,1,.964.964h0A.967.967,0,0,1,565.027,442.275Z"
                      transform="translate(-486.561 -440.347)" fill="#fff"/>
                <path id="Tracciato_588" data-name="Tracciato 588"
                      d="M626.451,442.275h-6.472a.967.967,0,0,1-.964-.964h0a.967.967,0,0,1,.964-.964h6.472a.967.967,0,0,1,.964.964h0A.967.967,0,0,1,626.451,442.275Z"
                      transform="translate(-530.226 -440.347)" fill="#fff"/>
                <path id="Tracciato_589" data-name="Tracciato 589"
                      d="M687.873,442.275H681.4a.967.967,0,0,1-.964-.964h0a.967.967,0,0,1,.964-.964h6.472a.967.967,0,0,1,.964.964h0A.967.967,0,0,1,687.873,442.275Z"
                      transform="translate(-573.892 -440.347)" fill="#fff"/>
              </g>
              <g id="Raggruppa_92" data-name="Raggruppa 92" transform="translate(251.888 397.775)">
                <path id="Tracciato_590" data-name="Tracciato 590"
                      d="M555.98,505.535a3.371,3.371,0,0,1-3.037-1.334c-1.088-1.688-.248-4.054,2.5-7.033a34.818,34.818,0,0,1,4.366-3.917.207.207,0,0,1,.244.333c-.091.067-9.109,6.744-6.759,10.393.745,1.156,2.339,1.232,3.546,1.093a19.392,19.392,0,0,0,7.793-3.219c2.738-1.819,4.667-3.869,5.292-5.623.41-1.152.283-1.967-.377-2.424-.853-.591-2.635-.591-4.767,0a15.05,15.05,0,0,0-5.364,2.653.206.206,0,0,1-.267-.315,15.481,15.481,0,0,1,5.52-2.735c2.282-.631,4.145-.609,5.112.06.573.4,1.13,1.221.531,2.9-.654,1.838-2.642,3.962-5.453,5.829a19.809,19.809,0,0,1-7.974,3.285A7.851,7.851,0,0,1,555.98,505.535Z"
                      transform="translate(-552.483 -492.946)" fill="#ff3617"/>
              </g>
              <path id="Tracciato_591" data-name="Tracciato 591" d="M774.908,492.337l3.191.717-.468-2.528Z"
                    transform="translate(-458.716 -93.45)" fill="#ffb27d"/>
              <path id="Tracciato_592" data-name="Tracciato 592" d="M904.344,770.444v.721l-4.088.721v-1.9Z"
                    transform="translate(-547.825 -292.121)" fill="#f4c0a0"/>
              <path id="Tracciato_593" data-name="Tracciato 593"
                    d="M864.745,760.174v.742l-4.632.206.063-.948,1.443-1.924Z" transform="translate(-519.288 -283.774)"
                    fill="#f4c0a0"/>
              <path id="Tracciato_594" data-name="Tracciato 594"
                    d="M866.847,439.555s3.435-1.62,2.943-3.62c0,0-6.33.964-5.789-6.57,0,0-.172-5.344,1.586-4.2s6.789.485,6.789.485l4.41,2.252s-3.652,5.662-1.106,9.664C875.68,437.562,870.991,441.095,866.847,439.555Z"
                    transform="translate(-522.028 -46.87)" fill="#f4c0a0"/>
              <path id="Tracciato_595" data-name="Tracciato 595"
                    d="M867.637,422.632a8.694,8.694,0,0,1-1.172-5.975s2.328-2.247.354-3.622c0,0-1.227-.679-1.666.539a2.022,2.022,0,0,1-1.3-2.842s-6.889.709-9.183-1.123a5.412,5.412,0,0,1-2.015-2.577,3.563,3.563,0,0,0,2.4-.084,13.273,13.273,0,0,1-1.269-1.881,5.161,5.161,0,0,0,2.661.388c1.923-.067,7.59-3.153,10.823-.138s2.82,4.955,2.381,6.173-.4,2.42-1.531,4.385S867.637,422.632,867.637,422.632Z"
                    transform="translate(-513.985 -31.94)" fill="#273237"/>
              <path id="Tracciato_596" data-name="Tracciato 596"
                    d="M818.776,494.274s-3.677,4.941-6.123,3.824-4.444-3.213-8.723-8.6-4.1-7.076-3.874-7.564,2.733-4.427,4.292-1.113.881,4.541,1.884,5.709,3.914,5.277,7.1,6.85c0,0,2.179-6.5,2.988-7.444S818.776,494.274,818.776,494.274Z"
                    transform="translate(-476.527 -85.618)" fill="#f4c0a0"/>
              <path id="Tracciato_597" data-name="Tracciato 597"
                    d="M874.449,571.013s2.044-.509,1.082,15.362-3.367,42.084-3.367,42.084h-4.088s-1.192-24.4-2.645-34.148c-.685-4.6-.962-10.341-.962-10.341L861.1,626.535h-4.81s-3.367-52.424.721-56.272Z"
                    transform="translate(-515.645 -150.135)" fill="#183353"/>
              <path id="Tracciato_598" data-name="Tracciato 598"
                    d="M860.939,522.311l-.118-3.365-1.549,1.739S859.463,521.4,860.939,522.311Z"
                    transform="translate(-518.69 -113.654)" fill="#469cd7"/>
              <path id="Tracciato_599" data-name="Tracciato 599" d="M879.762,433.776s-.978-.447-1.442.05"
                    transform="translate(-532.231 -52.976)" fill="none" stroke="#283237" stroke-miterlimit="10"
                    stroke-width="0.416"/>
              <path id="Tracciato_600" data-name="Tracciato 600" d="M869.745,451.544a2.847,2.847,0,0,0,2.479-.142"
                    transform="translate(-526.135 -65.638)" fill="none" stroke="#283237" stroke-miterlimit="10"
                    stroke-width="0.416"/>
              <path id="Tracciato_601" data-name="Tracciato 601" d="M867.723,434.333s-.506-.7-1.442.05"
                    transform="translate(-523.672 -53.291)" fill="none" stroke="#283237" stroke-miterlimit="10"
                    stroke-width="0.416"/>
              <ellipse id="Ellisse_69" data-name="Ellisse 69" cx="0.361" cy="0.481" rx="0.361" ry="0.481"
                       transform="translate(346.123 381.812) rotate(-2.003)" fill="#283237"/>
              <ellipse id="Ellisse_70" data-name="Ellisse 70" cx="0.361" cy="0.481" rx="0.361" ry="0.481"
                       transform="translate(342.998 381.921) rotate(-2.003)" fill="#283237"/>
              <path id="Tracciato_602" data-name="Tracciato 602" d="M884.3,458.763s1.666-.539,2.113-1.518"
                    transform="translate(-536.479 -69.791)" fill="none" stroke="#e3b699" stroke-miterlimit="10"
                    stroke-width="0.832"/>
              <path id="Tracciato_603" data-name="Tracciato 603"
                    d="M885.743,773.249s-5.811.583-6.209,1.029-2.689,3.37-5.273,4.11.045,2.284.79,1.988,8.494-1.073,10.083-1.417,2.185-.293,2.236-.889A35.9,35.9,0,0,0,885.743,773.249Z"
                    transform="translate(-528.555 -294.437)" fill="#101f34"/>
              <path id="Tracciato_604" data-name="Tracciato 604"
                    d="M849.459,766.337s-5.242.325-5.615.712-2.532,2.937-4.879,3.513-.038,2.054.642,1.814,7.669-.674,9.11-.929,1.974-.189,2.04-.722A32.3,32.3,0,0,0,849.459,766.337Z"
                    transform="translate(-503.522 -289.523)" fill="#101f34"/>
              <path id="Tracciato_605" data-name="Tracciato 605" d="M876.493,617.675l-4.59,42.077,1.223.488Z"
                    transform="translate(-527.669 -183.84)" fill="#101f34"/>
              <path id="Tracciato_606" data-name="Tracciato 606"
                    d="M922.434,514.686s.969,10.552.829,13.445-2.224,12.109-2.38,14.521-4.415,4.486-4.955,2.82-.116-4.4,1.413-7.75a24.635,24.635,0,0,0,1.785-10.891c-.316-2.154-1.845-11.485-1.845-11.485Z"
                    transform="translate(-558.807 -110.626)" fill="#f4c0a0"/>
              <path id="Tracciato_607" data-name="Tracciato 607"
                    d="M854.247,480.874c-.59-3.108,2.034-10.658,5.622-11.265,2.04-.345,2.247,2.328,8.833-1.993,0,0,7.484.7,9.65,7.6,2.232,7.113,1.867,5.228-1.215,6.54a10.071,10.071,0,0,0-3.055,2.089l1.1,19.456c-2.165.471-5.209,3.8-14.188,2.886,0,0-5.266-.532-6.734-1.2,0,0,3.609-16.78,3.044-19.167C857.307,485.82,855.054,485.126,854.247,480.874Z"
                    transform="translate(-515.058 -77.163)" fill="#50afd7"/>
              <path id="Tracciato_608" data-name="Tracciato 608"
                    d="M917.2,508.363a18.785,18.785,0,0,1-1.833-4.267c-.557-2.146-.548-1.906-.548-1.906s.975,7.24,2.487,9.2Z"
                    transform="translate(-558.176 -101.737)" fill="#3f8dac"/>
              <path id="Tracciato_609" data-name="Tracciato 609" d="M899.693,465.262c.693.33,1.246,3.443-1.516,6.429"
                    transform="translate(-546.347 -75.491)" fill="none" stroke="#273237" stroke-miterlimit="10"
                    stroke-width="0.832"/>
              <path id="Tracciato_610" data-name="Tracciato 610" d="M904.272,468.354"
                    transform="translate(-550.68 -77.689)" fill="none" stroke="#273237" stroke-miterlimit="10"
                    stroke-width="0.832"/>
              <path id="Tracciato_611" data-name="Tracciato 611" d="M883.307,466.334"
                    transform="translate(-535.776 -76.253)" fill="none" stroke="#273237" stroke-miterlimit="10"
                    stroke-width="0.832"/>
              <g id="Raggruppa_93" data-name="Raggruppa 93" transform="translate(345.265 389.936)">
                <path id="Tracciato_612" data-name="Tracciato 612"
                      d="M875.785,473.925l.234-.054c-.014-.062-1.3-6.183,1.842-7.8l.086-.245c-1.671.6-2.406,2.367-2.473,4.732A15.165,15.165,0,0,0,875.785,473.925Z"
                      transform="translate(-875.469 -465.83)" fill="#273237"/>
              </g>
              <path id="Tracciato_613" data-name="Tracciato 613"
                    d="M863.14,519.634s.544-5.072.321-4.583-1.267,3.969-1.267,3.969Z"
                    transform="translate(-520.766 -110.862)" fill="#3f8dac"/>
              <path id="Tracciato_614" data-name="Tracciato 614"
                    d="M918.8,576.917h3.813c-.67,3.761-1.626,8.371-1.729,9.974-.156,2.412-4.415,4.486-4.955,2.82s-.116-4.4,1.413-7.749A21.325,21.325,0,0,0,918.8,576.917Z"
                    transform="translate(-558.807 -154.866)" fill="#f4c0a0"/>
              <circle id="Ellisse_71" data-name="Ellisse 71" cx="1.202" cy="1.202" r="1.202"
                      transform="translate(344.495 396.801)" fill="#273237"/>
              <circle id="Ellisse_72" data-name="Ellisse 72" cx="0.365" cy="0.365" r="0.365"
                      transform="translate(350.863 401.967)" fill="#273237"/>
              <circle id="Ellisse_73" data-name="Ellisse 73" cx="0.365" cy="0.365" r="0.365"
                      transform="translate(347.016 398.841)" fill="#273237"/>
              <path id="Tracciato_615" data-name="Tracciato 615"
                    d="M886.588,493.139s-.242.416,1.3-1.75-.791-4.374-.791-4.374-2.4-1.2-4.145,2.337l-.363.624"
                    transform="translate(-535.264 -90.815)" fill="none" stroke="#273237" stroke-miterlimit="10"
                    stroke-width="0.832"/>
              <path id="Tracciato_616" data-name="Tracciato 616"
                    d="M846.911,530.486a5.228,5.228,0,0,0-.722-2.645s.962,1.443,1.2,1.924"
                    transform="translate(-509.389 -119.978)" fill="#ddb296"/>
              <path id="Tracciato_617" data-name="Tracciato 617" d="M840.969,465.656"
                    transform="translate(-505.678 -75.771)" fill="none"/>
              <rect id="Rettangolo_104" data-name="Rettangolo 104" width="2.571" height="12.934"
                    transform="translate(319.383 399.603) rotate(-100.493)" fill="#ff3617"/>
              <path id="Tracciato_618" data-name="Tracciato 618"
                    d="M829.948,482.618l.148.8a.906.906,0,0,1-.726,1.055l-.588.109-.468-2.528.64-.118A.853.853,0,0,1,829.948,482.618Z"
                    transform="translate(-496.682 -87.333)" fill="#ffb27d"/>
              <path id="Tracciato_619" data-name="Tracciato 619" d="M776.543,493.029l.167,1.492-1.8-.4Z"
                    transform="translate(-458.716 -95.23)" fill="#ff3617"/>
              <path id="Tracciato_620" data-name="Tracciato 620" d="M800.621,485.49s.422,2.1,4.29-.731Z"
                    transform="translate(-476.995 -89.351)" fill="#f4c0a0"/>
            </g>
          </svg>

        </div>
      </div>
      </>}
        {(!!isMobile)&& <> <div style={{
          display: 'flex',
          marginTop: '50px',
          flexDirection: 'row',
          justifyContent: "space-around",
          width: '100%',
          height:'400px',
          maxWidth: '100%',
          backgroundColor:'rgb(242, 252, 255)'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "space-around",
            alignContent: 'center',
            alignItems: 'center'
          }}>


            <Typography  fontWeight={'900'} color="#000000" fontFamily={'Charter'} fontSize={25} style={{display: 'flex', textAlign: 'left'}}>
              Decidi tu quando!
            </Typography>
            <Fade direction={'up'}>
            <p style={{fontSize:(isMobile)?'14px':'24px'}}>
              Decidi tu quando e come lavorare. Tu ci metti le competenze, Fastcura
              ti trova i clienti
            </p>
            </Fade>


            <svg xmlns="http://www.w3.org/2000/svg" width="237.273" height="129.723" viewBox="0 0 237.273 129.723">
              <g id="Raggruppa_94" data-name="Raggruppa 94" transform="translate(-129.642 -359.071)">
                <path id="Tracciato_528" data-name="Tracciato 528"
                      d="M292.273,767.155s44.524.942,72.123,4.337c3.779.465,7.228,4.047-20.7,5.7-31.483,1.859-189.407.267-203.792,0-15.263-.283-13.147-4.739,3.995-6.8S237.991,763.909,292.273,767.155Z"
                      transform="translate(0 -289.283)" fill="#273237" opacity="0.06"/>
                <path id="Tracciato_529" data-name="Tracciato 529"
                      d="M195.983,383.21,173.711,498.349a3.8,3.8,0,0,0,3.727,4.516h11.746Z"
                      transform="translate(-31.278 -17.16)" fill="#ff3617"/>
                <path id="Tracciato_530" data-name="Tracciato 530"
                      d="M215.415,380.594,200.653,493.643a6.262,6.262,0,0,0,6.209,7.073h21.656l-12.21-120.53Z"
                      transform="translate(-50.443 -15.011)" fill="#39b1d9"/>
                <path id="Tracciato_531" data-name="Tracciato 531"
                      d="M235.564,381.6l-6.608,112.328a7.361,7.361,0,0,0,7.348,7.794h32.3Z"
                      transform="translate(-70.592 -16.014)" fill="#d7e9ff"/>
                <path id="Tracciato_532" data-name="Tracciato 532"
                      d="M250.988,384.77,254.2,496.181a7.361,7.361,0,0,0,7.348,7.794h32.3Z"
                      transform="translate(-86.264 -18.269)" fill="#39b1d9"/>
                <path id="Tracciato_533" data-name="Tracciato 533"
                      d="M408.824,500.511H281.477a6.584,6.584,0,0,1-6.477-5.4l-19.378-105.97a7.834,7.834,0,0,1,7.707-9.244H389.176a6.584,6.584,0,0,1,6.477,5.4L415.3,492.742A6.584,6.584,0,0,1,408.824,500.511Z"
                      transform="translate(-89.466 -14.805)" fill="#d7e9ff"/>
                <path id="Tracciato_534" data-name="Tracciato 534"
                      d="M254.892,402.9H395.71L392.1,382.9a3.646,3.646,0,0,0-3.588-3h-136.4a1.194,1.194,0,0,0-1.174,1.409Z"
                      transform="translate(-86.215 -14.805)" fill="#ff3617"/>
                <g id="Raggruppa_90" data-name="Raggruppa 90" transform="translate(165.865 359.071)">
                  <g id="Raggruppa_77" data-name="Raggruppa 77" transform="translate(0 0)">
                    <g id="Raggruppa_76" data-name="Raggruppa 76">
                      <path id="Tracciato_535" data-name="Tracciato 535"
                            d="M261.038,359.071a6.111,6.111,0,0,0-6.105,6.1h1.173a4.933,4.933,0,0,1,9.866,0,4.883,4.883,0,0,1-.254,1.561,4.95,4.95,0,0,1-3.067,3.1,4.877,4.877,0,0,1-1.332.264v1.173a6.023,6.023,0,0,0,1.56-.277,6.1,6.1,0,0,0-1.841-11.925Z"
                            transform="translate(-254.933 -359.071)" fill="#39b1d9"/>
                    </g>
                    <path id="Tracciato_536" data-name="Tracciato 536"
                          d="M276.081,395.849a1.349,1.349,0,0,1-.047.353,1.326,1.326,0,1,1,.047-.353Z"
                          transform="translate(-268.087 -384.276)" fill="#39b1d9"/>
                  </g>
                  <g id="Raggruppa_79" data-name="Raggruppa 79" transform="translate(21.889 0)">
                    <g id="Raggruppa_78" data-name="Raggruppa 78">
                      <path id="Tracciato_537" data-name="Tracciato 537"
                            d="M336.75,359.071a6.111,6.111,0,0,0-6.105,6.1h1.171a4.933,4.933,0,0,1,9.866,0,4.883,4.883,0,0,1-.254,1.561,4.952,4.952,0,0,1-3.065,3.1,4.89,4.89,0,0,1-1.334.264v1.173a6.023,6.023,0,0,0,1.56-.277,6.1,6.1,0,0,0-1.84-11.925Z"
                            transform="translate(-330.645 -359.071)" fill="#39b1d9"/>
                    </g>
                    <path id="Tracciato_538" data-name="Tracciato 538"
                          d="M351.788,395.849a1.362,1.362,0,0,1-.047.353,1.329,1.329,0,1,1,.047-.353Z"
                          transform="translate(-343.796 -384.276)" fill="#39b1d9"/>
                  </g>
                  <g id="Raggruppa_81" data-name="Raggruppa 81" transform="translate(43.778 0)">
                    <g id="Raggruppa_80" data-name="Raggruppa 80">
                      <path id="Tracciato_539" data-name="Tracciato 539"
                            d="M412.463,359.071a6.111,6.111,0,0,0-6.105,6.1h1.171a4.933,4.933,0,1,1,6.547,4.662,4.885,4.885,0,0,1-1.333.264v1.173A6.034,6.034,0,0,0,414.3,371a6.1,6.1,0,0,0-1.84-11.925Z"
                            transform="translate(-406.358 -359.071)" fill="#39b1d9"/>
                    </g>
                    <path id="Tracciato_540" data-name="Tracciato 540"
                          d="M427.5,395.849a1.36,1.36,0,0,1-.047.353,1.328,1.328,0,1,1,.047-.353Z"
                          transform="translate(-419.509 -384.276)" fill="#39b1d9"/>
                  </g>
                  <g id="Raggruppa_83" data-name="Raggruppa 83" transform="translate(65.667 0)">
                    <g id="Raggruppa_82" data-name="Raggruppa 82">
                      <path id="Tracciato_541" data-name="Tracciato 541"
                            d="M488.175,359.071a6.11,6.11,0,0,0-6.1,6.1h1.171a4.933,4.933,0,0,1,9.866,0,4.882,4.882,0,0,1-.254,1.561,4.95,4.95,0,0,1-3.067,3.1,4.875,4.875,0,0,1-1.332.264v1.173a6.036,6.036,0,0,0,1.56-.277,6.1,6.1,0,0,0-1.841-11.925Z"
                            transform="translate(-482.071 -359.071)" fill="#39b1d9"/>
                    </g>
                    <path id="Tracciato_542" data-name="Tracciato 542"
                          d="M503.214,395.849a1.36,1.36,0,0,1-.047.353,1.324,1.324,0,1,1,.047-.353Z"
                          transform="translate(-495.222 -384.276)" fill="#39b1d9"/>
                  </g>
                  <g id="Raggruppa_85" data-name="Raggruppa 85" transform="translate(87.554 0)">
                    <g id="Raggruppa_84" data-name="Raggruppa 84">
                      <path id="Tracciato_543" data-name="Tracciato 543"
                            d="M563.884,359.071a6.111,6.111,0,0,0-6.105,6.1h1.171a4.933,4.933,0,0,1,9.866,0,4.882,4.882,0,0,1-.254,1.561,4.95,4.95,0,0,1-3.067,3.1,4.867,4.867,0,0,1-1.332.264v1.173a6.023,6.023,0,0,0,1.56-.277,6.1,6.1,0,0,0-1.84-11.925Z"
                            transform="translate(-557.779 -359.071)" fill="#39b1d9"/>
                    </g>
                    <path id="Tracciato_544" data-name="Tracciato 544"
                          d="M578.922,395.849a1.347,1.347,0,0,1-.047.353,1.325,1.325,0,1,1,.047-.353Z"
                          transform="translate(-570.93 -384.276)" fill="#39b1d9"/>
                  </g>
                  <g id="Raggruppa_87" data-name="Raggruppa 87" transform="translate(109.443 0)">
                    <g id="Raggruppa_86" data-name="Raggruppa 86">
                      <path id="Tracciato_545" data-name="Tracciato 545"
                            d="M639.6,359.071a6.111,6.111,0,0,0-6.105,6.1h1.171a4.933,4.933,0,1,1,6.546,4.662,4.867,4.867,0,0,1-1.332.264v1.173a6.023,6.023,0,0,0,1.56-.277,6.1,6.1,0,0,0-1.84-11.925Z"
                            transform="translate(-633.491 -359.071)" fill="#39b1d9"/>
                    </g>
                    <path id="Tracciato_546" data-name="Tracciato 546"
                          d="M654.635,395.849a1.36,1.36,0,0,1-.047.353,1.325,1.325,0,1,1,.047-.353Z"
                          transform="translate(-646.643 -384.276)" fill="#39b1d9"/>
                  </g>
                  <g id="Raggruppa_89" data-name="Raggruppa 89" transform="translate(131.332 0)">
                    <g id="Raggruppa_88" data-name="Raggruppa 88">
                      <path id="Tracciato_547" data-name="Tracciato 547"
                            d="M715.308,359.071a6.11,6.11,0,0,0-6.1,6.1h1.171a4.933,4.933,0,1,1,6.546,4.662,4.88,4.88,0,0,1-1.332.264v1.173a6.023,6.023,0,0,0,1.56-.277,6.1,6.1,0,0,0-1.841-11.925Z"
                            transform="translate(-709.204 -359.071)" fill="#39b1d9"/>
                    </g>
                    <path id="Tracciato_548" data-name="Tracciato 548"
                          d="M730.347,395.849a1.36,1.36,0,0,1-.047.353,1.325,1.325,0,1,1,.047-.353Z"
                          transform="translate(-722.355 -384.276)" fill="#39b1d9"/>
                  </g>
                </g>
                <path id="Tracciato_549" data-name="Tracciato 549"
                      d="M521,564.621h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.119a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,521,564.621Z"
                      transform="translate(-270.889 -138.937)" fill="#39b1d9" opacity="0.51"/>
                <path id="Tracciato_550" data-name="Tracciato 550"
                      d="M583.133,564.621h-7.119a1.909,1.909,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.119a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,583.133,564.621Z"
                      transform="translate(-315.059 -138.937)" fill="#39b1d9" opacity="0.51"/>
                <path id="Tracciato_551" data-name="Tracciato 551"
                      d="M645.266,564.621h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.118a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,645.266,564.621Z"
                      transform="translate(-359.229 -138.937)" fill="#ff3617" opacity="0.51"/>
                <path id="Tracciato_552" data-name="Tracciato 552"
                      d="M334.6,564.621h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.119a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,334.6,564.621Z"
                      transform="translate(-138.379 -138.937)" fill="#39b1d9" opacity="0.51"/>
                <path id="Tracciato_553" data-name="Tracciato 553"
                      d="M322.063,504.876H319a.82.82,0,0,1-.767-.643l-.59-3.059a.517.517,0,0,1,.519-.643h3.059a.82.82,0,0,1,.767.643l.59,3.059A.517.517,0,0,1,322.063,504.876Z"
                      transform="translate(-133.643 -100.563)" fill="#39b1d9"/>
                <path id="Tracciato_554" data-name="Tracciato 554"
                      d="M396.734,564.621h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.119a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,396.734,564.621Z"
                      transform="translate(-182.549 -138.937)" fill="#39b1d9" opacity="0.51"/>
                <path id="Tracciato_555" data-name="Tracciato 555"
                      d="M458.867,564.621h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.119a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,458.867,564.621Z"
                      transform="translate(-226.719 -138.937)" fill="#39b1d9" opacity="0.51"/>
                <path id="Tracciato_556" data-name="Tracciato 556"
                      d="M707.4,564.621H700.28a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.118a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,707.4,564.621Z"
                      transform="translate(-403.399 -138.937)" fill="#ff3617" opacity="0.51"/>
                <path id="Tracciato_557" data-name="Tracciato 557"
                      d="M510.684,511.142h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.118a1.2,1.2,0,0,1,1.208-1.5h7.119a1.909,1.909,0,0,1,1.785,1.5l1.373,7.118A1.2,1.2,0,0,1,510.684,511.142Z"
                      transform="translate(-263.555 -100.919)" fill="#39b1d9" opacity="0.51"/>
                <path id="Tracciato_558" data-name="Tracciato 558"
                      d="M572.817,511.142H565.7a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.118a1.2,1.2,0,0,1,1.208-1.5h7.119a1.908,1.908,0,0,1,1.785,1.5l1.373,7.118A1.2,1.2,0,0,1,572.817,511.142Z"
                      transform="translate(-307.725 -100.919)" fill="#39b1d9" opacity="0.51"/>
                <path id="Tracciato_559" data-name="Tracciato 559"
                      d="M634.95,511.142h-7.118a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.118a1.2,1.2,0,0,1,1.208-1.5H633a1.908,1.908,0,0,1,1.785,1.5l1.373,7.118A1.2,1.2,0,0,1,634.95,511.142Z"
                      transform="translate(-351.895 -100.919)" fill="#ff3617" opacity="0.51"/>
                <path id="Tracciato_560" data-name="Tracciato 560"
                      d="M697.083,511.142h-7.119a1.909,1.909,0,0,1-1.785-1.5l-1.373-7.118a1.2,1.2,0,0,1,1.208-1.5h7.119a1.908,1.908,0,0,1,1.785,1.5l1.373,7.118A1.2,1.2,0,0,1,697.083,511.142Z"
                      transform="translate(-396.065 -100.919)" fill="#ff3617" opacity="0.51"/>
                <path id="Tracciato_561" data-name="Tracciato 561"
                      d="M531.934,621.3h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.118a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,531.934,621.3Z"
                      transform="translate(-278.662 -179.231)" fill="#39b1d9" opacity="0.51"/>
                <path id="Tracciato_562" data-name="Tracciato 562"
                      d="M594.066,621.3h-7.118a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.118a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,594.066,621.3Z"
                      transform="translate(-322.831 -179.231)" fill="#39b1d9" opacity="0.51"/>
                <path id="Tracciato_563" data-name="Tracciato 563"
                      d="M656.2,621.3H649.08a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.118a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,656.2,621.3Z"
                      transform="translate(-367.001 -179.231)" fill="#ff3617" opacity="0.51"/>
                <path id="Tracciato_564" data-name="Tracciato 564"
                      d="M345.534,621.3h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.118a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,345.534,621.3Z"
                      transform="translate(-146.151 -179.231)" fill="#39b1d9" opacity="0.51"/>
                <path id="Tracciato_565" data-name="Tracciato 565"
                      d="M407.668,621.3h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.118a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,407.668,621.3Z"
                      transform="translate(-190.322 -179.231)" fill="#39b1d9" opacity="0.51"/>
                <path id="Tracciato_566" data-name="Tracciato 566"
                      d="M469.8,621.3h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.119a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,469.8,621.3Z"
                      transform="translate(-234.492 -179.231)" fill="#39b1d9" opacity="0.51"/>
                <path id="Tracciato_567" data-name="Tracciato 567"
                      d="M718.332,621.3h-7.118a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.119a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,718.332,621.3Z"
                      transform="translate(-411.171 -179.231)" fill="#ff3617" opacity="0.51"/>
                <path id="Tracciato_568" data-name="Tracciato 568"
                      d="M542.867,677.984h-7.118a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.118a1.2,1.2,0,0,1,1.208-1.5h7.119a1.908,1.908,0,0,1,1.785,1.5l1.373,7.118A1.2,1.2,0,0,1,542.867,677.984Z"
                      transform="translate(-286.434 -219.526)" fill="#39b1d9" opacity="0.51"/>
                <path id="Tracciato_569" data-name="Tracciato 569"
                      d="M605,677.984h-7.118a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.118a1.2,1.2,0,0,1,1.208-1.5h7.119a1.909,1.909,0,0,1,1.785,1.5l1.373,7.118A1.2,1.2,0,0,1,605,677.984Z"
                      transform="translate(-330.604 -219.526)" fill="#39b1d9" opacity="0.51"/>
                <path id="Tracciato_570" data-name="Tracciato 570"
                      d="M667.133,677.984h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.118a1.2,1.2,0,0,1,1.208-1.5h7.119a1.909,1.909,0,0,1,1.785,1.5l1.373,7.118A1.2,1.2,0,0,1,667.133,677.984Z"
                      transform="translate(-374.774 -219.526)" fill="#ff3617" opacity="0.51"/>
                <path id="Tracciato_571" data-name="Tracciato 571"
                      d="M356.468,677.984h-7.118a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.118a1.2,1.2,0,0,1,1.208-1.5h7.119a1.908,1.908,0,0,1,1.785,1.5l1.373,7.118A1.2,1.2,0,0,1,356.468,677.984Z"
                      transform="translate(-153.924 -219.526)" fill="#39b1d9" opacity="0.51"/>
                <path id="Tracciato_572" data-name="Tracciato 572"
                      d="M418.6,677.984h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.118a1.2,1.2,0,0,1,1.208-1.5h7.119a1.909,1.909,0,0,1,1.785,1.5l1.373,7.118A1.2,1.2,0,0,1,418.6,677.984Z"
                      transform="translate(-198.094 -219.526)" fill="#39b1d9" opacity="0.51"/>
                <path id="Tracciato_573" data-name="Tracciato 573"
                      d="M480.734,677.984h-7.118a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.118a1.2,1.2,0,0,1,1.208-1.5h7.119a1.909,1.909,0,0,1,1.785,1.5l1.373,7.118A1.2,1.2,0,0,1,480.734,677.984Z"
                      transform="translate(-242.264 -219.526)" fill="#39b1d9" opacity="0.51"/>
                <path id="Tracciato_574" data-name="Tracciato 574"
                      d="M729.266,677.984h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.118a1.2,1.2,0,0,1,1.208-1.5h7.119a1.908,1.908,0,0,1,1.785,1.5l1.373,7.118A1.2,1.2,0,0,1,729.266,677.984Z"
                      transform="translate(-418.944 -219.526)" fill="#ff3617" opacity="0.51"/>
                <path id="Tracciato_575" data-name="Tracciato 575"
                      d="M553.183,731.462h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.119a1.909,1.909,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,553.183,731.462Z"
                      transform="translate(-293.767 -257.543)" fill="#39b1d9" opacity="0.51"/>
                <path id="Tracciato_576" data-name="Tracciato 576"
                      d="M615.316,731.462H608.2a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.119a1.909,1.909,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,615.316,731.462Z"
                      transform="translate(-337.938 -257.543)" fill="#39b1d9" opacity="0.51"/>
                <path id="Tracciato_577" data-name="Tracciato 577"
                      d="M677.449,731.462H670.33a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5H675.5a1.909,1.909,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,677.449,731.462Z"
                      transform="translate(-382.108 -257.543)" fill="#ff3617" opacity="0.51"/>
                <path id="Tracciato_578" data-name="Tracciato 578"
                      d="M366.784,731.462h-7.118a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.119a1.909,1.909,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,366.784,731.462Z"
                      transform="translate(-161.257 -257.543)" fill="#39b1d9" opacity="0.51"/>
                <path id="Tracciato_579" data-name="Tracciato 579"
                      d="M428.917,731.462H421.8a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5h7.119a1.908,1.908,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,428.917,731.462Z"
                      transform="translate(-205.427 -257.543)" fill="#39b1d9" opacity="0.51"/>
                <path id="Tracciato_580" data-name="Tracciato 580"
                      d="M491.05,731.462h-7.119a1.908,1.908,0,0,1-1.785-1.5l-1.373-7.119a1.2,1.2,0,0,1,1.208-1.5H489.1a1.909,1.909,0,0,1,1.785,1.5l1.373,7.119A1.2,1.2,0,0,1,491.05,731.462Z"
                      transform="translate(-249.597 -257.543)" fill="#39b1d9" opacity="0.51"/>
                <path id="Tracciato_581" data-name="Tracciato 581"
                      d="M359.965,503.359H341.106a.507.507,0,0,1-.505-.506h0a.507.507,0,0,1,.505-.505h18.859a.507.507,0,0,1,.505.505h0A.507.507,0,0,1,359.965,503.359Z"
                      transform="translate(-149.969 -101.855)" fill="#39b1d9"/>
                <path id="Tracciato_582" data-name="Tracciato 582"
                      d="M361.949,511.259H343.09a.507.507,0,0,1-.505-.505h0a.507.507,0,0,1,.505-.505h18.859a.507.507,0,0,1,.505.505h0A.507.507,0,0,1,361.949,511.259Z"
                      transform="translate(-151.38 -107.471)" fill="#39b1d9"/>
                <g id="Raggruppa_91" data-name="Raggruppa 91" transform="translate(182.334 382.568)">
                  <path id="Tracciato_583" data-name="Tracciato 583"
                        d="M319.336,442.275h-6.472a.967.967,0,0,1-.964-.964h0a.967.967,0,0,1,.964-.964h6.472a.967.967,0,0,1,.964.964h0A.967.967,0,0,1,319.336,442.275Z"
                        transform="translate(-311.9 -440.347)" fill="#fff"/>
                  <path id="Tracciato_584" data-name="Tracciato 584"
                        d="M380.758,442.275h-6.472a.967.967,0,0,1-.964-.964h0a.967.967,0,0,1,.964-.964h6.472a.967.967,0,0,1,.964.964h0A.967.967,0,0,1,380.758,442.275Z"
                        transform="translate(-355.565 -440.347)" fill="#fff"/>
                  <path id="Tracciato_585" data-name="Tracciato 585"
                        d="M442.182,442.275H435.71a.967.967,0,0,1-.964-.964h0a.967.967,0,0,1,.964-.964h6.472a.967.967,0,0,1,.964.964h0A.967.967,0,0,1,442.182,442.275Z"
                        transform="translate(-399.231 -440.347)" fill="#fff"/>
                  <path id="Tracciato_586" data-name="Tracciato 586"
                        d="M503.6,442.275h-6.472a.967.967,0,0,1-.964-.964h0a.967.967,0,0,1,.964-.964H503.6a.967.967,0,0,1,.964.964h0A.967.967,0,0,1,503.6,442.275Z"
                        transform="translate(-442.896 -440.347)" fill="#fff"/>
                  <path id="Tracciato_587" data-name="Tracciato 587"
                        d="M565.027,442.275h-6.472a.967.967,0,0,1-.964-.964h0a.967.967,0,0,1,.964-.964h6.472a.967.967,0,0,1,.964.964h0A.967.967,0,0,1,565.027,442.275Z"
                        transform="translate(-486.561 -440.347)" fill="#fff"/>
                  <path id="Tracciato_588" data-name="Tracciato 588"
                        d="M626.451,442.275h-6.472a.967.967,0,0,1-.964-.964h0a.967.967,0,0,1,.964-.964h6.472a.967.967,0,0,1,.964.964h0A.967.967,0,0,1,626.451,442.275Z"
                        transform="translate(-530.226 -440.347)" fill="#fff"/>
                  <path id="Tracciato_589" data-name="Tracciato 589"
                        d="M687.873,442.275H681.4a.967.967,0,0,1-.964-.964h0a.967.967,0,0,1,.964-.964h6.472a.967.967,0,0,1,.964.964h0A.967.967,0,0,1,687.873,442.275Z"
                        transform="translate(-573.892 -440.347)" fill="#fff"/>
                </g>
                <g id="Raggruppa_92" data-name="Raggruppa 92" transform="translate(251.888 397.775)">
                  <path id="Tracciato_590" data-name="Tracciato 590"
                        d="M555.98,505.535a3.371,3.371,0,0,1-3.037-1.334c-1.088-1.688-.248-4.054,2.5-7.033a34.818,34.818,0,0,1,4.366-3.917.207.207,0,0,1,.244.333c-.091.067-9.109,6.744-6.759,10.393.745,1.156,2.339,1.232,3.546,1.093a19.392,19.392,0,0,0,7.793-3.219c2.738-1.819,4.667-3.869,5.292-5.623.41-1.152.283-1.967-.377-2.424-.853-.591-2.635-.591-4.767,0a15.05,15.05,0,0,0-5.364,2.653.206.206,0,0,1-.267-.315,15.481,15.481,0,0,1,5.52-2.735c2.282-.631,4.145-.609,5.112.06.573.4,1.13,1.221.531,2.9-.654,1.838-2.642,3.962-5.453,5.829a19.809,19.809,0,0,1-7.974,3.285A7.851,7.851,0,0,1,555.98,505.535Z"
                        transform="translate(-552.483 -492.946)" fill="#ff3617"/>
                </g>
                <path id="Tracciato_591" data-name="Tracciato 591" d="M774.908,492.337l3.191.717-.468-2.528Z"
                      transform="translate(-458.716 -93.45)" fill="#ffb27d"/>
                <path id="Tracciato_592" data-name="Tracciato 592" d="M904.344,770.444v.721l-4.088.721v-1.9Z"
                      transform="translate(-547.825 -292.121)" fill="#f4c0a0"/>
                <path id="Tracciato_593" data-name="Tracciato 593"
                      d="M864.745,760.174v.742l-4.632.206.063-.948,1.443-1.924Z" transform="translate(-519.288 -283.774)"
                      fill="#f4c0a0"/>
                <path id="Tracciato_594" data-name="Tracciato 594"
                      d="M866.847,439.555s3.435-1.62,2.943-3.62c0,0-6.33.964-5.789-6.57,0,0-.172-5.344,1.586-4.2s6.789.485,6.789.485l4.41,2.252s-3.652,5.662-1.106,9.664C875.68,437.562,870.991,441.095,866.847,439.555Z"
                      transform="translate(-522.028 -46.87)" fill="#f4c0a0"/>
                <path id="Tracciato_595" data-name="Tracciato 595"
                      d="M867.637,422.632a8.694,8.694,0,0,1-1.172-5.975s2.328-2.247.354-3.622c0,0-1.227-.679-1.666.539a2.022,2.022,0,0,1-1.3-2.842s-6.889.709-9.183-1.123a5.412,5.412,0,0,1-2.015-2.577,3.563,3.563,0,0,0,2.4-.084,13.273,13.273,0,0,1-1.269-1.881,5.161,5.161,0,0,0,2.661.388c1.923-.067,7.59-3.153,10.823-.138s2.82,4.955,2.381,6.173-.4,2.42-1.531,4.385S867.637,422.632,867.637,422.632Z"
                      transform="translate(-513.985 -31.94)" fill="#273237"/>
                <path id="Tracciato_596" data-name="Tracciato 596"
                      d="M818.776,494.274s-3.677,4.941-6.123,3.824-4.444-3.213-8.723-8.6-4.1-7.076-3.874-7.564,2.733-4.427,4.292-1.113.881,4.541,1.884,5.709,3.914,5.277,7.1,6.85c0,0,2.179-6.5,2.988-7.444S818.776,494.274,818.776,494.274Z"
                      transform="translate(-476.527 -85.618)" fill="#f4c0a0"/>
                <path id="Tracciato_597" data-name="Tracciato 597"
                      d="M874.449,571.013s2.044-.509,1.082,15.362-3.367,42.084-3.367,42.084h-4.088s-1.192-24.4-2.645-34.148c-.685-4.6-.962-10.341-.962-10.341L861.1,626.535h-4.81s-3.367-52.424.721-56.272Z"
                      transform="translate(-515.645 -150.135)" fill="#183353"/>
                <path id="Tracciato_598" data-name="Tracciato 598"
                      d="M860.939,522.311l-.118-3.365-1.549,1.739S859.463,521.4,860.939,522.311Z"
                      transform="translate(-518.69 -113.654)" fill="#469cd7"/>
                <path id="Tracciato_599" data-name="Tracciato 599" d="M879.762,433.776s-.978-.447-1.442.05"
                      transform="translate(-532.231 -52.976)" fill="none" stroke="#283237" stroke-miterlimit="10"
                      stroke-width="0.416"/>
                <path id="Tracciato_600" data-name="Tracciato 600" d="M869.745,451.544a2.847,2.847,0,0,0,2.479-.142"
                      transform="translate(-526.135 -65.638)" fill="none" stroke="#283237" stroke-miterlimit="10"
                      stroke-width="0.416"/>
                <path id="Tracciato_601" data-name="Tracciato 601" d="M867.723,434.333s-.506-.7-1.442.05"
                      transform="translate(-523.672 -53.291)" fill="none" stroke="#283237" stroke-miterlimit="10"
                      stroke-width="0.416"/>
                <ellipse id="Ellisse_69" data-name="Ellisse 69" cx="0.361" cy="0.481" rx="0.361" ry="0.481"
                         transform="translate(346.123 381.812) rotate(-2.003)" fill="#283237"/>
                <ellipse id="Ellisse_70" data-name="Ellisse 70" cx="0.361" cy="0.481" rx="0.361" ry="0.481"
                         transform="translate(342.998 381.921) rotate(-2.003)" fill="#283237"/>
                <path id="Tracciato_602" data-name="Tracciato 602" d="M884.3,458.763s1.666-.539,2.113-1.518"
                      transform="translate(-536.479 -69.791)" fill="none" stroke="#e3b699" stroke-miterlimit="10"
                      stroke-width="0.832"/>
                <path id="Tracciato_603" data-name="Tracciato 603"
                      d="M885.743,773.249s-5.811.583-6.209,1.029-2.689,3.37-5.273,4.11.045,2.284.79,1.988,8.494-1.073,10.083-1.417,2.185-.293,2.236-.889A35.9,35.9,0,0,0,885.743,773.249Z"
                      transform="translate(-528.555 -294.437)" fill="#101f34"/>
                <path id="Tracciato_604" data-name="Tracciato 604"
                      d="M849.459,766.337s-5.242.325-5.615.712-2.532,2.937-4.879,3.513-.038,2.054.642,1.814,7.669-.674,9.11-.929,1.974-.189,2.04-.722A32.3,32.3,0,0,0,849.459,766.337Z"
                      transform="translate(-503.522 -289.523)" fill="#101f34"/>
                <path id="Tracciato_605" data-name="Tracciato 605" d="M876.493,617.675l-4.59,42.077,1.223.488Z"
                      transform="translate(-527.669 -183.84)" fill="#101f34"/>
                <path id="Tracciato_606" data-name="Tracciato 606"
                      d="M922.434,514.686s.969,10.552.829,13.445-2.224,12.109-2.38,14.521-4.415,4.486-4.955,2.82-.116-4.4,1.413-7.75a24.635,24.635,0,0,0,1.785-10.891c-.316-2.154-1.845-11.485-1.845-11.485Z"
                      transform="translate(-558.807 -110.626)" fill="#f4c0a0"/>
                <path id="Tracciato_607" data-name="Tracciato 607"
                      d="M854.247,480.874c-.59-3.108,2.034-10.658,5.622-11.265,2.04-.345,2.247,2.328,8.833-1.993,0,0,7.484.7,9.65,7.6,2.232,7.113,1.867,5.228-1.215,6.54a10.071,10.071,0,0,0-3.055,2.089l1.1,19.456c-2.165.471-5.209,3.8-14.188,2.886,0,0-5.266-.532-6.734-1.2,0,0,3.609-16.78,3.044-19.167C857.307,485.82,855.054,485.126,854.247,480.874Z"
                      transform="translate(-515.058 -77.163)" fill="#50afd7"/>
                <path id="Tracciato_608" data-name="Tracciato 608"
                      d="M917.2,508.363a18.785,18.785,0,0,1-1.833-4.267c-.557-2.146-.548-1.906-.548-1.906s.975,7.24,2.487,9.2Z"
                      transform="translate(-558.176 -101.737)" fill="#3f8dac"/>
                <path id="Tracciato_609" data-name="Tracciato 609" d="M899.693,465.262c.693.33,1.246,3.443-1.516,6.429"
                      transform="translate(-546.347 -75.491)" fill="none" stroke="#273237" stroke-miterlimit="10"
                      stroke-width="0.832"/>
                <path id="Tracciato_610" data-name="Tracciato 610" d="M904.272,468.354"
                      transform="translate(-550.68 -77.689)" fill="none" stroke="#273237" stroke-miterlimit="10"
                      stroke-width="0.832"/>
                <path id="Tracciato_611" data-name="Tracciato 611" d="M883.307,466.334"
                      transform="translate(-535.776 -76.253)" fill="none" stroke="#273237" stroke-miterlimit="10"
                      stroke-width="0.832"/>
                <g id="Raggruppa_93" data-name="Raggruppa 93" transform="translate(345.265 389.936)">
                  <path id="Tracciato_612" data-name="Tracciato 612"
                        d="M875.785,473.925l.234-.054c-.014-.062-1.3-6.183,1.842-7.8l.086-.245c-1.671.6-2.406,2.367-2.473,4.732A15.165,15.165,0,0,0,875.785,473.925Z"
                        transform="translate(-875.469 -465.83)" fill="#273237"/>
                </g>
                <path id="Tracciato_613" data-name="Tracciato 613"
                      d="M863.14,519.634s.544-5.072.321-4.583-1.267,3.969-1.267,3.969Z"
                      transform="translate(-520.766 -110.862)" fill="#3f8dac"/>
                <path id="Tracciato_614" data-name="Tracciato 614"
                      d="M918.8,576.917h3.813c-.67,3.761-1.626,8.371-1.729,9.974-.156,2.412-4.415,4.486-4.955,2.82s-.116-4.4,1.413-7.749A21.325,21.325,0,0,0,918.8,576.917Z"
                      transform="translate(-558.807 -154.866)" fill="#f4c0a0"/>
                <circle id="Ellisse_71" data-name="Ellisse 71" cx="1.202" cy="1.202" r="1.202"
                        transform="translate(344.495 396.801)" fill="#273237"/>
                <circle id="Ellisse_72" data-name="Ellisse 72" cx="0.365" cy="0.365" r="0.365"
                        transform="translate(350.863 401.967)" fill="#273237"/>
                <circle id="Ellisse_73" data-name="Ellisse 73" cx="0.365" cy="0.365" r="0.365"
                        transform="translate(347.016 398.841)" fill="#273237"/>
                <path id="Tracciato_615" data-name="Tracciato 615"
                      d="M886.588,493.139s-.242.416,1.3-1.75-.791-4.374-.791-4.374-2.4-1.2-4.145,2.337l-.363.624"
                      transform="translate(-535.264 -90.815)" fill="none" stroke="#273237" stroke-miterlimit="10"
                      stroke-width="0.832"/>
                <path id="Tracciato_616" data-name="Tracciato 616"
                      d="M846.911,530.486a5.228,5.228,0,0,0-.722-2.645s.962,1.443,1.2,1.924"
                      transform="translate(-509.389 -119.978)" fill="#ddb296"/>
                <path id="Tracciato_617" data-name="Tracciato 617" d="M840.969,465.656"
                      transform="translate(-505.678 -75.771)" fill="none"/>
                <rect id="Rettangolo_104" data-name="Rettangolo 104" width="2.571" height="12.934"
                      transform="translate(319.383 399.603) rotate(-100.493)" fill="#ff3617"/>
                <path id="Tracciato_618" data-name="Tracciato 618"
                      d="M829.948,482.618l.148.8a.906.906,0,0,1-.726,1.055l-.588.109-.468-2.528.64-.118A.853.853,0,0,1,829.948,482.618Z"
                      transform="translate(-496.682 -87.333)" fill="#ffb27d"/>
                <path id="Tracciato_619" data-name="Tracciato 619" d="M776.543,493.029l.167,1.492-1.8-.4Z"
                      transform="translate(-458.716 -95.23)" fill="#ff3617"/>
                <path id="Tracciato_620" data-name="Tracciato 620" d="M800.621,485.49s.422,2.1,4.29-.731Z"
                      transform="translate(-476.995 -89.351)" fill="#f4c0a0"/>
              </g>
            </svg>

          </div>
        </div>
        </> }
  </>
  );
};

export default DecidiTu;
