const About: React.FC = () => {
    return (
      <section className="border-t-2 border-white mt-16 pt-8 flex items-center justify-between">
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
          Video
        </div>
        <div className="w-1/2">
          <p className="mb-4 py-2 px-4 w-28 border border-orange-500 rounded-full text-white text-center font-bold w-20">
            About Me
          </p>
          <h3 className="text-2xl font-bold mb-4">
            Get a web app that delivers unique value to your customers through a
            purpose-built digital experience.
          </h3>
          <p className="text-24">
            I help organizations stand out online with websites and apps that
            are not just beautiful — but fast, responsive, and built to scale.
            Whether you're a startup looking to launch or a business ready to
            grow, I’ll deliver a product that wows your users and drives
            results. Let’s build something impactful — together!
          </p>
        </div>
      </section>
    );
};
export default About;