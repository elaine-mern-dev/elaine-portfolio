//src/features/About/About.tsx
import AboutMeCTA from "../../components/AboutMeCTA";

const About: React.FC = () => {
  return (
    // Section container with top border and spacing
    <section className="border-t-2 border-white mt-16 pt-8 flex items-center justify-between gap-4">
      {/* Left section: video icon and label */}
      <div className="w-1/2">
     
        <video className="w-full h-full"  controls>
          <source src="/videos/self-introductory.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right section: About content */}
      <div className="w-1/2 text-white">
        {/* Section label */}
        <p className="mb-4 py-2 px-4 w-36 border border-orange-500 rounded-full text-center font-bold">
          About Me
        </p>

        {/* Heading */}
        <h3 className="text-2xl font-bold mb-4">
          Get a web app that delivers unique value to your customers through a
          purpose-built digital experience.
        </h3>

        {/* Description */}
        <p className="text-lg mb-6">
          I help organizations stand out online with websites and apps that are
          not just beautiful — but fast, responsive, and built to scale. Whether
          you're a startup looking to launch or a business ready to grow, I’ll
          deliver a product that wows your users and drives results. Let’s build
          something impactful — together!
        </p>

        {/* Personal information section */}
        <div className="p-8 rounded-lg bg-slate-800 flex flex-wrap gap-y-4 text-sm">
          {/* Name */}
          <div className="w-1/2">
            <span className="font-semibold text-orange-500">Name:</span>
            <div>Elaine Muhombe</div>
          </div>

          {/* Phone */}
          <div className="w-1/2">
            <span className="font-semibold text-orange-500">Phone:</span>
            <div>+(254) 701-21-7788</div>
          </div>

          {/* Email */}
          <div className="w-1/2">
            <span className="font-semibold text-orange-500">Email:</span>
            <div>emuhombe@gmail.com</div>
          </div>

          {/* GitHub */}
          <div className="w-1/2">
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

        {/* Call-to-action buttons (Contact Me, Download Resume) */}
        <AboutMeCTA />
      </div>
    </section>
  );
};

export default About;
