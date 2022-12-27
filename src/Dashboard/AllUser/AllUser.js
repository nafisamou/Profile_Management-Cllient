import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../ConfirmationModal/ConfirmationModal";
import { Link, useNavigate } from "react-router-dom";
import EditDetails from "../EditDetails/EditDetails";

const AllUsers = () => {
  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://task-3-wine.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`https://task-3-wine.vercel.app/users/admin/${id}`, {
      method: "PUT",
      // headers: {
      //   authorization: `bearer ${localStorage.getItem("token")}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("Make Admin Successfully");
          refetch();
        }
      });
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  // Deleting:
  const handleDeleteUser = (id) => {
    console.log(id);
    fetch(`https://task-3-wine.vercel.app/users/${id}`, {
      method: "DELETE",
      // headers: {
      //   authorization: `bearer ${localStorage.getItem("token")}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`User deleted successfully`);
          const remaining = user.filter((user) => user._id !== id);
          setUser(remaining);
          refetch();
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl text-center my-6 font-sans">All Users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Created Time</th>
              <th>Update Time</th>
              <th>Role</th>
              <th>Delete</th>
              <th>Edit User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>

                <td>{new Date(user.createdTime).toLocaleString()}</td>
                <td>{new Date(user.updatedTime).toLocaleString()}</td>

                <td>
                  <>
                    {user?.role !== "admin" ? (
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="btn btn-xs btn-success "
                      >
                        Make Admin
                      </button>
                    ) : (
                      <p className="bg-green-700 btn btn-xs">Admin</p>
                    )}
                  </>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn btn-xs btn-error text-white"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button>
                    <Link
                      to={`/edit/${user._id}`}
                      onClick={() => handleEdit(user._id)}
                      className="btn  bg-red-500 text-white btn-xs"
                    >
                      {/* {status ? status : "Pending"} */}
                      Edit
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
