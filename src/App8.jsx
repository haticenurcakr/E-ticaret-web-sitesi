import React, { useState } from 'react';
import Navbar from './Navbar';
import UrunList from './UrunList';
import KonumBelirteci from './KonumBelirteci';
import Footer from './Footer';
import ElmaSayfasi from './ElmaSayfasi';
import YumurtaSayfasi from './YumurtaSayfasi';

function App() {
  
  return (
    <div>
   
      
     <YumurtaSayfasi/>
      <UrunList  />
      <UrunList />
      <Footer />
    </div>
  );
}

export default App;
