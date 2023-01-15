import React from "react";
import Cart from "./cart/Cart";
import styles from "./Header.module.scss";
import LoginRegister from "./LoginRegister/LoginRegister";
import Navigation from "./navigation/Navigation";
import Search from "./search/Search";

const Header = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.rightContainer}`}>
        <Search />
      </div>
      <div className={`${styles.middleContainer}`}>
        <Navigation />
      </div>
      <div className={`${styles.leftContainer}`}>
        <LoginRegister />
        <Cart />
      </div>
    </div>
  );
};

export default Header;
