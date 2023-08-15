import React from 'react';
import './css/style.css'; // Eğer CSS dosyanızın yolu bu şekilde
import Burger from './assets/Burger Menu 2.svg';
import Logo from './assets/02.svg';
import Adam from './assets/user.svg';
import Kalp from './assets/favorite_border.svg';
import Sepet from './assets/shopping_cart.svg';
import Search from './assets/search.svg';

function Navbar({ itemCount , total}) {
  return (
    <div className="container">
      <div className="navbar">
        {/* Logo 1 */}
        <div className="col-1">
         <a href="index.html"> <img src={Burger} alt="Icon 1" /></a>
        </div>
        {/* Logo 2 */}
        <div className="col-2">
          <a href="index.html">
            <img src={Logo} alt="Icon 2" />
          </a>
        </div>
        {/* Arama kutusu */}
        <form className="d-flex col-5" role="search">
  <div className="search-input">
    <div className="search-icon-container">
      <img src={Search} alt="Search Icon" className="search-icon" />
    </div>
    <input className="form-control me-2" type="search" placeholder="Search food ..." aria-label="Search" />
  </div>
</form>


        {/* Minik ikonlar */}
        <div className="icons col-3">
          <a href="index2.html"><img src={Adam} alt="Icon 1" /></a>
          Sign in
         <a href="index9.html"> <img src={Kalp} alt="Icon 2" /></a>
          Wishlist
          
            <div id="cart-icon" className="cart-icon">
              <a href="index2.html" className="order-link" ><img src={Sepet} alt="Icon 3" /></a>
              <span className="cart-count" >
              {total !== null && <span style={{textDecorationLine:'none' , color: 'black' }}>{total.toFixed(2)} $</span>}</span>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
