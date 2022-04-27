import React , {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BoxRisultato = (props : any) => {
    const [avatar,setAvatar] = useState('')
  const professionista = props.professionista


    useEffect(()=>{
        const prof ={
            id_professionista :professionista._id
        }
        axios.post('https://fastcuradev.herokuapp.com/professionista/recupera-avatar',prof)
            .then((response:any)=> {
                if (response.data.message===1) {
                    setAvatar(response.data.avatar.posizione)
                }else{
                    setAvatar('')
                }

                }
            )

    },[])
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
              display:'flex',
              alignItems:'center',
              alignContent:'center',
              justifyContent:'center'
          }}
        >
            {(avatar !== '') ? <img src={`${avatar}`} alt={'avatar prof'} style={{height:'50px', width:'50px', borderRadius:'50px'}}/> : <img
                src="data:image/png;base64,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"/>
            }
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
            <Link to="/chat" state={{professionista: professionista}}>
              <button style={{marginLeft:'10px' ,width:'80px', height:'30px',backgroundColor:'#39B1D9', border:'none', borderRadius:'30px', fontSize:'12px', fontWeight:'bold', color:'white'}}>Contatta</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoxRisultato;
