import React, { useState, useEffect } from 'react';
import '../styles/ScrollToTopButton.css'; // Ruta del archivo CSS

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) { // Muestra el botón si se ha desplazado más de 200px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Limpia el evento cuando el componente se desmonta
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? 'is-visible' : ''}`}
      onClick={handleClick}
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
