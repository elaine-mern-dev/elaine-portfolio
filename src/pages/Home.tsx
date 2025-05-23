
import {  Hero, About, Skills, Projects } from "../features";
import { Header, Footer } from "../shared/layout";


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