import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="shadow-sm h-16 w-full absolute top-0 flex items-center justify-between">
      <div className="flex justify-start items-center space-x-2 pl-4">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block h-9 w-9 rotate-90"
        >
          <path
            d="M-0.0981445 16C-0.0981438 7.16344 7.0653 -7.52254e-07 15.9019 0C22.399 5.67998e-07 27.9917 3.87258 30.4975 9.43544L9.3373 30.5956C8.42926 30.1866 7.56625 29.6953 6.75778 29.1313L19.8891 16H15.9019L4.58815 27.3137C1.69272 24.4183 -0.0981449 20.4183 -0.0981445 16Z"
            fill="currentColor"
          ></path>
          <path
            d="M31.9019 16.0055L15.9074 32C24.7396 31.997 31.8989 24.8377 31.9019 16.0055Z"
            fill="currentColor"
          ></path>
        </svg>
        <span className="block text-lg">PlanetCoin</span>
      </div>
      <nav className="hidden w-full max-w-4xl 2xl:max-w-6xl h-full justify-self-center md:flex items-center justify-evenly text-white">
        <NavLink
          to={`${pathname}/portfolio`}
          className="px-4 active:text-blue-500"
        >
          Portfolio
        </NavLink>
        <NavLink
          to={`/dashboard/payment`}
          className="px-4 active:text-blue-500"
        >
          Payment
        </NavLink>
        <NavLink
          to={`${pathname}/transactions`}
          className="px-4 active:text-blue-500"
        >
          Transactions
        </NavLink>
        <NavLink to={"/"} className="px-4 active:text-blue-500">
          logout
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
