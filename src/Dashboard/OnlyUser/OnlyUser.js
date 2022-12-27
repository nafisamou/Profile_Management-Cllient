import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";

const OnlyUser = () => {
    const [user, setUser] = useState([]);
    const { data: users = [], refetch } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await fetch("http://localhost:5000/users");
        const data = await res.json();
        return data;
      },
    });
  
   
  
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
        <h2 className="text-3xl text-center my-6 font-sans">Only Users</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Created Time</th>
                <th>Updated Time</th>
                <th>Email</th>
              
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.createdTime}</td>
                  <td>{user.updatedTime}</td>
                  <td>{user.email}</td>
  
              
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

export default OnlyUser;