import React from 'react';
import Header from './Header'; // Importa el nuevo componente Header
import Projects from './Projects'; // Importa el componente Projects
import '../styles/LandingPage.css'; // Importa los estilos de la LandingPage

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <Header /> {/* Agrega el header */}
      <main className="landing-page-main-content">
        <div className="landing-page-social-icons">
          <a href="https://linkedin.com" className="landing-page-icon landing-page-linkedin">LinkedIn</a>
          <a href="https://github.com" className="landing-page-icon landing-page-github">GitHub</a>
        </div>
        <div className="landing-page-intro-text">
          <h1 className="landing-page-intro-title">HOLA, SOY MATIAS VALENTI</h1>
          <p className="landing-page-intro-paragraph">
          Un desarrollador web orientado a resultados, especializado en la creación y gestión de sitios web y aplicaciones web que impulsan el éxito del producto en general.
          </p>
          <a href="#projects" className="landing-page-projects-button">PROYECTOS</a>
        </div>
      </main>
      <Projects /> {/* Asegúrate de que el componente Projects esté aquí */}
    </div>
  );
};

export default LandingPage;
