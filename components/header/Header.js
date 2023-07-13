import React, { useEffect, useState } from "react";
import Cart from "./cart/Cart";
import styles from "./Header.module.scss";
import LoginRegister from "./LoginRegister/LoginRegister";
import Navigation from "./navigation/Navigation";
import Search from "./search/Search";
import * as api from "../../api/api";
import TopBanner from "./topBanner/TopBanner";
import Link from "next/link";
const Header = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const topBanner = async () => {
      const req = await api.GET("topBanner");
      const res = await req.data;
      setData(res);
    };
    topBanner();
  }, []);
  return (
    <>
      <div className={`${styles.mainContainer}`}>
      <TopBanner image={data.imageUrl} id={data.id} url={data.url} />
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
    </>
  );
};

export default Header;
