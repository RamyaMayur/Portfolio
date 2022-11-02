import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <a id="mail" href="ramyaahar1998@gmail.com">
        <span>ramyaachar1998@gmail.com</span>
        </a>
        <div className="f-icons">
        <a href="https://www.instagram.com/?hl=en">
          <Insta color="white" size={"3rem"} />
          </a>

          <a href="https://www.linkedin.com/feed/">
          <Linkedin color="white" size={"3rem"} />
          </a>

          <a href="https://github.com/">
          <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
