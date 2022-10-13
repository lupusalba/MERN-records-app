import { Link } from "react-router-dom";

import React from "react";

const Home = () => {
  return (
    <div id="home">

      <div className="homeIntro">
        <h1>Welcome to Library</h1>
        <div className="loginMenu">
          <Link to="/login" className="login loginSignUp">
            Login
          </Link>
          <Link to="/register" className="login loginLogin">
            Register
          </Link>
        </div>
      </div>
        
      

    </div>
  );
};

export default Home;
