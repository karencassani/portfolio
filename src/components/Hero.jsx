import './Hero.css';
import {Link} from "react-router";

const Hero = () => {
  return (
    <div className="hero-container">
      <p className="main-text">
        KAREN <span className='secondary-text'>CASSANI</span>
      </p>
      <p className="description-text">
        I am currently studying Computer science, I am passionate about software development, automatization, cybersecurity, and leveraging technology to solve complex problems and create innovative solutions. My interests also extend to areas like environmental sustainability and especially AI.
      </p>
      <div className='btn-container'>
        <button className='btn btn-primary'> 
            <Link to="/Projects">View Projects</Link>
        </button>
        <button className='btn btn-secondary'> 
            <Link to="/ContactMe">Contact Me</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;