
import {  Hero, About, Skills } from "../features";
import { Header, Footer } from "../shared/layout";


const Home = () => {    
    return (
      <div>
        <Header />
        <Hero />
        <About />
        <Skills />
    
        <Footer />
      </div>
    );
}
export default Home;