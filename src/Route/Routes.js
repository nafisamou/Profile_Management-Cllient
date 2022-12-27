import { createBrowserRouter } from "react-router-dom";
import AllAdmin from "../Dashboard/AllAdmin/AllAdmin";
import AllUser from "../Dashboard/AllUser/AllUser";
import EditDetails from "../Dashboard/EditDetails/EditDetails";
import OnlyUser from "../Dashboard/OnlyUser/OnlyUser";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Login from "../Register/Login";
import SignUp from "../Register/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <SignUp></SignUp> },
      {
        path: "/edit/:id",
        loader: ({ params }) =>
          fetch(`https://task-3-wine.vercel.app/edit/${params.id}`),
        element: <EditDetails></EditDetails>,
      },
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
        element: (
          <AdminRoute>
            {" "}
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },

      {
        path: "/dashboard/allAdmin",
        element: (
          <AdminRoute>
            <AllAdmin></AllAdmin>
          </AdminRoute>
        ),
      },
      { path: "/dashboard/onlyUser", element: <OnlyUser></OnlyUser> },
    ],
  },
]);
export default router;
