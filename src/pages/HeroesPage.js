import React, { useState } from 'react';
import HeroCard from '../components/Heroes/HeroesContainer.tsx';
import heroesData from '../db/dbHeroes.json';
import Header from '../components/Header/Header.tsx';
function HeroesPage() {
  const [filtroHabilidades, setFiltroHabilidades] = useState([]);
  const [filtroEdad, setFiltroEdad] = useState('');
  const[Fedad, setEdad]= useState(false);
  const[FHabi, setHabi]= useState(false);
  const[FSerch, setSerch]= useState(false);
  const [searchTerm, setSearchTerm] = useState('');


  function handleFiltroHabilidades(habilidades) {
    setFiltroHabilidades(habilidades);
  }

  function handleFiltroEdad(edad) {
    setFiltroEdad(edad);
  }

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value);
    setEdad(false);
    setHabi(false); 
    setSerch(true)
  }


  const heroesFiltrados = filtroHabilidades.length > 0
  ? heroesData.heroes.filter(hero => hero.habilidades.some(habilidad => filtroHabilidades.some(filtro =>
      habilidad.toLowerCase().includes(filtro.toLowerCase())
    )
  ))
  : heroesData.heroes;

  const filteredHeroes = heroesFiltrados.filter(hero =>
    hero.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const heroesFiltradosPorEdad = filtroEdad
  ? heroesFiltrados.filter(hero => {
      if (filtroEdad === 'adolescentes') {
        return hero.edad < 18;
      } else if (filtroEdad === 'adultos') {
        return hero.edad >= 18;
      }
      return true;
    })
  : heroesFiltrados;

  return (
    <div>
    <Header />
    <div className="App">
      <h1>Mis Superhéroes</h1>
      <div>
      <div>
      <button onClick={() => { handleFiltroHabilidades(['Vuelo']); setEdad(false); setHabi(true); setSerch(false) }} style={{ backgroundColor: '#a5ff', color: 'white', padding: '10px', borderRadius: '5px' }}>Filtrar por Vuelo</button>
      <button onClick={() => { handleFiltroHabilidades(['fuerza']); setEdad(false); setHabi(true); setSerch(false) }} style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px' }}>Filtrar por Fuerza</button>
      {/* Agrega más botones de filtro según tus habilidades */}
      </div>

      <div>
        <button onClick={() => { handleFiltroEdad('adolescentes'); setEdad(true); setHabi(false); setSerch(false) }} style={{ backgroundColor: 'orange', color: 'white', padding: '10px', borderRadius: '5px' }}>Filtrar Adolescentes</button>
        <button onClick={() => { handleFiltroEdad('adultos'); setEdad(true); setHabi(false); setSerch(false) }} style={{ backgroundColor: 'purple', color: 'white', padding: '10px', borderRadius: '5px' }}>Filtrar Adultos</button>
      </div>

      <div>
            <input
              type="text"
              placeholder="Buscar superhéroe por nombre"
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
          </div>

          { FHabi && heroesFiltrados.map((hero, index) => (
              <HeroCard key={index} hero={hero} />
          ))}

          { Fedad && heroesFiltradosPorEdad.map((hero, index) => (
            <HeroCard key={index} hero={hero} />
          ))}

          
          { FSerch && filteredHeroes.map((hero, index) => (
              <HeroCard key={index} hero={hero} />
            ))}

          {!FSerch && !FHabi && !Fedad &&  heroesData.heroes.map((hero, index) => (
            <HeroCard key={index} hero={hero} />
          ))}
      </div>
   </div>
  </div>
  );
}

export default HeroesPage;
