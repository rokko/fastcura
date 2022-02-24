import React, {useState} from 'react'
import { Box } from '@mui/system'
import { TextField } from '@mui/material'
import axios from "axios";
const AggiornaCurriculum = () => {
    const [titoloStudio,setTitoloStudio]= useState('');
    const [master, setMaster]= useState('');
    const [numeroOrdine, setNumeroOrdine] = useState('');
    const [esperienze, setEsperienze] = useState('');
    const [altro,setAltro] = useState('');

    const curriculumaggiornato = {
        titolostudio : titoloStudio,
        master : master,
        numeroOrdine:numeroOrdine,
        esperienze : esperienze,
        altro : altro,
    }
    const salvaCurriculum= () => {
        const datinuovocurriculumaggiornato = JSON.stringify(curriculumaggiornato)
        axios.post('http://localhost:3001/cliente/signup',datinuovocurriculumaggiornato)
    }
    return(
        <>
        <p>Aggiorna curriculum</p>
            <div>
        <Box style={{border:'1px solid #39B1D9',backgroundColor:'#F4F4F4', width:'300px',padding:'15px', height:'400px', borderRadius:'30px', display:'flex', flexDirection:'column', alignContent:'center', alignItems:'center'}}>
            <TextField sx={{width:'90%', marginTop:'10px'}} id="standard-basic" label="Titolo di studio" variant="standard" onChange={(x:React.ChangeEvent<HTMLInputElement>) => setTitoloStudio(x.target.value)}></TextField>
            <TextField sx={{width:'90%', marginTop:'10px'}} id="standard-basic" label="Master/Specializzazioni" variant="standard" onChange={(x:React.ChangeEvent<HTMLInputElement>) => setMaster(x.target.value)}></TextField>
            <TextField sx={{width:'90%', marginTop:'10px'}} id="standard-basic" label="Numero ordine/albo" variant="standard" onChange={(x:React.ChangeEvent<HTMLInputElement>) => setNumeroOrdine(x.target.value)}></TextField>
            <TextField sx={{width:'90%', marginTop:'10px'}} id="standard-basic" label="Esperienze" variant="standard" onChange={(x:React.ChangeEvent<HTMLInputElement>) => setEsperienze(x.target.value)}></TextField>
            <TextField multiline rows={5} sx={{width:'90%'}} id="standard-basic" label="Altro" variant="standard" onChange={(x:React.ChangeEvent<HTMLInputElement>) => setAltro(x.target.value)}></TextField>

        </Box>
                <button
                    style={{
                        marginTop:'40px',
                        backgroundColor: "#39B1D9",
                        width: 220,
                        height: 37,
                        borderRadius: 20,
                        border: "none",
                        color: "white",
                        fontWeight:'bold',
                        marginBottom:'20px',

                    }}
                    onClick={()=>salvaCurriculum()}
                >Aggiungi</button>
            </div>

        </>
    )
}

export default AggiornaCurriculum