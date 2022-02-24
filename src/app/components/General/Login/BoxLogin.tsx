import {Box, TextField} from "@mui/material";
import React , {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

interface IToken {
    accessToken : string

}

const BoxLogin = (props:any) => {
    console.log(props)

    const loginUser = ()=>{

        axios.post('https://54.145.165.9:3001/login',userlogin)
            .then(function (response) {
                const token : IToken = response.data;
                if (!!token.accessToken) {
                    localStorage.setItem('tokenaccess', token.accessToken);
                    props.chiudi(false)
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const [email, setEmail] = useState('')
    const [passw, setPassw] = useState('')
    const userlogin = {
        email : email,
        password: passw,
    }
    console.log(userlogin)

        return (
            <>
                <Box
                    style={{
                        marginTop:'100px',
                        width: "280px",
                        height: "330px",
                        backgroundColor: "#39B1D9",
                        borderRadius: "20px",
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignContent:'center',
                        alignItems:'center'
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
                    <button
                        style={{
                            marginTop:'40px',
                            backgroundColor: "#E93323",
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
                    <Link to='/signup-cliente'><p style={{color:'#ffffff', textDecoration:'none'}}>oppure registrati</p></Link>
                </Box>


                <p>Hai dimenticato la password?</p>
            </>
        );
};

export default BoxLogin;
