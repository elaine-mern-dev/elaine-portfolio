// src/features/About/About.tsx
import AboutMeCTA from "../../components/AboutMeCTA";

const About: React.FC = () => {
  return (
    <section className="p-4 border-t-2 border-white">
      {/* Section label */}
      <div className="mb-4 py-2 px-4 w-36 border border-orange-500 rounded-full text-center font-bold text-xs sm:text-sm md:text-base text-white">
        About Me
      </div>

      {/* Heading and description */}
      <div className="text-white mb-8">
        <h3 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold mb-4">
          Get a web app that delivers unique value to your customers through a
          purpose-built digital experience.
        </h3>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          I help organizations stand out online with websites and apps that are
          not just beautiful — but fast, responsive, and built to scale. Whether
          you're a startup looking to launch or a business ready to grow, I’ll
          deliver a product that wows your users and drives results. Let’s build
          something impactful — together!
        </p>
      </div>

      {/* Video and contact info: stacked on mobile & md, side-by-side on lg+ */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Video section */}
        <div className="w-full lg:w-1/2">
          <video className="w-full h-full rounded-lg" controls>
            <source src="/videos/self-introductory.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Contact info section */}
        <div className="w-full lg:w-1/2 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 p-8 rounded-lg bg-slate-800 gap-4 text-xs sm:text-sm md:text-base">
            <div>
              <span className="font-semibold text-orange-500">Name:</span>
              <div>Elaine Muhombe</div>
            </div>

            <div>
              <span className="font-semibold text-orange-500">Phone:</span>
              <div>+(254) 701-21-7788</div>
            </div>

            <div>
              <span className="font-semibold text-orange-500">Email:</span>
              <div>emuhombe@gmail.com</div>
            </div>

            <div>
              <span className="font-semibold text-orange-500">GitHub:</span>
              <div>
                <a
                  href="https://github.com/elaine-mern-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-300"
                >
                  github.com/elaine-mern-dev
                </a>
              </div>
            </div>
          </div>

          {/* Call-to-action buttons */}
          <AboutMeCTA />
        </div>
      </div>
    </section>
  );
};

export default About;
