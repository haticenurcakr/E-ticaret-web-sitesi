import React, { useState } from 'react';
import Navbar from './Navbar';
import UrunList from './UrunList';
import KonumBelirteci from './KonumBelirteci';
import Footer from './Footer';
import ElmaSayfasi from './ElmaSayfasi';
import MuzSayfasi from './MuzSayfasi';
import DomatesSayfasi from './DomatesSayfasi'
function App() {
  
  return (
    <div>
   
      
     <DomatesSayfasi/>
      <UrunList  />
      <UrunList />
      <Footer />
    </div>
  );
}

export default App;
