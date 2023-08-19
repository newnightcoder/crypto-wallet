import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./auth/authContext";
import { Layout } from "./components";
import { Dashboard, Login } from "./routes";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//     errorElement: <ErrorComponent />,
//   },
//   {
//     path: "/dashboard",
//     element: <Dashboard />,
//     errorElement: <ErrorComponent />,
//   },
// ]);

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public route */}
          <Route path="login" element={<Login />} />
          {/* Private route */}
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
