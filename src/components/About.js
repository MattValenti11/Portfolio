import React from 'react';
import '../styles/About.css'; // Ruta local para el archivo CSS

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-section">
        <h2 className="about-title">Conóceme</h2>
        <p className="about-text">
          Soy un <strong>desarrollador web especializado en frontend</strong>, con una sólida experiencia en el diseño y gestión de interfaces que buscan maximizar el <strong>éxito</strong> de sitios y aplicaciones web. Mi enfoque está en crear soluciones intuitivas y visualmente atractivas que ofrezcan una experiencia de usuario excepcional. Te invito a explorar algunos de mis trabajos destacados en la sección de <strong>Proyectos</strong>, donde podrás ver ejemplos de cómo he abordado diversos desafíos de diseño y desarrollo.
          <br /><br />
          Me motiva profundamente el <strong>desarrollo continuo</strong> y el <strong>aprendizaje constante</strong> en el campo del desarrollo web. Estoy comprometido con la mejora continua y con la implementación de las mejores prácticas en todos mis proyectos. Mi objetivo es aplicar mis habilidades en entornos dinámicos y desafiantes, contribuyendo a soluciones innovadoras que realmente marquen la diferencia.
          <br /><br />
          Estoy en constante búsqueda de nuevas oportunidades laborales que me permitan <strong>aplicar mis habilidades</strong>, expandir mis conocimientos y seguir creciendo profesionalmente. Si conoces una oportunidad que se alinee con mi experiencia y objetivos, no dudes en <strong>ponerte en contacto conmigo</strong>. Estoy abierto a desafíos que me permitan seguir desarrollándome y aportando valor a proyectos innovadores.
        </p>
        <a href="mailto:contacto@example.com" className="contact-button">Contactarme</a>
      </div>
      <div className="skills-section">
        <h2 className="skills-title">Mis habilidades</h2>
        <ul className="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>GIT</li>
          <li>Github</li>
          <li>Responsive Design</li>
          <li>Terminal</li>
          {/* Agrega más habilidades según sea necesario */}
        </ul>
      </div>
    </div>
  );
};

export default About;
