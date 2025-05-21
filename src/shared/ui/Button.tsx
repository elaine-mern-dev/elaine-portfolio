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
      className={`bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 ${className}`}
    >
      <span className="flex items-center gap-2">
        {text} <GoArrowUpRight />
      </span>
    </button>
  );
};

export default Button;
