import React from 'react';
import './assets/css/main.css'

import { Header } from './layout/header/header';
import Routes from './layout';
import { Footer } from 'layout/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
