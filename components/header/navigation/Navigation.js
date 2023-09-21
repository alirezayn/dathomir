import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Navigation.module.scss";
import BestShop from "@/components/bestshop/bestShop";
import { Accordion } from "react-bootstrap";
import { TfiClose } from "react-icons/tfi";
const Navigation = ({ show, func }) => {
  //  const checkDispay = () =>{
  // if (window.innerWidth < "1024px"){
  // func()
  // }
  // }
  const navigationList = [
    { name: "گوشی موبایل", list: ["اپل", "سامسونگ", "شیائومی"] },
    { name: "تبلت", list: ["اپل", "سامسونگ"] },
    { name: "لپ تاپ", list: ["ایسوس", "اپل", "ایسر", "لنوو"] },
  ];
  return (
    <>
      <nav className={`${styles.mainNav} ${show ? styles.show : styles.hide}`}>
        <button className={`${styles.close}`} onClick={func}>
          <TfiClose />
        </button>
        <BestShop />
        <Accordion className="w-100 mt-5" alwaysOpen>
          {navigationList.map((item, index) => {
            return (
              <Accordion.Item key={index + 1} eventKey={index}>
                <Accordion.Header>{item.name}</Accordion.Header>
                <Accordion.Body>
                  {item.list.map((value, index) => {
                    return (
                      <ul key={index + 1}>
                        <li>
                          <Link className={`${styles.link}`} href={""}>
                            {value}
                          </Link>
                        </li>
                      </ul>
                    );
                  })}
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
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
