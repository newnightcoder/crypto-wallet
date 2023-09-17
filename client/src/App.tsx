import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./auth/authContext";
import { ErrorComponent } from "./components";
import { Dashboard, Home, Login } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorComponent />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorComponent />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/dashboard/portfolio",
        element: <>Porfolio page</>,
      },
      {
        path: "/dashboard/payment",
        element: <>payment page</>,
      },
      {
        path: "/dashboard/transactions",
        element: <>transactions page</>,
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
