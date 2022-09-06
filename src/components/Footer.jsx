import React from "react";
import { BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="newsletter">
        <h3>Subscribe to our Newsletter!</h3>
        <div className="email">
          <div className="input">
            <input className="email-input" placeholder="Email" />
          </div>
          <button className="btn" type="submit">
            Subscribe
          </button>
        </div>
      </div>
      <div className="links">
        <ul>
          <li>
            <a className="list-item" href="/">
              FAQ
            </a>
          </li>
          <li>
            <a className="list-item" href="/">
              Blog
            </a>
          </li>
          <li>
            <a className="list-item" href="/">
              Contact
            </a>
          </li>
          <li>
            <a className="list-item" href="/">
              Privacy Policy
            </a>
          </li>
          <li>
            <a className="list-item" href="/">
              Shopkeeper Login
            </a>
          </li>
        </ul>
        <div className="social">
          <div className="social-icon">
            <a href="/">
              <BsFacebook className="white-icon" />
            </a>
          </div>
          <div className="social-icon">
            <a href="/">
              <BsInstagram className="white-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>2022 @ Peepthrough. All rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
