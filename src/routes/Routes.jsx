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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "add-foods", element: <AddFoods /> },
      { path: "food-details", element: <FoodDetails /> },
      { path: "available-foods", element: <AvailableFoods /> },
      { path: "my-food-requests", element: <MyFoodRequests /> },
      { path: "manage-my-foods", element: <ManageMyFoods /> },
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
