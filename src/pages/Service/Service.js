import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { HiHome, HiOutlineBriefcase } from "react-icons/hi";
import { BiMoney, BiSupport } from "react-icons/bi";
import { BsWallet } from "react-icons/bs";

const Service = () => {
  const currentPath = useLocation().pathname;
  const serviceLinks = [
    { name: "Home", path: "/home", icon: <HiHome /> },
    { name: "Portfolio", path: "/service", icon: <HiOutlineBriefcase /> },
    { name: "Invest", path: "/service/invest", icon: <BiMoney /> },
    { name: "Wallet", path: "/service/wallet", icon: <BsWallet /> },
    { name: "Support", path: "/service/support", icon: <BiSupport /> },
  ];
  return (
    <div>
      <div className="relative top-0 left-0 h-screen flex">
        <div className="bg-accent w-56">
          <Link to="/home">
            <h1 className="navbar-logo text-center w-full mt-8">Growpital</h1>
          </Link>
          <ul className="mt-20">
            {serviceLinks.map((serviceLink, index) => (
              <li key={index} className="my-6">
                <Link
                  to={serviceLink.path}
                  className={`${
                    currentPath === serviceLink.path
                      ? "text-secondary"
                      : "text-white"
                  } flex items-center gap-3 text-xl mx-6 hover:text-secondary duration-300`}
                >
                  <span>{serviceLink.icon}</span>
                  <span>{serviceLink.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Service;
