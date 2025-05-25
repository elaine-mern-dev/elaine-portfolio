//src/features/Hero/Hero.tsx
import Button from "../../shared/ui/Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="flex items-center justify-between p-4">
      <div className=" md:-mt-28 w-1/2">
        <p className="mb-4 py-2 px-4 w-36 border border-orange-500 rounded-full text-center font-bold text-xs sm:text-sm md:text-base">
        Hello
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          I'm <span className="text-orange-500">Elaine Muhombe,</span>
          <br />A MERN Developer
        </h2>

        <h4 className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">
          Building Scalable Applications with Seamless Integration and
          Innovative Solutions
        </h4>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-4">
          <Button
            text="Portfolio"
            className="h-10 md:h-auto"
            onClick={() => navigate("/portfolio")}
          />
          <button
            className="inline-block px-4 py-2 text-sm text-white text-nowrap font-semibold hover:bg-orange-500 transition-colors duration-300 rounded-full md:text-lg"
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
