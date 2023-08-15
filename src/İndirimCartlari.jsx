import React from 'react';
import './css/style.css'; // Eğer CSS dosyanızın yolu bu şekilde

function İndirimCartlari() {
  return (
    <div className="image-container rounded"  style={{  marginTop: '30px'}}>
    <div>
        <div className="cart-image" style={{ borderRadius: '8px', background: 'rgba(0, 0, 0, 0.40)' , marginTop: 'px'}}>
            <img src=""  />
            <div className="card-img-overlay">
                <p className="image-text">Buy 5 or more Save $1 each</p>
                <a href="index9.html" className="btn-white image-btn">Shop Now &gt;</a>
            </div>
        </div>
    </div>
    <div>
        <div className="cart-image" style={{ borderRadius: '8px', background: 'rgba(0, 0, 0, 0.40)' }}>
            <img src=""  />
            <div className="card-img-overlay">
                <p className="image-text">Collect 10x Point for Free Delivery</p>
                <a href="index9.html" className="btn-white image-btn">Shop Now &gt;</a>
            </div>
        </div>
    </div>
    <div>
        <div className="cart-image" style={{ borderRadius: '8px', background: 'rgba(0, 0, 0, 0.40)' }}>
            <img src=""  />
            <div className="card-img-overlay">
                <p className="image-text">50% Off for Fresh Vegetables</p>
                <a href="index9.html" className="btn-white image-btn">Shop Now &gt;</a>
            </div>
        </div>
    </div>
</div>
  );
}

export default İndirimCartlari;
