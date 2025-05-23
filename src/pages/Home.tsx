import About from "../features/About/About";
import Hero from "../features/Hero/Hero";
import Projects from "../features/Projects/Projects";
import Skills from "../features/Skills/Skills";
import Footer from "../shared/layout/Footer";
import Header from "../shared/layout/Header";

const Home = () => {    
    return (
      <div>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    );
}
export default Home;