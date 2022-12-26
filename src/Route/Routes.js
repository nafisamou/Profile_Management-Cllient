import { createBrowserRouter } from "react-router-dom";
import AllAdmin from "../Dashboard/AllAdmin/AllAdmin";
import AllUser from "../Dashboard/AllUser/AllUser";
import Dashboard2 from "../Dashboard2";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Login from "../Register/Login";
import SignUp from "../Register/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <SignUp></SignUp> },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage></ErrorPage>,
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
        {/* <Dashboard2></Dashboard2> */}
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/allUser",
        element: <AllUser></AllUser>,
      },

      { path: "/dashboard/allAdmin", element: <AllAdmin></AllAdmin> },
    ],
  },
]);
export default router;
