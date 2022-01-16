import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignUpClient from '../components/General/SignUp/SignUpClienti/SignUpClienti';
import SignUpProfessionista from '../components/General/SignUp/SignUpProfessionista/SignUpProfessionista';
import HomePage from '../screens/HomePage';
import TrovaIlTuoProfessionista from '../screens/TrovaIlTuoProfessionista';


const ProviderRouter = () => {

    return (
        <>
        <Router>
         <Routes >
          <Route path="/"  element={<TrovaIlTuoProfessionista />} />
          <Route path="/landing-professionista" element = { <HomePage />} />
          <Route path="/signup-professionista" element = { <SignUpProfessionista />} />
          <Route path="/signup-cliente" element= {<SignUpClient />}/>
        </Routes>
        </Router>
        </>
    )
}

export default ProviderRouter

