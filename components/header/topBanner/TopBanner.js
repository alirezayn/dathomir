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
          key={id}
          alt="topbanner"
          width={1500}
          height={57}
          priority={true}
        />
      )}
    </>
  );
};

export default TopBanner;
