import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center bg-white">
      {/* NAVBAR */}
      <div
        className={`shadow-sm ${
          isLandingPage || isLoginPage ? "hidden" : "flex"
        } h-16 w-full absolute top-0 items-center justify-start`}
      >
        <span className="px-4 text-blue-600 font-bold text-xl">mywallet</span>
        <nav
          className={`w-full h-full hidden md-flex items-center justify-evenly border border-yellow-500`}
        >
          <NavLink
            to={"/"}
            className="border h-full flex items-center justify-center px-4"
          >
            Portfolio
          </NavLink>
          <NavLink
            to={"/"}
            className="border h-full flex items-center justify-center px-4"
          >
            Payment
          </NavLink>
          <NavLink
            to={"/"}
            className="border h-full flex items-center justify-center px-4"
          >
            Transactions
          </NavLink>
          <NavLink
            to={"/"}
            className="border h-full flex items-center justify-center px-4"
          ></NavLink>
          <NavLink
            to={"/"}
            className="border h-full flex items-center justify-center px-4"
          >
            logout
          </NavLink>
        </nav>
      </div>
      {/* LANDING PAGE BODY */}
      <div
        className={`${
          isLandingPage ? "flex" : "hidden"
        } w-max h-max flex flex-col items-center justify-center space-y-8`}
      >
        <h1 className="w-full h-min text-center text-6xl">mywallet</h1>
        <Link
          to={"/login"}
          className="rounded-full w-full h-12 flex items-center justify-center bg-blue-600 text-white text-xl"
        >
          Login
        </Link>
      </div>
      {/*CHILDREN */}
      <Outlet />
      {/* FOOTER */}
      <footer
        className={`${
          isLandingPage ? "hidden" : "block"
        }  h-max absolute inset-x-0 bottom-0 border-t text-center text-xs text-gray-400 py-1`}
      >
        &copy; Mywallet for Numias - 2023
      </footer>
    </div>
  );
};

export default Layout;
