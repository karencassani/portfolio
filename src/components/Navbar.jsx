import "./Navbar.css"
import { Link } from "react-router";

const Navbar = ({children}) => {
    return(
        <>
            <div className="container-navbar">
                <div className="logo-texto">
                    <h4>KAREN_CASSANI</h4>
                </div>
                <div className="links">
                    <Link to="/home">Home</Link>
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