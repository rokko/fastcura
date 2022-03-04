import React from 'react'
import {useMediaQuery} from "react-responsive";

const Footer = () => {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` })


    return(
        <>
            <div style={{display:'flex', flexDirection:'column', height:'50px', position:'absolute',width:'100%', borderTop:'2px solid rgb(57, 177, 217)'}}>
            <hr
                style={{
                    color: "rgb(57, 177, 217)",
                    backgroundColor: "rgb(57, 177, 217)",
                    height: 2,
                    border:'none'
                }}
            />
<div style={{display:'flex',flexDirection:isMobile? 'column' : 'row', justifyContent:'space-evenly'}}>
                <p> FastCura Copyrigth 2022</p>
                <p>Termini e Condizioni</p>
                <p>Cookies</p>
                <p>Privacy</p>
                <p>Consenso Privacy</p>
    </div>
            </div>
        </>
    )

}

export default  Footer