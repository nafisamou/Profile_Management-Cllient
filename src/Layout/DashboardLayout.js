import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import Navbar from "../Home/Navbar";
import useAdmin from "../hook/useAdmin/useAdmin";
import useUser from "../hook/useUser/useUser";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  //   const [isAdmin] = useAdmin(user?.email);
    // const [isUser] = useUser(user?.email);

  return (
    <div className="">
      <Navbar></Navbar>
      <div className="drawer drawer-mobile my-10 divider ">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side   text-black">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* {isUser && ( */}
            <>
              <li>
                <Link to="/dashboard/allUser">All User</Link>
              </li>
            </>
            {/* )} */}

            {/* {isAdmin && ( */}
            <>
              <li>
                <Link to="/dashboard/allUser">All User</Link>
              </li>
              <li>
                <Link to="/dashboard/allAdmin">All Admin</Link>
              </li>
            </>
            {/* )} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
