import React, { useState, useEffect } from "react";
import "./Nav.css";

const Nav = () => {
  const [scroll, setScrol] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) setScrol(true);
      else setScrol(false);
    });
  }, []);

  return (
    <div className={`nav ${scroll && "nav_black"}`}>
      <img
        className="nav__logo"
        src="https://fontmeme.com/permalink/220520/03ba2a4a204bc2d671b7ded6ab460587.png"
        border="0"
        alt="logo"
      />
      <ul>
        <li>
          <a href="#"> Home</a>
        </li>
        <li>
          <a href="#Tv"> Tv Shows</a>
        </li>
        <li>
          <a href="#Movies"> Movies</a>
        </li>
        <li>
          <a href="#Trending"> Trending</a>
        </li>
      </ul>
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="avatar"
      />
    </div>
  );
};

export default Nav;
