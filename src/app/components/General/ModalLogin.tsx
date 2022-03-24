import React , {useState} from "react";
import Modal from "@mui/material/Modal";
import {Box, TextField} from "@mui/material";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
interface IToken {
    accessToken : string

}

const ModalLogin = (props: any) => {
    const navigate = useNavigate()
console.log(props)
    const [email, setEmail] = useState('')
    const [passw, setPassw] = useState('')
    const [ok,setOk] = useState(false)
    const userlogin = {
        email : email,
        password: passw,
    }
    const loginUser = ()=>{

        axios.post('https://fastcuradev.herokuapp.com/login',userlogin)
            .then(function (response) {
                const token : IToken = response.data;
                
                if (!!token.accessToken) {

                    props.verifica(true)

                    localStorage.setItem('tokenaccess', token.accessToken);
                    props.chiudi(false)
                    props.setok(true)
                
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

 
  return (
    <>
    
      <Modal
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      
        <Box
                    style={{
                        position: 'absolute' as 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        marginTop:'100px',
                        width: "320px",
                        height: "470px",
                        backgroundColor: "#39B1D9",
                        borderRadius: "20px",
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignContent:'center',
                        alignItems:'center',
                        border:'none!important',
                        outline: 'none',
                    }}
                >
            <div onClick={()=>{props.chiudi(false)}} style={{position:'absolute',right:'0%', top:'-5%', width:'50px',height:'50px' ,borderRadius:'50px', display:'flex',backgroundColor:'rgb(233, 51, 35)', justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA1UlEQVRIie3UsQ6CQAzGceLqJo+jBNCHcPH9E51QcP472OE8Fe56PVjoREL6/VqiLYq1lixgO3sWUAFX4GiAHiTrNDkdcONdA1AnoLVkIJnjm8uUD2l4ajaXjN7JaGMaVbgaTcGTUQ1uho4EfuHmaAgeMpg5nh118Mb5bw7ec5MFdXB3S/WmmxzDmRefZ3CeT73Ij+vHIWm9d/Y4sP+HZsNDUHM8BjXDNWgy7qFDDKrGgRLopKEHqljUyXLP6x0opxrOgicfBNm8Ay6hDbtUNEfWWqp6Ae770o+mwnJ+AAAAAElFTkSuQmCC" /></div>
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
                    <Link to='/signup-cliente' style={{textDecoration:'none'}}><p style={{color:'#ffffff', textDecoration:'none'}}>oppure registrati</p></Link>


                <p>Hai dimenticato la password?</p>
        </Box>
      </Modal>
    </>
  );
};

export default ModalLogin;
