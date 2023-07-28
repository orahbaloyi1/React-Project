import NavBar from "../components/NavBar";

const MainLayouts = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default MainLayouts;
