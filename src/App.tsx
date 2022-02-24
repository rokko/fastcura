import React from 'react';
import './App.css';
import ProviderRouter from './app/route/ProviderRouter';
import { HeadProvider, Title, Link, Meta } from 'react-head';


function App() {
  return (
    <div className="App">
        <HeadProvider>
            <Title>FastCura.it</Title>

            <Meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />


        </HeadProvider>
      <ProviderRouter />
    </div>
  );
}

export default App;
