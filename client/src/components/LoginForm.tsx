import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import getToken from "../api/getAuthToken";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const btnDisabled =
    password.trim().length === 0 || username.trim().length === 0;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    str: string
  ) => {
    switch (str) {
      case "password":
        setPassword(e.target.value);
        setErrorMsg(null);
        break;
      case "username":
        setUsername(e.target.value);
        setErrorMsg(null);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsloading(true);
    try {
      const { token, message } = await getToken(username, password);
      if (message) {
        console.log("error in LoginForm", message);
        setIsloading(false);
        setErrorMsg(message);
        return;
      }
      console.log("token received", token);
      localStorage.setItem("wallet token", JSON.stringify(token));
      navigate("/dashboard", { replace: true });
      setIsloading(false);
    } catch (error) {
      console.log(error);
      setIsloading(false);
      if (error instanceof Error) {
        setErrorMsg(error.message);
      }
    }
  };

  return (
    <div className="login h-max w-7/12 px-4 flex flex-col space-y-8 text-black bg-white">
      <div className="flex flex-col space-y-1.5">
        <h2 className="text-3xl font-bold">Login</h2>
        <div className="flex space-x-2">
          <span className="text-gray-400">New to PlanetCoin?</span>
          <Link to={"#"} className="text-blue-400">
            Sign up for an account.
          </Link>
        </div>
      </div>
      {errorMsg ? (
        <div className="h-max w-full py-3 my-3 font-bold text-black text-center border-l-4 border-red-500">
          {errorMsg}
        </div>
      ) : null}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start justify-center space-y-6"
      >
        <div className="w-full flex flex-col items-start justify-center">
          <label className="font-bold" htmlFor="username">
            Username
          </label>
          <input
            className="w-full py-1.5 border border-gray-400 hover:border-blue-500 transition-all duration-300 rounded-md px-2"
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => handleChange(e, "username")}
          />
        </div>
        <div className="w-full flex flex-col items-start justify-center">
          <label className="font-bold" htmlFor="password">
            Password
          </label>
          <input
            className="w-full py-1.5 border border-gray-400 hover:border-blue-500 rounded-md px-2"
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => handleChange(e, "password")}
          />
        </div>
        <Link to={"#"} className="text-gray-400 hover:text-blue-400">
          Forgot your password?
        </Link>
        <button
          type="submit"
          disabled={btnDisabled}
          className="py-2 w-full self-center rounded-lg bg-black disabled:bg-blue-400 text-white"
        >
          {isLoading ? "loading" : "Login"}
        </button>
      </form>
      <div className="w-max border relative before:block before:absolute before:-left-full before:top-[50%] before:h-[1px] before:w-full before:bg-gray-400 ">
        Or with
      </div>
    </div>
  );
};

export default LoginForm;
