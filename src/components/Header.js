import React from 'react';
import '../styles/Header.css'; // Ruta local para el archivo CSS

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <span className="header-logo-text">Mi Sitio</span>
        </div>
        <nav className="header-nav">
          <a href="/" className="header-nav-item">HOME</a>
          <a href="#about" className="header-nav-item">ABOUT</a>
          <a href="#projects" className="header-nav-item">PROJECTS</a>
          <a href="#contact" className="header-nav-item">CONTACT</a> {/* Enlace a la sección de contacto */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
