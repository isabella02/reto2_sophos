import React from 'react';
import Header from './components/Header/Header.tsx';
import ContainerMejoresH from './components/Heroes/ContainerMejoresH.tsx';
import heroesData from './db/dbHeroes.json';
import HeroCard from "./components/Heroes/HeroesContainer.tsx";
import VillanoContenedor from "./components/Villanos/VillanosContenedores.tsx"

function App() {
  return (
    <div>
      <Header />
      {/* Resto del contenido de tu aplicación */}

      <div>
      <ContainerMejoresH />
      </div>
      <div className="App">
        <h1>Mis Superhéroes</h1>
        <div>
        {heroesData.heroes.map((hero, index) => (
          <HeroCard key={index} hero={hero} />
        ))}
        </div>

        <div>
          <VillanoContenedor/>        
        </div>
        
    </div>
    </div>
    
  );
}

export default App;
