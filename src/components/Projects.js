import React from 'react';
import '../styles/Projects.css'; // Importa el archivo de estilos
import dopefolioImage from '../img/dopefolio.jpeg';

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <div className="projects-image-container">
        <img src={dopefolioImage} alt="Descripción del proyecto" className="projects-image" />
      </div>
      <div className="projects-text-container">
        <h1 className="projects-title">Título del Proyecto</h1>
        <p className="projects-description">
          Aquí va la descripción del producto. Puedes incluir información relevante y detalles que quieras destacar.
        </p>
      </div>
    </section>
  );
};

export default Projects;
