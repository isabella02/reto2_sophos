import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import  HeroesPage  from '../pages/HeroesPage.js'
import { HomePage } from '../pages/HomePage.js'
import VillainsPage from '../pages/VillainsPage.js'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/heroes" element={<HeroesPage />} />
        <Route path="/villanos" element={<VillainsPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router