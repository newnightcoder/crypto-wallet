import { Link } from "react-router-dom";

const Home = () => {
  return (
    <header
      className={` w-max h-max flex flex-col items-center justify-center space-y-8 text-white`}
    >
      <h1 className="w-full h-min text-center text-6xl">mywallet</h1>
      <Link
        to={"/login"}
        className="rounded-full w-full h-12 flex items-center justify-center bg-blue-600 text-white text-xl"
      >
        Login
      </Link>
    </header>
  );
};

export default Home;
