import React from 'react';
import '../styles/Breadcumb.css';

const Breadcumb = () => {
  return (
    <div>
      <nav className="nav-links">
        <a href="#!">Home</a> {'>'} <a href="#!">Laptops</a>
      </nav>
    </div>
  );
};

export default Breadcumb;
