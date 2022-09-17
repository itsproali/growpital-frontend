import React from "react";
import { Link } from "react-router-dom";
import construction from "../../assets/construction.png";

const Construction = () => {
  return (
    <div className="container mx-auto min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10">
      <div className="w-full">
        <h1 className="text-5xl text-primary">
          <span>Under</span> <br /> <b>Construction</b>
        </h1>
        <p className="text-xl max-w-xl mt-6 mb-10">
          Please go to wallet and try adding money to explore feature.!
        </p>
        <Link to="/service/wallet">
          <button className="btn btn-secondary text-white px-10 rounded-xl">
            Go To Wallet
          </button>
        </Link>
      </div>
      <div className="w-full">
        <img src={construction} alt="under construction" className="mx-auto" />
      </div>
    </div>
  );
};

export default Construction;
