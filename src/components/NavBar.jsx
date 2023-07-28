import { Link } from "react-router-dom";
import logo from "../assets/logo-images.png";

const NavBar = () => {
  return (
    <div className="py-8 bg-sky-700">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="logo flex gap-x-1">
          <Link to="/">
            <div className="flex items-center">
              <img className="w-16" src={logo} />
              <h1 className="text-4xl text-white font-bold">
                Coin<span className="font-normal">Tracker</span>
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
