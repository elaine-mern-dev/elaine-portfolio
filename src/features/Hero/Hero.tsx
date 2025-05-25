//src/features/Hero/Hero.tsx
import Button from "../../shared/ui/Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="flex items-center justify-between p-4">
      <div className="-mt-28 w-1/2">
        <p className="mb-4 py-2 px-4 border border-orange-500 rounded-full text-white text-center font-bold w-20">
          Hello
        </p>
        <h1 className="text-6xl">
          I'm <span className="text-orange-500">Elaine Muhombe,</span>
          <br />A MERN Developer
        </h1>
        <h4 className="mt-4 text-2xl">
          Building Scalable Applications with Seamless Integration and
          Innovative Solutions
        </h4>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-4">
          <Button text="Portfolio" onClick={() => navigate("/portfolio")} />
          <button
            className="inline-block px-4 py-2 text-white font-bold hover:bg-orange-500 transition-colors duration-300 rounded-full"
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&to=emuhombe@gmail.com"
              )
            }
          >
            Hire Me
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src="/images/elaine-photo.png"
          alt="Elaine Muhombe"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
