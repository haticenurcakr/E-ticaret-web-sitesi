import React from 'react';
import './css/style.css'; // Eğer CSS dosyanızın yolu bu şekilde

function KonumBelirteci() {
  return (
    <div className="breadcrumb">
    <div className="container">
      <a href="index.html">Home</a> {'>'}
      <span style={{ color: 'green' }}>Gala Apples</span>
    </div>
  </div>
  );
}

export default KonumBelirteci;
