import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <>
      <div className="footer-row">
        <div className="footer-left">
          <span>About Disney+ Hotstar</span>
          <span>Terms Of Use</span>
          <span>Privacy Policy</span>
          <span>FAQ</span>
          <span>Feedback</span>
          <span>Careers</span>
          <p className="copyright">
            @2022 STAR. All Rights reserved. HBO, Home Box Office and all
            related channel and programming logos are service <br />
            marks of, all related programming visuals and elements are the
            property of, Home Box Office, Inc. All rights
            <br /> reserved.
            <br />
          </p>
        </div>
        <div className="footer-middle">
          <span className="text">Connect with us</span>
          <span>
            <FacebookIcon />
          </span>
          <span>
            <TwitterIcon />
          </span>
        </div>
        <div className="footer-right">
          <span className="text">Disney+ Hotstar App</span>
          <div className="footerbox">
            <img className="play" src="images/gp.jpg" alt="" />
            <img className="apple" src="images/apple.png" alt="" />
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Footer;
