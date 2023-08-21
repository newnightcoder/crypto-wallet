import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start justify-center space-y-6"
    >
      {errorMsg ? (
        <div className="fixed top-0 z-50 inset-x-0 h-max w-full py-4 font-bold text-white text-center bg-red-500">
          <>{errorMsg}</>
        </div>
      ) : null}
      <div className="w-full flex flex-col items-start justify-center">
        <label className="font-bold" htmlFor="username">
          Username
        </label>
        <input
          className="w-full h-12 border-2 border-gray-300 hover:border-blue-500 transition-all duration-300 rounded-md px-2"
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
          className="w-full h-12 border-2 border-gray-300 hover:border-blue-500 rounded-md px-2"
          name="password"
          type="password"
          value={password}
          onChange={(e) => handleChange(e, "password")}
        />
      </div>

      <button
        type="submit"
        disabled={btnDisabled}
        className="h-12 w-full self-center rounded-full bg-blue-600 disabled:bg-blue-400 text-white"
      >
        {isLoading ? "loading" : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
