
import React from 'react';
import './css/resimYazi.css'; // Eğer CSS dosyanızın yolu bu şekilde
import Resim from './assets/online-market.webp';

function GirisResim() {
    return (
        <div className="">
            <img src={Resim} alt="Snow" style={{ width: '100%', height: '796px', flexShrink: 0 }} />
            <div className="bottom-left title">
                Ingredients?
            </div>
            <div className="bottom-leftt">
                Looking for Good Quality
            </div>
            <a href="index9.html" className="btn-white button">Order Online</a>
        </div>
    );
}

export default GirisResim;
