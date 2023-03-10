import React, { useState } from "react";

import {
  FaUserMd,
  FaUsers,
  FaMoneyCheckAlt,
  FaHome,
  FaAmericanSignLanguageInterpreting,
  FaBook,
  FaArrowAltCircleLeft,
  FaSign,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Home/Navbar";

const Dashboard2 = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div>
        <Navbar />

        <div className="flex flex-no-wrap mt-20">
          {/* Sidebar starts */}
          {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}

          <div
            className={`w-66  sm:relative rounded-2xl border-t-8 border-green-200 border-2 shadow-lg md:h-full flex-col justify-between  mt-10 md:block    ${
              toggle ? "hidden" : ""
            } sidebar-container `}
          >
            <div className="px-8 ">
              <div className="flex justify-center  bg-white my-8 rounded-2xl  border-green-300 border-2  ">
                <div className="py-3 px-2 font-bold ">DASHBOARD</div>
              </div>
              <ul className="mt-12">
                <li className="flex w-full justify-between text-black  cursor-pointer items-center mb-6 hover:shadow-xl hover:border-t-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:border-green-200">
                  <div className="flex items-center text-2xl  p-2  rounded-xl  ">
                    <FaUsers className=""></FaUsers>
                    <Link to="/dashboard/users">
                      <h2 className="text-sm font-bold  ml-2">ALL USERS</h2>
                    </Link>
                  </div>
                </li>

                <li className="flex w-full justify-between text-black  cursor-pointer items-center mb-6 hover:shadow-xl hover:border-t-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:border-green-200">
                  <div className="flex items-center text-2xl p-2  rounded-xl ">
                    <FaUserMd></FaUserMd>
                    <Link to="/dashboard/addDoctors">
                      <span className="text-sm font-bold ml-2">
                        ADD DOCTOR{" "}
                      </span>
                    </Link>
                  </div>
                </li>
                <li className="flex w-full justify-between text-black  cursor-pointer items-center mb-6 hover:shadow-xl hover:border-t-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:border-green-200">
                  <div className="flex items-center p-2">
                    <FaAmericanSignLanguageInterpreting />

                    <Link to="/dashbord/managedoctors">
                      <span className="text-sm font-bold ml-2">
                        {" "}
                        MANAGE DR.
                      </span>
                    </Link>
                  </div>
                </li>
                <li className="flex w-full justify-between text-black  cursor-pointer items-center mb-6 hover:shadow-xl hover:border-t-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:border-green-200">
                  <div className="flex items-center text-2xl p-2  rounded-xl ">
                    <FaMoneyCheckAlt />
                    <span className="text-sm font-bold ml-2"> INSURENCE </span>
                  </div>
                </li>
                <li className="flex w-full justify-between text-black  cursor-pointer items-center mb-6 hover:shadow-xl hover:border-t-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:border-green-200">
                  <div className="flex items-center text-2xl p-2  rounded-xl ">
                    <FaHome></FaHome>
                    <span className="text-sm font-bold ml-2"> EXTRA</span>
                  </div>
                </li>
               
               
              </ul>
              <div className="flex justify-center mt-48 mb-4 w-full">
                <div className="relative ">
                  <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-search"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={10} cy={10} r={7} />
                      <line x1={21} y1={21} x2={15} y2={15} />
                    </svg>
                  </div>
                  <input
                    className=" focus:outline-none rounded w-full text-sm text-gray-900 bg-gray-100 pl-10 py-2"
                    type="text"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
            <div className="px-8 border-t border-gray-700">
              <ul className="w-full flex items-center justify-between ">
                <li className="cursor-pointer text-black pt-5 pb-3">
                  <FaSign />
                </li>
                <li className="cursor-pointer text-black pt-5 pb-3">
                  <FaHome />
                </li>

                <li className="cursor-pointer text-black pt-5 pb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-archive"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x={3} y={4} width={18} height={4} rx={2} />
                    <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                    <line x1={10} y1={12} x2={14} y2={12} />
                  </svg>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar ends */}
          {/* Remove class [ h-64 ] when adding a card block */}
          <div className="container mx-auto py-10 h-96 md:w-4/5 w-11/12 px-6">
            {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}

            <div
              className="absolute md:hidden block  left-24 top-12 w-10 h-10 bg-glass rounded-full cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              Open{" "}
              <FaArrowAltCircleLeft
                className={`${
                  toggle ? "rotate-180" : ""
                } text-3xl transition-all duration-300`}
              />
            </div>
            <div
              className={`w-full h-full rounded border-dashed border-2 border-gray-300    `}
            >
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
