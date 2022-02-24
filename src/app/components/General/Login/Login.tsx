import {Box, TextField} from "@mui/material";
import React , {useState} from "react";
import {useMediaQuery} from "react-responsive";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface IToken {
    accessToken : string

}

const Login = (props:any) => {
    let navigate = useNavigate();

    const loginUser = ()=>{

  console.log(userlogin)
        axios.post('http://54.145.165.9:3001/login',userlogin)
            .then(function (response) {
               const token : IToken = response.data;
               if (!!token.accessToken) {
                   localStorage.setItem('tokenaccess', token.accessToken);
                   navigate('/professionista')
               }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` })
    const [email, setEmail] = useState('')
    const [passw, setPassw] = useState('')
    const userlogin = {
        email : email,
        password: passw,
    }
    console.log(userlogin)
    if(!isMobile) return(
        <>
            <div style={{display:'flex', flexDirection:'column'}}>
                <Box
                    style={{
                        marginTop:'100px',
                        width: "280px",
                        height: "240px",
                        backgroundColor: "#39B1D9",
                        borderRadius: "20px",
                    }}
                >
                    <p className="topsearch-text">Accedi</p>
                    <TextField
                        size={"small"}
                        hiddenLabel
                        sx={{
                            width: "240px",
                            backgroundColor: "#ffffff",
                            outlineColor: "#ffffff",
                            borderRadius:'30px',
                            '& .MuiOutlinedInput-root':{
                                borderColor:'#ffffff',
                                borderRadius:'30px',
                            }
                        }}
                        onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                            setEmail(x.target.value)
                        }
                        placeholder="Indirizzo email"
                    />
                    <TextField size={'small'}
                               sx={{
                                   width: "240px",
                                   backgroundColor: "#ffffff",
                                   outlineColor: "#ffffff",
                                   borderRadius:'30px',
                                   '& .MuiOutlinedInput-root':{
                                       borderColor:'#ffffff',
                                       borderRadius:'30px'
                                   },
                                   marginTop:'40px',
                               }}
                               type={"password"}
                               placeholder="Password"
                               onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                                   setPassw(x.target.value)
                               }/>
                </Box>
                <div>

                        <button
                            style={{
                                marginTop:'40px',
                                backgroundColor: "#39B1D9",
                                width: 220,
                                height: 37,
                                borderRadius: 20,
                                border: "none",
                                color: "white",
                                fontWeight:'bold',

                            }}
                            onClick={()=>loginUser()}
                        >
                            Entra
                        </button>

                </div>
                <div>
                    <p>Hai dimenticato la password?</p>
                </div>
            </div>
        </>
    )
    else
  return (
    <>
      <Box
        style={{
            marginTop:'100px',
          width: "280px",
          height: "240px",
          backgroundColor: "#39B1D9",
          borderRadius: "20px",
        }}
      >
        <p className="topsearch-text">Accedi</p>
        <TextField
          size={"small"}
          hiddenLabel
          sx={{
            width: "240px",
            backgroundColor: "#ffffff",
            outlineColor: "#ffffff",
            borderRadius:'30px',
            '& .MuiOutlinedInput-root':{
              borderColor:'#ffffff',
              borderRadius:'30px',
            }
          }}
          placeholder="Indirizzo email"
          onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(x.target.value)
          }
        />
        <TextField size={'small'}  
        sx={{
            width: "240px",
            backgroundColor: "#ffffff",
            outlineColor: "#ffffff",
            borderRadius:'30px',
            '& .MuiOutlinedInput-root':{
              borderColor:'#ffffff',
              borderRadius:'30px'
            },
            marginTop:'40px',
          }}            
           type={"password"} 
           placeholder="Password"
                   onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
                       setPassw(x.target.value)
                   }/>
      </Box>

      <button
        style={{
          marginTop:'40px',
          backgroundColor: "#39B1D9",
          width: 220,
          height: 37,
          borderRadius: 20,
          border: "none",
          color: "white",
          fontWeight:'bold',

        }}
        onClick={ ()=>loginUser()}
      >
        Entra
      </button>
      <p>Hai dimenticato la password?</p>
    </>
  );
};

export default Login;
