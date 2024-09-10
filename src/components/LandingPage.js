import React from 'react';
import Header from './Header'; // Importa el componente Header
import Projects from './Projects'; // Importa el componente Projects
import About from './About'; // Importa el componente About
import Contact from './Contact';
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
            "Desarrollador web orientado a resultados, con experiencia en la creación y gestión de sitios web y aplicaciones web que impulsan el éxito del producto. Especializado en soluciones personalizadas que maximizan tanto la funcionalidad como la experiencia del usuario, asegurando que cada proyecto cumpla con los objetivos comerciales."
          </p>
          <a href="#projects" className="landing-page-projects-button">PROYECTOS</a>
        </div>
      </main>
      <div className="landing-page-separator"></div> {/* Separador de 5 cm entre LandingPage y About */}
      <div id="about">
        <About />
      </div>
      <div className="landing-page-separator"></div> {/* Separador de 5 cm entre About y Projects */}
      <div id="projects">
        <Projects />
      </div>
      <div className="landing-page-separator"></div> {/* Separador de 5 cm entre Projects y Contact */}
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default LandingPage;
