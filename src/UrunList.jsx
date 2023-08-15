import React, { useState } from 'react';
import './css/style.css'; // Eğer CSS dosyanızın yolu bu şekilde
import Elma from './assets/elma.jpg';
import Muz from './assets/banan.webp';
import Mantar from './assets/mantar.jpg';
import Pil from './assets/pil.jpg';
import Domates from './assets/domates-1.jpg';
import Yumurta from './assets/yumurta.jpg';

function UrunList() {
 
  return (
    <div>
    {/* Ürün Listesi */}
    
    <div className="container">
        {/* Başlık */}
        <div className="navbar-text">
            <div className="text-line">
                <h2 className="h2-text" >Featured Items</h2>
            </div>
            <div className="text-line" style={{ textAlign: 'end' }}>
                <a href="index9.html" className="btn" style={{ color: 'green' }}>Show All</a>
            </div>
        </div>
        </div>
        {/* Başlık End */}
        <div className="card-container">
            <div className="card" id="content1">
                <img src={Elma} alt="Yemek 1" />
                <div className="card-tex">
                    <p className='card-tex-1'>$4.11</p>
                    <p className='card-tex-2'>Elma</p>
                </div>
                <a href="index3.html" className="btn-card">Add to Cart</a>
            </div>
            <div className="card" id="content2">
                <img src={Muz} alt="Yemek 1" />
                <div className="card-tex">
                <p className='card-tex-1'>$4.11</p>
                    <p className='card-tex-2'>Muz</p>
                </div>
                <a href="index4.html" className="btn-card">Add to Cart</a>
            </div>
            <div className="card" id="content3">
                <img src={Mantar} alt="Yemek 1" />
                <div className="card-tex">
                <p className='card-tex-1'>$4.11</p>
                    <p className='card-tex-2'>Mantar</p>
                </div>
                <a href={"index5.html"} className="btn-card">Add to Cart</a>
            </div>
            <div className="card"id="content1">
                <img src={Pil} alt="Yemek 2" />
                <div className="card-tex">
                <p className='card-tex-1'>$4.11</p>
                    <p className='card-tex-2'>Pil</p>
                </div>
                <a href="index6.html" className="btn-card ">Add to Cart</a>
            </div>
            <div className="card"id="content1">
                <img src={Domates} alt="Yemek 1" />
                <div className="card-tex">
                <p className='card-tex-1'>$4.11</p>
                    <p className='card-tex-2'>Domates</p>
                </div>
                <a href="index7.html" className="btn-card">Add to Cart</a>
            </div>
            <div className="card"id="content1">
                <img src={Yumurta} alt="Yemek 2" />
                <div className="card-tex">
                <p className='card-tex-1'>$4.11</p>
                    <p className='card-tex-2'>Yumurta</p>
                </div>
                <a href="index8.html" className="btn-card ">Add to Cart</a>
            </div>
            <div className="navigation-buttons">
                <a href="" className="right-button" style={{ textDecoration:'none'}} >&gt;</a>
            </div>
        </div>
    
    {/* Ürün Listesi End */}
  
</div>
  );
}

export default UrunList;
