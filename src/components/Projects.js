import React from 'react';
import '../styles/Projects.css'; // Importa el archivo de estilos
import dopefolioImage from '../img/dopefolio.jpeg';
import wilsonportImage from '../img/wilsonport.jpeg'; // Asegúrate de que esta ruta es correcta

const Projects = () => {
  const handleButtonClick = () => {
    window.open('http://localhost:3000/', '_blank'); // Abre la URL en una nueva pestaña
  };

  return (
    <section id="projects">
      {/* Primer proyecto - Imagen a la izquierda */}
      <div className="project-container left">
        <div className="project-image-container">
          <img src={dopefolioImage} alt="Descripción del primer proyecto" className="project-image" />
        </div>
        <div className="project-text-container">
          <h1 className="project-title">Portafolio</h1>
          <p className="project-description">
            Explora una selección de mis proyectos más destacados. Cada proyecto refleja mi experiencia y habilidades en desarrollo web y diseño. Desde soluciones innovadoras hasta implementaciones eficientes, aquí encontrarás ejemplos de mi trabajo en acción.
          </p>
          <button className="project-button" onClick={handleButtonClick}>
            Mi Proyecto
          </button>
        </div>
      </div>

      {/* Segundo proyecto - Imagen a la derecha */}
      <div className="project-container right">
        <div className="project-text-container">
          <h1 className="project-title">Otro Proyecto</h1>
          <p className="project-description">
            Este proyecto muestra un enfoque diferente en el diseño y desarrollo. La combinación de creatividad y tecnología se refleja en cada detalle, ofreciendo una experiencia de usuario única y efectiva.
          </p>
          <button className="project-button" onClick={handleButtonClick}>
            Mi Proyecto
          </button>
        </div>
        <div className="project-image-container">
          <img src={wilsonportImage} alt="Descripción del segundo proyecto" className="project-image" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
