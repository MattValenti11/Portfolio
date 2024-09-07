import React from 'react';
import LandingPage from './components/LandingPage'; // Importa el componente de la landing page
import './styles/LandingPage.css'; // Importa los estilos

const App = () => {
  return (
    <div className="App">
      <LandingPage /> {/* Renderiza el componente LandingPage */}
    </div>
  );
};

export default App;
