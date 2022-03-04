import React from 'react'
import {useMediaQuery} from "react-responsive";

const Footer = () => {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` })


    return(
        <>
            <div style={{display:'flex',borderTop:'2px solid rgb(57, 177, 217)', flexDirection:'column', height:'50px', position:'absolute',width:'100%'}}>

<div style={{display:'flex',flexDirection:isMobile? 'column' : 'row', justifyContent:'space-evenly', backgroundColor:'rgb(57, 177, 217)', color:'#ffffff'}}>
                <p style={{color:'#ffffff'}}> FastCura Copyrigth 2022</p>
                <p style={{color:'#ffffff'}}>Termini e Condizioni</p>
                <p style={{color:'#ffffff'}}>Cookies</p>
                <p style={{color:'#ffffff'}}>Privacy</p>
                <p style={{color:'#ffffff'}}>Consenso Privacy</p>
    </div>
            </div>
        </>
    )

}

export default  Footer