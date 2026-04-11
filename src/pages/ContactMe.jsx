import { Link } from "react-router";

const ContactMe = () => {
  // Sincronizamos con tu paleta profesional
  const colors = {
    bg: '#0b0f19',        // Fondo oscuro
    text: '#ffffff',      // Texto blanco
    textSecondary: '#94a3b8', // Gris suave
    primary: '#bfa1ff',   // Tu morado bajito
    inputBg: '#111827',   
    border: '#1f2937'     
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
      
      {/* Link de volver limpio arriba */}
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
        textAlign: 'left' // Cambiamos a alineación izquierda para que se vea más moderno
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

        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ color: colors.primary, fontSize: '0.8rem', fontWeight: 'bold' }}>NAME</label>
            <input type="text" placeholder="Your name" style={inputStyle} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ color: colors.primary, fontSize: '0.8rem', fontWeight: 'bold' }}>EMAIL</label>
            <input type="email" placeholder="email@example.com" style={inputStyle} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ color: colors.primary, fontSize: '0.8rem', fontWeight: 'bold' }}>MESSAGE</label>
            <textarea placeholder="How can I help you?" rows="5" style={inputStyle}></textarea>
          </div>
          
          <button type="submit" style={{
            backgroundColor: colors.primary,
            color: '#000000', // Texto negro sobre el botón morado para que resalte
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