import React from "react";
import {useMediaQuery} from "react-responsive";
import {Fade} from "react-awesome-reveal";

const TrovaIlTuoProfessionista = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

  return (
  
    <div style={{backgroundColor:'#F2FCFF', width:'auto', display:'flex', flexDirection:'column',  alignContent:'center', alignItems:'center', height:'400px',justifyContent:'space-around', marginTop:'20px'}}>
      <div className="paragrafidivisi" style={{marginLeft:'20px', marginRight:'20px', display:'flex', justifyContent:'space-around'}}>
        <div style={{width:'60%', marginRight:'10px', textAlign:'left'}}>

          <p className="titleAll" style={{fontSize: (isMobile)?'25px':'48px'}}>Hai bisogno di cure?</p>
          <Fade direction={'up'}>
          <p style={{fontSize:(isMobile)?'14px':'24px'}}>
            Con Fastcura troverai infermieri, Caregiver Fisioterapisti, pronti a
            darti una mano
          </p>
          </Fade>
        </div>
        <svg
          id="Componente_1_1"
          data-name="Componente 1 – 1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="300.425"
          height="300.385"
          viewBox="0 0 155.425 159.385"
        >
          <defs>
            <filter
              id="Tracciato_382"
              x="60.508"
              y="88.409"
              width="84.837"
              height="69.362"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dx="7" dy="7" />
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feFlood flood-opacity="0.2" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g
            id="Raggruppa_53"
            data-name="Raggruppa 53"
            transform="translate(63.05 19.249)"
          >
            <path
              id="Tracciato_357"
              data-name="Tracciato 357"
              d="M634.581,1498.385c.076-.2-.463-.37-.4-.6l.362-1.212L631.5,1496C631.869,1497.411,634.107,1498.176,634.581,1498.385Z"
              transform="translate(-618.232 -1475.717)"
              fill="#fff"
            />
            <path
              id="Tracciato_358"
              data-name="Tracciato 358"
              d="M575.728,1413.639l7.013-4.468,3.489-11.7-7.2-1.559-12.267-1.962-1.605,12.6c-.081.509-1.545,6.688,1.588,9.63,1.62,1.523,2.46,2.9,5.8,3.617,1.534.33,6.085,1.639,7.9-3.046l-3.13.661Z"
              transform="translate(-564.746 -1393.952)"
              fill="#f4c0a0"
            />
            <path
              id="Tracciato_359"
              data-name="Tracciato 359"
              d="M643.91,1508.279s-.048-.019-.131-.055c-.011.031-.023.06-.035.09Z"
              transform="translate(-628.043 -1485.511)"
              fill="#f4c0a0"
            />
            <path
              id="Tracciato_360"
              data-name="Tracciato 360"
              d="M648.5,1470.522h0l-1.683,5.641.235.045c.6-1.764,1.888-1.118,1.448-2.149S648.5,1470.522,648.5,1470.522Z"
              transform="translate(-630.506 -1455.303)"
              fill="#f4c0a0"
            />
            <path
              id="Tracciato_361"
              data-name="Tracciato 361"
              d="M620,1474.99l1.59,3.776,3.13-.661.035-.09a4.365,4.365,0,0,1-2.469-2.43l3.045.576,1.683-5.641Z"
              transform="translate(-609.018 -1455.303)"
              fill="#f4c0a0"
            />
          </g>
          <path
            id="Tracciato_362"
            data-name="Tracciato 362"
            d="M339.332,1732.615s3.005,28.139,3.356,34c.536,8.963.088,28.379.088,28.379l11.211-1.453c.754-14.6,1.334-22.721,1.332-25.9,0-5.5-.91-32.348-.91-32.348Z"
            transform="translate(-321.085 -1646.053)"
            fill="#3f8dac"
          />
          <path
            id="Tracciato_363"
            data-name="Tracciato 363"
            d="M447.8,1624.126s4.823-2.122,5.323-2.24a11.177,11.177,0,0,1,11.4,4,2.709,2.709,0,0,1,.259,1.422c-.136.746-1.136,1.979-3.942,1.1a8.422,8.422,0,0,0-5.676.419,5.2,5.2,0,0,1-5.4-1.169C449.168,1627.244,447.8,1624.126,447.8,1624.126Z"
            transform="translate(-407.997 -1557.127)"
            fill="#eac49b"
          />
          <path
            id="Tracciato_364"
            data-name="Tracciato 364"
            d="M302.4,1441.287s-2.345,4.318,8.584,29.76c3.9,9.078,23.764,9.762,23.764,9.762s2.791.822,2.7.047a10.293,10.293,0,0,0-.944-3.148s-17.324-8.793-18.512-11a13.654,13.654,0,0,1-.945-3.2c-.8-3.406-3.185-12.8-3.185-12.8s-.518-4.478-1.6-6.588C308.132,1436.059,302.4,1441.287,302.4,1441.287Z"
            transform="translate(-291.321 -1411.294)"
            fill="#eac49b"
          />
          <path
            id="Tracciato_365"
            data-name="Tracciato 365"
            d="M373.249,1456.18c-3.329-5.238-3.733-3.407-5.406-3.63-2.863-.385-5.03,1.363-5.257,3.15-.453,3.58,3.5,19.282,6.073,25.406l8.977-2.546C377.105,1476.7,374.553,1458.234,373.249,1456.18Z"
            transform="translate(-339.688 -1421.546)"
            fill="#39b1d9"
          />
          <g
            id="Raggruppa_54"
            data-name="Raggruppa 54"
            transform="translate(21.603 145.905)"
          >
            <path
              id="Tracciato_366"
              data-name="Tracciato 366"
              d="M368.206,2046.459l5.752,3.762c.7.906,1.725,1.624,1.725,3.307v1.9c0,1.478-.456,1.478-1.423,1.478H365.58c-1.473,0-5.052-1.111-6.328-2.514-.862-.944-.794-2.016-.794-3.823l3-1.833Z"
              transform="translate(-358.012 -2043.422)"
              fill="#99ced6"
            />
            <path
              id="Tracciato_367"
              data-name="Tracciato 367"
              d="M356.216,2057.312c0,.742.167.867.467.867h5.138l-4.019-4.941-.642-1.617c-.775,0-.945-1.714-.945-.272Z"
              transform="translate(-356.216 -2046.878)"
              fill="#99ced6"
            />
            <path
              id="Tracciato_368"
              data-name="Tracciato 368"
              d="M356.216,2035.484c0-.976.17-2.339.556-2.4l1.133.453s1.276,1.194,3.444-.762c3.228-2.9,6.048-.966,6.048-.966l.3,2.4,4.828,3.682c1.288,1.223,1.361,1.2,1.361,2.556-.013,1.266-.464,1.27-1.421,1.27h-7.919c-1.829,0-5.327-.651-6.36-1.55l-1.969-1.4Z"
              transform="translate(-356.216 -2031.18)"
              fill="#a7ddea"
            />
          </g>
          <path
            id="Tracciato_369"
            data-name="Tracciato 369"
            d="M261.332,1732.615s3.005,28.139,3.356,34c.536,8.963.088,28.379.088,28.379l11.211-1.453c.754-14.6,1.334-22.721,1.332-25.9,0-5.5-.91-32.348-.91-32.348Z"
            transform="translate(-258.589 -1646.053)"
            fill="#3f8dac"
          />
          <g
            id="Raggruppa_55"
            data-name="Raggruppa 55"
            transform="translate(6.099 145.905)"
          >
            <path
              id="Tracciato_370"
              data-name="Tracciato 370"
              d="M290.206,2046.459l5.752,3.762c.7.906,1.725,1.624,1.725,3.307v1.9c0,1.478-.456,1.478-1.423,1.478H287.58c-1.473,0-5.052-1.111-6.328-2.514-.862-.944-.794-2.016-.794-3.823l3-1.833Z"
              transform="translate(-280.012 -2043.422)"
              fill="#99ced6"
            />
            <path
              id="Tracciato_371"
              data-name="Tracciato 371"
              d="M278.216,2057.312c0,.742.167.867.467.867h5.138l-4.019-4.941-.642-1.617c-.775,0-.944-1.714-.944-.272Z"
              transform="translate(-278.216 -2046.878)"
              fill="#99ced6"
            />
            <path
              id="Tracciato_372"
              data-name="Tracciato 372"
              d="M278.216,2035.484c0-.976.17-2.339.556-2.4l1.133.453s1.276,1.194,3.444-.762c3.228-2.9,6.048-.966,6.048-.966l.3,2.4,4.828,3.682c1.288,1.223,1.361,1.2,1.361,2.556-.013,1.266-.464,1.27-1.421,1.27h-7.919c-1.829,0-5.327-.651-6.36-1.55l-1.969-1.4Z"
              transform="translate(-278.216 -2031.18)"
              fill="#a7ddea"
            />
          </g>
          <path
            id="Tracciato_373"
            data-name="Tracciato 373"
            d="M299.894,1297.292c-6.207-1.136-11.211,3.226-13.09,6.919-2.353,4.63-1.126,27.026-1.126,27.026s7.3-5.114,8.865-4.821c1.382.258,12.047-20.109,12.5-23.391S303.094,1297.877,299.894,1297.292Z"
            transform="translate(-277.84 -1297.108)"
            fill="#c8a04b"
          />
          <path
            id="Tracciato_374"
            data-name="Tracciato 374"
            d="M283.135,1443.572s-1,22.8-.853,25.578a72.2,72.2,0,0,0,.856,11.277c1.867,9.29,4.136,23.659,4.136,23.659a37.07,37.07,0,0,1-9.979,2.268c-18.738.9-21.94-1.375-21.94-1.375-.423-.366-2.627-16.927-.243-30.637.588-3.377.614-16.779-.342-22.288-.624-3.592-1.434-5.776.819-7.027a53.521,53.521,0,0,1,9.018-2.928,34.847,34.847,0,0,1,9.791-.816S281.907,1443.138,283.135,1443.572Z"
            transform="translate(-252.731 -1412.607)"
            fill="#39b1d9"
          />
          <path
            id="Tracciato_375"
            data-name="Tracciato 375"
            d="M315.308,1415.087c-.363-4.333-.285-3.227-.363-5.081-4.913-2.921.149-1.107-8.092-1.107-.078,1.861-.015.4-.1,4.637a4.186,4.186,0,0,1-1.113,2.264s3.809,5.972,8.222,6.005C318.4,1421.837,315.34,1415.861,315.308,1415.087Z"
            transform="translate(-294.088 -1386.233)"
            fill="#f2be9f"
          />
          <path
            id="Tracciato_376"
            data-name="Tracciato 376"
            d="M325.666,1322.7c5.778,1.013,6.4,2.865,5.758,6.052-.427,2.11-.917,5.556-1.2,7.64a11.423,11.423,0,0,1-2.153,5.416,8.247,8.247,0,0,1-4.572,2.186c-2.9.461-5.22-.8-7.772-4.956-2.26-3.687-.849-9.053-.831-9.564l2.678-2.492S322.6,1322.161,325.666,1322.7Z"
            transform="translate(-301.145 -1317.577)"
            fill="#f2be9f"
          />
          <path
            id="Tracciato_377"
            data-name="Tracciato 377"
            d="M301.879,1299.09a8.141,8.141,0,0,1,4.884,2.649c2.242,2.873,1.507,8.5,1.179,8.061-1.331-1.784-5.5-1.387-12.173,1.143,0,0-1.979,1.446-2.88,6.962-1.34,8.219-.139,9.252-.139,9.252-5.495-3.349-6.181-16.681-1.391-23.641C293.675,1300.153,301.879,1299.09,301.879,1299.09Z"
            transform="translate(-280.082 -1298.696)"
            opacity="0.03"
          />
          <path
            id="Tracciato_378"
            data-name="Tracciato 378"
            d="M555.167,1738.009s-8.51,5-4.668,8.439c2.537,2.274,8.469,1.976,8.469,1.976l25.492-2.127a4.068,4.068,0,0,1,4.319,2.865c3.769,10.776,28.093,29.646,28.093,29.646s1.092,1.313,4.621,1.1c5.637-.35,6.954-3.387,6.954-3.387s-22.485-34.116-26.72-42.8c-4.29-8.8-9.973-7.549-9.973-7.549l-29.895,5.6Z"
            transform="translate(-489.483 -1640.836)"
            fill="#f4c0a0"
          />
          <g
            id="Raggruppa_56"
            data-name="Raggruppa 56"
            transform="translate(124.599 132.368)"
          >
            <path
              id="Tracciato_379"
              data-name="Tracciato 379"
              d="M874.935,1969.95l4.521,1.21a4.868,4.868,0,0,0,2.871-.648,6.928,6.928,0,0,0,1.969-1.642,12.344,12.344,0,0,0,1.142-3.643,2.5,2.5,0,0,1,1.116-1.906c1.119-.513,2.122-.187,2.329.632.437,1.713.52,3.543,1.621,3.557l6.8-.735c4.193-.481,5.164,2.582,5.564,4.144l.212.838c.267,1.058.258,1.592-.851,1.877l-10.616,2.028c-1.152.295-10.027,2.425-10.027,2.425l-4.544.782c-.854.219-1.365-1.484-1.54-2.16l-1.077-5.219C874.332,1970.832,874.74,1969.919,874.935,1969.95Z"
              transform="translate(-874.41 -1963.075)"
              fill="#e7f2f0"
            />
            <path
              id="Tracciato_380"
              data-name="Tracciato 380"
              d="M907.142,2001.224l.02.08c.568,2.228.642,2.579-.591,2.9L882,2009.61c-1.111.1-1.622-.11-1.906-1.224l-.262-1.175Z"
              transform="translate(-878.754 -1993.642)"
              fill="#d6d6d6"
            />
          </g>
          <path
            id="Tracciato_381"
            data-name="Tracciato 381"
            d="M920.073,2002.016c-.134-.558-.238-1.281-.278-1.606a4.777,4.777,0,0,1,2.325,1.068c1.342,1.327,2.187,4.091,2.414,4.978-.067-.011.186.487.121.476l-3.608-.563Z"
            transform="translate(-786.174 -1860.621)"
            fill="#417293"
          />
          <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Tracciato_382)">
            <path
              id="Tracciato_382-2"
              data-name="Tracciato 382"
              d="M554.473,1750.558s2.044,7.623,5.859,11.083c3.509,3.185,9.318,2.179,9.318,2.179l24.366-3.8a32.5,32.5,0,0,1,2.864,6.734c.938,3.128,7.944,13.272,10.881,18.334,2,3.46,4.713,13.916,8.241,13.7,5.635-.35,8.308-5.667,8.308-5.667s-12.139-26.834-15.86-36.525c-4.4-11.458-5.165-12.189-9.345-12.166-9.166.056-33.526,3.535-33.526,3.535Z"
              transform="translate(-493.46 -1655.52)"
              fill="#f2c09e"
            />
          </g>
          <g
            id="Raggruppa_59"
            data-name="Raggruppa 59"
            transform="translate(117.943 133.759)"
          >
            <g
              id="Raggruppa_58"
              data-name="Raggruppa 58"
              transform="translate(0 0)"
            >
              <g id="Raggruppa_57" data-name="Raggruppa 57">
                <path
                  id="Tracciato_383"
                  data-name="Tracciato 383"
                  d="M942.122,1996.92a4.842,4.842,0,0,1,4.146,3.745l-4.607,1.176c-.279.071-2.285.518-2.57.572-.032-.125-.065-.243-.1-.385C938.351,1999.507,940.84,1997.249,942.122,1996.92Z"
                  transform="translate(-919.416 -1991.584)"
                  fill="#417293"
                />
                <path
                  id="Tracciato_384"
                  data-name="Tracciato 384"
                  d="M841.446,1978.045l4.519,1.209a4.9,4.9,0,0,0,2.876-.646,6.943,6.943,0,0,0,1.965-1.645,11.421,11.421,0,0,0,1.144-3.64c.272-2.958,1.1-2.971,1.212-3.023,1.122-.512,1.933-.122,2.145.7.438,1.715.609,4.592,1.708,4.608l6.8-.736a6.055,6.055,0,0,1,5.564,4.144l.211.837c.269,1.059.257,1.595-.851,1.876l-10.614,2.032c-1.154.291-10.029,2.421-10.029,2.421l-4.541.786c-.854.217-1.367-1.486-1.54-2.162l-1.077-5.219C840.843,1978.927,841.247,1978.013,841.446,1978.045Z"
                  transform="translate(-840.921 -1970.07)"
                  fill="#fff"
                />
                <path
                  id="Tracciato_385"
                  data-name="Tracciato 385"
                  d="M873.641,2013.748l.02.083c.568,2.228.642,2.577-.594,2.892l-24.57,5.411c-1.112.1-1.624-.109-1.906-1.223l-.266-1.177Z"
                  transform="translate(-845.252 -2005.067)"
                  fill="#d6d6d6"
                />
              </g>
            </g>
          </g>
          <path
            id="Tracciato_386"
            data-name="Tracciato 386"
            d="M517.609,1533.376s8.16,4.254,12.578.781,7.459-.994,7.459-.994-4.313-18.9-5.3-23.646c-1.7-8.16-4.552-16.776-7.918-20.2-.626-.637-.619-1.383-.433-2.609.122-.814,2.034-9.412,2.034-9.412l-7.658-3.927s-4.758,11.673-7.924,18.594c-1.831,4.006-2.946,9.877-.858,18.741C510.3,1513.708,517.609,1533.376,517.609,1533.376Z"
            transform="translate(-456.601 -1438.333)"
            fill="#f4c0a0"
          />
          <g
            id="Raggruppa_60"
            data-name="Raggruppa 60"
            transform="translate(56.459 43.295)"
          >
            <path
              id="Tracciato_387"
              data-name="Tracciato 387"
              d="M533.4,1515.175c-.6-.422-1.043-.291-1.065.37l-.749,2.7,16.1,11.182c.5.383.937.582,1.019,0a19.981,19.981,0,0,0-4.475-8.027Z"
              transform="translate(-531.585 -1514.932)"
              fill="#efefef"
            />
          </g>
          <path
            id="Tracciato_388"
            data-name="Tracciato 388"
            d="M544.211,1385.948c-.309-6.051,1.093-11.381,7.316-12.667a19.551,19.551,0,0,1,7.441-.121l2.89.749c3.009.906,9.014,2.774,8.007,9.022-.7,4.36-10.291,1.068-10.367,1.572l-1.548,4.468c-.112.715-1.288,2.785-2.155,2.54-.727-.209-.914-2.063-1.008-2.86,0,0-2.619-1.566-3-.715l-1.235,2.838c-1.951,4.646-5.382,7.15-5.431,6.472C544.933,1394.422,544.362,1388.926,544.211,1385.948Z"
            transform="translate(-485.21 -1357.805)"
            fill="#273237"
          />
          <path
            id="Tracciato_389"
            data-name="Tracciato 389"
            d="M583.97,1441.959a2.5,2.5,0,0,1,2.185,2.55l-.7,4.542s-.262.973-1.14,1.015c-1.326.067-1.712-1.142-2.1-2.467-.02-.075-.473-2.013-.5-2.129C581.322,1443.829,581.827,1441.632,583.97,1441.959Z"
            transform="translate(-515.194 -1413.142)"
            fill="#f4c0a0"
          />
          <path
            id="Tracciato_390"
            data-name="Tracciato 390"
            d="M894.453,2017.18a1.211,1.211,0,0,1-.928,1.438l-30.692,6.571a1.209,1.209,0,0,1-1.437-.926l-.382-1.775a1.207,1.207,0,0,1,.928-1.437l30.691-6.574a1.209,1.209,0,0,1,1.436.928Z"
            transform="translate(-739.055 -1871.87)"
            fill="#e93323"
          />
          <path
            id="Tracciato_391"
            data-name="Tracciato 391"
            d="M517.484,1684.983l-3.351.7-8.068-38.754a1.711,1.711,0,1,1,3.35-.7Z"
            transform="translate(-454.649 -1575.747)"
            fill="#3f8dac"
          />
          <g
            id="Raggruppa_61"
            data-name="Raggruppa 61"
            transform="translate(51.417 44.216)"
          >
            <path
              id="Tracciato_392"
              data-name="Tracciato 392"
              d="M545.516,1561c-1.249-.49-2.383-.93-3.3-1.283-10.73-4.145-7.668-7.8-9.087-13.556-2-8.093-7.331-16.406-10.7-19.831a1.778,1.778,0,0,1-.507-1.02l-9.6-5.746c-1.461,3.378-3.858,7.246-4.758,9.685-1.524,4.133-2.057,9.6.031,18.468.388,1.655,3.107,10.037,5.474,17.238,13.568-1.272,24.23-2.518,31.268-3.565C543.522,1561.39,544.113,1561.209,545.516,1561Z"
              transform="translate(-506.219 -1519.564)"
              fill="#f2bf59"
            />
            <path
              id="Tracciato_393"
              data-name="Tracciato 393"
              d="M589.443,1777.551s-6.105-15.152-29.028-10.657c-10.813,2.121-14.459-10.348-14.459-10.348a4.6,4.6,0,0,1-3.222-2.382c1.757,5.339,3.222,9.736,3.222,9.736s3.646,12.47,14.459,10.348c22.922-4.5,29.028,10.657,29.028,10.657l16.115-5.584s-1.183-2.66-3.117-6.274Z"
              transform="translate(-535.476 -1707.535)"
              fill="#273237"
            />
            <path
              id="Tracciato_394"
              data-name="Tracciato 394"
              d="M540,1747.948a6.6,6.6,0,0,0,.543,1.225l-.407-1.238Z"
              transform="translate(-533.286 -1702.544)"
              fill="#273237"
            />
            <path
              id="Tracciato_395"
              data-name="Tracciato 395"
              d="M731.6,1749.643l3.117-1.08s-7.87-22.3-17.851-23.4a57.963,57.963,0,0,0-12.933.4c4.194,1.645,9.695,3.861,12.639,5.32C722.33,1733.745,728.154,1743.206,731.6,1749.643Z"
              transform="translate(-664.633 -1684.131)"
              fill="#273237"
            />
            <path
              id="Tracciato_396"
              data-name="Tracciato 396"
              d="M544.315,1733.2s3.646,12.47,14.459,10.348c22.922-4.5,29.028,10.657,29.028,10.657l13-4.5c-3.444-6.436-9.267-15.9-15.028-18.755-2.945-1.46,3.693-4.08-.5-5.726-1.179-.6-16.518.4-15.7.4-7.038,1.047-15.315,2.691-28.883,3.962l.407,1.238A4.6,4.6,0,0,0,544.315,1733.2Z"
              transform="translate(-533.835 -1684.188)"
              fill="#273237"
            />
          </g>
          <path
            id="Tracciato_397"
            data-name="Tracciato 397"
            d="M593.4,1791.81l-1.44-1.422-43-.026a.967.967,0,0,1-.968-.968v-5.706l-2.5-10.545v16.486a3.233,3.233,0,0,0,3.23,3.234h41.19l1.232,1.209Z"
            transform="translate(-486.266 -1678.525)"
            fill="#3f8dac"
          />
          <path
            id="Tracciato_398"
            data-name="Tracciato 398"
            d="M602.87,1834.744H558.8v-3.47a3.232,3.232,0,0,1,3.232-3.233h37.61a3.233,3.233,0,0,1,3.232,3.233Z"
            transform="translate(-496.928 -1722.512)"
            fill="#e93323"
          />
          <path
            id="Tracciato_399"
            data-name="Tracciato 399"
            d="M598.65,1774.978v16.25a.972.972,0,0,1-.968.97H557.7a.971.971,0,0,1-.971-.97v-16.25h-2.505v16.486a3.234,3.234,0,0,0,3.234,3.234h40.466a3.234,3.234,0,0,0,3.232-3.234v-16.486Z"
            transform="translate(-493.264 -1679.996)"
            fill="#3f8dac"
          />
          <rect
            id="Rettangolo_98"
            data-name="Rettangolo 98"
            width="3.826"
            height="56.906"
            transform="translate(76.324 98.763)"
            fill="#7f9997"
          />
          <path
            id="Tracciato_400"
            data-name="Tracciato 400"
            d="M576.07,1869.365l-2.7,2.7-40.24-40.235,2.705-2.706Z"
            transform="translate(-476.361 -1723.382)"
            fill="#7f9997"
          />
          <path
            id="Tracciato_401"
            data-name="Tracciato 401"
            d="M535.832,1872.068l-2.705-2.7,40.24-40.238,2.7,2.706Z"
            transform="translate(-476.361 -1723.382)"
            fill="#7f9997"
          />
          <rect
            id="Rettangolo_99"
            data-name="Rettangolo 99"
            width="56.903"
            height="3.825"
            transform="translate(49.785 125.304)"
            fill="#7f9997"
          />
          <path
            id="Tracciato_402"
            data-name="Tracciato 402"
            d="M619.742,1908.675a7.065,7.065,0,1,1-7.065-7.064A7.067,7.067,0,0,1,619.742,1908.675Z"
            transform="translate(-534.438 -1781.459)"
            fill="#55706f"
          />
          <path
            id="Tracciato_403"
            data-name="Tracciato 403"
            d="M633.308,1926.95a2.59,2.59,0,1,1-2.59-2.59A2.591,2.591,0,0,1,633.308,1926.95Z"
            transform="translate(-552.48 -1799.687)"
            fill="#e93323"
          />
          <path
            id="Tracciato_404"
            data-name="Tracciato 404"
            d="M463.094,1638.948a2.587,2.587,0,0,1-2.585,2.586h-9.793a2.588,2.588,0,0,1-2.587-2.586v-2.372a2.585,2.585,0,0,1,2.587-2.585h9.793a2.584,2.584,0,0,1,2.585,2.585Z"
            transform="translate(-408.258 -1567.032)"
            fill="#e93323"
          />
          <g
            id="Raggruppa_62"
            data-name="Raggruppa 62"
            transform="translate(46.589 96.004)"
          >
            <path
              id="Tracciato_405"
              data-name="Tracciato 405"
              d="M513.619,1843.5a31.69,31.69,0,1,1,31.69-31.689A31.726,31.726,0,0,1,513.619,1843.5Zm0-56.9a25.214,25.214,0,1,0,25.215,25.214A25.244,25.244,0,0,0,513.619,1786.6Z"
              transform="translate(-481.928 -1780.122)"
              fill="#55706f"
            />
          </g>
          <path
            id="Tracciato_406"
            data-name="Tracciato 406"
            d="M587.414,1761.01a1.938,1.938,0,0,1-1.939,1.939H536.425a1.938,1.938,0,0,1-1.939-1.939v-1.517h52.928Z"
            transform="translate(-477.45 -1667.589)"
            fill="#e5e5e5"
          />
          <path
            id="Tracciato_407"
            data-name="Tracciato 407"
            d="M587.414,1749.909H534.486v-1.083a1.292,1.292,0,0,1,1.29-1.295h50.347a1.291,1.291,0,0,1,1.291,1.295Z"
            transform="translate(-477.45 -1658.005)"
            fill="#e93323"
          />
          <g
            id="Raggruppa_63"
            data-name="Raggruppa 63"
            transform="translate(107.25 103.548)"
          >
            <path
              id="Tracciato_408"
              data-name="Tracciato 408"
              d="M798.272,1859.79h-2.586v-32.985a6.145,6.145,0,0,0-6.138-6.144h-2.427v-2.587h2.427a8.737,8.737,0,0,1,8.725,8.73Z"
              transform="translate(-787.121 -1818.075)"
              fill="#3f8dac"
            />
          </g>
          <path
            id="Tracciato_409"
            data-name="Tracciato 409"
            d="M812.125,2020.83a6.1,6.1,0,1,0,6.1,6.1,6.1,6.1,0,0,0-6.1-6.1Z"
            transform="translate(-695.016 -1876.982)"
            fill="#55706f"
          />
          <path
            id="Tracciato_410"
            data-name="Tracciato 410"
            d="M827.95,2039.875a2.893,2.893,0,1,1-2.891-2.894A2.892,2.892,0,0,1,827.95,2039.875Z"
            transform="translate(-707.949 -1889.923)"
            fill="#e93323"
          />
          <path
            id="Tracciato_411"
            data-name="Tracciato 411"
            d="M399,1640.181s5.749-3.878,6.208-4.1c1.649-.814,4.643-.572,5.927-.234a12.412,12.412,0,0,1,4.541,2.183,2.725,2.725,0,0,1,.583,1.32c.037.759-.648,2.187-3.582,1.985a8.425,8.425,0,0,0-5.425,1.72,5.2,5.2,0,0,1-5.523.111C401.049,1642.9,399,1640.181,399,1640.181Z"
            transform="translate(-368.894 -1568.264)"
            fill="#eac49b"
          />
          <path
            id="Tracciato_412"
            data-name="Tracciato 412"
            d="M253.222,1467.362s-2.345,4.317,8.582,29.762c3.9,9.075,23.766,9.758,23.766,9.758s2.791.822,2.7.047a10.339,10.339,0,0,0-.942-3.147s-17.326-8.795-18.513-11a13.867,13.867,0,0,1-.946-3.2c-.795-3.407-3.183-12.8-3.183-12.8s-.517-4.478-1.6-6.587C258.956,1462.134,253.222,1467.362,253.222,1467.362Z"
            transform="translate(-251.921 -1432.188)"
            fill="#eac49b"
          />
          <path
            id="Tracciato_413"
            data-name="Tracciato 413"
            d="M347,1369.955a2.833,2.833,0,0,1,3.18-.4"
            transform="translate(-327.229 -1354.87)"
            fill="none"
            stroke="#c8a04b"
            stroke-miterlimit="10"
            stroke-width="1"
          />
          <path
            id="Tracciato_414"
            data-name="Tracciato 414"
            d="M375.5,1370.719a2.851,2.851,0,0,1,2.981,0"
            transform="translate(-350.065 -1355.734)"
            fill="none"
            stroke="#c8a04b"
            stroke-miterlimit="10"
            stroke-width="1"
          />
          <path
            id="Tracciato_415"
            data-name="Tracciato 415"
            d="M361.873,1405.1a25.85,25.85,0,0,1-4.373-.6s.6,2.981,2.584,2.385A3.285,3.285,0,0,0,361.873,1405.1Z"
            transform="translate(-335.642 -1383.155)"
            fill="#fff"
          />
          <ellipse
            id="Ellisse_49"
            data-name="Ellisse 49"
            cx="0.507"
            cy="0.783"
            rx="0.507"
            ry="0.783"
            transform="translate(20.971 15.636) rotate(-5.382)"
            fill="#273237"
          />
          <ellipse
            id="Ellisse_50"
            data-name="Ellisse 50"
            cx="0.493"
            cy="0.754"
            rx="0.493"
            ry="0.754"
            transform="translate(26.412 16.03) rotate(-5.382)"
            fill="#273237"
          />
          <ellipse
            id="Ellisse_51"
            data-name="Ellisse 51"
            cx="0.754"
            cy="0.493"
            rx="0.754"
            ry="0.493"
            transform="translate(78.244 34.693) rotate(-80.95)"
            fill="#273237"
          />
          <path
            id="Tracciato_416"
            data-name="Tracciato 416"
            d="M635,1459.507s1.988-1.391,3.18,0"
            transform="translate(-557.986 -1426.733)"
            fill="none"
            stroke="#050100"
            stroke-miterlimit="10"
            stroke-width="0.75"
          />
          <path
            id="Tracciato_417"
            data-name="Tracciato 417"
            d="M540.909,1585.791l1.256-19.406s-.114-9.278-8.078-7.722c-4.608.9-4.831,6.78-4.76,9.713s1.483,23.195,1.483,23.195.267,6.433,5.832,7.547c7.3,1.456,22.811,1.82,22.811,1.82l.257-7.342-16.857-4.406A3.572,3.572,0,0,1,540.909,1585.791Z"
            transform="translate(-473.31 -1506.535)"
            fill="#efefef"
          />
          <path
            id="Tracciato_418"
            data-name="Tracciato 418"
            d="M694.7,1729.963a9.2,9.2,0,0,0-3.93-3.219,11.152,11.152,0,0,0-5.36-.094c-2.163.463-7.548,1.473-7.548,1.473-1.487,5.995,2.685,6.373,2.685,6.373s2.523.16,4.748.061c1.9-.082,2.858.063,2.937,1.644.078,1.536,1.683,1.325,1.683,1.325s1.4-.109,1.965-2.1c.324-1.135.8-3.244.47-4.267a7.731,7.731,0,0,0-1.4-2.122,8.083,8.083,0,0,1,2.429,1.585C694.713,1731.763,695.414,1731.046,694.7,1729.963Z"
            transform="translate(-592.073 -1641.041)"
            fill="#f4c0a0"
          />
          <path
            id="Tracciato_419"
            data-name="Tracciato 419"
            d="M259.484,1460.005c-4.631-8.065-11.556-2.864-11.919-.032-.452,3.579,3.5,19.279,6.073,25.405l11.042-3.15C264.153,1480.36,260.694,1462.116,259.484,1460.005Z"
            transform="translate(-247.53 -1424.173)"
            fill="#39b1d9"
          />
          <g
            id="Raggruppa_67"
            data-name="Raggruppa 67"
            transform="translate(6.95 26.91)"
          >
            <g
              id="Raggruppa_66"
              data-name="Raggruppa 66"
              transform="translate(1.05 1.108)"
            >
              <g id="Raggruppa_65" data-name="Raggruppa 65">
                <g
                  id="Raggruppa_64"
                  data-name="Raggruppa 64"
                  transform="translate(13.309 0.354)"
                >
                  <path
                    id="Tracciato_421"
                    data-name="Tracciato 421"
                    d="M359.406,1457.32l-.506-.116c.03-.133,2.81-13.345-3.975-16.825l-.185-.529c3.607,1.3,5.192,5.11,5.337,10.212A32.72,32.72,0,0,1,359.406,1457.32Z"
                    transform="translate(-354.74 -1439.85)"
                    fill="#273237"
                  />
                </g>
                <circle
                  id="Ellisse_52"
                  data-name="Ellisse 52"
                  cx="2.595"
                  cy="2.595"
                  r="2.595"
                  transform="translate(15.127 15.171)"
                  fill="#273237"
                />
                <circle
                  id="Ellisse_53"
                  data-name="Ellisse 53"
                  cx="0.789"
                  cy="0.789"
                  r="0.789"
                  transform="translate(4.997 26.319)"
                  fill="#273237"
                />
                <circle
                  id="Ellisse_54"
                  data-name="Ellisse 54"
                  cx="0.789"
                  cy="0.789"
                  r="0.789"
                  transform="translate(13.301 19.572)"
                  fill="#273237"
                />
                <path
                  id="Tracciato_422"
                  data-name="Tracciato 422"
                  d="M300,1519.374s.522.9-2.8-3.776,1.707-9.44,1.707-9.44,5.19-2.595,8.944,5.044l.783,1.346"
                  transform="translate(-294.421 -1492.284)"
                  fill="none"
                  stroke="#273237"
                  stroke-miterlimit="10"
                  stroke-width="2.611"
                />
              </g>
            </g>
          </g>
          <path
            id="Tracciato_423"
            data-name="Tracciato 423"
            d="M311.242,1298.957s4.487-.028,6.652,2.571c2.755,3.307,1.174,11.423.9,10.945-3.18-5.565-11.926-.994-10.733-2.982,1-1.67,0-.994-1.515.943,0,0-2.062,1.376-2.55,7.241-.723,8.741.706,9.967.706,9.967-6.41-4.123-8.412-18.567-3.742-25.629C303.221,1298.6,311.242,1298.957,311.242,1298.957Z"
            transform="translate(-288.291 -1298.581)"
            fill="#c8a04b"
          />
          <path
            id="Tracciato_424"
            data-name="Tracciato 424"
            d="M323.452,1305s-5.168,0-6.36,4.77a84.553,84.553,0,0,0-1.466,9.833s1.466-9.038,5.838-11.025,5.367-2.584,5.367-2.584l-3.379.4,1.59-.8-3.776.8Z"
            transform="translate(-302.091 -1303.431)"
            opacity="0.03"
          />
        </svg>
      </div>
      </div>
  );
};

export default TrovaIlTuoProfessionista;
