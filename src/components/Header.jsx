import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="cover">
        <div>
          <h1 className="welcome">WELCOME</h1>
        </div>
        <div className="tagline">
          <h3>TO A WHOLE NEW EXPERIENCE OF WINDOW SHOPPING</h3>
        </div>
        <div className="desc">
          <p>
            Why roam around for hours if you can window shop in the luxury of
            your home... <b>Peepthrough</b> brings to you famous markets in your
            city with Selected, Sorted & Categorized outlets, all finely picked
            to serve your shopping requirements !
          </p>
        </div>
      </div>
      <div className="search-bar">
        <div className="input-bar">
          <input
            className="search-input"
            placeholder="Search by Name, City, or Category"
          ></input>
        </div>
        <button className="btn">Search</button>
      </div>
    </div>
  );
};

export default Header;
