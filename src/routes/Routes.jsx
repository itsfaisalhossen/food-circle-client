import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import AuthLayout from "../layouts/AuthLayout";
import AvailableFoods from "../pages/AvailableFoods";
import ManageMyFoods from "../pages/ManageMyFoods";
import FoodDetails from "../pages/FoodDetails";
import MyFoodRequests from "../pages/MyFoodRequests";
import AddFoods from "../pages/AddFoods";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "available-foods",
        loader: () => fetch("http://localhost:3000/foods"),
        element: <AvailableFoods />,
      },
      {
        path: "food-details",
        element: (
          <PrivetRoute>
            <FoodDetails />
          </PrivetRoute>
        ),
      },
      {
        path: "add-foods",
        element: (
          <PrivetRoute>
            <AddFoods />
          </PrivetRoute>
        ),
      },
      {
        path: "my-foods-request",
        element: (
          <PrivetRoute>
            <MyFoodRequests />
          </PrivetRoute>
        ),
      },
      {
        path: "manage-my-foods",
        element: (
          <PrivetRoute>
            <ManageMyFoods />
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  { path: "/*", element: <ErrorPage /> },
]);
