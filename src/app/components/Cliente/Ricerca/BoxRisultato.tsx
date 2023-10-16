import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Loader } from "../../../loader";
import avatarNew from '../../../media/avatarNew.png'
import what from '../../../media/what.png'
import segnapunto from '../../../media/segnapunto.png'
import PopUpMessaggio from "./PopUpMessaggio";
const BoxRisultato = (props: any) => {
  const [avatar, setAvatar] = useState("");
  const [load, setLoad] = useState(false);
  const [log, setLog] = useState(false);
  const [open,setOpen] = useState(false)
  const professionista = props.professionista;

  const takeToken = async () => {
    const tokenTest = await localStorage.getItem("tokenaccess");
    !!tokenTest ? setLog(true) : setLog(false);
  };
  useEffect(() => {
    takeToken();
    setLoad(true);

    const prof = {
      id_professionista: professionista._id,
    };
    axios
      .post(
        "https://careful-pear-cockatoo.cyclic.app/professionista/recupera-avatar",
        prof
      )
      .then((response: any) => {
        setLoad(false);
        if (response.data.message === 1) {
          setAvatar(response.data.avatar.posizione);
        } else {
          setAvatar("");
        }
      });
  }, []);
  return (
    <>
      <Loader isLoading={load} />
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            marginRight: "50px",
            width: "50px",
            height: "50px",
            backgroundColor: "grey",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            fontFamily: "Roboto,sans-serif",
          }}
        >
          {avatar !== "" ? (
            <img
              src={`${avatar}`}
              alt={"avatar prof"}
              style={{ height: "100px", width: "100px", borderRadius: "50px" }}
            />
          ) : (
            <img src={avatarNew} height={"100px"} width={"100px"} alt={"avatar prof"}/>
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column" , width:'300px'}}>
          <p style={{ fontSize: "22px", alignSelf: "flex-start", fontWeight:'700', fontFamily:'Helvetica', color:'black',marginBottom:'-15px' }}>
            {professionista.nome}{' '}{professionista.cognome}
          </p>
          <div style={{ display: "flex", flexDirection: "row" ,alignContent:'center', alignItems:'center'}}>
             <img src={segnapunto} width={'37px'} height={'37px'} />

             <p style={{fontSize:'22px',fontWeight:'400', color:'black'}}>{professionista.citta}</p> 
            </div>
            <div style={{display:'flex', flexDirection:'column', alignContent:'flex-start'}}>
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
                fill="#39B1D9"
                stroke="#39B1D9"
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
                fill="#39B1D9"
                stroke="#39B1D9"
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
                fill="#39B1D9"
                stroke="#39B1D9"
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
                fill="#39B1D9"
                stroke="#39B1D9"
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
                fill="#39B1D9"
                stroke="#39B1D9"
                stroke-width="1"
              />
            </svg>
          </div>
          <p style={{textAlign:'left', fontSize:'12px', fontWeight:'700'}}>Leggi le recensioni</p>
          </div>
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              alignSelf:'flex-start'
            }}
          >
          
            <Link to="/profilo-professionista" state={professionista}>
              <button
                style={{
                  marginLeft: "10px",
                  width: "125px",
                  height: "35px",
                  backgroundColor: "#39B1D9",
                  border: "none",
                  borderRadius: "30px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "white",
                  
                }}
              >
                Profilo
              </button>
            </Link>

           
              <button
                style={{
                  marginLeft: "10px",
                  width: "125px",
                  height: "35px",
                  backgroundColor: "#39B1D9",
                  border: "none",
                  borderRadius: "30px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "white",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignContent:'center',
                  alignItems:'center',
                  gap:'5px'
                }}
                onClick={()=>{if (!!log){
                //  let number = mobileNumber.replace(/[^\w\s]/gi, "").replace(/ /g, "");
                let number = professionista.number.replace(/[^\w\s]/gi, "").replace(/ /g, "")
                 // Appending the phone number to the URL
                 let url = `https://wa.me/send?phone=${number}`;

    // Appending the message to the URL by encoding it
    url += `&text=${encodeURI('Ciao, ti contatto da Fastcure. Avrei bisogno del tuo aiuto professionale, quando saresti disponibile?'
      )}&app_absent=0`;

    // Open our newly created URL in a new tab to send the message
    window.open(url);} else {setOpen(true)}}}
              >
                <img src={what} width={'22px'} height={'22px'}/>
                Contatta
              </button>
          
            <PopUpMessaggio open={open} setOpen={setOpen} number={professionista.number}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoxRisultato;
