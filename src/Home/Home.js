import React from "react";
import Lottie from "lottie-react";
import Task from "../assets/73173-manager.json";

import { Link } from "react-router-dom";



const Home = () => {

  return (
    <section className="">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6 lg:mt-8">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-semibold  tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                <span className="inline-block text-blue-500 mt-3 font-sans font-bold">
               <div className="flex items-center">  Proelium Analytics Private Limited</div>
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
              Industrial analytics Software, IIOT, Predictive Maintenance Software, OEE Productivity Software, PLC Data Extraction Software, Machine Monitoring Software, Industrial IOT Platform, Predicitive Energy Management Software, Industry V4.0, Digital Manufactruing Software Suite, and Digital Twin
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
              >
                <span className="mr-3">Go to Dashboard</span>
               
              </Link>
              
            </div>
          </div>

          <div className="relative lg:w-1/2 ">
            <div className="w-full lg:w-4/5 lg:ml-auto h-56 sm:h-96 mb-10">
              <Lottie  animationData={Task} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
