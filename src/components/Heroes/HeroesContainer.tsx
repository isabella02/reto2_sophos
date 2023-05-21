import React from 'react';
import './HeroCard.css';


function HeroCard({ hero }) {
  const { nombre, imagen, edad, habilidades, debilidades, relaciones_personales } = hero;

  return (
    <div className="container">
    <div className="hero-card">
        
      <div className="hero-info">
        
        <div className="hero-image-container">
          <img src={imagen} alt={nombre} className="hero-image" />
        </div>
        <div className="hero-details">
          <h3>{nombre}</h3>
          <p>Edad: {edad}</p>
          <button className="hero-button red">Peleas</button>
        </div>
      </div>
      <div className="hero-section">
        <h4>Habilidades</h4>
        <ul>
          {habilidades.map((habilidad, index) => (
            <li key={index}>{habilidad}</li>
          ))}
        </ul>
      </div>
      <div className="hero-section">
        <h4>Debilidades</h4>
        <ul>
          {debilidades.map((debilidad, index) => (
            <li key={index}>{debilidad}</li>
          ))}
        </ul>
      </div>
      <div className="hero-section">
        <h4>Relaciones Personales</h4>
        <ul>
          {relaciones_personales.map((relacion, index) => (
            <li key={index}>{relacion}</li>
          ))}
        </ul>
      </div>
      <div className="hero-buttons">
        <button className="hero-button green">Agenda</button>
        <button className="hero-button blue">Patrocinadores</button>
      </div>
    </div>
    </div>
  );
}

export default HeroCard;
