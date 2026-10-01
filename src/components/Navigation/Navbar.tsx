import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="frontend-lab-menu">
      <button
        type="button"
        className="menu-toggle"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <ul
        className={`menu-list${isOpen ? " menu-list--open" : ""}`}
        id="primary-navigation"
      >
        <li className="menu-list-item">
          <NavLink to="/" end className="menu-link" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li className="menu-list-item">
          <NavLink to="/katas" className="menu-link" onClick={closeMenu}>
            Katas
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
