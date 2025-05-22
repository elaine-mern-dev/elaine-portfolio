import { skills } from "../../constants/skills";

const Skills = () => {
  return (
    <div className="mt-16 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">My Skills</h1>
      <p className="text-lg text-gray-700">Here are some of my skills:</p>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {skills.map(({ name, img, size }) => (
          <div
            key={name}
            className="w-64 sm:w-1/4 border border-gray-800 rounded-lg p-4 flex flex-col items-center justify-center text-center"
          >
            <img src={img} alt={`${name} Logo`} className={`${size} mb-2`} />
            <h3>{name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
