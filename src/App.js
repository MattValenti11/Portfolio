import React from 'react';
import LandingPage from './components/LandingPage'; // Importa el componente de la landing page
import Header from './components/Header'; // Importa el componente de la landing page
import './styles/LandingPage.css'; // Importa los estilos
import ScrollToTopButton from './components/ScrollToTopButton'; // Asegúrate de ajustar la ruta

const App = () => {
  return (
    <div className="App">
      <Header/>
      <LandingPage /> {/* Renderiza el componente LandingPage */}
      <ScrollToTopButton />
    </div>
  );
};

export default App;
