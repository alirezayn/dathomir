import Image from "next/image";
import React from "react";
import styles from './TopBanner.module.scss'
const TopBanner = ({ image, id, url }) => {
  return (
    <>
      {image && (
        <Image
          className={`${styles.image}`}
          src={image}
          // style={{ width: "auto", height: "auto" }}
          key={id}
          alt="topbanner"
          width={1600}
          height={57}
        />
      )}
    </>
  );
};

export default TopBanner;
