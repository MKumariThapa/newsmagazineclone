import React from "react";
import "./MainSection.scss";
import { GrFormNextLink } from "react-icons/gr";

const LeftComponent = ({ title, description, imagSrc }) => {
  return (
    // <div className="left_row_one">
    //   <h4>{title}</h4>
    //   <hr />
    //   <img
    //     src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    //     alt=""
    //   />
    //   <span>11th December 2021</span>
    //   <h2>Photo model</h2>
    //   <p>
    //     Some interesting inspirations and camera settings during photo sessions
    //     in the studio. Thanks to this, your photos will be even better. We have
    //     create...
    //   </p>
    //   <button>Read More</button>
    // </div>

    <>
      <img src={imagSrc} alt={title} />
      <span>11th December 2021</span>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="read_more">
        <h3>Read More </h3>
        <GrFormNextLink className="hovering" />
      </div>
    </>
  );
};

export default LeftComponent;
