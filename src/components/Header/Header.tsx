import "./Header.css";
import Logo from "../../assets/gemini-svg.svg";
import Navbar from "../Navigation/Navbar";

const Header = () => {
  return (
    <header className="main-header">
      <img src={Logo} alt="React Challenge Logo" />
      <Navbar />
    </header>
  );
};

export default Header;
