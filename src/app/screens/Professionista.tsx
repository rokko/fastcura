import { getListItemSecondaryActionClassesUtilityClass } from '@mui/material'
import React from 'react'
import CronologiaPrestazioni from '../components/Professionista/CronologiaPrestazioni'
import Header from '../components/Professionista/Header'

const Professionista = () => {

    const [scelta, setScelta] = React.useState('')
    console.log(scelta)
    return(
        <>
        <Header />
        <div style={{display:'flex', flexDirection:'column', alignContent:'center', alignItems:'center'}}>
        <div style={{backgroundColor:'#ffffff', borderRadius:'50%', width:'100px', height:'100px', marginTop:'-50px', borderColor:'#39B1D9', borderStyle:'solid',borderWidth:'1px'}}>
         </div>
        <p style={{fontSize:'20px'}}>Rocco Rocco</p>
        <div style={{display:'flex', flexDirection:'column', alignContent:'center', alignItems:'center'}}>
        <button style={{display:'flex', alignItems:'center', justifyContent:'center' ,marginTop:'10px',textAlign:'center',width:'255px', backgroundColor:'#39B1D9', height:'40px', borderRadius:'30px',border:'none', color:'white', fontWeight:'bold', fontSize:'17px', }} onClick={()=>setScelta('Prestazioni')} ><p style={{color:'white'}}>Cronologia Prestazioni</p></button>
        <button style={{display:'flex', alignItems:'center', justifyContent:'center' ,marginTop:'10px',textAlign:'center',width:'255px', backgroundColor:'#39B1D9', height:'40px', borderRadius:'30px',border:'none', color:'white', fontWeight:'bold', fontSize:'17px', }} onClick={()=>setScelta('Curriculum')}><p style={{color:'white'}}>Aggiorna Curriculum</p></button>
        <button style={{display:'flex', alignItems:'center', justifyContent:'center' ,marginTop:'10px',textAlign:'center',width:'255px', backgroundColor:'#39B1D9', height:'40px', borderRadius:'30px',border:'none', color:'white', fontWeight:'bold', fontSize:'17px', }} onClick={()=>setScelta('Abbonamenti')}><p style={{color:'white'}}>Piano Abbonamento</p></button>
        </div>
        {(scelta==='Prestazioni') &&<CronologiaPrestazioni/>}
        {(scelta==='Curriculum')}
        {(scelta==='Abbonamenti')}
        </div>
        </>
    )

}

export default Professionista