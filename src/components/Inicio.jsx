import React from 'react'
import './Inicio.css'

export default function Inicio() {
  return (
    <section className="hero">
      <div className="sparkles">
        <span className="sparkle">✦</span>
        <span className="sparkle">✦</span>
      </div>

      <div className="hero-content">
        <h1>
          Bienvenido. Soy <span className="highlight">Camila.</span>
        </h1>
        <p>
          Estoy dando mis primeros pasos en el desarrollo web. <br />
          Me apasiona aprender, probar cosas nuevas y construir proyectos que me ayuden a crecer.
           </p>
      </div>
    </section>
  );
}
