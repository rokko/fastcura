import { Box } from '@mui/system'
import React, {useEffect} from 'react'
import AccordionPrestazioni from './AccordionPrestazioni'
import axios from "axios";
const CronologiaPrestazioni = ()=> {
 //   const [listaPrestazioni, setListaPrestazioni] = useState()
    const recuperaPrestazioni = () => {
        axios.post('http://localhost:3001/professionista/lista-appuntamenti')
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(()=>{
        recuperaPrestazioni()
    },[])

    return(
        <>
        <Box style={{height:30, width:'100%'}}>

            <AccordionPrestazioni/>
            <AccordionPrestazioni/>
            <AccordionPrestazioni/>
            <AccordionPrestazioni/>
            <AccordionPrestazioni/>

        </Box>
        </>
    )

}

export default CronologiaPrestazioni