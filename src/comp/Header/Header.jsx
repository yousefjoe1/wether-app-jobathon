import React from "react";
import styls from "../Header/header.module.css";
const Header = () => {
  return (
    <header className={styls.header}>
      <div className={styls.logo}>INSTAWEATHER</div>
      <div className={styls.toggleBtns}>
        <div className="btn1">
          <button>C</button>
        </div>
        <div className="btn2">
          <button>F</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
