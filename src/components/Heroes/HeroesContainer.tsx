import React, { useState } from 'react';
import './HeroCard.css';

function getPatrocinadorMontoMasAlto(patrocinadores) {
  let patrocinadorMontoMasAlto = null;
  let montoMasAlto = 0;

  for (let i = 0; i < patrocinadores.length; i++) {
    const patrocinador = patrocinadores[i];
    if (patrocinador.monto > montoMasAlto) {
      montoMasAlto = patrocinador.monto;
      patrocinadorMontoMasAlto = patrocinador.nombre;
    }
  }

  return patrocinadorMontoMasAlto;
}


function getVillanoMasRepetido(peleas) {
  // Objeto para almacenar el conteo de repeticiones de cada villano
  const conteoVillanos = {};

  // Recorrer la lista de peleas y contar las repeticiones de cada villano
  peleas.forEach((pelea) => {
    const villano = pelea.villano;
    if (conteoVillanos[villano]) {
      conteoVillanos[villano]++;
    } else {
      conteoVillanos[villano] = 1;
    }
  });

  // Encontrar el villano con mayor número de repeticiones
  let villanoMasRepetido = '';
  let maxRepeticiones = 0;

  for (const villano in conteoVillanos) {
    if (conteoVillanos[villano] > maxRepeticiones) {
      villanoMasRepetido = villano;
      maxRepeticiones = conteoVillanos[villano];
    }
  }

  return villanoMasRepetido;
}


type PatrocinadoresModalProps = {
  setModalPatrocinadores: any;
  patrocinadores: any;
  nombre: any;
};

export const PatrocinadoresModal = ({
  setModalPatrocinadores,
  patrocinadores,
  nombre,
}: PatrocinadoresModalProps) => {
  const patrocinadorMontoMasAlto = getPatrocinadorMontoMasAlto(patrocinadores);
  return (
    <>
      <div className="modal">
        {/* Contenido del modal */}
        <div className="modal-content">
          <span className="close" onClick={() => setModalPatrocinadores(false)}>
            &times;
          </span>
          {/* Mostrar información de los patrocinadores */}
          <h3>Patrocinadores de {nombre}</h3>
          <p className="villano-mas-peleado">El patrocinador con el monto más alto es: {patrocinadorMontoMasAlto}</p>
          <ul>
            {patrocinadores.map((patrocinador: any, index: number) => (
              <li key={index}>
                <p>Nombre: {patrocinador.nombre}</p>
                <p>Monto: {patrocinador.monto}</p>
                <p>Origen del dinero: {patrocinador.origen_dinero}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

type AgendaModalProps = {
  setModalAgenda: any;
  agenda: any;
  nombre: any;
};

export const AgendaModal = ({ setModalAgenda, agenda, nombre }: AgendaModalProps) => {
  return (
    <>
      <div className="modal">
        {/* Contenido del modal */}
        <div className="modal-content">
          <span className="close" onClick={() => setModalAgenda(false)}>
            &times;
          </span>
          {/* Mostrar información de la agenda */}
          <h3>Agenda de {nombre}</h3>
          <ul>
            {agenda.map((evento: any, index: number) => (
              <li key={index}>
                <p>Fecha: {evento.fecha}</p>
                <p>Evento: {evento.evento}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};


type peleasprops = { setModalPeleas: any; peleas: any; nombre:any};
export const PeleasModal =({setModalPeleas, peleas, nombre}:peleasprops) =>{
  const villanoMasRepetido = getVillanoMasRepetido(peleas);
  return(
    <>
        <div className="modal">
          {/* Contenido del modal */}
          <div className="modal-content">
            <span className="close" onClick={() =>setModalPeleas(false)}>
              &times;
            </span>
            {/* Mostrar información de las peleas */}
            <h3>Peleas de {nombre}</h3>
            <p className="villano-mas-peleado">Tiene mas peleas contra:  {villanoMasRepetido}</p>
            <ul>
              {peleas.map((pelea, index) => (
                <li key={index}>
                  <p>Villano: {pelea.villano}</p>
                  <p>Resultado: {pelea.resultado}</p>
                  <p>Fecha: {pelea.fecha}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </>
  );
};

function HeroCard({ hero }) {
  const { nombre, imagen, edad, habilidades, debilidades, relaciones_personales, peleas,agenda, patrocinadores } = hero;
  const [modalPeleas, setModalPeleas] = useState(false);
  const [modalAgenda, setModalAgenda] = useState(false);
  const [modalPatrocinadores, setModalPatrocinadores] = useState(false);
  return (
    <>
      
    <div className="container">
    <div className="hero-card">
        
      <div className="hero-info">
        
        <div className="hero-image-container">
          <img src={imagen} alt={nombre} className="hero-image" />
        </div>
        <div className="hero-details">
          <h3>{nombre}</h3>
          <p>Edad: {edad}</p>
          <button className="hero-button red" onClick={()=> setModalPeleas(true)}>Peleas</button>
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
        <button className="hero-button green" onClick={()=> setModalAgenda(true)}>Agenda</button>
        <button className="hero-button blue" onClick={()=> setModalPatrocinadores(true)}>Patrocinadores</button>
      </div>
    </div>
    </div>
    {modalPeleas && (
      <PeleasModal setModalPeleas={setModalPeleas} peleas={peleas} nombre={nombre}/>
    )}
    {modalAgenda &&(
        <AgendaModal setModalAgenda={setModalAgenda} agenda={agenda} nombre={nombre}/>
      )}
    {modalPatrocinadores &&(
        <PatrocinadoresModal setModalPatrocinadores={setModalPatrocinadores} patrocinadores={patrocinadores} nombre={nombre}/>
      )}
    </>
  );
}

export default HeroCard;
