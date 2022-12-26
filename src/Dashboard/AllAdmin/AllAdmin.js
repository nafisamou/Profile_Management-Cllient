import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AllAdmin = () => {
    const [user, setUser] = useState([]);
    const { data: users = [], refetch } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await fetch("http://localhost:5000/users");
        const data = await res.json();
        return data;
      },
    });
  
    const handleMakeAdmin = (id) => {
      fetch(`http://localhost:5000/users/admin/${id}`, {
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
  
    // Deleting:
    const handleDeleteUser = (id) => {
      console.log(id);
      fetch(`http://localhost:5000/users/${id}`, {
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
                <th>Name</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
  
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllAdmin;