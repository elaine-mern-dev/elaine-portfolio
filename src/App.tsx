// src/App.tsx
import About from "./features/About/About";
import Hero from "./features/Hero/Hero";
import Header from "./shared/layout/Header";

function App() {
  return (
    <div className="m-16  text-white h-screen">
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;
