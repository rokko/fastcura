import React from 'react'
import {useMediaQuery} from "react-responsive";


const Footer = () => {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` })


    return(
        <>
            <div style={{display:'flex',marginTop:'50px',borderTop:'2px solid rgb(57, 177, 217)', flexDirection:'column', height:'50px', position:'absolute',width:'100%'}}>

<div style={{display:'flex',flexDirection:isMobile? 'column' : 'row', justifyContent:'space-evenly', backgroundColor:'rgb(57, 177, 217)', color:'#ffffff'}}>
              <p style={{color:'#ffffff'}}>FastCura Copyrigth 2022</p>
                <a  style={{textDecoration:'none'}} href='/terminicondizioni.pdf'><p style={{color:'#ffffff'}}>Termini e Condizioni</p></a>
                <a  style={{textDecoration:'none'}} href='/cookie.docx.pdf'><p style={{color:'#ffffff'}}>Cookies</p></a>
                <a  style={{textDecoration:'none'}} href='/Privacy.docx.pdf' ><p style={{color:'#ffffff'}}>Privacy</p></a>
                <a  style={{textDecoration:'none'}} href='/consensoprivacy.docx.pdf' ><p style={{color:'#ffffff'}}>Consenso Privacy</p></a>
    </div>
            </div>
        </>
    )

}

export default  Footer