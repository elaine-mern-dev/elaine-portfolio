import AboutMeCTA from "../../components/AboutMeCTA";

const About: React.FC = () => {
  return (
    // Section container with top border and spacing
    <section className="border-t-2 border-white mt-16 pt-8 flex items-center justify-between">
      {/* Left section: video icon and label */}
      <div className="w-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-white opacity-80"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.752 11.168l-6.518-3.692A1 1 0 007 8.309v7.382a1 1 0 001.234.97l6.518-1.476A1 1 0 0016 14.309V9.691a1 1 0 00-1.248-.523z"
          />
        </svg>
        <span className="text-white mt-2 block">Video</span>
      </div>

      {/* Right section: About content */}
      <div className="w-1/2 text-white">
        {/* Section label */}
        <p className="mb-4 py-2 px-4 w-28 border border-orange-500 rounded-full text-center font-bold">
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
