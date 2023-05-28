import React, { useState } from 'react';
import Header from '../components/Header/Header.tsx';
import VillanoContenedor from "../components/Villanos/VillanosContenedores.tsx"
import villainsData from '../db/dbVillanos.json';
import AddVillainModal from '../components/Villanos/AddVillainModal.tsx';
function VillainsPage() {

  const [villanos, setVillains] = useState(villainsData.villanos);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSaveVillain = (newVillain) => {
    // Agregar el nuevo villano al estado
    setVillains(prevVillains => [...prevVillains, newVillain]);

    // Cerrar el modal
    setIsModalOpen(false);
    console.log(villanos)
  };
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredVillanos = villanos.filter(villano =>
    villano.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <h1>Villanos</h1>
        <div>
        <button
          onClick={() => setIsModalOpen(true)}
          style={{
            backgroundColor: "#2596be",
            color: "#ffffff",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
            marginBottom: "20px",
            marginLeft: "20px",
          }}
        >
          Agregar Villano
        </button>
          {isModalOpen && <AddVillainModal onSave={handleSaveVillain}/>}
        </div>
        <div>
        <input
          type="text"
          placeholder="Buscar villano por nombre"
          value={searchTerm}
          onChange={handleSearchTermChange}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "20px",
            marginLeft: "20px",
          }}
        />
      </div>
        <div>
          { <VillanoContenedor villanos={filteredVillanos}/>   }     
        </div>
        
    </div>
  );
}

export default VillainsPage;
