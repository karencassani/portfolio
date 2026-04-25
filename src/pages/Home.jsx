import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar>
        {/* El contenido principal de tu inicio */}
        <Hero />
        
        {/* Para agregar mas secciones abajo de Hero es aqui  */}
      </Navbar>
    </>
  );
};

export default Home;