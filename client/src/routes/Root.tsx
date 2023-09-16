import { Outlet, useLocation } from "react-router-dom";
import { Footer, HomeHeader, Navbar } from "../components";

const Layout = () => {
  const { pathname } = useLocation();
  const isLandingPage = pathname === "/";
  const isLoginPage = pathname === "/login";
  const isDashboard = pathname === "/dashboard";

  return (
    <div
      className={`layout min-h-screen relative flex flex-col items-center justify-center ${
        !isDashboard && `bg-[url('assets/blockchain_unsplashed.jpg')]`
      } bg-cover bg-no-repeat bg-center`}
    >
      {isLandingPage && <HomeHeader />}
      {isDashboard && <Navbar />}
      <Outlet />
      {!isLandingPage && <Footer />}
    </div>
  );
};

export default Layout;
