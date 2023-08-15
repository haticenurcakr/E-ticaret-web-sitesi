
import React, { useState } from 'react';
import './css/style.css'; // Eğer CSS dosyanızın yolu bu şekilde
import Burger from './assets/Burger Menu 2.svg';
import Logo from './assets/02.svg';
import Pil from './assets/pil.jpg';

import Sepet from './assets/shopping_cart.svg';
import Navbar from './Navbar';
import Elma from './assets/elma.jpg';


import UrunList from './UrunList';

function ElmaSayfasi() {

  const productPrice = 4.11;
  const [itemCount, setItemCount] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(null);
  

  const handleMinusClick = () => {
    if (itemCount > 1) {
      setItemCount(itemCount - 1);
    }
  };

  const handlePlusClick = () => {
    setItemCount(itemCount + 1);
  };

  const handleAddToCart = () => {
    const newTotal = itemCount * productPrice;
    setTotal(newTotal);
    setCartItems([...cartItems, { name: 'Ürün Adı', quantity: itemCount, total }]);
  };

 
  const handleButtonClick = (content) => {
    const contentElement = document.getElementById('ur-content');
    contentElement.textContent = content;
    contentElement.style.display = 'block';
  };

  

  return (
    
    <div>
     
            {/* Ürün alım ve fiyat listesi */}
             {/* Ürün alım ve fiyat listesi */}
             <Navbar itemCount={itemCount} total={total} />  
             <div className="breadcrumb">
    <div className="container">
      <a href="index.html">Home</a> {'>'}
      <span style={{ color: 'green' }}>Pil</span>
    </div>
  </div>
 <div className="container">
 <div className="product-container">
   <div className="product-image">
     <img src={Pil} alt="Ürün Resmi" />
   </div>
   <div className="product-details">
     <h2 className="product-name">Ürün Adı</h2>
     <div className="discount-price">
       <span className="discount-percentage">-%20</span>
       <span className="original-price">$5.23</span>
     </div>
     <div className="discount-price">
       <span className="product-price">$4.11</span>
       <span className="product-lbs">/4lbs</span>
     </div>
     <hr style={{ marginTop: '10px' }} />
     <div className="quantity-selector">
       <div className="quantity-control">
         <button className="minus-button" onClick={handleMinusClick}>-</button>
         <div className="value">{itemCount}</div>
         <button className="plus-button" onClick={handlePlusClick}>+</button>
       </div>
       <button id="al" className="quantity-button" onClick={handleAddToCart}>Add to Cart</button>
       <button id="al" className="quantity-button-2" onClick={handleAddToCart}>Save</button>
       <div style={{ marginTop: '28px' }}>
         <span className="minimum-order">$10.00 cart minimum to order</span>
       </div>
     </div>
   </div>
 </div>
</div>
{/* Ürün alım ve fiyat listesi sonu */}

{/* Ürün açıklama */}
<div className="container">
 <div className="ur-container">
   <div className="ur-buttons box rounded">
     <button
       className="ur-button"
       onClick={() => handleButtonClick("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ac tellus vitae facilisis. Nullam scelerisque libero vel libero vestibulum. In eget tristique quam. Quisque auctor erat eu sapien fermentum, id malesuada odio semper. Etiam sed metus nec turpis auctor venenatis.")}
       data-content="İçerik 2"
     >
       Description
     </button>
     <hr />
     <button
       className="ur-button"
       onClick={() => handleButtonClick("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ac tellus vitae facilisis. Nullam scelerisque libero vel libero vestibulum. In eget tristique quam. Quisque auctor erat eu sapien fermentum, id malesuada odio semper. Etiam sed metus nec turpis auctor venenatis. Fusce vitae libero vel velit vehicula laoreet vel nec justo. Sed volutpat, ipsum eget pharetra gravida, nunc neque lacinia arcu, in pulvinar elit eros eu quam. Integer tincidunt augue a tincidunt venenatis. Sed efficitur congue dui, id gravida justo rhoncus a. Integer bibendum, lectus at sollicitudin tincidunt, mauris ligula fringilla velit, et euismod nisi tortor vel elit. Vivamus eleifend eget turpis ut vestibulum. Duis non euismod ante.")}
       data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. ..."
     >
       Nutrional Facts
     </button>
     <hr />
     <button
       className="ur-button"
       onClick={() => handleButtonClick("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ac tellus vitae facilisis. Nullam scelerisque libero vel libero vestibulum. In eget tristique quam. Quisque auctor erat eu sapien fermentum, id malesuada odio semper. Etiam sed metus nec turpis auctor venenatis.")}
       data-content="İçerik 2"
     >
       Features
     </button>
     <hr />
     <button
       className="ur-button"
       onClick={() => handleButtonClick("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ac tellus vitae facilisis. Nullam scelerisque libero vel libero vestibulum. In eget tristique quam. Quisque auctor erat eu sapien fermentum, id malesuada odio semper. Etiam sed metus nec turpis auctor venenatis. Fusce vitae libero vel velit vehicula laoreet vel nec justo. Sed volutpat, ipsum eget pharetra gravida, nunc neque lacinia arcu, in pulvinar elit eros eu quam. Integer tincidunt augue a tincidunt venenatis. Sed efficitur congue dui, id gravida justo rhoncus a. Integer bibendum, lectus at sollicitudin tincidunt, mauris ligula fringilla velit, et euismod nisi tortor vel elit. Vivamus eleifend eget turpis ut vestibulum. Duis non euismod ante.")}
       data-content="İçerik 2"
     >
      Produces of
     </button>
   </div>
   <div className="ur-content-area">
     <div className="ur-content" id="ur-content">
       Butonlara tıklayınca burada yazılar görüntülenecek.
     </div>
   </div>
 </div>
</div>
{/* Ürün açıklama sonu */}




            
      </div>
   
 ) ;
}

export default ElmaSayfasi;



