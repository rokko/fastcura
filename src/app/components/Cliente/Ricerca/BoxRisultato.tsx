import React from "react";
import { Link } from "react-router-dom";

const BoxRisultato = (props : any) => {
  console.log(props)
  const professionista = props.professionista
  return (
    <>
      <div
        style={{
          marginTop:'30px',
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
          justifyContent:'center'
        }}
      >
        <div
          style={{
            marginRight:'20px',
            width: "50px",
            height: "50px",
            backgroundColor: "grey",
            borderRadius: "50%",
          }}
        >
          <p></p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ fontSize: "14px", alignSelf:'flex-start' }}>{professionista.nome}</p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.001"
              height="22.358"
              viewBox="0 0 24.001 22.358"
            >
              <path
                id="Icon_ionic-ios-star"
                data-name="Icon ionic-ios-star"
                d="M24.378,10.768H16.826L14.531,3.919a.832.832,0,0,0-1.561,0l-2.295,6.849h-7.6a.824.824,0,0,0-.821.821.6.6,0,0,0,.015.139.789.789,0,0,0,.344.58l6.207,4.374L6.434,23.608a.824.824,0,0,0,.282.924.794.794,0,0,0,.462.2,1.006,1.006,0,0,0,.513-.185L13.75,20.23l6.058,4.318a.962.962,0,0,0,.513.185.738.738,0,0,0,.457-.2.814.814,0,0,0,.282-.924l-2.382-6.926,6.156-4.415.149-.128a.861.861,0,0,0,.267-.549A.869.869,0,0,0,24.378,10.768Z"
                transform="translate(-1.75 -2.875)"
                fill="#eadd45"
                stroke="#eadd45"
                stroke-width="1"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.001"
              height="22.358"
              viewBox="0 0 24.001 22.358"
            >
              <path
                id="Icon_ionic-ios-star"
                data-name="Icon ionic-ios-star"
                d="M24.378,10.768H16.826L14.531,3.919a.832.832,0,0,0-1.561,0l-2.295,6.849h-7.6a.824.824,0,0,0-.821.821.6.6,0,0,0,.015.139.789.789,0,0,0,.344.58l6.207,4.374L6.434,23.608a.824.824,0,0,0,.282.924.794.794,0,0,0,.462.2,1.006,1.006,0,0,0,.513-.185L13.75,20.23l6.058,4.318a.962.962,0,0,0,.513.185.738.738,0,0,0,.457-.2.814.814,0,0,0,.282-.924l-2.382-6.926,6.156-4.415.149-.128a.861.861,0,0,0,.267-.549A.869.869,0,0,0,24.378,10.768Z"
                transform="translate(-1.75 -2.875)"
                fill="#eadd45"
                stroke="#eadd45"
                stroke-width="1"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.001"
              height="22.358"
              viewBox="0 0 24.001 22.358"
            >
              <path
                id="Icon_ionic-ios-star"
                data-name="Icon ionic-ios-star"
                d="M24.378,10.768H16.826L14.531,3.919a.832.832,0,0,0-1.561,0l-2.295,6.849h-7.6a.824.824,0,0,0-.821.821.6.6,0,0,0,.015.139.789.789,0,0,0,.344.58l6.207,4.374L6.434,23.608a.824.824,0,0,0,.282.924.794.794,0,0,0,.462.2,1.006,1.006,0,0,0,.513-.185L13.75,20.23l6.058,4.318a.962.962,0,0,0,.513.185.738.738,0,0,0,.457-.2.814.814,0,0,0,.282-.924l-2.382-6.926,6.156-4.415.149-.128a.861.861,0,0,0,.267-.549A.869.869,0,0,0,24.378,10.768Z"
                transform="translate(-1.75 -2.875)"
                fill="#eadd45"
                stroke="#eadd45"
                stroke-width="1"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.001"
              height="22.358"
              viewBox="0 0 24.001 22.358"
            >
              <path
                id="Icon_ionic-ios-star"
                data-name="Icon ionic-ios-star"
                d="M24.378,10.768H16.826L14.531,3.919a.832.832,0,0,0-1.561,0l-2.295,6.849h-7.6a.824.824,0,0,0-.821.821.6.6,0,0,0,.015.139.789.789,0,0,0,.344.58l6.207,4.374L6.434,23.608a.824.824,0,0,0,.282.924.794.794,0,0,0,.462.2,1.006,1.006,0,0,0,.513-.185L13.75,20.23l6.058,4.318a.962.962,0,0,0,.513.185.738.738,0,0,0,.457-.2.814.814,0,0,0,.282-.924l-2.382-6.926,6.156-4.415.149-.128a.861.861,0,0,0,.267-.549A.869.869,0,0,0,24.378,10.768Z"
                transform="translate(-1.75 -2.875)"
                fill="#eadd45"
                stroke="#eadd45"
                stroke-width="1"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.001"
              height="22.358"
              viewBox="0 0 24.001 22.358"
            >
              <path
                id="Icon_ionic-ios-star"
                data-name="Icon ionic-ios-star"
                d="M24.378,10.768H16.826L14.531,3.919a.832.832,0,0,0-1.561,0l-2.295,6.849h-7.6a.824.824,0,0,0-.821.821.6.6,0,0,0,.015.139.789.789,0,0,0,.344.58l6.207,4.374L6.434,23.608a.824.824,0,0,0,.282.924.794.794,0,0,0,.462.2,1.006,1.006,0,0,0,.513-.185L13.75,20.23l6.058,4.318a.962.962,0,0,0,.513.185.738.738,0,0,0,.457-.2.814.814,0,0,0,.282-.924l-2.382-6.926,6.156-4.415.149-.128a.861.861,0,0,0,.267-.549A.869.869,0,0,0,24.378,10.768Z"
                transform="translate(-1.75 -2.875)"
                fill="#eadd45"
                stroke="#eadd45"
                stroke-width="1"
              />
            </svg>
          </div>
          <div style={{ marginTop:'10px' , display: "flex", flexDirection: "row" , alignContent:'center', alignItems:'center', justifyContent:'center'}}>
            <div style={{display:'flex', flexDirection:'row'}}>
            <svg style={{marginRight:'5px'}}xmlns="http://www.w3.org/2000/svg" width="17.547" height="26.667" viewBox="0 0 17.547 26.667">
  <path id="Icon_ionic-ios-pin" data-name="Icon ionic-ios-pin" d="M16.648,3.375a8.676,8.676,0,0,0-8.773,8.571c0,6.667,8.773,18.1,8.773,18.1s8.773-11.429,8.773-18.1A8.676,8.676,0,0,0,16.648,3.375Zm0,12.237a2.935,2.935,0,0,1-2.857-3.006,2.861,2.861,0,1,1,5.715,0A2.935,2.935,0,0,1,16.648,15.612Z" transform="translate(-7.875 -3.375)" fill="#e93323"/>
</svg>

                {professionista.citta}</div>
            <Link to="/profilo-professionista" state={professionista}>
              <button style={{marginLeft:'10px',width:'80px', height:'30px',backgroundColor:'#E93323', border:'none', borderRadius:'30px', fontSize:'12px', fontWeight:'bold', color:'white'}}>Profilo</button>
            </Link>
            <Link to="/chat" state={{professionista}}>
              <button style={{marginLeft:'10px' ,width:'80px', height:'30px',backgroundColor:'#39B1D9', border:'none', borderRadius:'30px', fontSize:'12px', fontWeight:'bold', color:'white'}}>Contatta</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoxRisultato;
