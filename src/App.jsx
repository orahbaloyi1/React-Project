import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./assets/components/LoginPage";
import Home from "./assets/pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  );
}
export default App;
