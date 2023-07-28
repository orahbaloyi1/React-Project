import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayouts";

const Home = () => {
  return (
    <MainLayout>
      <div className="">
        <div className="flex justify-center items-center h-screen py-20">
          <div className="">
            <h1 className="text-6xl text-gray-700 font-bold mb-6 ">
              Welcome to CoinTracker App! <br />
            </h1>
            <h2 className="text-center text-gray-600 text-2xl">
              Congratulations on taking control of
              <br /> your finances with our Expense Tracking App!
            </h2>
            <div className="py-9 flex justify-center">
              <Link to="/Dashboard">
                <button className="border font-bold text-2xl text-white rounded-3xl bg-sky-700 py-4 px-10 drop-shadow-lg hover:bg-blue-900">
                  Create Tracker
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default Home;
