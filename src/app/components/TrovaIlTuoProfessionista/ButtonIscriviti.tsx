import React from 'react'
import { Link } from 'react-router-dom'


const ButtonIscriviti = () => {

    return(
        <>
        <Link to="/signup-professionista" >
        <button style={{backgroundColor:'#ffffff', height:30, marginLeft:15,fontSize:'11px', textTransform:'none',color: 'rgb(57, 177, 217)', borderColor:'rgb(57, 177, 217)', border:'solid 2px', borderRadius:10, fontWeight:'bold'}}>Sei un professionista? Iscriviti!</button>
        </Link>
        </>
    )

}

export default ButtonIscriviti