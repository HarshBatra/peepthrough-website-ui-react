import React, { useState } from "react";
import icons from "./icons";

const Category = () => {
  function Card(props) {
    return (
      <div className="category-item">
        <div className="circle">
          <img src={props.img} />
        </div>
        <div className="category-name">{props.name}</div>
      </div>
    );
  }

  return (
    <div className="category-wrapper">
      <div className="category-heading">
        <h3>Search by Category</h3>
      </div>

      <div className="card-parent">
        {icons.map((icon) => (
          <Card key={icon.id} img={icon.imgURL} name={icon.name} />
        ))}
      </div>
    </div>
  );
};

export default Category;
