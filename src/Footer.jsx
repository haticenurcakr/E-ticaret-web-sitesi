import React from 'react';
import './css/style.css'; // Eğer CSS dosyanızın yolu bu şekilde
import Logo from './assets/02.svg';
import Konum from './assets/Group.svg'
import Tel from './assets/Phone.svg'
import Mail from './assets/Mail.svg'
function Footer() {
  return (
    <div className="container">
    <footer className="py-5" style={{marginTop:'150px'}}>
      <div className="row fotter-text">
        <div className="col-8 col-md-4 mb-3 ">
          <ul className="nav flex-column">
            <li className="nav-item mb-2" style={{ marginTop: '0%' }}>
              <a href="index.html"><img src={Logo} alt="Icon 1" /></a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <span>
                  <img className="footer-img" src={Konum} alt="Icon 1" /> 221 B Santa Monica, Los Angeles
                </span>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <span>
                  <img className="footer-img" src={Tel} alt="Icon 1" /> (+1) 923 2341 22
                </span>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <span>
                  <img className="footer-img" src={Mail} alt="Icon 1" />Contact@tanahairstudio.com
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-2 col-md-2 mb-3">
          <h5>Categories</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
              Dairy & Milk
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
              Fresh Produce
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
              Meat
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
              Snacks
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
              Frozen
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
              Vegetables
              </a>
            </li>
          </ul>
        </div>
        <div className="col-2 col-md-2 mb-3">
          <h5>Company</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
              About Us
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
              Contact Us
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
              Privacy & Poilicy
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
              Payment Method
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 offset-md-1 mb-3" style={{ margin: '0%' }}>
          <form>
            <h5>Join Our Newsletter</h5>
            <p>Your Email</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">
              Enter Your Email
              </label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            </div>
            <button className="btn btn-success" style={{ marginTop: '32px' }} type="button">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 ">
        <p>@2020 TanahAir Studio. All rights reserved.</p>
      </div>
    </footer>
  </div>
  );
}

export default Footer;
