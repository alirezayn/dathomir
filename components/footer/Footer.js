import Link from "next/link";
import React from "react";
import {
  SiInstagram,
  SiLinkedin,
  SiTelegram,
  SiWhatsapp,
} from "react-icons/si";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={`${styles.mainFooter}`}>
      <div className={`${styles.box}`}>
        <h3>شبکه اجتماعی</h3>
        <Link href={""} className={`${styles.link}`}>
          <i>
            <SiInstagram />
          </i>
          Instagram
        </Link>
        <Link href={""} className={`${styles.link}`}>
          <i>
            <SiTelegram />
          </i>
          Telegram
        </Link>
        <Link href={""} className={`${styles.link}`}>
          <i>
            <SiWhatsapp />
          </i>
          Whatsapp
        </Link>
        <Link href={""} className={`${styles.link}`}>
          <i>
            <SiLinkedin />
          </i>
          Linkedin
        </Link>
      </div>
      <div className={`${styles.box}`}>
        <h3>آدرس فروشگاه</h3>
        <Link href={""} className={`${styles.link}`}>
          درباره ما
        </Link>
        <Link href={""} className={`${styles.link}`}>
          درباره ما
        </Link>
        <Link href={""} className={`${styles.link}`}>
          درباره ما
        </Link>
        <Link href={""} className={`${styles.link}`}>
          درباره ما
        </Link>
      </div>
      <div className={`${styles.box}`}>
        <h3>شرکت&nbsp;ProShop</h3>
      </div>
      <div className={`${styles.box}`}>
        <h3>منابع</h3>
      </div>
    </footer>
  );
};

export default Footer;
