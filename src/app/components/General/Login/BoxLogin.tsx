import {Box, TextField} from "@mui/material";
import React , {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

interface IToken {
    accessToken : string

}

const BoxLogin = (props:any) => {
    const navigate = useNavigate()

    const loginUser = ()=>{

        axios.post('https://fastcuradev.herokuapp.com/login',userlogin)
            .then(function (response) {
                const token : IToken = response.data;
                if (!!token.accessToken) {
                    localStorage.setItem('tokenaccess', token.accessToken);
                    props.chiudi(false)
                    navigate('/')
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
                        variant={'standard'}
                        hiddenLabel
                        sx={{
                            width: "240px",
                            backgroundColor: "#ffffff",
                            borderRadius:'30px',
                            outline:'none',
                            padding:'6px 10px !important',
                            '& .MuiOutlinedInput-root':{
                                borderColor:'#ffffff',
                                borderRadius:'30px',
                                outline:'none',
                                padding:'6px 10px!important'
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
                    <Link to='/signup-cliente' style={{textDecoration:'none'}}><p style={{color:'#ffffff', textDecoration:'none'}}>oppure registrati</p></Link>
                </Box>


                <p>Hai dimenticato la password?</p>
            </>
        );
};

export default BoxLogin;
