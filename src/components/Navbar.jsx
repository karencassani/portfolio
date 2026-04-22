import "./Navbar.css"
import { Link } from "react-router";

const Navbar = ({children}) => {
    return(
        <>
            <div className="container-navbar">
                <div className="logo-texto">
                    {/* Tu nombre ahora funciona como el botón de inicio */}
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h4>KAREN_CASSANI</h4>
                    </Link>
                </div>
                <div className="links">
                    {/* Eliminamos el Link de Home de aquí */}
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/ContactMe">Contact Me</Link>
                </div>
            </div>
            {children}
        </>
    );
};

export default Navbar;