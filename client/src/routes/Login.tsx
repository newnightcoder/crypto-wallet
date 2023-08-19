import LoginForm from "../components/LoginForm";

const Login = () => {
  const token = localStorage.getItem("token");

  // if (token) {
  //   return <Navigate to={"/dashboard"} />;
  // }
  return (
    <div className="h-max text-black border rounded-md px-16 py-12">
      <h1 className="h-16 text-4xl text-blue-600 font-bold">mywallet</h1>
      <h2 className="h-16 text-3xl font-bold">Login to Mywallet</h2>
      <LoginForm />
    </div>
  );
};

export default Login;