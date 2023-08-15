import React, { useState } from 'react';

import UrunList from './UrunList';
import KonumBelirteci from './KonumBelirteci';
import Footer from './Footer';
import Navbar from './Navbar';
import Urunler from './Urunler';

function App9() {
    const [itemCount, setItemCount] = useState(0); // Örnek olarak 0'dan başladığını varsayalım
    const [total, setTotal] = useState(0);
    return (
      <div>
  <Navbar itemCount={itemCount} total={total} />
<KonumBelirteci/>
     <Urunler/>

      <Footer />
    </div>
  );
}

export default App9;
