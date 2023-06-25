import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="py-8 bg-sky-700">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="logo flex gap-x-1">
          <Link to="/Home" className="flex align-middle">
            <h1 className="text-4xl text-white font-bold">CoinTracker</h1>
          </Link>
        </div>
        <div className="">
          <ul className="flex gap-x-10 text-white text-xl font-bold">
            <li>
              <a href="" className="">
                About us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
