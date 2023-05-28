import React from 'react';
import Header from './components/Header/Header.tsx';
import ContainerMejoresH from './components/Heroes/ContainerMejoresH.tsx';
import heroesData from './db/dbHeroes.json';
import HeroCard from "./components/Heroes/HeroesContainer.tsx";
import VillanoContenedor from "./components/Villanos/VillanosContenedores.tsx"
import VillainsPage from './pages/VillainsPage.js';
import HeroesPage from './pages/HeroesPage.js';
import Router from './router/Router.tsx';

function App() {
  return (
    <>
      <Router/>
    </>
    
  );
}

export default App;
