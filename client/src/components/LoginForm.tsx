import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "../api/getAuth";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsloading(true);
    try {
      const { token, message } = await getAuth(username, password);
      if (message) {
        console.log(message);
        setIsloading(false);
        setErrorMsg(message);
        return;
      }
      console.log("token received", token);
      localStorage.setItem("token", JSON.stringify(token));
      navigate("/dashboard", { replace: true });
      setIsloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start justify-center space-y-6"
    >
      {errorMsg ? (
        <div className="absolute top-0 inset-x-0 h-max w-full py-4 font-bold text-white text-center bg-black">
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(e.target.value);
            setErrorMsg(null);
          }}
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
            setErrorMsg(null);
          }}
        />
      </div>

      <button
        disabled={password.length === 0 || username.length === 0}
        className="h-12 w-full self-center rounded-full bg-blue-600 disabled:bg-blue-400 text-white"
        type="submit"
      >
        {isLoading ? "loading" : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
