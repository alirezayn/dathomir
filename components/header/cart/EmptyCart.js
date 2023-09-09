import React from "react";
import styles from "./EmptyCart.module.scss";
import Image from "next/image";
import { VscChevronLeft, VscSignIn } from "react-icons/vsc";
import Link from "next/link";
import { useSelector } from "react-redux";

const EmptyCart = () => {
  const userExist = useSelector((state) => state.user.token);
  return (
    <div
      className={`${styles.mainContainer}`}
      style={userExist ? { justifyContent: "center" } : null}
    >
      <div className={`${styles.rightContainer}`}>
        <Image
          src={"https://www.digikala.com/statics/img/svg/empty-cart.svg"}
          alt={"سبد خرید"}
          width={200}
          height={150}
        />
        <h3>سبد خرید شما خالی است ! </h3>
        <h5>می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:</h5>
      </div>
      {userExist ? null : (
        <div className={`${styles.leftContainer}`}>
          <Link href={"/user/login"} className={styles.loginLink}>
            <div className={`${styles.top}`}>
              <VscSignIn className={styles.login} />
              <span>ورود به پنل کاربری</span>
              <VscChevronLeft className={styles.chaveron} />
            </div>
            <span>
              برای مشاهده محصولاتی که پیش‌تر به سبد خرید خود اضافه کرده‌اید وارد
              شوید.
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default EmptyCart