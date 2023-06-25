import { useState } from "react";
import { Link } from "react-router-dom";

//import heroImg from "../assets/MoneyImg.jpg";

//import Home from "./pages/Home";
import Home from "../pages/Home";

const Login = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="bg-green-500 py-50">
        <div className="container mx-auto ">
          <div className="logo flex gap-x-1">
            <h1 className="text-4xl font-bold">Welcome to CoinTracker!</h1>
          </div>
          <div className="">
            <Link
              to="/Home"
              className="border  rounded-xl bg-purple-500 py-1.5 px-4"
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

/*const Login = () => {
  /*const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const users = [{ username: "Jane", password: "testpassword" }];
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      setauthenticated(true);
      localStorage.setItem("authenticated", true);
    }
  };
  return (
    <div>
      <h1 className="font-bold">Welcome CoinTracker!k</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          type="password"
          name="Password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <input className="" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;*/
