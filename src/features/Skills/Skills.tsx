//src/features/Skills/Skills.tsx
import { skills } from "../../constants/skills";

const Skills = () => {
  return (
    <div className="mt-16 flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
        My Skills
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-400 text-center">
        Here are some of my skills:
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-8 w-full">
        {skills.map(({ name, icon: Icon, size }) => (
          <div
            key={name}
            className="w-full sm:w-1/2 md:w-1/4 border border-gray-800 rounded-lg p-4 flex flex-col items-center justify-center text-center bg-slate-900"
          >
            <Icon className={`text-3xl sm:text-4xl md:${size} mb-2`} />
            <h3 className="text-sm sm:text-base md:text-lg font-semibold">
              {name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
