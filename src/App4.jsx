import React, { useState } from 'react';
import Navbar from './Navbar';
import UrunList from './UrunList';
import KonumBelirteci from './KonumBelirteci';
import Footer from './Footer';
import ElmaSayfasi from './ElmaSayfasi';
import MuzSayfasi from './MuzSayfasi';

function App3() {
  
  return (
    <div>
   
      <MuzSayfasi/>
     
      <UrunList  />
      <UrunList />
      <Footer />
    </div>
  );
}

export default App3;
