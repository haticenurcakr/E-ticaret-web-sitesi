
import React, { useState } from 'react';
import './css/style.css'; // Eğer CSS dosyanızın yolu bu şekilde
import Elma from './assets/elma.jpg';
import Muz from './assets/banan.webp';
import Mantar from './assets/mantar.jpg';
import Pil from './assets/pil.jpg';
import Domates from './assets/domates-1.jpg';
import Yumurta from './assets/yumurta.jpg';
import Cizgi from './assets/grid-row-2.svg'
import Cizgi2 from './assets/grid.svg'
import Cizgi3 from './assets/grid.svg'

function Urunler() {
  return (
    <div>
      {/* akordion */}
      <div className="container">
        <div className="ana-kutu">
          <div className="kutu">
            <div className="product-cont">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button bg-white acordion-1"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                     Departments
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                  >
                    <div className="accordion-body">
                      <div className="product-category">
                        <ul className="checklist">
                          <li>
                            <input type="checkbox" id="tent" />
                            <label htmlFor="tent">Fruity & Vegetables</label>
                            <div className="product-category"></div>
                          </li>
                          <li>
                            <input type="checkbox" id="tent" />
                            <label htmlFor="tent">Fruity & Vegetables</label>
                            <div className="product-category"></div>
                          </li>
                          <li>
                            <input type="checkbox" id="tent" />
                            <label htmlFor="tent">Fruity & Vegetables</label>
                            <div className="product-category"></div>
                          </li>
                          <li>
                            <input type="checkbox" id="tent" />
                            <label htmlFor="tent">Fruity & Vegetables</label>
                            <div className="product-category"></div>
                          </li>
                          <li>
                            <input type="checkbox" id="tent" />
                            <label htmlFor="tent">Fruity & Vegetables</label>
                            <div className="product-category"></div>
                          </li>
                          <li>
                            <input type="checkbox" id="tent" />
                            <label htmlFor="tent">Fruity & Vegetables</label>
                            <div className="product-category"></div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* akordion 1 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button bg-white acordion-1"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                     Brands
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                  >
                    <div className="accordion-body">
                      <div className="product-category">
                        <ul className="checklist">
                          <li>
                            <input type="checkbox" id="tent" />
                            <label htmlFor="tent">Fruity & Vegetables</label>
                            <div className="product-category"></div>
                          </li>
                          <li>
                            <input type="checkbox" id="tent" />
                            <label htmlFor="tent">Fruity & Vegetables</label>
                            <div className="product-category"></div>
                          </li>
                          <li>
                            <input type="checkbox" id="tent" />
                            <label htmlFor="tent">Fruity & Vegetables</label>
                            <div className="product-category"></div>
                          </li>
                          <li>
                            <input type="checkbox" id="tent" />
                            <label htmlFor="tent">Fruity & Vegetables</label>
                            <div className="product-category"></div>
                          </li>
                          <li>
                            <input type="checkbox" id="tent" />
                            <label htmlFor="tent">Fruity & Vegetables</label>
                            <div className="product-category"></div>
                          </li>
                          <li>
                            <input type="checkbox" id="tent" />
                            <label htmlFor="tent">Fruity & Vegetables</label>
                            <div className="product-category"></div>
                          </li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Akordion 2 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button bg-white acordion-1"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      Nutrition
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                  >
                    <div className="accordion-body">
                      <div className="product-category">
                        <ul className="checklist">
                          <li>
                            <input type="checkbox" id="tent" />
                            <label htmlFor="tent">Fruity & Vegetables</label>
                            <div className="product-category"></div>
                          </li>
                          <li>
                            <input type="checkbox" id="tent" />
                            <label htmlFor="tent">Fruity & Vegetables</label>
                            <div className="product-category"></div>
                          </li>
                          <li>
                            <input type="checkbox" id="tent" />
                            <label htmlFor="tent">Fruity & Vegetables</label>
                            <div className="product-category"></div>
                          </li>
                          <li>
                            <input type="checkbox" id="tent" />
                            <label htmlFor="tent">Fruity & Vegetables</label>
                            <div className="product-category"></div>
                          </li>
                          <li>
                            <input type="checkbox" id="tent" />
                            <label htmlFor="tent">Fruity & Vegetables</label>
                            <div className="product-category"></div>
                          </li>
                          <li>
                            <input type="checkbox" id="tent" />
                            <label htmlFor="tent">Fruity & Vegetables</label>
                            <div className="product-category"></div>
                          </li>
                        
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* akordion 3 */}
              </div>
            </div>
          </div>
       
      {/* akordion end */}
      {/* katogori */}
      <div className="kutu-2">
        <div className="navbar-text" style={{ marginTop: '0%' }}>
          <div className="text-line">
            <h2 className="h2-text">Shop By Department</h2>
          </div>
        </div>
        <div className="alt-kutu">
          <div className="button-container">
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
          </div>
        </div>
        <div className="alt-kutu">
          <div className="button-container">
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
          </div>
        </div>
        {/* ... Other alt-kutu */}
        <div className="alt-kutu">
        <div className="navbar-text" style={{ marginTop: '0%' }}>
      <div className="text-line">
        <h2 className="h2-text">Explore these items</h2>
      </div>
      <div className="icons col-5">
        <img src={Cizgi} alt="Icon 1" />
        <img src={Cizgi2} alt="Icon 2" />
        <img src={Cizgi3} alt="Icon 3" />
     
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button bg-white text-dark acordion-1"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
       <span style={{ fontSize: "x-small" }}>Sort by Relevance</span>
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
      
      </div>
    </div>
  </div>
</div>

    </div>
     </div>
          <div className="ur-cont">
          <div className="card" id="content1">
                <img src={Elma} alt="Yemek 1" />
                <div className="card-tex">
                <p className='card-tex-1'>$4.89</p>
                    <p className='card-tex-2'>Elma</p>
                </div>
                <a href="index3.html" className="btn-card">Add to Cart</a>
            </div>
            <div className="card" id="content2">
                <img src={Muz} alt="Yemek 1" />
                <div className="card-tex">
                <p className='card-tex-1'>$4.89</p>
                    <p className='card-tex-2'>Muz</p>
                </div>
                <a href="index4.html" className="btn-card">Add to Cart</a>
            </div>
            <div className="card" id="content3">
                <img src={Mantar} alt="Yemek 1" />
                <div className="card-tex">
                <p className='card-tex-1'>$4.89</p>
                    <p className='card-tex-2'>Mantar</p>
                </div>
                <a href={"index5.html"} className="btn-card">Add to Cart</a>
            </div>
            <div className="card"id="content1">
                <img src={Pil} alt="Yemek 2" />
                <div className="card-tex">
                <p className='card-tex-1'>$4.89</p>
                    <p className='card-tex-2'>Pil</p>
                </div>
                <a href="index6.html" className="btn-card ">Add to Cart</a>
            </div>
        </div>
        </div>
        <div className="alt-kutu">
        <div className="ur-cont">
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
        </div>
        </div>
        <div className="alt-kutu">
        <div className="ur-cont">
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
        </div>
        </div>
        
      </div>
      </div>
      </div>
        {/* yönlendirme çubuğu */}
      <div className="container page-1">
        <div id="pagination">
          <button
            type="button"
            className="btn page-btn"
            onClick={() => changePage(-1)}
          >
            &lt;
          </button>
          <button
            type="button"
            className="btn page-btn"
            onClick={() => changePage(1)}
          >
            1
          </button>
          {/* ... Other buttons */}
          <button
            type="button"
            className="btn page-btn"
            onClick={() => changePage(5)}
          >
            2
          </button>
          <button
            type="button"
            className="btn page-btn"
            onClick={() => changePage(5)}
          >
            3
          </button>
          <button
            type="button"
            className="btn page-btn"
            onClick={() => changePage(5)}
          >
            4
          </button>
          <button
            type="button"
            className="btn page-btn"
            onClick={() => changePage(5)}
          >
            5
          </button>
          <button
            type="button"
            className="btn page-btn"
            onClick={() => changePage(5)}
          >
            &gt;
          </button>
         
        </div>
      </div>
      {/* yönlendirme çubuğu end */}
       
     
      {/* katogori end */}
      {/* ... Other content */}
    
    </div>
  );
}

export default Urunler;
