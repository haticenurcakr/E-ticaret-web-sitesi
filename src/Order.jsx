

import React from 'react';
import './css/style.css'; // Eğer CSS dosyanızın yolu bu şekilde
import Burger from './assets/Burger Menu 2.svg';
import Logo from './assets/02.svg';
import Adam from './assets/user.svg';
import Kalp from './assets/favorite_border.svg';
import Sepet from './assets/shopping_cart.svg';
import Elma from './assets/elma.jpg';
import Muz from './assets/banan.webp';
function Navbar({ itemCount , total}) {
  return (
    <div>
    <div className="breadcrumb">
      <div className="container">
        <a href="#">Home</a> &gt;
        <span style={{ color: 'green' }}>Pay</span>
      </div>
    </div>

    <div className="container">
      <div className="ana-kutu-2">
        <div className="kutu-1-2 col-8">
          <h1 className="h1-1">Checkout</h1>
          <h2 className="h2-2">Billing Details</h2>

          <div className="row g-3">
  <div className="col-6">
    <label htmlFor="firstName" className="form-label">
      First name
    </label>
    <input
      type="text"
      className="form-control"
      id="firstName"
      placeholder=""
      value=""
      required=""
    />
    <div className="invalid-feedback">Valid first name is required.</div>
  </div>
  <div className="col-6">
    <label htmlFor="lastName" className="form-label">
      Last name
    </label>
    <input
      type="text"
      className="form-control"
      id="lastName"
      placeholder=""
      value=""
      required=""
    />
    <div className="invalid-feedback">Valid last name is required.</div>
  </div>
</div>

            <div>
              <label htmlFor="address2" className="form-label">
              Country
              </label>
              <input
                type="text"
                className="form-control"
                id="address2"
               
              />
            </div>

            <div>
        <label htmlFor="address2" className="form-label">
        Street Address
        </label>
        <input
          type="text"
          className="form-control"
          id="address2"
        
        />
      </div>

      <div>
        <label htmlFor="address2" className="form-label">
        Town/City
        </label>
        <input
          type="text"
          className="form-control"
          id="address2"
          
        />
      </div>

      <div>
        <label htmlFor="address" className="form-label">
        State
        </label>
        <input
          type="text"
          className="form-control"
          id="address"
         
        />
       
      </div>

      <div>
        <label htmlFor="address2" className="form-label">
        Postcode
        </label>
        <input
          type="text"
          className="form-control"
          id="address2"
         
        />
      </div>

      <div>
        <label htmlFor="address2" className="form-label">
        Phone Number
        </label>
        <input
          type="text"
          className="form-control"
          id="address2"
        />
      </div>

      <div>
        <label htmlFor="address2" className="form-label">
        Email Address
        </label>
        <input
          type="text"
          className="form-control"
          id="address2"
          
        />
      </div>



          <div className="form-check" style={{ marginTop: 20 }}>
            <input
              type="checkbox"
              className="form-check-input"
              id="same-address"
            />
            <label className="form-check-label" htmlFor="same-address">
            Create an account?            </label>
          </div>

          <div className="col-8">
            <h2 className="h2-2">Additional Information</h2>
            <label htmlFor="address2" className="form-label">
            Order Notes (Optional)
            </label>
            <input
              type="text"
              className="form-control check-box-info"
              id="address2"
              placeholder="Notes about your order"
            />
          </div>
        </div>
      

      <div className="kutu-2-3 float-right">
        <div className="box float-right rounded">
          <h2 className="h2-2" style={{ marginTop: 0 }}>
          Your Order
          </h2>
          <div className="product">
            <img src={Elma} alt="Ürün 1" />
            <div className="product-info">
              <h3 className="order-1">Elma</h3>
              <p className="order-2">$8.21 x1</p>
            </div>
          </div>

<hr />

          <div className="total">
            <p className="total-1">Sub Total</p>
            <p className="total-amount">$8.21</p>
          </div>
          <div className="total">
            <p className="total-1">Shipping</p>
            <p className="total-amount">$5.00</p>
          </div>
          <hr />
          <div className="total">
            <p className="total-1">Total</p>
            <p className="total-amount">$12.21</p>
          </div>
          <button className="buy-button rounded">Contonue to Payment</button>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}

export default Navbar;
