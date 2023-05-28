import React from 'react';
import '../Header/header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <input type="text" placeholder="Buscar" />
        <button>Buscar</button>
      </div>
      <div className="header-right">
        <Link to="/"> HOME </Link>
        <Link to="/heroes"> HEROES </Link>
        <Link to="/villanos"> VILLANOS </Link>
      </div>
    </header>
  );
}

export default Header;
