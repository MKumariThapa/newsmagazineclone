import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="newspaper">
          <h2>Newspaper.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ab .
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            facilis, minima autem dolores sequi ex accusantium adipisci aperiam,
            molestiae quia, nostrum eum id!
          </p>
        </div>
        <div className="company">
          <h2>Company</h2>

          <hr />
          <ul>
            <li>Home page</li>
            <li>About us</li>
            <li>Blog</li>
            <li>Simple post</li>
            <li>Shop</li>
          </ul>
        </div>
        <div className="categories">
          <h2>Categories</h2>

          <hr />
          <ul>
            <li>Privacy Policy</li>
            <li>Terms and Condition</li>
            <li>Contact</li>
            <li>Newsletter</li>
            <li>Newsletter</li>
          </ul>
        </div>
      </div>

      <div className="footer_bottom">copyright</div>
    </div>
  );
};

export default Footer;
