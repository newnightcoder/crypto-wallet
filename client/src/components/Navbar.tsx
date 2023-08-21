import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-sm h-16 w-full absolute top-0 grid grid-cols-[max-content_1fr] items-center bg-white">
      <span className="justify-self-start px-4 text-blue-600 font-bold text-xl">
        mywallet
      </span>
      <nav className="hidden w-full max-w-4xl 2xl:max-w-6xl h-full justify-self-center md:flex items-center justify-evenly text-black">
        <NavLink to={"/"} className="px-4">
          Portfolio
        </NavLink>
        <NavLink to={"/"} className="px-4">
          Payment
        </NavLink>
        <NavLink to={"/"} className="px-4">
          Transactions
        </NavLink>
        <NavLink to={"/"} className="px-4">
          logout
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
