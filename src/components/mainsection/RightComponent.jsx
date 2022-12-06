import React from "react";
import "./MainSection.scss";

const RightComponent = ({ imageProfile, name, position, descr }) => {
  return (
    <div className="right_component">
      <img src={imageProfile} alt="" />
      <span>{name}</span>
      <p>{position}</p>
      <p className="description">{descr}</p>

      <hr />
    </div>
  );
};

export default RightComponent;
