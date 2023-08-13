import React from "react";
import styles from "./Optional.module.scss";
import Image from "next/image";
const Optional = () => {
  const data = [
    {
      title: "تحویا اکسپرس",
      url: "https://www.digikala.com/statics/img/svg/infosection/express-delivery.svg",
    },
    {
      title: "پشتیبانی 24 ساعته",
      url: "https://www.digikala.com/statics/img/svg/infosection/support.svg",
    },
    {
      title: "پرداخت در محل",
      url: "https://www.digikala.com/statics/img/svg/infosection/cash-on-delivery.svg",
    },
    {
      title: "7 روز بازگشت کالا",
      url: "https://www.digikala.com/statics/img/svg/infosection/days-return.svg",
    },
    {
      title: "کالا با ضمانت اصل",
      url: "https://www.digikala.com/statics/img/svg/infosection/original-products.svg",
    },
  ];

  return (
    <div className={`${styles.mainContainer}`}>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <Image src={item.url} alt={item.title} width={42} height={42} />
            <span style={{ fontSize: "x-small" }}>{item.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Optional;
