import React from 'react';
import './VillainCard.css';
import villainsData from '../../db/dbVillanos.json';
type MyProps = { villanos: any};
const VillainCard = ({villanos}: MyProps) => {
  return (
    <div className="villains-container">
      {villanos.map((villano, index) => (
        <div className="villain-card" key={index}>
          <div className="villain-info">
            <div className="villain-image-container">
              <img src={villano.imagen} alt={villano.nombre} className="villain-image" />
            </div>
            <div className="villain-details">
              <h3>{villano.nombre}</h3>
              <p>Edad: {villano.edad}</p>
            </div>
          </div>
          <div className="villain-section">
            <h4>Habilidades</h4>
            <ul>
              {villano.habilidades.map((habilidad, index) => (
                <li key={index}>{habilidad}</li>
              ))}
            </ul>
          </div>
          <div className="villain-section">
            <h4>Origen</h4>
            <p>{villano.origen}</p>
          </div>
          <div className="villain-section">
            <h4>Poder</h4>
            <p>{villano.poder}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VillainCard;
