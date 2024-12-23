import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Login from "../components/Authentications/Login";
import Register from "../components/Authentications/Register";
import PrivateRoute from "../providers/PrivateRoute";
import AvailableFoods from "../pages/AvailableFoods";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <h2>home</h2>,
      },
      {
        path: "/availableFood",
        element: (
          <PrivateRoute>
            <AvailableFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Register />,
      },
    ],
  },
]);

export default router;
