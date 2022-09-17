import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { HiHome, HiOutlineBriefcase } from "react-icons/hi";
import { BiMoney, BiSupport } from "react-icons/bi";
import { BsWallet } from "react-icons/bs";
import "./Service.css";

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
      <div className="flex relative">
        <div className="fixed top-0 left-0  h-full bg-accent w-56">
          <Link to="/home">
            <h1 className="navbar-logo text-center w-full mt-8">Growpital</h1>
          </Link>
          <ul className="mt-20">
            {serviceLinks.map((serviceLink, index) => (
              <li key={index} className="my-8">
                <Link
                  to={serviceLink.path}
                  className={`${
                    currentPath === serviceLink.path
                      ? "text-secondary"
                      : "text-neutral"
                  } hover:text-secondary service-navigation`}
                >
                  <span>{serviceLink.icon}</span>
                  <span>{serviceLink.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto pl-56 w-full">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Service;
