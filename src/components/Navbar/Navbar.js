import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { BiBell, BiUserCircle } from "react-icons/bi";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Contact", path: "/contact" },
  ];

  const activeLink = ({ isActive }) => {
    return {
      fontWeight: 600,
      color: isActive && "#FEBF32",
    };
  };
  return (
    <div>
      <nav className="navbar bg-accent px-2 md:px-20">
        <div className="navbar-start">
          <Link to="/home">
            <h1 className="navbar-logo">Growpital</h1>
          </Link>
          <ul className="flex items-center ml-6">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <NavLink
                  to={navLink.path}
                  className="block mx-6 hover:text-secondary duration-300"
                  style={activeLink}
                >
                  {navLink.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end flex items-center">
          <button className="btn btn-ghost btn-circle text-secondary text-2xl">
            <BiBell />
          </button>
          <button className="btn btn-ghost btn-circle text-secondary text-2xl">
            <BiUserCircle />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
