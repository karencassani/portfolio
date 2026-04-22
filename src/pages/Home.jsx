import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar>
        {/* El contenido principal de tu inicio */}
        <Hero />
        
        {/* Si quieres agregar más secciones abajo del Hero en el futuro, 
            puedes hacerlo aquí mismo */}
      </Navbar>
    </>
  );
};

export default Home;