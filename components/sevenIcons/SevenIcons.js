import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./SevenIcons.module.scss";

const SevenIcons = ({ icon }) => {
  return (
    <div className={`${styles.mainContainer}`}>
      {icon.map((item) => {
        return (
          <Link
            href={`/products/various/${item.url}`}
            className={`${styles.link}`}
            key={item.id}
          >
            <Image
              src={`/images/${item.iconName}`}
              alt={item.iconName}
              width={50}
              height={50}
            />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default SevenIcons;
