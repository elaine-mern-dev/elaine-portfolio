// src/components/Nav.tsx

import React from "react";
import { navItems } from "../../constants/navigation";


const Nav: React.FC = () => {
  return (
    <nav className="flex justify-center space-x-4">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-gray-700 hover:text-orange-500 font-semibold"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
