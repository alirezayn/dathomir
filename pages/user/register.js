import React, { useRef, useState } from "react";
import styles from "./register.module.scss";
import * as api from "../../api/api";
import { useDispatch } from "react-redux";
import { setToken } from "@/redux/features/UserReducer";
import { useRouter } from "next/router";

const register = () => {
  const dispatch = useDispatch();
  const username = useRef();
  const password = useRef();
  const router = useRouter();

  const registerHandler = (e) => {
    api
      .POST("users/register", {
        username: username.current.value,
        password: password.current.value,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.id === 0) {
          api
            .POST("users/login", {
              username: username.current.value,
              password: password.current.value,
            })
            .then((response) => {
              dispatch(setToken(response.data.token));
              router.push("/user/dashboard");
            })
            .catch((error) => console.log(error));
        }
      })
      .catch((err) => console.log(err));

    e.preventDefault();
  };
  return (
    <div className={`${styles.mainContainer}`}>
      <form className={`${styles.form}`} onSubmit={registerHandler}>
        <input type="number" placeholder="شماره موبایل" ref={username} />
        <input type="password" placeholder="کلمه عبور" ref={password} />
        <button type="submit">ثبت نام</button>
      </form>
    </div>
  );
};

export default register;
