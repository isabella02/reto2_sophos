import React from 'react';
import heroesData from '../../db/dbHeroes.json';
import './HeroesContainer.css';

function HeroesContainer() {
  // Función auxiliar para calcular el número de victorias de un superhéroe
  const calculateVictories = (peleas) => {
    let victories = 0;
    peleas.forEach(pelea => {
      if (pelea.resultado === "Victoria") {
        victories++;
      }
    });
    return victories;
  };

  // Ordenar los superhéroes por número de victorias de forma descendente
  const sortedHeroes = heroesData.heroes.sort((a, b) =>
    calculateVictories(b.peleas) - calculateVictories(a.peleas)
  );

  // Obtener los 3 superhéroes con más victorias
  const topHeroes = sortedHeroes.slice(0, 3);

  return (
    <div className="heroes-container">
      <h2>Top 3 superhéroes con más victorias</h2>
      <div className="hero-card-container">
        {topHeroes.map(hero => (
          <div className="hero-card" key={hero.nombre}>
            <img src={hero.imagen} alt={hero.nombre} />
            <h3>{hero.nombre}</h3>
            <p>Victorias: {calculateVictories(hero.peleas)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroesContainer;
