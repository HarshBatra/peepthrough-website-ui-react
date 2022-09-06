import React from "react";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <a href="/">
          <img
            className="logo-img"
            alt="logo"
            src={require("../assets/logo.jpg")}
          />
        </a>
      </div>
      <ul>
        <li>
          <button className="login-btn">Login</button>
        </li>
        <li>
          <button className="ad-btn">Advertise</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
