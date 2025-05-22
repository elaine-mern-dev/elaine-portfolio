const Projects = () => {
  return (
    <div>
      <h2 className="mt-16 text-4xl text-center font-bold">
        Look at my <span className="text-orange-500">Projects</span>
      </h2>
      <div className="p-4 flex gap-4">
        <div className="flex w-1/2">
          <img
            src="/images/edusynx1.png"
            alt="edusynx"
            className="w-[700px] h-[400px] rounded-lg"
          />
        </div>
        <div className="flex w-1/2">
          <video
            className="w-[700px] h-[400px] rounded-lg "
            controls
          >
            <source src="/videos/edusynx.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Projects;
