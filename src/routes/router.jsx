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
import MyManageFood from "../pages/MyManageFood";
import FoodsUpdate from "../pages/FoodsUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/availableFood",
        element: (
          <PrivateRoute>
            <AvailableFoods />
          </PrivateRoute>
        ),
        loader: () => fetch(`http://localhost:9500/foods-count`),
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
        path: "/foodUpdate/:id",
        element: (
          <PrivateRoute>
            <FoodsUpdate />
          </PrivateRoute>
        ),
      },
      {
        path: "/myManageFood",
        element: (
          <PrivateRoute>
            <MyManageFood />
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
