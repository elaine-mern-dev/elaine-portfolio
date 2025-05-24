import { IoIosArrowForward } from "react-icons/io";
import { navItems } from "../../constants/navigation";
import SocialMedia from "../social-media-icons/SocialMedia";

const Footer:React.FC = () => {
  return (
    <footer className="mt-16 flex justify-evenly p-6  text-gray-700">
      <div className="flex flex-col max-w-xs">
        <p className="mb-4  text-orange-700 text-4xl">
          <span className="bg-orange-700 text-2xl text-white p-4 mr-2  rounded-full">
            EM
          </span>
          Elaine
        </p>

        <p className="text-sm mt-2">
          &copy; 2025 Elaine Muhombe. All rights reserved.
        </p>
      </div>
      {/* Navigation Links */}
      <div className="flex flex-col mb-4">
        <h2 className="font-semibold mb-2">Navigation</h2>
        <ul className="space-y-2">
          {navItems.map(({ name, href }) => (
            <li
              key={name}
              className="flex items-center gap-2 hover:text-orange-500"
            >
              <IoIosArrowForward className="text-orange-600" />
              <a href={href} className="cursor-pointer">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col">
        {/* Connect with Me */}
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
