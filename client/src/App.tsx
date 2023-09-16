import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./auth/authContext";
import { ErrorComponent } from "./components";
import { Dashboard, Login, Root } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
