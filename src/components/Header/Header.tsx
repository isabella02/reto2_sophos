import React from 'react';
import '../Header/header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <input type="text" placeholder="Buscar" />
        <button>Buscar</button>
      </div>
      <div className="header-right">
        <a href="/">Enlace 1</a>
        <a href="/">Enlace 2</a>
      </div>
    </header>
  );
}

export default Header;
