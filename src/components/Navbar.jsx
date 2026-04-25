import "./Navbar.css"
import { Link } from "react-router";

const Navbar = ({children}) => {
    return(
        <>
            <div className="container-navbar">
                <div className="logo-texto">
                    {/* Esta ahora es la pagina de inicio  */}
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h4>KAREN_CASSANI</h4>
                    </Link>
                </div>
                <div className="links">
                    {/* Aqui el eliminamos el Link de Home  */}
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/ContactMe">Contact Me</Link>
                </div>
            </div>
            {/* Renderiza el contenido de la pagina debajo del Navbar*/}
            {children}
        </>
    );
};

export default Navbar;