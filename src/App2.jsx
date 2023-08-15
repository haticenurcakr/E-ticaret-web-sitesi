import React, { useState } from 'react';
import Navbar from './Navbar';
import GirisResim from './GirisResim';
import UrunList from './UrunList';
import KonumBelirteci from './KonumBelirteci';
import TelefonResimli from './TelefonResimli';
import Footer from './Footer';
import Order from './Order'

function App2() {
  const [itemCount, setItemCount] = useState(0); // Örnek olarak 0'dan başladığını varsayalım
  const [total, setTotal] = useState(0);
  return (
    <div>
<Navbar itemCount={itemCount} total={total} /> 
     
      <Order/>
      <Footer/>
    </div>
  )
}

export default App2;