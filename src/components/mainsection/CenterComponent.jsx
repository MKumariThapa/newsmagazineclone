import React from "react";
import "./MainSection.scss";
import { GrFormNextLink } from "react-icons/gr";

const CenterComponent = ({ title, description, imagSrc }) => {
  return (
    <>
      {/* <img src={imagSrc} alt={title} /> */}

      <span>11th December 2021</span>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="read_more">
        <h3>Read More </h3>
        <GrFormNextLink className="hovering" />
      </div>
      <hr />
    </>
  );
};

export default CenterComponent;
