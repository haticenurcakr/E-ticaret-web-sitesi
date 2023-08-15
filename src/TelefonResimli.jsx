import React from 'react';
import './css/style.css'; // Eğer CSS dosyanızın yolu bu şekilde
import Telefon from './assets/ACO3iY-desktop-iphone-uiux.png';

function TelefonResimli() {
  return (
    <div className="container">
    <div className="row yesil-bloc">
        {/* yeşil yapı */}
        <img src={Telefon} alt="" className="telephon" />
        <h2 className="yesil-ici-yazi" style={{ textAlign: 'center' }}>Start your day with Fresh Foods</h2>
        <button className="btn button2">Apple Store</button>
        <button className="btn button3">Google Play Store</button>
    </div>
</div>
  );
}

export default TelefonResimli;
