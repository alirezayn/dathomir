import React, { useEffect, useState } from "react";
import Cart from "./cart/Cart";
import styles from "./Header.module.scss";
import LoginRegister from "./LoginRegister/LoginRegister";
import Navigation from "./navigation/Navigation";
import Search from "./search/Search";
import * as api from "../../api/api";
import TopBanner from "./topBanner/TopBanner";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);
  const navigationShowHandler = () => {
    show == true ? setShow(false) : setShow(true);

  };
  
  useEffect(() => {
    const topBanner = async () => {
      const req = await api.GET("topBanner");
      const res = await req.data;
      setData(res);
    };
    topBanner();
   
     
  }, []);
  return (
    <div className={`${styles.mainContainer}`} >
      <div style={{width:"100%"}}>
        <TopBanner image={data.imageUrl} id={data.id} url={data.url} />
      </div>
      <div className={`${styles.row}`} >
        <Link href={'/'} className={`${styles.bestShop}`}>
          bestshop
        </Link>
        <div className={`${styles.rightContainer}`}>
          <div className={`${styles.menuBox}`}> 
            <RxHamburgerMenu
              className={`${styles.hamburgerMenu}`}
              onClick={navigationShowHandler}
            />
           </div>
        </div>
            <div className={`${styles.middleContainer}`}>
              <Search />
            </div>
        <div className={`${styles.leftContainer}`}>
          <LoginRegister />
          <Cart />
        </div>
      </div>
          <Navigation show={show} func={navigationShowHandler} />
    </div>
  );
};

export default Header;
