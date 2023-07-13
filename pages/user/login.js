import React, { useRef, useState } from "react";
import jwt_decode from "jwt-decode";
import styles from "./login.module.scss";
import * as api from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "@/redux/features/UserReducer";
import { useRouter } from "next/router";


const login = () => {
  const userExist = useSelector(state=>state.token)
  const router = useRouter()
  const username = useRef();
  const password = useRef();
  const dispacth = useDispatch()

  const loginHandler = (e) => {
    api
      .POST("users/login", {
        username: username.current.value,
        password: password.current.value,
      })
      .then((res) => {
        dispacth(setToken(res.data.token))
        router.push('dashboard')
      })
      .catch((err) => console.log(err));

    e.preventDefault();
  };
  return (

    <div className={`${styles.mainContainer}`}>
      <form className={`${styles.form}`} onSubmit={loginHandler}>
      <input
        type="number"
        placeholder="شماره موبایل"
        ref={username}
      />
      <input
        type="password"
        placeholder="کلمه عبور"
        ref={password}
      />
      <button type="submit">
        ورود
      </button>
      </form>
      
    </div>
  );
};

export default login;
