import { Box } from '@mui/system'
import React from 'react'


const CardAbbonamento = () => {

    return(
        <>
        <Box style={{ padding:'20px',width:'200px', height:'140px',backgroundColor :'#39B1D9', borderRadius:'5%', display:'flex', flexDirection:'column',alignItems:'center', textAlign:'left'}}>
            <p style={{color:'white',fontSize:'33px'}}>12€/Mese</p>
            <p style={{color:'white', fontSize:'13px', marginTop:'-30px'}}>Attivato il 10/09/2021<br/>
            Prossimo rinnovo il 10/10/2021</p>
        </Box>
        </>
    )
}

export default CardAbbonamento