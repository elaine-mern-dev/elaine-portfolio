// src/shared/layout/Header.tsx
import Button from "../ui/Button";
import Nav from "./Nav";

const Header: React.FC = () => {
  return (
    <header className="bg-transparent md:bg-white p-4 rounded-full flex flex-wrap md:flex-nowrap items-center justify-between gap-4 md:gap-6 md:mb-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-orange-500 flex items-center">
        <span className="bg-orange-500 text-base sm:text-lg md:text-xl text-white p-2 sm:p-3 md:p-4 mr-2 rounded-full">
          EM
        </span>
        Elaine
      </h1>

      <div className="w-full  md:w-auto flex justify-between items-center gap-4 flex-wrap md:flex-nowrap">
        <Nav />
        <Button
          text={"Let's Talk"}
          onClick={() => window.open("https://www.linkedin.com/", "_blank")}
        />
      </div>
    </header>
  );
};

export default Header;
