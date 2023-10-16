import React, { useState } from 'react'
import Footer from '../../../components/General/Footer'
import { Loader } from '../../../loader'
import HeaderNoLogin from '../../../components/Cliente/HeaderNoLogin'

const ListaRecensioni = () => {
    const [load, setLoad] = useState(false)
    return(
        <>
           <Loader isLoading={load} />
            <HeaderNoLogin />
         <p>Lista Recensioni</p>
           <div style={{ marginBottom: "200px" }} />
      <Footer />
        </>
       
    )
}

export default ListaRecensioni