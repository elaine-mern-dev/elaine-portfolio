//src/pages/Home.tsx
import { Hero, About, Skills, Projects } from "../features";
import { Header, Footer } from "../shared/layout";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      {/* Hide on screens smaller than 600px (sm = 640px in Tailwind) */}
      <div className="hidden sm:block">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
