import React, { useEffect, useState } from "react";
import "../ComponentCss/Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://www.popsci.com/resizer/hOYb9eOz1VQvQA7UPmksItUFVCw=/760x570/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/AUSBJ7SDRWXMD7VXVNJASUT6ME.jpg"
        alt="Netflix logo"
      />
      <img
        className="nav__avatar"
        src="https://pbs.twimg.com/media/DlKNEufWsAAgr2E.jpg"
        alt="netflixSmile"
      />
    </div>
  );
}

export default Nav;
