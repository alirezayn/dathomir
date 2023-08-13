import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  SiFacebook,
  SiGithub,
  SiGoogle,
  SiInstagram,
  SiTelegram,
  SiTwitter,
} from "react-icons/si";
import styles from "./Footer.module.scss";
import axios from "axios";
const Footer = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const object = async () => {
      let object = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      object = await object.data;
      setdata(object);
    };
    object();
  }, []);
  const year = new Date();
  return (
    <footer className={`${styles.mainFooter}`}>
      <div className={`${styles.top}`}>
        <span>در شبکه های اجتماعی با ما در ارتباط باشید</span>
        <div className={`${styles.socialIcons}`}>
          <Link href={""} className={`${styles.github} ${styles.iconBox}`}>
            <SiGithub />
          </Link>
          <Link href={""} className={`${styles.instagram} ${styles.iconBox}`}>
            <SiInstagram />
          </Link>
          <Link href={""} className={`${styles.telegram} ${styles.iconBox}`}>
            <SiTelegram />
          </Link>
          <Link href={""} className={`${styles.google} ${styles.iconBox}`}>
            <SiGoogle />
          </Link>
          <Link href={""} className={`${styles.twiiter} ${styles.iconBox}`}>
            <SiTwitter />
          </Link>
          <Link href={""} className={`${styles.facebook} ${styles.iconBox}`}>
            <SiFacebook />
          </Link>
        </div>
      </div>
      {/* <hr /> */}
      <div className={`${styles.middle}`}>
        {data
          .map((item) => {
            return (
              <div key={item.id} className={`${styles.middleText}`}>
                <h5>{item.title.substring(0,10)}</h5>
                <h6>{item.body}</h6>
              </div>
            );
          })
          .slice(0, 6)}
      </div>
      <div className={`${styles.bottom}`}>
        <span>&copy;</span>
        <span>{year.getFullYear()}</span>
        <span>
          copyright&nbsp;:&nbsp;<b>alireza_yn</b>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
