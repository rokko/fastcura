import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpClient from "../components/General/SignUp/SignUpClienti/SignupCliente";
import SignUpProfessionista from "../components/General/SignUp/SignUpProfessionista/SignUpProfessionista";
import HomePage from "../screens/HomePage";
import Professionista from "../screens/Professionista";
import RisultatiRicerca from "../screens/RisultatiRicerca";
import InCostruzione from "../components/General/InCostruzione";
import { ProfiloProfessionista } from "../components/ListaProfessionisti/profiloprofessionista";
import ChatProfessionista from "../components/General/Chat/ChatProfessionista";
import ChatProfessionisti from "../components/Professionista/ChatProfessionisti";
import PaginaChat from "../components/Professionista/PaginaChat";
import DashBoardUtenti from "../components/Cliente/DashboardUtenti";
import SignupCompletatoProfessionista from "../components/General/SignUp/SignUpProfessionista/SignupCompletatoProfessionista";
import SmarritoPassword from "../components/General/Login/SmarritoPassword";
import ListaChat from "../components/Cliente/ListaChat";
import { TrovaProfessionista } from "../screens/trovaprofessionista";
import { LandingProfessionista } from "../screens/landingprofessionista";

const ProviderRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TrovaProfessionista />} />
          <Route
            path="/landing-professionista"
            element={<LandingProfessionista />}
          />
          <Route path="/cliente" element={<DashBoardUtenti />} />
          <Route path="/chatcliente" element={<ListaChat />} />
          <Route
            path="/signup-professionista"
            element={<SignUpProfessionista />}
          />
          <Route path="/signup-cliente" element={<SignUpClient />} />
          <Route path="/professionista" element={<Professionista />} />
          <Route path="/risultati" element={<RisultatiRicerca />} />
          <Route path="/incostruzione" element={<InCostruzione />} />
          <Route path="/chat" element={<ChatProfessionista />} />
          <Route
            path="/profilo-professionista"
            element={<ProfiloProfessionista />}
          />
          <Route path="/chatprofessionista" element={<ChatProfessionisti />} />
          <Route path="/chatmessage" element={<PaginaChat />} />
          <Route
            path="/registrazione"
            element={<SignupCompletatoProfessionista />}
          />
          <Route path="/smarrito-password" element={<SmarritoPassword />} />
        </Routes>
      </Router>
    </>
  );
};

export default ProviderRouter;
