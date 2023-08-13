import React from "react";
import styles from "./FreeShipment.module.scss";
import Image from "next/image";
const FreeShipment = () => {
  return (
    <div className={`${styles.mainContainer}`}>
        <h6>ارسال رایگان برای این کالا</h6>
      <Image
        src={
          "https://www.digikala.com/_next/static/media/normalFreeShippingTouchPointImage.d4416515.svg"
        }
        alt="ارسال رایگان"
        width={132}
        height={60}
      />
    </div>
  );
};

export default FreeShipment;
