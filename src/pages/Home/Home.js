import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <Link to="/service">
          <button className="btn btn-primary">Service</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
