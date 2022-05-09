import React from "react";
import "./App.css";
import AppProvider from "./app/context/Context";
import ProviderRouter from "./app/route/ProviderRouter";

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
