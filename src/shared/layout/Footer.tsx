// src/shared/layout/Footer.tsx
import { IoIosArrowForward } from "react-icons/io";
import { navItems } from "../../constants/navigation";
import SocialMedia from "../social-media-icons/SocialMedia";

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0 p-6 text-gray-700 bg-slate-100">
      {/* Logo & Info */}
      <div className="flex flex-col items-center md:items-start max-w-xs text-center md:text-left">
        <p className="mb-4 text-orange-700 text-3xl md:text-4xl flex items-center">
          <span className="bg-orange-700 text-xl md:text-2xl text-white p-3 md:p-4 mr-2 rounded-full">
            EM
          </span>
          Elaine
        </p>
        <p className="text-sm">
          &copy; 2025 Elaine Muhombe. All rights reserved.
        </p>
      </div>

      {/* Navigation */}
      <div className="flex flex-col items-center md:items-start">
        <h2 className="font-semibold mb-2">Navigation</h2>
        <ul className="space-y-2 text-sm">
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

      {/* Social Media */}
      <div className="flex flex-col items-center md:items-start">
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
