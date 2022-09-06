import React from "react";

const Retail = () => {
  return (
    <div className="retail-section">
      <div className="retail-heading">
        <h3>Retail Shooping </h3> made easy!
      </div>
      <div className="cards">
        <div className="card">
          <div>
            <img
              className="retail-img"
              src={require("../assets/data-searching.png")}
            />
          </div>
          <div>
            <p>
              <span>Explore</span> our market database & plan in advance your
              shopping schedule.
            </p>
          </div>
        </div>
        <div className="card">
          <div>
            <img
              className="retail-img"
              src={require("../assets/location.png")}
            />
          </div>
          <div>
            <p>
              <span>Search</span> the product you need, before you begin your
              shopping streak.
            </p>
          </div>
        </div>
        <div className="card">
          <div>
            <img className="retail-img" src={require("../assets/sale.png")} />
          </div>
          <div>
            <p>
              <span>Learn</span> about sales & discounts being offered before
              you step out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retail;
