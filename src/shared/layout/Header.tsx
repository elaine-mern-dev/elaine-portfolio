import Nav from "./Nav";

const Header:React.FC = () => {
  return (
    <header className="bg-white p-4 rounded-full flex items-center space-x-6">
      <h1 className="text-4xl text-orange-500  mb-2 mr-36">
        <span className="bg-orange-500 text-2xl text-white p-4 mr-2  rounded-full">
          EM
        </span>
        Elaine
      </h1>

      <Nav />
    </header>
  );
}   

export default Header;