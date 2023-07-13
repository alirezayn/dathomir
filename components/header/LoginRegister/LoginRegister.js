import React from "react";
import styles from "./Login.module.scss";
import Link from "next/link";
import { IoLogInOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
const LoginRegister = () => {
  const user_profile = useSelector((state) => state.user.profile);
  
  return (
    <>
      {user_profile.username ? (
        <Link href={"/user/dashboard"} className={`${styles.mainContainer}`}>
          <span>خوش آمدید {user_profile.username}</span>
        </Link>
      ) : (
        <Link href={"/user/register"} className={`${styles.mainContainer}`}>
          <IoLogInOutline className={`${styles.icon}`} />
          <span>ورود | ثبت نام</span>
        </Link>
      )}
    </>
  );
};

export default LoginRegister;
