import React, { useRef, useState } from "react";

import styles from "./login.module.scss";
import * as api from "../../api/api";
import { useDispatch } from "react-redux";
import { setToken } from "@/redux/features/UserReducer";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import Head from "next/head";

const login = () => {
  const dispatch = useDispatch();
  const username = useRef();
  const password = useRef();
  const router = useRouter();
  const regex = new RegExp("^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$");

  const [show, setShow] = useState(false);
  const [wrongNumber, setWrongNumber] = useState(false);
  const [emptyNumber, setEmptyNumber] = useState(false);

  const handlePhoneNumber = () => {
    username.current.value.length == 0
      ? setEmptyNumber(true)
      : setEmptyNumber(false);
    username.current.value.length >= 12
    ? setWrongNumber(true)
    : setWrongNumber(false)
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const registerHandler = (e) => {
    if (regex.test(username.current.value)) {
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
    } else {
      setWrongNumber(true);
      e.preventDefault();
    }
  };
  return (
    <>
      <Head>
        <title>bESTShop</title>
      </Head>
      <div className={`${styles.mainContainer}`}>
        <form className={`${styles.form}`} onSubmit={registerHandler}>
          <Image src={'/images/bestShopIcon.png'} alt="best shop" width={120} height={60}/>
          <h4>خوش آمدید</h4>
          <div>
            <h5>سلام!</h5>
            <h6>لطفا شماره موبایل خود را وارد نمایید</h6>
          </div>
          <div className={`${styles.inputBox}`}>
            <input
              className={`${styles.inputText}`}
              style={
                wrongNumber
                  ? {
                      outline: "1px groove #c9165ac9",
                      backgroundColor: "#fff8f8",
                    }
                  : null
              }
              type="number"
              placeholder="شماره موبایل"
              ref={username}
              onChange={handlePhoneNumber}
            />
            {
              <label
                style={{
                  color: "red",
                  fontWeight: "lighter",
                  fontSize:"12px",
                  marginRight: "25px",
                }}
              >
                {emptyNumber ? "لطفا این قسمت را خالی نگذارید" : null} {wrongNumber ? "شماره اشتباه است" : null}
              </label>
            }
            <input
              className={`${styles.inputText}`}
              type="password"
              placeholder="کلمه عبور"
              ref={password}
            />
          </div>
          <Button variant="danger" type="submit">
            ثبت نام | ورود
          </Button>
        </form>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>ثبت نام</Modal.Title>
          </Modal.Header>
          <Modal.Body>ثبت نام با موفقیت انجام شد</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">ادامه</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default login;
