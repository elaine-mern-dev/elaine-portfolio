import Button from "../ui/Button";
import Nav from "./Nav";

const Header:React.FC = () => {
  return (
    <header className="bg-white p-4 rounded-full flex items-center justify-between space-x-6">
      <h1 className="text-4xl text-orange-500  mb-2">
        <span className="bg-orange-500 text-2xl text-white p-4 mr-2  rounded-full">
          EM
        </span>
        Elaine
      </h1>

      <Nav />
      <Button text={"Let's Talk"} />
    </header>
  );
}   

export default Header;