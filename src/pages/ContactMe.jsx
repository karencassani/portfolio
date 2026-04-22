import { Link } from "react-router"; // Cambié a react-router-dom por seguridad
import React, { useState } from "react";

const ContactMe = () => {
  // 1. Estado para capturar los datos (Igual al de tu amigo)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const colors = {
    bg: '#0b0f19',        
    text: '#ffffff',      
    textSecondary: '#94a3b8', 
    primary: '#bfa1ff',   
    inputBg: '#111827',   
    border: '#1f2937'     
  };

  // 2. Función para manejar los cambios en los inputs
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. Función para enviar el correo (Llamando a tu api/send)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending... 💌');

    try {
      const response = await fetch('/api/server', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully! 🌸');
        setFormData({ name: '', email: '', message: '' }); // Limpiar
      } else {
        setStatus('Error sending message ❌');
      }
    } catch (error) {
      setStatus('Connection error ❌');
    }
  };

  const inputStyle = {
    padding: '14px 20px',
    borderRadius: '12px',
    border: `1px solid ${colors.border}`,
    outline: 'none',
    fontFamily: "'Varela Round', sans-serif",
    backgroundColor: colors.inputBg,
    color: 'white',
    fontSize: '0.95rem'
  };

  return (
    <div style={{ 
      backgroundColor: colors.bg, 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: "'Varela Round', sans-serif",
      padding: '20px'
    }}>
      
      <div style={{ position: 'absolute', top: '30px', left: '30px' }}>
        <Link to="/" style={{
          textDecoration: 'none',
          color: colors.primary,
          fontSize: '0.9rem',
          fontWeight: 'bold'
        }}>
          ← Back to Home
        </Link>
      </div>

      <div style={{
        width: '100%',
        maxWidth: '500px',
        textAlign: 'left' 
      }}>
        <h2 style={{ 
          fontSize: '3rem', 
          color: colors.text, 
          marginBottom: '10px',
          fontWeight: 'bold' 
        }}>
          Get in <span style={{ color: colors.primary, fontStyle: 'italic' }}>Touch</span>
        </h2>
        <p style={{ color: colors.textSecondary, marginBottom: '40px', fontSize: '1.1rem' }}>
          Have a question or want to work together? Leave a message below.
        </p>

        {/* 4. Conectamos el onSubmit al formulario */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ color: colors.primary, fontSize: '0.8rem', fontWeight: 'bold' }}>NAME</label>
            <input 
              name="name" // NOMBRE IMPORTANTE
              type="text" 
              placeholder="Your name" 
              style={inputStyle} 
              value={formData.name}
              onChange={handleOnChange}
              required
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ color: colors.primary, fontSize: '0.8rem', fontWeight: 'bold' }}>EMAIL</label>
            <input 
              name="email" // NOMBRE IMPORTANTE
              type="email" 
              placeholder="email@example.com" 
              style={inputStyle} 
              value={formData.email}
              onChange={handleOnChange}
              required
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ color: colors.primary, fontSize: '0.8rem', fontWeight: 'bold' }}>MESSAGE</label>
            <textarea 
              name="message" // NOMBRE IMPORTANTE
              placeholder="How can I help you?" 
              rows="5" 
              style={inputStyle} 
              value={formData.message}
              onChange={handleOnChange}
              required
            ></textarea>
          </div>
          
          <button type="submit" style={{
            backgroundColor: colors.primary,
            color: '#000000', 
            border: 'none',
            padding: '15px',
            borderRadius: '12px',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer',
            marginTop: '10px',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.filter = 'brightness(1.1)';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.target.style.filter = 'brightness(1)';
            e.target.style.transform = 'translateY(0)';
          }}
          >
            SEND MESSAGE →
          </button>
        </form>

        {status && (
          <p style={{ color: colors.primary, marginTop: '20px', textAlign: 'center', fontSize: '0.9rem' }}>
            {status}
          </p>
        )}

        <div style={{ 
            marginTop: '40px', 
            borderTop: `1px solid ${colors.border}`, 
            paddingTop: '20px',
            textAlign: 'center' 
        }}>
          <p style={{ color: colors.textSecondary, fontSize: '0.8rem' }}>
            Usually responds within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;