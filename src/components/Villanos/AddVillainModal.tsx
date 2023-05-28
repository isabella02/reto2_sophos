import React, { useState } from 'react';
import villainsData from '../../db/dbVillanos.json';
import './AddVillano.css'


const AddVillainModal = ({onSave})=> {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [origen, setOrigen] = useState('');
  const [poder, setPoder] = useState('');
  const [habilidades, setHabilidades] = useState('');
  const [imagen, setImagen] = useState('');

  const handleSave = () => {
    // Crear un objeto con los datos del nuevo villano
    const newVillain = {
      nombre,
      edad,
      origen,
      poder,
      habilidades: habilidades.split(',').map(habilidad => habilidad.trim()), // Separar habilidades por comas y eliminar espacios
      imagen,
    };

    // Llamar a la función onSave pasando el nuevo villano como argumento
    onSave(newVillain);
    villainsData.villanos.push(newVillain);

    // Restaurar los valores de los inputs del formulario
    setNombre('');
    setEdad('');
    setOrigen('');
    setPoder('');
    setHabilidades('');
    setImagen('');
  };

  return (
    <div className="modal-container">
      <h3>Agregar Villano</h3>
      <div className="input-container">
        <label>Nombre:</label>
        <input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
      </div>
      <div className="input-container">
        <label>Edad:</label>
        <input type="text" placeholder="Edad" value={edad} onChange={e => setEdad(e.target.value)} />
      </div>
      <div className="input-container">
        <label>Origen:</label>
        <input type="text" placeholder="Origen" value={origen} onChange={e => setOrigen(e.target.value)} />
      </div>
      <div className="input-container">
        <label>Poder:</label>
        <input type="text" placeholder="Poder" value={poder} onChange={e => setPoder(e.target.value)} />
      </div>
      <div className="input-container">
        <label>Habilidades (separadas por comas):</label>
        <textarea placeholder="Habilidades" value={habilidades} onChange={e => setHabilidades(e.target.value)} />
      </div>
      <div className="input-container">
        <label>URL de la imagen:</label>
        <input type="text" placeholder="URL de la imagen" value={imagen} onChange={e => setImagen(e.target.value)} />
      </div>
      <div className="button-container">
        <button onClick={handleSave}>Guardar</button>
      </div>
    </div>
  );
};

export default AddVillainModal;
