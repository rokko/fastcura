import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignUpClient from '../components/General/SignUp/SignUpClienti/SignupCliente';
import SignUpProfessionista from '../components/General/SignUp/SignUpProfessionista/SignUpProfessionista';
import HomePage from '../screens/HomePage';
import TrovaIlTuoProfessionista from '../screens/TrovaIlTuoProfessionista';
import Professionista from '../screens/Professionista';
import RisultatiRicerca from '../screens/RisultatiRicerca';
import InCostruzione from '../components/General/InCostruzione';
import ProfiloProfessionista from '../components/ListaProfessionisti/ProfiloProfessionista';
import ChatProfessionista from '../components/General/Chat/ChatProfessionista';


const ProviderRouter = () => {

    return (
        <>
        <Router>
         <Routes >
          <Route path="/"  element={<TrovaIlTuoProfessionista />} />
          <Route path="/landing-professionista" element = { <HomePage />} />
          <Route path="/signup-professionista" element = { <SignUpProfessionista />} />
          <Route path="/signup-cliente" element= {<SignUpClient />}/>
          <Route path="/professionista" element= {<Professionista />}/>
          <Route path="/risultati" element={<RisultatiRicerca />}/>
          <Route path="/incostruzione" element={<InCostruzione />}/>
          <Route path="/chat" element={<ChatProfessionista/>}/>
          <Route path="/profilo-professionista" element={<ProfiloProfessionista/>}/>
        </Routes>
        </Router>
        </>
    )
}

export default ProviderRouter

