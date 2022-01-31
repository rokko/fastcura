import React from 'react'
import Header from '../components/Professionista/Header'

const Professionista = () => {

    return(
        <>
        <Header />
        <div style={{display:'flex', flexDirection:'column', alignContent:'center', alignItems:'center'}}>
        <div style={{backgroundColor:'#ffffff', borderRadius:'50%', width:'100px', height:'100px', marginTop:'-50px', borderColor:'#39B1D9', borderStyle:'solid',borderWidth:'1px'}}>
         </div>
        <p style={{fontSize:'20px'}}>Rocco Rocco</p>
        <div style={{display:'flex', flexDirection:'column', alignContent:'center', alignItems:'center'}}>
        <button style={{display:'flex', alignItems:'center', justifyContent:'center' ,marginTop:'10px',textAlign:'center',width:'255px', backgroundColor:'#39B1D9', height:'40px', borderRadius:'30px',border:'none', color:'white', fontWeight:'bold', fontSize:'17px', }} ><p style={{color:'white'}}>Cronologia Prestazioni</p></button>
        <button style={{display:'flex', alignItems:'center', justifyContent:'center' ,marginTop:'10px',textAlign:'center',width:'255px', backgroundColor:'#39B1D9', height:'40px', borderRadius:'30px',border:'none', color:'white', fontWeight:'bold', fontSize:'17px', }} ><p style={{color:'white'}}>Aggiorna Curriculum</p></button>
        <button style={{display:'flex', alignItems:'center', justifyContent:'center' ,marginTop:'10px',textAlign:'center',width:'255px', backgroundColor:'#39B1D9', height:'40px', borderRadius:'30px',border:'none', color:'white', fontWeight:'bold', fontSize:'17px', }} ><p style={{color:'white'}}>Piano Abbonamento</p></button>
        </div>
        </div>
        </>
    )

}

export default Professionista