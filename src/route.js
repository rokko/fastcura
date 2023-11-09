import React from 'react';
import { Router , Route, Routes } from 'react-router';


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


export default (
<Router>
<Routes>
  <Route path="/"  key={'home'}/>
  <Route
    path="/landing-professionista"
    key={'b'}
  
  />
  <Route path="/cliente" key={'c'}/>
  <Route path="/chatcliente" key={'d'}/>

  <Route path="/professionista" key={'e'}  />
  <Route path="/risultati" key={'f'} />
  <Route path="/incostruzione" key={'g'}/>
  <Route path="/chat" key={'h'}/>
  <Route
    path="/profilo-professionista"
    key={'i'}
/>
  <Route path="/assistenza" key={'j'} />
  <Route path="/chatprofessionista" key={'k'} />
  <Route path="/chatmessage"key={'l'} />
  <Route
    path="/registrazione"
    key={'m'}
   
  />
  <Route path="/smarrito-password"  key={'n'}/>
  <Route path="/termini-condizioni" key={'o'} />
  <Route path="/cookies"  key={'p'}/>
  <Route path="/consenso-privacy"  key={'q'}/>
  <Route path="/privacy" key={'r'} />
  <Route path="/dashboard" key={'s'} />
  <Route path="/signup-cliente" key={'t'} />
  <Route
    path="/signup-professionista"
    key={'u'}
  />
  <Route path="/blog" key={'v'}></Route>
  <Route path="/lista-recensioni" key={'w'} ></Route>
  <Route path="/lascia-recensione" key={'z'} ></Route>
  {city.map((citta,i)=> {


  return (<Route path={`/badante/${citta}`} key={'d'+i}></Route>)
  })}
  {city.map((citta,i)=> {
    return(
  <Route path={`/infermiere/${citta}`} key={'a'+i}></Route>
  )})}
  {city.map((citta,i)=> {
    return(
        <Route path={`/OSS/${citta}` } key={'b'+i} ></Route>
        )})},
 {city.map((citta,i)=> {
    return(
        <Route path={`/fisioterapista/${citta}`} key={'c'+i} ></Route>
        )})},


  
</Routes>
</Router>

)