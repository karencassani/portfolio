import { Link } from "react-router";

const AboutMe = () => {

  const colors = {
    bg: '#0b0f19',        
    text: '#ffffff',     
    textSecondary: '#94a3b8', 
    primary: '#bfa1ff',  
    accent: '#1e1b4b'     
  };

  const badgeStyle = {
    background: 'transparent',
    color: colors.primary,
    padding: '8px 20px',
    borderRadius: '25px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    border: `1px solid ${colors.primary}`,
    display: 'inline-block',
    margin: '5px'
  };

  return (
    <div style={{ 
      backgroundColor: colors.bg, 
      minHeight: '100vh', 
      padding: '60px 20px',
      fontFamily: "'Varela Round', sans-serif",
      color: colors.text,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{ maxWidth: '800px', width: '100%' }}>

        <Link to="/" style={{ color: colors.primary, textDecoration: 'none', fontWeight: 'bold' }}>
          ← Back Home
        </Link>

        <div style={{ 
          marginTop: '50px', 
          textAlign: 'left', 
          position: 'relative'
        }}>
          
          <h1 style={{ fontSize: '3.5rem', color: colors.text, marginBottom: '20px' }}>
            Hi! I'm <span style={{ color: colors.primary, fontStyle: 'italic' }}>Karen Cassani Patiño</span>
          </h1>
          
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '40px', color: colors.textSecondary }}>
            I'm 20 years old and currently learning German. I’m passionate about programming and automation, always looking for ways to improve processes and solve problems through code. I enjoy working with others and love meeting new people, which allows me to grow both personally and professionally.
          </p>

          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ color: colors.primary, marginBottom: '15px' }}>Programming Languages</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              <div style={badgeStyle}>Python</div>
              <div style={badgeStyle}>C++</div>
              <div style={badgeStyle}>SQL</div>
              <div style={badgeStyle}>C#</div>
            </div>
          </div>

          <div style={{ 
            borderTop: `1px solid #2d2d44`, 
            paddingTop: '30px',
            marginTop: '20px'
          }}>
            <h3 style={{ color: colors.primary, marginBottom: '15px' }}>Fun Facts About Me</h3>
            <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '15px',
                color: colors.textSecondary 
            }}>
              <li>• I love running🏃‍♀️🏃‍♂️🏃</li>
              <li>• I really like animals🐶🐱🐾</li>
              <li>• I enjoy cooking🍳👩‍🍳🍰</li>
              <li>• I love to read📚 📖 📘</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;