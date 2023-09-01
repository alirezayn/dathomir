import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Navigation.module.scss";
const Navigation = ({ show, func }) => {
   const checkDispay = () =>{
    if (window.innerWidth < "1024px"){
      func()
    }
  }
  return (
    <>
      <nav
        className={`${styles.mainNav} ${show ? styles.show : styles.hide}`}
        onClick={checkDispay}
      >

        <Link className={`${styles.link}`} href={"#"}>
          محصولات
        </Link>
        <Link className={`${styles.link}`} href={"#"}>
          تخفیف
        </Link>
        <Link className={`${styles.link}`} href={"#"}>
          جوایز
        </Link>
        <Link className={`${styles.link}`} href={"#"}>
          موقعیت من
        </Link>
      </nav>
      <div
        className={`${styles.transparentDiv} ${
          show ? styles.transparentDivShow : styles.transparentDivHide
        }`}
        onClick={func}
      ></div>
    </>
  );
};

export default Navigation;
