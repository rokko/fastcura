import React from 'react'
import AggiornaCurriculum from '../components/Professionista/AggiornaCurriculum'
import CronologiaPrestazioni from '../components/Professionista/CronologiaPrestazioni'
import Header from '../components/Professionista/Header'
import PianoAbbonamento from '../components/Professionista/PianoAbbonamento'

const Professionista = () => {

    const [scelta, setScelta] = React.useState('')
    console.log(scelta)
    return(
        <>
        <Header />
        <div style={{display:'flex', flexDirection:'column', alignContent:'center', alignItems:'center'}}>
        <div style={{backgroundColor:'#ffffff', borderRadius:'50%', width:'100px', height:'100px', marginTop:'-50px',border:"1px solid #39B1D9", borderStyle:'solid',borderWidth:'1px'}}>
         </div>
        <p style={{fontSize:'20px'}}>Rocco Rocco</p>
        <div style={{display:'flex', flexDirection:'column', alignContent:'center', alignItems:'center'}}>
        <button style={{display:'flex', alignItems:'center', justifyContent:'center' ,marginTop:'10px',textAlign:'center',width:'255px', backgroundColor: (scelta==='Prestazioni')?'#ffffff' :'#39B1D9', height:'40px', borderRadius:'30px', borderColor:'#39B1D9', color:'white', fontWeight:'bold', fontSize:'17px', }} onClick={()=>setScelta('Prestazioni')} ><p style={{color:(scelta==='Prestazioni')?'#39B1D9':'white'}}>Cronologia Prestazioni</p></button>
        <button style={{display:'flex', alignItems:'center', justifyContent:'center' ,marginTop:'10px',textAlign:'center',width:'255px', backgroundColor:(scelta==='Curriculum')?'#ffffff' :'#39B1D9', height:'40px', borderRadius:'30px', color:'white', fontWeight:'bold', fontSize:'17px', }} onClick={()=>setScelta('Curriculum')}><p style={{color:(scelta==='Curriculum')?'#39B1D9':'white'}}>Aggiorna Curriculum</p></button>
        <button style={{display:'flex', alignItems:'center', justifyContent:'center' ,marginTop:'10px',textAlign:'center',width:'255px', backgroundColor:(scelta==='Abbonamenti')?'#ffffff' :'#39B1D9', height:'40px', borderRadius:'30px', color:'white', fontWeight:'bold', fontSize:'17px', }} onClick={()=>setScelta('Abbonamenti')}><p style={{color:(scelta==='Abbonamenti')?'#39B1D9':'white'}}>Piano Abbonamento</p></button>
        </div>
        {(scelta==='Prestazioni') &&<CronologiaPrestazioni/>}
        {(scelta==='Curriculum') && <AggiornaCurriculum />}
        {(scelta==='Abbonamenti') &&<PianoAbbonamento></PianoAbbonamento>}
        </div>
        </>
    )

}

export default Professionista