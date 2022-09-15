import React from "react";

const Footer = () => {
  return (
    <footer className="bg-accent w-full p-6">
      <h1 className="text-center">
        Developed by{" "}
        <a
          href="http://itsproali.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-secondary duration-300"
        >
          Mohammad Ali
        </a>
      </h1>
    </footer>
  );
};

export default Footer;
