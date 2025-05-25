//src/shared/ui/Button.tsx
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-orange-400 hover:bg-orange-500 text-white font-semibold 
        text-sm sm:text-base md:text-lg 
        py-2 px-4 sm:py-3 sm:px-6 
        rounded-full transition-colors duration-300 ${className}`}
    >
      <span className="flex items-center gap-1 sm:gap-2">
        {text} <GoArrowUpRight />
      </span>
    </button>
  );
};

export default Button;
