import React from "react";
// import footerImg from "../img/footer.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer" id="contact">
        <div className="footimg">
          <div className="contact">
            <h2>Contact</h2>
          </div>
          <div>
            <h3>USA</h3>
            <p>800 Park Avenue</p>
            <p>Suite 1809</p>
            <p>Fort Lee, NJ 07024</p>
            <p>info@thetransformationgroup.io</p>
            <p>+1 (917) 565 3437</p>
          </div>
          <div>
            <h3>INDIA</h3>
            <p>Pyramid Building</p>
            <p>Plot No.5</p>
            <p>Rajeev Gandhi InfoTech Park</p>
            <p>Hinjewadi - Phase I</p>
            <p>Pune 411 057</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
