import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";


const EditDetails = () => {

  const navigate = useNavigate();
  const router = useParams();
  const { id } = router;
  const updates = useLoaderData();
  console.log(updates);
  const { user } = useContext(AuthContext);

 
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const createdTime = form.createdTime.value;
    const updatedTime = form.updatedTime.value;
    const email = form.email.value;
    

    const data = {
     
      email,
      firstName,
      lastName,
      createdTime,
      updatedTime
    };
    console.log(data);

    fetch(`http://localhost:5000/edit/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success(" Update Successfully");
          navigate("/dashboard/allUser");
        }
      });
  };

  return (
    <div className="w-6/12  px-6 py-16 rounded-md mx-auto">
      <h2>this is route{updates.firstName}</h2>
      <form
        onSubmit={handleUpdate}
        className="self-stretch mx-auto space-y-3 ng-untouched ng-pristine ng-valid  "
      >
        <div>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            defaultValue={updates?.firstName}
            className="w-full rounded-md focus:ring border focus:ring-violet-400 border-gray-700 p-5"
          />
        </div>
        <div>
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            defaultValue={updates?.lastName}
            className="w-full rounded-md focus:ring border focus:ring-violet-400 border-gray-700 p-5"
            
          />
        </div>
        <div>
          <input
            name="createdTime"
            type="text"
            placeholder="Created Time"
            defaultValue={updates?.createdTime}
            className="w-full rounded-md focus:ring border focus:ring-violet-400 border-gray-700 p-5"
            readOnly
          />
        </div>
        <div>
          <input
            name="updatedTime"
            type="text"
            placeholder=" Updated Time"
            defaultValue={updates?.updatedTime}
            className="w-full rounded-md focus:ring border focus:ring-violet-400 border-gray-700 p-5"
            readOnly
          />
        </div>
        <div>
          <input
            name="email"
            type="email"
            placeholder="Your email"
            defaultValue={user?.email}
            className="w-full rounded-md focus:ring border focus:ring-violet-400 border-gray-700 p-5"
            readOnly
          />
        </div>
     

        <button
          type="submit"
          className="w-6/12 py-2 font-semibold rounded bg-violet-400 text-gray-900 mx-auto"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditDetails;
