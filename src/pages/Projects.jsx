import { useEffect, useState } from "react";
import "./Projects.css"; 

function Projects() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/proyectos")
      .then(res => res.json())
      .then(data => setProyectos(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="projects-container">
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        {proyectos.map(proj => (
          <div className="project-card" key={proj._id}>
            <img src={proj.imagen} alt={proj.titulo} />
            <h3>{proj.titulo}</h3>
            <p>{proj.descripcion}</p>
            <p className="tech">{proj.tecnologias.join(" · ")}</p>
            <div className="buttons">
              <a href={proj.github} target="_blank" rel="noopener noreferrer">GitHub</a>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;