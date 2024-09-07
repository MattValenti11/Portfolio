import React, { useState } from 'react';
import '../styles/Contact.css'; // Ruta local para el archivo CSS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Form submitted:', formData);
  };

  return (
    <div id="contact" className="contact-container">
      <div className="contact-inner">
        <h2 className="contact-title">Contáctame</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-form-group">
            <label htmlFor="name" className="contact-label">Nombre y Apellido</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="contact-input"
            />
          </div>
          <div className="contact-form-group">
            <label htmlFor="email" className="contact-label">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="contact-input"
            />
          </div>
          <div className="contact-form-group">
            <label htmlFor="message" className="contact-label">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="contact-textarea"
            />
          </div>
          <button type="submit" className="contact-button">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
