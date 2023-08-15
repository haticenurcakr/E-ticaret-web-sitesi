// App.jsx

import React, { useState } from 'react';
import Navbar from './Navbar';
import GirisResim from './GirisResim';
import İndirimCartlari from './İndirimCartlari';
import UrunList from './UrunList';
import TelefonResimli from './TelefonResimli';
import Footer from './Footer';
import Katagori from './Katagori'
function App() {
  const [itemCount, setItemCount] = useState(0); // Örnek olarak 0'dan başladığını varsayalım
  const [total, setTotal] = useState(0);
  return (
    <div>
<Navbar itemCount={itemCount} total={total} />   
   <GirisResim />
      <İndirimCartlari />
      <UrunList />
      <UrunList />
      <UrunList />
      <TelefonResimli />
      <UrunList />
      <UrunList />
      <Katagori/>
      <Footer />
    </div>
  );
}

export default App;
