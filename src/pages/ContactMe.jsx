import { Link } from "react-router-dom";

const ContactMe = () => {
  const colors = {
    bg: '#fdf2f8',
    text: '#5c4b6b',
    primary: '#f9a8d4',
    secondary: '#e9d5ff'
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
      
      {/* Botón sutil en la esquina superior izquierda */}
      <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
        <Link to="/" style={{
          textDecoration: 'none',
          color: colors.primary,
          fontSize: '0.9rem',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          ⬅ Volver
        </Link>
      </div>

      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '30px',
        boxShadow: `0 10px 0px ${colors.secondary}`,
        width: '100%',
        maxWidth: '450px',
        textAlign: 'center',
        border: `2px solid ${colors.secondary}`
      }}>
        <h2 style={{ color: colors.primary, marginBottom: '10px' }}>Send me a message! 💌</h2>
        <p style={{ color: colors.text, marginBottom: '25px', fontSize: '0.9rem' }}>
          ¿Tienes alguna pregunta o solo quieres decir hola?
        </p>

        {/* Aquí va tu formulario de Resend o el que estés usando */}
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="text" placeholder="Tu nombre" style={inputStyle} />
          <input type="email" placeholder="Tu email" style={inputStyle} />
          <textarea placeholder="Cuéntame algo..." rows="4" style={inputStyle}></textarea>
          
          <button type="submit" style={{
            backgroundColor: colors.primary,
            color: 'white',
            border: 'none',
            padding: '12px',
            borderRadius: '50px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 0px #f472b6',
            marginTop: '10px'
          }}>
            ENVIAR ✨
          </button>
        </form>

        {/* --- EL BOTÓN DE GO BACK ABAJO --- */}
        <div style={{ marginTop: '30px', borderTop: `1px dashed ${colors.secondary}`, paddingTop: '20px' }}>
          <Link to="/" style={{
            textDecoration: 'none',
            color: colors.text,
            fontWeight: 'bold',
            fontSize: '1rem',
            transition: '0.3s'
          }}
          onMouseOver={(e) => e.target.style.color = colors.primary}
          onMouseOut={(e) => e.target.style.color = colors.text}
          >
            🏠 Volver al inicio
          </Link>
        </div>
      </div>

      <div style={{ marginTop: '20px', fontSize: '1.2rem' }}>🌸🎀🌸</div>
    </div>
  );
};

const inputStyle = {
  padding: '12px 20px',
  borderRadius: '15px',
  border: '2px solid #f3f4f6',
  outline: 'none',
  fontFamily: "'Varela Round', sans-serif",
  backgroundColor: '#f9fafb'
};

export default ContactMe;