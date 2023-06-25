import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Login = () => {
  return (
    <div className="">
      <div>
        <NavBar />
      </div>
      <div className=" mx-auto justify-around item-stretch py-8 mt-12">
        <div className="info-section ">
          <h1 className="text-5xl text-blue-700 font-bold text-center mb-6 ">
            Welcome to CoinTracker App! <br />
          </h1>
          <h2 className="text-center text-gray-600 font-bold text-xl">
            Congratulations on taking control of
            <br /> your finances with our Expense Tracking App!{" "}
          </h2>
          <p className="text-center text-xl pt-8">
            Say goodbye to financial stress and hello to financial empowerment!
            <br /> Our app will help you stay organized, gain insights into your
            spending <br /> habits, and ultimately achieve your financial goals.
          </p>

          <div className="flex justify-center pt-9">
            <Link
              to="/Home"
              className="border text-3xl text-white rounded-full bg-sky-700 py-5 px-5 drop-shadow-lg hover:bg-blue-700"
            >
              Create Tracker
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
