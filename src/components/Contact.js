import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8z58mi9', 'template_lmswi1r', e.target, '30GrvQnS4y5EdSAL0')
      .then((result) => {
        console.log(result.text);
        setStatus('Mensaje enviado con éxito!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        console.log(error.text);
        setStatus('Error al enviar el mensaje. Inténtalo de nuevo.');
      });
  };

  return (
    <div className="contact-container">
      <h2>Contáctame</h2>
      <p className="intro-text">
        Estoy aquí para ayudarte con cualquier consulta o proyecto. Completa el formulario a continuación y me pondré en contacto contigo para ofrecerte la asistencia que necesites. Tu mensaje es importante para mí, y me aseguraré de responderte lo antes posible.
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Correo Electrónico:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Mensaje:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default Contact;
