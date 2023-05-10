import React from "react";
import "./App.css";
import AppProvider from "./app/context/Context";
import ProviderRouter from "./app/route/ProviderRouter";
import ReactGA from "react-ga";
const TRACKING_ID = "G-6SX0Z3TP8Z"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <AppProvider>
      <div className="App">
        <ProviderRouter />
      </div>
    </AppProvider>
  );
}

export default App;
