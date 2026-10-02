import { Outlet } from "react-router-dom";
import "./Layout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="react-challenges-main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
