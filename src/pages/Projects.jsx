import { useEffect, useState } from 'react';
import { Link } from "react-router";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const colors = {
    bg: '#0b0f19',        
    text: '#ffffff',     
    textSecondary: '#94a3b8', 
    primary: '#bfa1ff',   
    cardBg: '#111827',    
    border: '#1f2937'    
  };

  useEffect(() => {
    fetch('https://api.github.com/users/karencassani/repos?sort=updated')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data.filter(repo => !repo.fork));
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error cargando GitHub:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ 
      backgroundColor: colors.bg, 
      minHeight: '100vh', 
      color: colors.text, 
      padding: '60px 20px',
      fontFamily: "'Varela Round', sans-serif"
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}> 
        <Link to="/" style={{ color: colors.primary, textDecoration: 'none', fontSize: '0.9rem' }}>
          ← Back to Home
        </Link>

        <h1 style={{ 
          fontSize: '3.5rem', 
          marginTop: '40px', 
          marginBottom: '10px', 
          fontWeight: 'bold'
        }}>
          Selected <span style={{ color: colors.primary, fontStyle: 'italic' }}>Projects</span> 
        </h1>
        <p style={{ color: colors.textSecondary, marginBottom: '60px', fontSize: '1.2rem', maxWidth: '600px' }}>
          A collection of my recent work and open-source contributions, fetched directly from my GitHub.
        </p>

        {loading ? (
          <h2 style={{ color: colors.primary }}>Fetching projects...</h2>
        ) : (
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '20px' 
          }}>
            {repos.map((repo) => (
              <div key={repo.id} style={{ 
                background: colors.cardBg, 
                padding: '30px', 
                borderRadius: '16px', 
                border: `1px solid ${colors.border}`,
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                transition: 'all 0.3s ease',
                width: '100%', 
                boxSizing: 'border-box' 
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = colors.primary;
                e.currentTarget.style.transform = 'translateY(-3px)'; 
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = colors.border;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                
                <div style={{ flex: '1', paddingRight: '30px' }}> 
                  <h3 style={{ 
                    color: colors.text, 
                    marginBottom: '10px', 
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                  }}>
                    {repo.name.replace(/-/g, ' ')} 
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: colors.textSecondary, lineHeight: '1.6', margin: '0' }}>
                    {repo.description || "Detailed documentation and source code available on GitHub."}
                  </p>
                </div>

                
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '15px' }}>
                  <span style={{ 
                    fontSize: '0.8rem', 
                    background: 'transparent',
                    color: colors.primary, 
                    padding: '6px 15px', 
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    border: `1px solid ${colors.primary}`,
                    textTransform: 'uppercase'
                  }}>
                    {repo.language || 'Project'}
                  </span>
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      color: colors.text, 
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = colors.primary}
                    onMouseOut={(e) => e.currentTarget.style.color = colors.text}
                  >
                    VIEW CODE <span style={{ fontSize: '1.2rem' }}>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;