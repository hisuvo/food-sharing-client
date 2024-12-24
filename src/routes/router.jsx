import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Login from "../components/Authentications/Login";
import Register from "../components/Authentications/Register";
import PrivateRoute from "../providers/PrivateRoute";
import AvailableFoods from "../pages/AvailableFoods";
import AddFoods from "../pages/AddFoods";
import Home from "../pages/Home";
import FoodDetails from "../pages/FoodDetails";
import MyRequestFood from "../pages/MyRequestFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
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
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "/myRequestFood",
        element: (
          <PrivateRoute>
            <MyRequestFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/foodDetails/:id",
        element: <FoodDetails />,
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
