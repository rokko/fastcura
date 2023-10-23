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
import {
  TerminiECondizioni,
  Cookies,
  Privacy,
  ConsensoPrivacy,
} from "../condizioni";
import Assistenza from "../components/Professionista/Assistenza";
import { Dashboard } from "../dashboard/index";
import { RegistrazioneCliente } from "../registrazioneCliente";
import { RegistrazioneProfessionista } from "../registrazioneProfessionista";
import Blog from "../blog";
import ListaRecensioni from "../screens/recensioni/listaRecensioni/ListaRecensioni";
import LasciaRecensioni from "../screens/recensioni/lasciaRecensioni/LasciaRecensioni";
import RisultatiRicercaPers from "../screens/RisultatiRicercaPerson";
const options = ["Infermiere", "Badante", "Fisioterapista", "Oss"];
const city = [
  "Agrigento",
  "Alessandria",
  "Ancona",
  "Arezzo",
  "Ascoli Piceno",
  "Asti",
  "Avellino",
  "Bari",
  "Barletta-Andria-Trani",
  "Belluno",
  "Benevento",
  "Bergamo",
  "Biella",
  "Bologna",
  "Bolzano/Bozen",
  "Brescia",
  "Brindisi",
  "Cagliari",
  "Caltanissetta",
  "Campobasso",
  "Carbonia-Iglesias",
  "Caserta",
  "Catania",
  "Catanzaro",
  "Chieti",
  "Como",
  "Cosenza",
  "Cremona",
  "Crotone",
  "Cuneo",
  "Enna",
  "Fermo",
  "Ferrara",
  "Firenze",
  "Foggia",
  "Forlì-Cesena",
  "Frosinone",
  "Genova",
  "Gorizia",
  "Grosseto",
  "Imperia",
  "Isernia",
  "L'Aquila",
  "La Spezia",
  "Latina",
  "Lecce",
  "Lecco",
  "Livorno",
  "Lodi",
  "Lucca",
  "Macerata",
  "Mantova",
  "Massa-Carrara",
  "Matera",
  "Medio Campidano",
  "Messina",
  "Milano",
  "Modena",
  "Monza e della Brianza",
  "Napoli",
  "Novara",
  "Nuoro",
  "Ogliastra",
  "Olbia-Tempio",
  "Oristano",
  "Padova",
  "Palermo",
  "Parma",
  "Pavia",
  "Perugia",
  "Pesaro e Urbino",
  "Pescara",
  "Piacenza",
  "Pisa",
  "Pistoia",
  "Pordenone",
  "Potenza",

  "Prato",

  "Ragusa",

  "Ravenna",

  "Reggio di Calabria",

  "Reggio nell'Emilia",
  "Rieti",
  "Rimini",
  "Roma",
  "Rovigo",
  "Salerno",
  "Sassari",
  "Savona",
  "Siena",
  "Siracusa",
  "Sondrio",

  "Taranto",

  "Teramo",

  "Terni",

  "Torino",
  "Trapani",

  "Trento",

  "Treviso",

  "Trieste",

  "Udine",

  "Valle d'Aosta/Vallée d'Aoste",

  "Varese",

  "Venezia",
  "Verbano-Cusio-Ossola",

  "Vercelli",

  "Verona",

  "Vibo Valentia",

  "Vicenza",

  "Viterbo",
];
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

          <Route path="/professionista" element={<Professionista />} />
          <Route path="/risultati" element={<RisultatiRicerca />} />
          <Route path="/incostruzione" element={<InCostruzione />} />
          <Route path="/chat" element={<ChatProfessionista />} />
          <Route
            path="/profilo-professionista"
            element={<ProfiloProfessionista />}
          />
          <Route path="/assistenza" element={<Assistenza />} />
          <Route path="/chatprofessionista" element={<ChatProfessionisti />} />
          <Route path="/chatmessage" element={<PaginaChat />} />
          <Route
            path="/registrazione"
            element={<SignupCompletatoProfessionista />}
          />
          <Route path="/smarrito-password" element={<SmarritoPassword />} />
          <Route path="/termini-condizioni" element={<TerminiECondizioni />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/consenso-privacy" element={<ConsensoPrivacy />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup-cliente" element={<RegistrazioneCliente />} />
          <Route
            path="/signup-professionista"
            element={<RegistrazioneProfessionista />}
          />
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/lista-recensioni" element={<ListaRecensioni/>}></Route>
          <Route path="/lascia-recensione" element={<LasciaRecensioni/>}></Route>
          {city.map((citta)=> {
          console.log(citta)
          return (
            <>
          <Route path={`/badante/${citta}`} element={<RisultatiRicercaPers parametri={{citta:citta,professione:'Badante'}}/>}></Route>
          <Route path={`/infermiere/${citta}`} element={<RisultatiRicercaPers parametri={{citta:citta,professione:'Infermiere'}}/>}></Route>
          <Route path={`/OSS/${citta}`} element={<RisultatiRicercaPers parametri={{citta:citta,professione:'OSS'}}/>}></Route>
          <Route path={`/fisioterapista/${citta}`} element={<RisultatiRicercaPers parametri={{citta:citta,professione:'Fisioterapista'}}/>}></Route>



          </>
  )
})
          }
          
        </Routes>
      </Router>
    </>
  );
};

export default ProviderRouter;
