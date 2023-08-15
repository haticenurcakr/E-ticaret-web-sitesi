import React from 'react';
import './css/style.css'; // Eğer CSS dosyanızın yolu bu şekilde
import Elma from './assets/elma.jpg';
import Muz from './assets/banan.webp';
import Mantar from './assets/mantar.jpg';
import Pil from './assets/pil.jpg';
import Domates from './assets/domates-1.jpg';
import Yumurta from './assets/yumurta.jpg';


function Navbar({ itemCount , total}) {
  return (
    <div className="container">
    <div className="container">
      <div className="navbar-text">
        <div className="text-line">
          <h2 className="h2-text">Shop By Department</h2>
        </div>
        <div className="text-line" style={{ textAlign: 'end' }}>
          <a href="#" className="btn" style={{ color: 'green' }}>
          Show All Department
          </a>
        </div>
      </div>
    </div>
    <div className="button-container ">
     
      <button className="round-button katagori-text">
    <a href="index9.html"><img src={Elma} alt="Resim 1" /></a>
        <span>New Arrivals</span>
      </button>
      <button className="round-button katagori-text">
        <a href="index9.html"><img src={Yumurta} alt="Resim 2" /></a>
        <span>Dairy & MIlk</span>
      </button>
      <button className="round-button katagori-text">
        <a href="index9.html"><img src={Pil} alt="Resim 3" /></a>
        <span>Fresh Produce</span>
      </button>
      <button className="round-button katagori-text">
        <img src={Mantar} alt="Resim 4" />
        <span>Meat</span>
      </button>
      <button className="round-button katagori-text">
        <a href="index9.html"><img src={Domates} alt="Resim 4" /></a>
        <span>Snacks</span>
      </button>
      <button className="round-button katagori-text">
        <a href="index9.html"><img src={Muz} alt="Resim 4" /></a>
        <span>Frozen</span>
      </button>
    </div>
  </div>
  );
}

export default Navbar;
