import { Outlet } from "react-router-dom";
import "./Layout.css";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="react-challenges-main">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
